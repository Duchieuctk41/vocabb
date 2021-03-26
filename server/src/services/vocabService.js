import VocabModel from "../models/vocabModel";

let createVocab = (item) => {
  return new Promise(async (resolve, reject) => {
    let vocabExists = await VocabModel.checkExists(item);
    if (vocabExists) {
      return reject(false);
    }
    let newListVocabItem = item;

    let newListVocab = VocabModel.createNew(newListVocabItem);
    resolve(newListVocab);
  });
};

let listVocabb = [
  { EnName: "hot", ViName: "nong", img: "" },
  { EnName: "cold", ViName: "lạnh", img: "" },
  { EnName: "sun", ViName: "mặt tròi", img: "" },
  { EnName: "baby", ViName: "em bé", img: "" },
  { EnName: "cave", ViName: "phò", img: "" },
];

let callcreate = () => {
  for (let i = 0; i < listVocabb.length; i++) {
    createVocab(listVocabb[i]);
  }
  return;
};

module.exports = {
  createVocab: createVocab,
  callcreate: callcreate,
};
