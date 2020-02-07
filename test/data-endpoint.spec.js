const { expect } = require("chai")
const knex = require("knex")
const app = require("../src/app")
const makeData = require("./data.fixture.js")

describe("Data Endpoints", function() {
	let db

	before("make knex instance", () => {
		db = knex({
			client: "pg",
			connection: process.env.TEST_DB_URL
		})
		app.set("db", db)
	})
	after("disconnect from db", () => db.destroy())

	before("clean the table", () =>
		db.raw("TRUNCATE dataentry RESTART IDENTITY CASCADE")
	)

	afterEach("cleanup", () =>
		db.raw("TRUNCATE dataentry RESTART IDENTITY CASCADE")
	)

	describe(`GET /api/dataentry`, () => {
		context(`Given no dataentry`, () => {
			it(`responds with 200 and an empty list`, () => {
				return supertest(app)
					.get("/api/dataentry")
					.expect(200, [])
			})
		})
		context("Given there are dataentries", () => {
			const testData = makeData()

			beforeEach("insert data", () => {
				return db.into("dataentry").insert(testData)
			})
			it("responds with 200 and all of the data", () => {
				return supertest(app)
					.get("/api/dataentry/")
					.expect(200, testData)
			})
		})
	})

	describe.only(`Post /api/dataentry`, () => {
		it(`creates a data entry, responding with 201 and the new data entry`, function() {
			this.retries(3)
			const newData = {
				date: new Date(),
				department: "3620",
				shift: 1,
				goal_1: 263,
				produced_1: 160,
				downtime_1: 20,
				reason_1: "Test",
				goal_2: 263,
				produced_2: 170,
				downtime_2: 15,
				reason_2: "Test",
				goal_3: 263,
				produced_3: 200,
				downtime_3: 10,
				reason_3: "Test",
				goal_4: 263,
				produced_4: 235,
				downtime_4: 8,
				reason_4: "Test",
				goal_5: 263,
				produced_5: 240,
				downtime_5: 5,
				reason_5: "Test",
				goal_6: 263,
				produced_6: 180,
				downtime_6: 15,
				reason_6: "Test",
				goal_7: 263,
				produced_7: 255,
				downtime_7: 0,
				reason_7: "Test",
				goal_8: 263,
				produced_8: 200,
				downtime_8: 10,
				reason_8: "Test"
			}

			return supertest(app)
				.post("/api/dataentry")
				.send(newData)
				.expect(201)
				.expect(res => {
					expect(res.body.department).to.eql(newData.department)
					expect(res.body.shift).to.eql(newData.shift)
					expect(res.body).to.have.property("id")
					expect(res.header.location).to.eql(`/api/dataentry/${res.body.id}`)
					const expected = new Date().toLocaleString()
					const actual = new Date(res.body.date).toLocaleString()
					expect(actual).to.eql(expected)
				})
				.then(postRes =>
					supertest(app)
						.get(`/api/dataentry/${postRes.body.id}`)
						.expect(postRes.body)
				)
		})
		const requiredFields = ["date", "department", "shift"]
		requiredFields.forEach(field => {
			const newData = {
				date: "Test",
				department: "Test Department",
				shift: 1
			}

			it(`responds with 400 and an error message when the '${field}' is missing`, () => {
				delete newData[field]

				return supertest(app)
					.post("/api/dataentry")
					.send(newData)
					.expect(400, {
						error: { message: `Missing '${field}' in request body` }
					})
			})
		})
	})
})
