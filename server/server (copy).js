const express = require ('express');
const bodyParser = require ('body-parser');

var {mongoose} = require ('./db/mongoose');
var {Todo} = require ('./models/todo');
var {User}  = require ('./models/user');

var app = express();
app.use(bodyParser.json());
app.post ('/todos', (req, res) => {
  var todo = new Todo ({
    text:req.body.text
  });
todo.save().then((doc) => {
  res,send(doc);
}, (e) => {
  res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('Starting 3000 sir');
});

// var newTodo = new Todo({
// text: 'Cook dinner'
//
//
// });
//
// newTodo.save().then((doc) => {
//   console.log('saved todo', doc);
// }, (e) => {
//   console.log('Unable to open stuff')
// })
//
// var otherTodo = new Todo({
//   text: '   edit video  '// text: 'Cook lunch',
  // completed: true,
  // completedAt: 123
// });
//
// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc,undefined, 2));
// }, (e) => {
//     console.log('Unable to open stuff', e);
// });


    //
// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc,undefined, 2));
// }, (e) => {
//     console.log('Unable to open stuff', e);
// });

//
// var user = new User({
// email: 'sbowman96@aol.com'
//
// });
//
// user.save().then((doc) => {
//   console.log('User saved', doc);
// }, (e) => {
//   console.log('unable to save user', e);
// })
