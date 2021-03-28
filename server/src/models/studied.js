import mongoose from "mongoose";

let Schema = mongoose.Schema;

let StudiedSchema = new Schema({
  userId: String,
  vocab: [{ vocabId: String }],
  lesson: [{ lessonId: String }, { grade: { type: Number, default: 0 } }],
});

StudiedSchema.statics = {
  createNew(item) {
    return this.create(item);
  },
};

module.exports = mongoose.model("studied", StudiedSchema);
