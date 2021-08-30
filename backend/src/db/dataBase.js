const mongoose = require('mongoose');
const connection = mongoose.connection;


dbConnection().catch(err => console.log(err));

async function dbConnection() {
  await mongoose.connect("mongodb://localhost:27017/test")
}

connection.once('connected', (stream) => {
    console.log('DB is connected')
})