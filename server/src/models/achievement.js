import mongoose from "mongoose";

let Schema = mongoose.Schema;

let AchievementSchema = new Schema({
  userId: String,
  lessonId: String,
  grade: { type: Number, default: 0 },
});

AchievementSchema.statics = {
  createNew(item) {
    return this.create(item);
  },

  checkExists(item) {
    return this.findOne({
      userId: item.userId
    });
  }
};

module.exports = mongoose.model("achievement", AchievementSchema);
