const express = require('express')
const router = express.Router()
const Todo = require('../models/todoModel')

router.get('/todos', async(req,res)=>{
  const allTodos = await Todo.find({})
  res.send(allTodos)
})

module.exports = router