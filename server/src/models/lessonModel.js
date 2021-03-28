import mongoose from "mongoose";

let Schema = mongoose.Schema;

let LessonSchema = new Schema({
  name: String,
  img: { type: String, default: "chick" },
  grade: { type: Number, default: 3 },
});

LessonSchema.statics = {
  createNew(item) {
    return this.create(item);
  },

  checkExists(item) {
    return this.findOne({
      name: item.name,
    });
  },

  getAllData() {
    return this.find({});
  },
};

module.exports = mongoose.model("lesson", LessonSchema);
