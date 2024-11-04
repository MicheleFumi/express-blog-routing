const express = require('express')
const app = express()
const host = process.env.HOST
const port = process.env.PORT

app.listen(3000,(req, res)=>{
    console.log(`server is running at ${host}:${port} `);
    
})
