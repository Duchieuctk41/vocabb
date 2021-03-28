import mongoose from "mongoose";

let Schema = mongoose.Schema;

let LessonSchema = new Schema({
  name: String,
  img: String,
  grade: { type: Number, default: 3 },
});

LessonSchema.statics = {
  createNew(item) {
    return this.create(item);
  },
};

module.exports = mongoose.model("lesson", LessonSchema);
