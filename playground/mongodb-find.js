// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID}  = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
if (err) {
  return console.log('Unable to connect to Mongo');
}
  console.log('Connected to Mongo');

// db.collection('Todos').find({
//   _id: new ObjectID('5931be72d093f70acd0f2810')
//   }).toArray().then((docs) => {
//   console.log('Todos');
//   console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
//   console.log('unable to fetch todos', err);
// });

db.collection('Todos').find().count().then((count) => {
  console.log(`Todos Count: ${count}`);
}, (err) => {
  console.log('unable to fetch todos', err);
});
//   // db.close();
});
