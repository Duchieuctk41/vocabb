import listVocabModel from "../models/list-vocab.model";

let postVocabData = async (req, res) => {
  let vocab = await listVocabModel.getListVocab();
  return res.send(vocab);
};

module.exports = {
  postVocabData: postVocabData,
};
