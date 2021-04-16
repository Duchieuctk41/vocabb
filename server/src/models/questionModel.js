import mongoose from "mongoose";

let Schema = mongoose.Schema;

let QuestionSchema = new Schema({
  topic: String,
  question: String,
  sentense: String,
  illustration: String,
  Answer: [
    {
      title: String,
      img: String,
      correct: { type: Boolean, default: false },
      order: Number,
    },
  ],
  type: String,
});

QuestionSchema.statics = {
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
  checkExists(item) {
    return this.findOne({
      question: item.question,
    });
  },
};

module.exports = mongoose.model("question", QuestionSchema);
