const { rateLimit } = require("express-rate-limit")
const { readdirSync } = require("fs")
const { frontEndRateLimit } = require("../config/rateLimit.json")
const express = require("express")
const routeFrontEnd = express.Router()

const limiter = rateLimit({
	windowMs: frontEndRateLimit.windowMinutes * 60000,
	max: frontEndRateLimit.maxWindowRequest,
	standardHeaders: frontEndRateLimit.standardHeaders,
	legacyHeaders: frontEndRateLimit.legacyHeaders,
	message: frontEndRateLimit.message
})

routeFrontEnd.use(limiter)

routeFrontEnd.get("/", async (req, res) => {
	res.render("index.pug")
})

module.exports = routeFrontEnd
