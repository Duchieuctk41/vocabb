import { check } from "express-validator";
import lessonModel from "../models/lessonModel";
import gameModel from "../models/gameModel";

let createNewItem = (item) => {
  return new Promise(async (resolve, reject) => {
    // Kiem tra item co ton tai hay ko
    let checkExists = await lessonModel.checkExists(item);
    if (checkExists) {
      console.log("Data da ton tai");
      return;
    }

    let newItem = item;
    //console.log(newItem); 
    let newListVocab = lessonModel.createNew(newItem);
    resolve(newListVocab);
  });
};

// let listItem = [
//   { name: "Cơ bản", img: "chick", grade: 3 },
//   { name: "Chào hỏi", img: "chick", grade: 2 },
//   { name: "Giới thiệu", img: "chick", grade: 4 },
//   { name: "Giới aaa", img: "chick", grade: 5 },
// ];

let initData = () => {
  for (let i = 0; i < listItem.length; i++) {
    createNewItem(listItem[i]);
  }
  return;
};

let initDataLesson = (req, res) => {
  const item = req.query;
  console.log("lesson");
  let listIdGame = [];

  setTimeout(async () => {
    let gamesData = await gameModel.getDataWithName(item);
    gamesData.map((item) => listIdGame.push(item._id));

    return new Promise(async (resolve, reject) => {
      // Kiểm tra data có tồn tại chưa
      let checkExists = await lessonModel.checkExists(item);
      if (item.name.length === 0) return;
      if (checkExists) {
        console.log("Data da ton tai");
        return;
      }

      let newItem = { ...item, idgame: listIdGame };
      //console.log(newItem); 
      let newListVocab = await lessonModel.createNew(newItem);
      resolve(newListVocab);
      // let test = await lessonModel.checkExists(item);
      // console.log(test);
    });
  }, 350);
}

module.exports = {
  createNewItem: createNewItem,
  initData: initData,
  initDataLesson: initDataLesson
};
