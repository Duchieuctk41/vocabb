import mongoose from "mongoose";

let Schema = mongoose.Schema;

let VocabSchema = new Schema({
  lessonId: String,
  EnName: String,
  ViName: String,
  img: { type: String, default: "avatar-default.jpg" },
});

VocabSchema.statics = {
  createNew(item) {
    return this.create(item);
  },
};

module.exports = mongoose.model("vocab", VocabSchema);
