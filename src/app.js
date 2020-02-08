require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const helmet = require("helmet")
const { NODE_ENV } = require("./config")
const app = express()
const dataRouter = require("./Data/data-router")
const errorHandler = require("./error-handler")
const morganOption = NODE_ENV === "production" ? "tiny" : "common"

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())

app.use("/api/dataentry", dataRouter)

app.get("/", (req, res) => {
	res.send("Hello, world!")
})
app.use(errorHandler)

module.exports = app
