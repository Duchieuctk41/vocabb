import questionModel from "../models/questionModel";

let createNewItem = (item) => {
  return new Promise(async (resolve, reject) => {
    // Kiem tra item co ton tai hay ko
    // let checkExists = await questionModel.checkExists(item);
    // if (checkExists) {
    //   return reject(false);
    // }

    let newItem = item;
    //console.log(newItem);
    let newListVocab = questionModel.createNew(newItem);
    resolve(newListVocab);
  });
};

let listQuestion = {
  topic: "6078ff367e7c3f2076928234",
  question: "Dau la thit bo?",
  Answer: [{ title: "beef", img: "cow" }],
  type: "choose",
};

let initData = () => {
  createNewItem(listQuestion);
  return;
};

module.exports = {
  createNewItem: createNewItem,
  initData: initData,
};
