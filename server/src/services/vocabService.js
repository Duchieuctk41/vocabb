import vocabModel from "../models/vocabModel";

let createNewItem = (item) => {
  return new Promise(async (resolve, reject) => {
    // Kiem tra item co ton tai hay ko
    let checkExists = await vocabModel.checkExists(item);
    if (checkExists) {
      return reject(false);
    }

    let newItem = item;
    //console.log(newItem);
    let newListVocab = vocabModel.createNew(newItem);
    resolve(newListVocab);
  });
};

let listItem = [
  { lessonId: "60602b68128c1463e4a8c9b1", EnName: "hot", ViName: "nóng" },
  { lessonId: "60602b68128c1463e4a8c9b1", EnName: "noodles", ViName: "mì" },
  { lessonId: "60602b68128c1463e4a8c9b1", EnName: "rice", ViName: "gạo" },
  { lessonId: "60602b68128c1463e4a8c9b1", EnName: "ice", ViName: "đá" },
  { lessonId: "60602b68128c1463e4a8c9b1", EnName: "man", ViName: "đàn ông" },
  { lessonId: "60602b68128c1463e4a8c9b1", EnName: "apple", ViName: "táo" },
];

let initData = () => {
  for (let i = 0; i < listItem.length; i++) {
    createNewItem(listItem[i]);
  }
  return;
};

module.exports = {
  createNewItem: createNewItem,
  initData: initData,
};
