const post= require('../db/db.js')

function index(req, res) {
    res.json({
        data : post,
        count : post.length
    })
}

module.exports = {
    index
}