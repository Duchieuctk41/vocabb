import VocabModel from "../models/vocabModel";

let getAllData = async (req, res) => {
  let vocab = await VocabModel.getAllData();
  return res.send(vocab);
};

module.exports = {
  getAllData: getAllData,
};
