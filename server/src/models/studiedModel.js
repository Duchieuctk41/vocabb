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

  checkExists(item) {
    return this.findOne({
      userId: item.userId
    });
  }
};

module.exports = mongoose.model("studied", StudiedSchema);
