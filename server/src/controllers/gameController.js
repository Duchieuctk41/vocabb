import gameModel from "../models/gameModel";

let getCollection = async (req, res) => {
//   console.log(req);
  let vocab = await gameModel.getCollection("60790ed99ecdb73940bb8c0c");
  return res.send(vocab);
};

module.exports = {
  getCollection: getCollection,
};
