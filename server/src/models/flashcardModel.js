import mongoose from "mongoose";

let Schema = mongoose.Schema;

let FlashcardSchema = new Schema({
  storeId: String,
  front: {
    name: String,
    img: String,
  },
  back: {
    name: String,
    img: String,
  },
});

FlashcardSchema.statics = {
  createNew(item) {
    return this.create(item);
  },
};

module.exports = mongoose.model("flashcard", FlashcardSchema);
