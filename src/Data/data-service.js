const DataService = {
	getAllData(knex) {
		return knex.select("*").from("dataentry")
	},

	insertData(knex, newData) {
		return knex
			.insert(newData)
			.into("dataentry")
			.returning("*")
			.then(rows => {
				return rows[0]
			})
	},
	getById(knex, id) {
		return knex
			.from("dataentry")
			.select("*")
			.where("id", id)
			.first()
	},
	deleteData(knex, id) {
		return knex("dataentry")
			.where({ id })
			.delete()
	},
	updateData(knex, id, newDataFields) {
		return knex("dataentry")
			.where({ id })
			.update(newDataFields)
	}
}

module.exports = DataService
