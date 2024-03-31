require('dotenv').config()
const express = require('express')

// import express from "express"


const app = express()
const port = 3000

app.get('/', (req, res) => { 
  res.send('Hello World!')
})

app.get("/twitter",(req,res)=>{
    res.send("GangaPawaleTwitter");
})

app.get("/login",(req,res)=>{
    res.send('<h1 style="color:blue">Please login beta</h1>')
})

app.get("/ganga",(req,res)=>{
    res.send('<h2>Welcome to the ganga"s app</h2>' )
})
app.listen(a=process.env.PORT, () => {
  console.log(`Example app listening on port ${a}`)
})