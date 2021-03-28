import mongoose from "mongoose";

let Schema = mongoose.Schema;

let DiscussSchema = new Schema({
  sender: [{ userId: String }, { username: String }, { avatar: String }],
  text: String,
  file: { data: Buffer, contentType: String, fileName: String },
  createdAt: { type: Number, default: Date.now },
  updatedAt: { type: Number, default: null },
  deletedAt: { type: Number, default: null },
});

DiscussSchema.statics = {
  createNew(item) {
    return this.create(item);
  },
};

module.exports = mongoose.model("discuss", DiscussSchema);
