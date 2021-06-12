import mongoose from "mongoose";

let Schema = mongoose.Schema;

let GameSchema = new Schema({
  name: String,
  grade: Number,
  listQuestion: Array,
});

GameSchema.statics = {
  checkExists(item) {
    return this.findOne({
      name: item.name,
      grade: item.grade
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

  getDataWithName(item) {
    return this.find({
      name: item.name
    })
  },

  getIdGames() {
    return this.find({}, { _id: 1 });
  },

  addQuestion(item) {
    return this.findByIdAndUpdate(item.topic, {
      $push: { "listQuestion": item.id }
    }).exec();

  }
};

module.exports = mongoose.model("game", GameSchema);
