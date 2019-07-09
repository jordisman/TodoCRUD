const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/TodoCRUD';
const db = mongoose.connect(mongoURI, {useNewUrlParser: true});

//Connection

db.then(db => console.log(`Connected to: ${mongoURI}`))
  .catch(err => console.log(`Error connecting to mongo at: ${mongoURI}, Err: ${err}`));

// Schema and Model

const todoSchema = new mongoose.Schema({
  id: Number,
  task: String
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;