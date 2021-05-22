import VocabModel from "../models/vocabModel";

let getDataByUserId = async (req, res) => {
  let userId = req.session.passport.user;
  // console.log(userId);
  if(!userId) {
    return res.send("Khong tim thay user");
  }
  let vocab = await VocabModel.getDataByUserId(userId);
  return res.send(vocab);
};

module.exports = {
  getDataByUserId: getDataByUserId,
};
