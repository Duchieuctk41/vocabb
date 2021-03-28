import mongoose from "mongoose";

let Schema = mongoose.Schema;

let NotificationSchema = new Schema({
  sender: {
    userId: String,
    username: String,
    avatar: String,
  },
  receiver: {
    userId: String,
    username: String,
    avatar: { type: String, default: "avatar_default.jpg" },
  },
  type: String,
  content: String,
  isRead: { type: Boolean, default: false },
  createddAt: { type: Timestamp, default: Date.now },
});

NotificationSchema.statics = {
  createNew(item) {
    return this.create(item);
  },
};

module.export = mongoose.model("notification", NotificationSchema);
