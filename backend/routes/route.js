const express = require("express")
const { addNote, getNotes, deleteNote, editNote } = require("../controller/controller")
const {validateDelete,validateEdit,validatePost} = require("../middleware/middlewear")
const router = express.Router()

router.get("/", getNotes)
router.post("/", validatePost, addNote)
router.put("/:id", validateEdit, editNote)
router.delete("/:id", validateDelete, deleteNote)

module.exports = router