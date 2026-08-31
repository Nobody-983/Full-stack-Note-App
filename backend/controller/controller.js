const pool = require("../database/pool")

const getNotes = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM notes")
        res.json(result.rows)
    } catch (error) {
        console.log("DATABASE ERROR:", error)

        res.status(500).json({
            message: error.message,
            error: error
        })
    }
}

const addNote = async (req,res) => {
    const {content,color} = req.body
    const result = await pool.query( `
    INSERT INTO notes (content,color)
VALUES ($1,$2) returning *;
    `,
    [content,color]
    )
    res.status(201).json(result.rows[0])
}

const deleteNote = async (req,res) => {
  const id =  req.params.id 
  const result = await pool.query(`
   DELETE FROM notes
WHERE id = $1
RETURNING * `,
[id])
    res.status(201).json(result.rows[0])

}

const editNote = async (req,res) => {
    const id = req.params.id
    const { content } = req.body
    const result = await pool.query(`
       UPDATE notes
SET content = $1,
    updated_at = CURRENT_TIMESTAMP
WHERE id = $2
RETURNING * `,
[content,id])
    res.status(201).json(result.rows[0])

}
module.exports = {addNote,getNotes,deleteNote,editNote}