const Todo = require('../../db/models/Todo'); // require the model
// must add the entire path include the object Todo that used in Post req

exports.getAll = (req, res) => {
  Todo.find({}, (err, todos) => {
    if (err) {res.send(err);}
    console.log(`Todos: ${todos}`);
    res.send(todos);
  });
}

exports.add = (req, res) => {
  let { task } = req.body;
  let newTodo = new Todo(req.body); //making a new obj
  newTodo.save((err, newTodo) => {
    if (err) { res.send(err); }
    console.log(`Post new todo: ${newTodo}`);
    res.send(newTodo);
  });
}

exports.remove = (req, res) => {
  Todo.findByIdAndRemove({_id: req.body._id}, (err, data) => {
    if (err) return console.log(err);
    console.log('req.body:', req.body);
    res.send(data);
  });
}
