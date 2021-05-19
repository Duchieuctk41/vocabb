import studiedModel from "../models/studiedModel";

let createNewItem = (item) => {
  return new Promise(async (resolve, reject) => {
    // Kiem tra item co ton tai hay ko
    let checkExists = await studiedModel.checkExists(item);
    if (checkExists) {
      return reject(false);
    }

    let newItem = item;
    console.log(newItem);
    let newListVocab = studiedModel.createNew(newItem);
    resolve(newListVocab);
  });
};

let listItem = [
  { userId: "60a386e98be7811ce053211a", lessonId: "609e545814e8251128b96d84", grade: 1 },
];

let initData = () => {
  for (let i = 0; i < listItem.length; i++) {
    createNewItem(listItem[i]);
  }
  console.log("==============");
  return;
};

module.exports = {
  createNewItem: createNewItem,
  initData: initData,
};
