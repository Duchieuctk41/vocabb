import lessonModel from "../models/lessonModel";

let createListVocab = (item) => {
  return new Promise(async (resolve, reject) => {
    let vocabExists = await lessonModel.checkExists(item);
    if (vocabExists) {
      return reject(false);
    }
    let newListVocabItem = {
      vocab: item,
    };
    let newListVocab = lessonModel.createNew(newListVocabItem);
    resolve(newListVocab);
  });
};

let listvocabb = ["Cơ bản", "Chào hỏi", "Giới thiệu", "Gia đình", "Mua sắm", "Xã hội", "Nhà hàng", "Trường học" ];

let initData = () => {
  for (let i = 0; i < listvocabb.length; i++) {
    createListVocab(listvocabb[i]);
  }
  return;
};

module.exports = {
  createListVocab: createListVocab,
  initData: initData,
};
