import mongoose from "mongoose";

let Schema = mongoose.Schema;

let achievementSchema = new Schema({
  userId: String,
  corona: { type: Number, default: 0 },
  streak: { type: Number, default: 0 },
  lingots: { type: Number, default: 0 },
  kn: { type: Number, default: 0 },
  totalKn: { type: Number, default: 0 }
});

achievementSchema.statics = {
  createNew(item) {
    return this.create(item);
  },

  getAllData() {
    return this.find({});
  },

  getDataByUserId(item) {
    return this.findOne({
      userId: item.userId
    })
  },

  checkExists(item) {
    return this.findOne({
      userId: item.userId,
    });
  },
  findById(item) {
    return this.findOne({
      _id: item._id
    })
  },

  updateAchivement(item) {
    return this.findOneAndUpdate({
      _id: item._id
    }, { corona: item.corona, streak: item.streak, lingots: item.lingots, kn: item.kn, totalKn: item.totalKn });
  }

};

module.exports = mongoose.model("achievement", achievementSchema);
