import vocabModel from "../models/vocabModel";

let initData = (req, res) => {
  let item = req.path.split("/");
  item = item[2].split("-");
  let storeId = item[0];
  let front = item[1].replace("%20", " ");
  let back = item[2].replace("%20", " ");

  if (!storeId) {
    console.log("khong tim thay store");
    return res.send("Khong tim thay store");
  }
  return new Promise(async (resolve, reject) => {
    let newItem = { storeId: storeId, front: front, back: back };
    //console.log(newItem);
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
