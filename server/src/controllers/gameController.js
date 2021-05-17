import gameModel from "../models/gameModel";

// Lấy id câu hỏi trong gameModel
let getCollection = async (req, res) => {
  const item = req.path.split("/");
  // console.log("item ",item);
  let idQuestion = await gameModel.getCollection(item[2]);
  return res.send(idQuestion);
};

let getIdGames = async (req, res) => {
  let listIdGames = await gameModel.getIdGames();
  return res.send(listIdGames);
}

module.exports = {
  getCollection: getCollection,
  getIdGames: getIdGames
};
