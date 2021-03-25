import mongoose from "mongoose";
import bluebird from "bluebird";

/**
 * Connect to MongoDB
 */

let ConnectDB = () => {
  mongoose.Promise = bluebird;

  // mongodb://localhost:21017/vocab
  let URI = `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

  return mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
};

module.exports = ConnectDB;
