import mongoose from "mongoose";

let Schema = mongoose.Schema;

let GameSchema = new Schema({
  listQuestion: Array,
});

GameSchema.statics = {
  checkExists(item) {
    return this.findOne({
      question: item.question,
    });
  },
  createNew(item) {
    return this.create(item);
  },
  getAllData() {
    return this.find({});
  },
  getCollection(item) {
    return this.findOne({
      _id: item,
    });
  },
  getIdGames() {
    return this.find({}, {_id: 1});
  }
};

module.exports = mongoose.model("game", GameSchema);
