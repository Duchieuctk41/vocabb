import mongoose from "mongoose";

let Schema = mongoose.Schema;

let QuestionSchema = new Schema({
  topic: String,
  question: String,
  Answer: [{ title: String, img: String }],
  type: String,
});

QuestionSchema.statics = {
  createNew(item) {
    return this.create(item);
  },
  getAllData() {
    return this.find({});
  },
};

module.exports = mongoose.model("question", QuestionSchema);
