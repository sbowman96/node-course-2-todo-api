// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID}  = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
if (err) {
  return console.log('Unable to connect to Mongo');
}
  console.log('Connected to Mongo');
  // db.collection('Todos').insertOne({
  //   text: 'Something todo',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  //
  // db.collection('Users').insertOne({
  //   Name: 'Steve Bowman',
  //   Age: 50,
  //   Location: 'Chicago'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  db.close();
});
