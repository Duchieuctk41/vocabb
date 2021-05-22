import VocabModel from "../models/vocabModel";

let getDataByUserId = async (req, res) => {
  const item = req.path.split("/");
  // console.log(item);
  if(!item) {
    return res.send("Khong tim thay user");
  }
  let vocab = await VocabModel.getDataByStoreId(item);
  return res.send(vocab);

};

module.exports = {
  getDataByUserId: getDataByUserId,
};
