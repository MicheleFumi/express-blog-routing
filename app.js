const express = require('express')
const app = express()
const host = process.env.HOST
const port = process.env.PORT
app.use(express.static('public'))
const postRouter = require('./routers/post.js')



app.listen(3000,(req, res)=>{
    console.log(`server is running at ${host}:${port} `);
   
    
})

app.use("/post",postRouter)
app.get("/post",postRouter)

app.get("/:slug",postRouter)


