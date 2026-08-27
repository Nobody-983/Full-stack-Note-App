const express = require("express")
const cors = require("cors")
const logger = require("./middleware/logger")
const router = require("./routes/route")

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger)
app.use("/notes", router)

app.listen(4000, () => {
  console.log("Server running on port 4000")
})