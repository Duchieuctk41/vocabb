import questionModel from "../models/questionModel";

let getAllData = async (req, res) => {
  let question = await questionModel.getAllData();
  // console.log(question);
  return res.send(question);
};
let getCollection = async (req, res) => {
  const item = req.path.split("/");
  let question = await questionModel.getCollection(item[2]);
  // console.log(question);
  return res.send(question);
};

module.exports = {
  getAllData: getAllData,
  getCollection: getCollection,
};
