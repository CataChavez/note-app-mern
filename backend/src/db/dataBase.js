const mongoose = require('mongoose');
const connection = mongoose.connection;

const URI = process.env.MONGODB_URI 
    ? process.env.MONGODB_URI 
    : 'mongodb://localhost/dbtest';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true
})

connection.once('open', () => {
    console.log('DB is connected')
})