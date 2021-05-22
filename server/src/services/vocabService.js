import vocabModel from "../models/vocabModel";

let initData = (req, res) => {
  let item = req.path.split("/");
  item = item[2].split("-");
  item[1] = item[1].replace("%20", " ");

  let userId = req.session.passport.user;
  if (!userId) {
    console.log("khong tim thay user");
    return res.send("Khong tim thay user");
  }
  return new Promise(async (resolve, reject) => {
    let newItem = { userId: userId, front: item[0], back: item[1] };
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
