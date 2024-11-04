const post= require('../db/db.js')

function index(req, res) {
    res.json({
        data : post,
        count : post.length
    })
}


const show = (req,res)=>{
    const posts = post.forEach(post => post.slug)
    //const pizza = menu.find(pizza => pizza.id == request.params.id)
    console.log(posts);
    return res.status(200).json({
     
        data:post.slug
    })
}

module.exports = {
    index,
    show
}