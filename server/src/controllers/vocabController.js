import VocabModel from "../models/vocabModel";

let getAll = async (req, res) => {
  let vocab = await VocabModel.getAll();
  return res.send(vocab);
};

module.exports = {
  getAll: getAll,
};
