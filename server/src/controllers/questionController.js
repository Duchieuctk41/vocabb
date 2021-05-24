import questionModel from "../models/questionModel";

let getAllData = async (req, res) => {
  let question = await questionModel.getAllData();
  // console.log(question);
  return res.send(question);
};
let getCollection = async (req, res) => {
  const item = req.path.split("/");
  // console.log("item ",item);
  let question = await questionModel.getCollection(item[2]);
  // console.log("question: ",question);
  return res.send(question);
};

module.exports = {
  getAllData: getAllData,
  getCollection: getCollection,
};
