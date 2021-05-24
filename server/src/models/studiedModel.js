import mongoose from "mongoose";

let Schema = mongoose.Schema;

let StudiedSchema = new Schema({
  userId: String,
  lessonId: String,
  grade: { type: Number, default: 0 },
});

StudiedSchema.statics = {
  createNew(item) {
    return this.create(item);
  },

  getAllData() {
    return this.find({});
  },

  checkExists(item) {
    return this.findOne({
      userId: item.userId,
      lessonId: item.lessonId
    });
  },

  findGrade(item) {
    return this.findOne({
      userId: item.userId,
      lessonId: item.lessonId
    });
  },

  updateGrade(item) {
    return this.findOneAndUpdate({
      userId: item.userId,
      lessonId: item.lessonId
    }, { grade: item.grade });
  }
};

module.exports = mongoose.model("studied", StudiedSchema);
