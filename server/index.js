const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
app.use(cors())
const bodyParser = require('body-parser')
// create application/json parser
const jsonParser = bodyParser.json()
app.use(jsonParser)
const home = require('./routes/homeRoute')
const todoModel = require('./models/todoModel')
const getTodos = require('./routes/getTodos')

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_CONNECTION_STRING).then(()=>console.log('connected to mongodb')).catch(err => console.log(err))


const seedDatabase = async() =>{
  // handle errors with try/catch block
  try {
    // make 3 todos from the todoModel
    const todo1 = new todoModel({
      todoDescription: 'Feed the cat',
      dueDate: '9/1/2022'
    })
    const todo2 = new todoModel({
      todoDescription: 'Wash my hair',
      dueDate: '9/7/2022'
    })
    const todo3 = new todoModel({
      todoDescription: 'Watch Turning Red',
      dueDate: 'Sometime this month'
    })
    // save each todo to database with .save()
    await todo1.save()
    await todo2.save()
    await todo3.save()
  } catch (error) {
    console.log(error)
  }
}
seedDatabase()

app.use(home)
app.use(getTodos)

app.listen(process.env.PORT, ()=> {
  console.log('server up and running')
})