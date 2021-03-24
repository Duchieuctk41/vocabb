import mongoose from "mongoose";

let Schema = mongoose.Schema;

let ProductSchema = new Schema({
  productId: String,
  productName: String,
  translate: String,
});

ProductSchema.statics = {
  createNew(item) {
    return this.create(item);
  },

  getItem(item) {
    return this.find();
  },
};

module.exports = mongoose.model("product", ProductSchema);
