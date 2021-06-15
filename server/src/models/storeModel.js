import mongoose from "mongoose";

let Schema = mongoose.Schema;

let StoreSchema = new Schema({
  userId: String,
  name: String,
  img: { type: String, default: "avatar_default.jpg" },
  quantity: { type: Number, default: 0 },
});

StoreSchema.statics = {
  createNew(item) {
    return this.create(item);
  },

  checkExists(item) {
    return this.findOne({
      name: item.name
    })
  },
  findById(item) {
    return this.findOne({
      _id: item
    })
  },

  getDataByUserId(item) {
    return this.find({
      userId: item.userId
    })
  },

  updateStore(item) {
    return this.findByIdAndUpdate(item.id, { "quantity": item.quantity }).exec();
  }
};

module.exports = mongoose.model("store", StoreSchema);
