import mongoose from "mongoose";

let Schema = mongoose.Schema;

let GameSchema = new Schema({
  listQuestion: Array,
});

GameSchema.statics = {
  createNew(item) {
    return this.create(item);
  },
  getAllData() {
    return this.find({});
  },
};

module.exports = mongoose.model("game", GameSchema);
