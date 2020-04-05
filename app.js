const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')
const app = express()
app.use(cors)
app.use(bodyParser.json())

// connect to db
mongoose.connect(process.env.DB_CON,{ useNewUrlParser: true })

// routes
const postsRoute = require('./routes/posts')

// HOME ROUTE
app.get('/', (req,res)=>{
    res.json({message:'A simple API'})
})

app.use('/api/posts', postsRoute)

app.listen(3000)