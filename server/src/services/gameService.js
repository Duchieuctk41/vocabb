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

let initDataGame = (req, res) => {
  console.log("game");
  let item = req.query;
  const grade = item.grade;
  for (let i = 1; i <= grade; i++) {
    let newItem = {...item, grade: i}
    createNewGame(newItem);
  }
}

const createNewGame = (item) => {
 return new Promise(async (resolve, reject) => {
    // Kiểm tra data có tồn tại chưa
    let checkExists = await gameModel.checkExists(item);
    if (item.name.length === 0) return;
    if (checkExists) {
      console.log("Data da ton tai");
      return;
    }
    let newListVocab = await gameModel.createNew(item);
    resolve(newListVocab);
    
  });
}

 


module.exports = {
  createNewItem: createNewItem,
  initData: initData,
  initDataGame: initDataGame
};
