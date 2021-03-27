import vocabModel from "../models/vocabModel";

let createNewItem = (item) => {
  return new Promise(async (resolve, reject) => {
    let vocabExists = await vocabModel.checkExists(item);
    if (vocabExists) {
      return reject(false);
    }
    let newListVocabItem = item;

    let newListVocab = vocabModel.createNew(newListVocabItem);
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

let initData = () => {
  for (let i = 0; i < listVocabb.length; i++) {
    createNewItem(listVocabb[i]);
  }
  return;
};

module.exports = {
  createNewItem: createNewItem,
  initData: initData,
};
