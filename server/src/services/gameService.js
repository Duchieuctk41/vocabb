import gameModel from "../models/gameModel";

let createNewItem = (item) => {
  return new Promise(async (resolve, reject) => {
    // Kiem tra item co ton tai hay ko
    // let checkExists = await gameModel.checkExists(item);
    // if (checkExists) {
    //   return reject(false);
    // }

    let newItem = item;
    //console.log(newItem);
    let newListVocab = gameModel.createNew(newItem);
    resolve(newListVocab);
  });
};

let listQuestion = { listQuestion: ["cailon", "Cailon2"] };

let initData = () => {
  createNewItem(listQuestion);
  return;
};

module.exports = {
  createNewItem: createNewItem,
  initData: initData,
};
