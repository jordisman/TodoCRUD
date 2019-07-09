// import functions from controllers
const { getAll, add, remove } = require('./controllers/todoCRUD');
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const db = require('../db') // connect to MongoDB
const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/public'));


app.get('/todos', getAll);
app.post('/todos', add);
app.delete('/todos/:id', remove);

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});