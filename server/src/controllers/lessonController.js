import lessonModel from "../models/lessonModel";

let getAllData = async (req, res) => {
  let lesson = await lessonModel.getAllData();
  // console.log(lesson);
  return res.send(lesson);
};

module.exports = {
  getAllData: getAllData,
};
