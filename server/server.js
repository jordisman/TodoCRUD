const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const Todo = require('../db'); // must be same as what's used in post

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/public'));

let add = (req, res) => {
  let { task } = req.body;
  let todo = new Todo(req.body); //making a new obj
  todo.save((err, todo) => {
    if (err) {res.send(err);}
    console.log(`Post new todo: ${todo}`);
    res.send(todo);
  });
}

app.post(`/todo`, add);

app.listen(port, () => {
  console.log(`listening to port ${port}`);
})