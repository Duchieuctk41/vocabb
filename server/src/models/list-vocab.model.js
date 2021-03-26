import mongoose from "mongoose";

let Schema = mongoose.Schema;

let ListVocab = new Schema({
  vocabId: String,
  vocab: String,
});

(ListVocab.statics = {
  createNew(item) {
    return this.create(item);
  },

  checkExists(item) {
    return this.findOne({
      vocab: item,
    });
  },

  getListVocab() {
    return this.find({});
  },
}),
  (module.exports = mongoose.model("product", ListVocab));
