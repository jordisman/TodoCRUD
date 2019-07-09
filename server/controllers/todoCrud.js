const Todo = require('../../db/models/Todo'); // require the model
// must add the entire path include the object Todo that used in Post req

exports.getAll = (req, res) => {
  Todo.find((err, todos) => {
    if (err) {res.send(err);}
    console.log(`Todos: ${todos}`);
    res.send(todos);
  });
}

exports.add = (req, res) => {
  let { task } = req.body;
  let todo = new Todo(req.body); //making a new obj
  todo.save((err, todo) => {
    if (err) { res.send(err); }
    console.log(`Post new todo: ${todo}`);
    res.send(todo);
  });
}

exports.remove = (req, res) => {
  db.collection('todo').remove({_id: req.body.id}, (err, result) => {
    if (err) return console.log(err);
    console.log(req.body);
    res.redirect('/');
  });
}

/*
from Kaz

exports.getAll = (req, res) => {
  Attendee.find()
  .then((attendee) => {
    return res.send(attendee)
  })
  .catch((error)=> {
    return res.status(400).send({
      error: error.message
    })
  })
}

exports.add = (req, res) => {
  const attendee  = req.body;
  const newAttendee = new Attendee(attendee);
  newAttendee.save()
  .then((attendee)=> {
    return res.send({
      attendee,
    })
  })
  .catch((error)=> {
    return res.status(400).send({
      error: error.message
    })
  })
}

*/