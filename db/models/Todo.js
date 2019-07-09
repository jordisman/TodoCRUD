const mongoose = require('mongoose');

// Schema and Model

const todoSchema = new mongoose.Schema({
  id: Number,
  task: String
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;