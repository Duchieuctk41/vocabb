import gameModel from "../models/gameModel";

let getCollection = async (req, res) => {
//   console.log(req);
  let vocab = await gameModel.getCollection("609e740a083e0a0930a07890");
  return res.send(vocab);
};

module.exports = {
  getCollection: getCollection,
};
