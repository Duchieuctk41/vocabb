import VocabModel from "../models/vocabModel";

let getDataByStoreId = async (req, res) => {
  const item = req.path.split("/");
  // console.log(item);
  if (!item) {
    return res.send("Khong tim thay user");
  }
  let vocab = await VocabModel.getDataByStoreId(item);
  return res.send(vocab);
};

let getDataByUserId = async (req, res) => {
  let item = { userId: req.session.passport.user };
  // console.log(item);
  if (!item) {
    return res.send("Khong tim thay user");
  }
  let vocab = await VocabModel.getDataByUserId(item);
  return res.send(vocab);
};

module.exports = {
  getDataByStoreId: getDataByStoreId,
  getDataByUserId: getDataByUserId,
};
