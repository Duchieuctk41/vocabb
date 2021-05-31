import { check } from "express-validator";
import lessonModel from "../models/lessonModel";

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
  return new Promise(async (resolve, reject) => {
    // Kiểm tra data có tồn tại chưa
    let checkExists = await lessonModel.checkExists(item);
    if(item.name.length === 0) return;
    if (checkExists) {
      console.log("Data da ton tai");
      return;
    }

    let newItem = item;
    //console.log(newItem); 
    let newListVocab = lessonModel.createNew(newItem);
    resolve(newListVocab);
  });

}

module.exports = {
  createNewItem: createNewItem,
  initData: initData,
  initDataLesson: initDataLesson
};
