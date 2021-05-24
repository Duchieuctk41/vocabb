import lessonModel from "../models/lessonModel";

let getAllData = async (req, res) => {
  let lesson = await lessonModel.getAllData();
  // console.log(lesson);
  return res.send(lesson);
//   { name: "Cơ bản", img: "chick", grade: 3 },
//   { name: "Chào hỏi", img: "chick", grade: 2 },
//   { name: "Giới thiệu", img: "chick", grade: 4 },
//   { name: "Giới aaa", img: "chick", grade: 5 },
};

module.exports = {
  getAllData: getAllData,
};
