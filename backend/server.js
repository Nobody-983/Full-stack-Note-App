require("dotenv").config()
const express = require("express")
const cors = require("cors")
const logger = require("./middleware/logger")
const router = require("./routes/route")

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger)
app.use("/notes", router)

app.listen(process.env.PORT || 4000)