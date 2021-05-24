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

let getLessonById = async (req, res) => {
  const item = req.path.split("/");
  let lesson = await lessonModel.getLessonById(item[2]);
  let lessonArray = [];
  lessonArray.push(lesson);
  return res.send(lessonArray); // Phải truyền vào array vì giá trị bạn đầu lấy là 1 mảng đc map ra bên client
}

module.exports = {
  getAllData: getAllData,
  getLessonById: getLessonById
};
