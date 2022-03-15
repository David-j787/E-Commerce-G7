require('dotenv').config();
const mongoose = require('mongoose');
const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS } = process.env;

const conn = mongoose.connection;

mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`);

// Al momento de producirse un evento de error podemos capturarlo, otra forma es al momento de hacer el connect usar catch para error handler
conn.on('error', err => {
  console.log(err)
})

module.exports = conn;
