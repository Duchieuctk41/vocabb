import mongoose from "mongoose";

let Schema = mongoose.Schema;

let VocabModel = new Schema({
  vocabId: String,
  EnName: String,
  ViName: String,
  img: "",
});

(VocabModel.statics = {
  createNew(item) {
    return this.create(item);
  },
  
  checkExists(item) {
    return this.findOne({
      EnName: item.EnName,
      ViName: item.ViName,
      img: ""
    })
  },

  // Lay tat ca du lieu
  getAllData() {
    return this.find({});
  }
}),
  (module.exports = mongoose.model("vocabularies", VocabModel));
