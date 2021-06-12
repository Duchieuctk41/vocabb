import vocabModel from "../models/vocabModel";

let initData = (req, res) => {
  let userId = req.session.passport.user;
  
  let item = req.query;
  console.log(item);

  if (!item.storeId) {
    console.log("khong tim thay store");
    return res.send("Khong tim thay store");
  }
  return new Promise(async (resolve, reject) => {
    let newItem = { ...item, userId: userId };
    console.log(newItem);
    let newListVocab = await vocabModel.createNew(newItem);
    resolve(newListVocab);
  });

};

let deleteVocab = async (req, res) => {
  let item = req.path.split("/");
  let vocabId = item[2];
  if (!vocabId) {
    console.log("khong tim thay vocabId");
    return res.send("Khong tim thay vocabId");
  }
  return new Promise(async (resolve, reject) => {
  let newVocab = await vocabModel.deleteVocab(vocabId);
    resolve(newVocab);
  });
}

module.exports = {
  initData: initData,
  deleteVocab: deleteVocab
};
