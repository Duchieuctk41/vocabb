import listVocabModel from "../models/list-vocab.model";

let postVocabData = async (req, res) => {
  const item = "Cơ bản";
  let vocab = await listVocabModel.getListVocab(item);
  return res.send(vocab);
};

module.exports = {
  postVocabData: postVocabData,
};
