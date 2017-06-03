// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID}  = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
if (err) {
  return console.log('Unable to connect to Mongo');
}
  console.log('Connected to Mongo');


db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5931be72d093f70acd0f2810')
  }, {
    $set: {
      name: 'Steve'
    }, $inc: {
      Age: 1
    }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });

//   // db.close();
});
