// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID}  = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
if (err) {
  return console.log('Unable to connect to Mongo');
}
  console.log('Connected to Mongo');

// db.collection('Todos').deleteMany({test: 'eat lunch'}).then((result ) => {
// console.log(result);
//   });

db.collection('Todos').findOneAndDelete({text: 'eat lunch'}).then((result ) => {
console.log(result);
  });


//   // db.close();
});
