import mongoose from "mongoose";

let Schema = mongoose.Schema;

let StoreSchema = new Schema({
  userId: String,
  name: String,
  img: { type: String, default: "avatar_default.jpg" },
  quality: { type: Number, default: 0 },
});

StoreSchema.statics = {
  createNew(item) {
    return this.create(item);
  },
};

module.exports = mongoose.model("store", StoreSchema);
