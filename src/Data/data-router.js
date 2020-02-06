const express = require("express")
const DataService = require("./data-service")
const dataRouter = express.Router()
const jsonParser = express.json()
const path = require("path")

dataRouter
	.route("/")
	.get((req, res, next) => {
		const knexInstance = req.app.get("db")

		DataService.getAllData(knexInstance)
			.then(d => {
				res.json(d)
			})
			.catch(next)
	})
	.post(jsonParser, (req, res, next) => {
		const {
			date,
			department,
			shift,
			goal_1,
			produced_1,
			downtime_1,
			reason_1,
			goal_2,
			produced_2,
			downtime_2,
			reason_2,
			goal_3,
			produced_3,
			downtime_3,
			reason_3,
			goal_4,
			produced_4,
			downtime_4,
			reason_4,
			goal_5,
			produced_5,
			downtime_5,
			reason_5,
			goal_6,
			produced_6,
			downtime_6,
			reason_6,
			goal_7,
			produced_7,
			downtime_7,
			reason_7,
			goal_8,
			produced_8,
			downtime_8,
			reason_8
		} = req.body
		const newData = {
			date,
			department,
			shift,
			goal_1,
			produced_1,
			downtime_1,
			reason_1,
			goal_2,
			produced_2,
			downtime_2,
			reason_2,
			goal_3,
			produced_3,
			downtime_3,
			reason_3,
			goal_4,
			produced_4,
			downtime_4,
			reason_4,
			goal_5,
			produced_5,
			downtime_5,
			reason_5,
			goal_6,
			produced_6,
			downtime_6,
			reason_6,
			goal_7,
			produced_7,
			downtime_7,
			reason_7,
			goal_8,
			produced_8,
			downtime_8,
			reason_8
		}

		for (const [key, value] of Object.entries(newData)) {
			if (value == null) {
				return res.status(400).json({
					error: { message: `Missing '${key}' in request body` }
				})
			}
		}

		DataService.insertData(req.app.get("db"), newData)
			.then(d => {
				res
					.status(201)
					.location(path.posix.join(req.originalUrl, `/${d.id}`))
					.json(d)
			})
			.catch(next)
	})

module.exports = dataRouter
