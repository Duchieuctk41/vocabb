import vocabModel from "../models/vocabModel";
import storeModel from "../models/storeModel";

let initData = (req, res) => {
  let userId = req.session.passport.user;
  let item = req.query;

  if (!item.storeId) {
    console.log("khong tim thay store");
    return res.send("Khong tim thay store");
  }
  return new Promise(async (resolve, reject) => {
    let newItem = { ...item, userId: userId };
    let newListVocab = await vocabModel.createNew(newItem);
    resolve(newListVocab);
    let updateStore = await storeModel.findById(item.storeId);
    let newStore = { id: updateStore._doc._id, quantity: updateStore._doc.quantity + 1 };
    await storeModel.updateStore(newStore);
  });

};

let deleteVocab = async (req, res) => {
  let item = req.query;

  if (!item.id) {
    console.log("khong tim thay vocabId");
    return res.send("Khong tim thay vocabId");
  }
  return new Promise(async (resolve, reject) => {
    let newVocab = await vocabModel.deleteVocab(item.id);
    resolve(newVocab);
    let updateStore = await storeModel.findById(item.storeId);
    let newStore = { id: updateStore._doc._id, quantity: updateStore._doc.quantity - 1 };
    await storeModel.updateStore(newStore);
  });
}

module.exports = {
  initData: initData,
  deleteVocab: deleteVocab
};
