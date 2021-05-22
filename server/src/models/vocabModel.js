import mongoose from "mongoose";

let Schema = mongoose.Schema;

let VocabSchema = new Schema({
  storeId: String,
  store: {type: String, default: "Gia đình"},
  front: String,
  back: String,
  img: { type: String, default: "avatar-default.jpg" },
});

VocabSchema.statics = {
  createNew(item) {
    return this.create(item);
  },
  
  checkExists(item) {
    return this.findOne({
      _id: item,
    });
  },

  getAllData() {
    return this.find({});
  },

  getDataByStoreId(item) {
    return this.find({
      storeId: item
    })
  }, 

  deleteVocab(item) {
    return this.deleteMany({
      _id: item
    })
  }
};

module.exports = mongoose.model("vocab", VocabSchema);
