import lessonModel from "../models/lessonModel";

let getAllData = async (req, res) => {
  let lesson = await lessonModel.getAllData();
  // console.log(lesson);
  return res.send(lesson);
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
