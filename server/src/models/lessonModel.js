import mongoose from "mongoose";

let Schema = mongoose.Schema;

let LessonModel = new Schema({
  vocabId: String,
  vocab: String,
});

(LessonModel.statics = {
  createNew(item) {
    return this.create(item);
  },

  checkExists(item) {
    return this.findOne({
      vocab: item,
    });
  },

  getAllData() {
    return this.find({});
  },
}),
  (module.exports = mongoose.model("lessons", LessonModel));
