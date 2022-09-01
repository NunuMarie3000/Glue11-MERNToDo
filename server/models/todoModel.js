const mongoose = require('mongoose')

// schema
const todoSchema = new mongoose.Schema({
  todoDescription: String,
  dueDate: String
})

// model
const todoModel = mongoose.model('TODO', todoSchema)

module.exports = todoModel