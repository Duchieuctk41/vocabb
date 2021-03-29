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
  
  checkExists(item) {
    return this.findOne({
      name: item.name,
    });
  },

  getAllData() {
    return this.find({});
  },
};

module.exports = mongoose.model("vocab", VocabSchema);
