import mongoose from "mongoose";
import bluebird from "bluebird";

/**
 * Connect to MongoDB
 */

let ConnectDB = () => {
  mongoose.Promise = bluebird;

  let DB_CONNECTION = "mongodb";
  let DB_HOST = "localhost";
  let DB_PORT = "27017";
  let DB_NAME = "vocab";
  let DB_USERNAME = "";
  let DB_PASSWORD = "";
  // mongodb://localhost:21017/vocab
  let URI = `${DB_CONNECTION}://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

  return mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
};

module.exports = ConnectDB;
