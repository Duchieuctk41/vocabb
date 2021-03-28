import mongoose from "mongoose";

let Schema = mongoose.Schema;

let ReplySchema = new Schema({
  discussId: String,
  sender: {
    userId: String,
    username: String,
    avatar: { type: String, default: "avatar_default.jpg" },
  },
  text: String,
  file: { data: Buffer, contentType: String, fileName: String },
  createdAt: { type: Number, default: Date.now },
  updatedAt: { type: Number, default: null },
  deletedAt: { type: Number, default: null },
});

ReplySchema.statics = {
  createNew(item) {
    return this.create(item);
  },
};

module.exports = mongoose.model("reply", ReplySchema);
