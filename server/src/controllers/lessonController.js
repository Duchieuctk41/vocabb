import lessonModel from "../models/lessonModel";

let getAllData = async (req, res) => {
  let vocab = await lessonModel.getAllData();
  // console.log(vocab);
  return res.send(vocab);
};

module.exports = {
  getAllData: getAllData,
};
