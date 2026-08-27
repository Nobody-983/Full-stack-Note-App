function validatePost(req, res, next) {
    const content = req.body.content

    if (!content) {
        return res.status(400).json({
            message: "content is required"
        })
    }

    if (content.length > 201) {
        return res.status(400).json({
            message: "content is too long"
        })
    }

    next()
}

function validateDelete(req,res,next) {
    const id = req.params.id
    if (!id) {
         return res.status(400).json({
            message: "id does not exist"
        })
    }
    next()

}

function validateEdit(req,res,next) {
    const id = req.params.id
    if (!id) {
         return res.status(400).json({
            message: "content does not exist"
        })
    }
    next()

}
module.exports = {validateDelete,validateEdit,validatePost}