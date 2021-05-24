import achievementModel from "../models/achievementModel";

let initData = async (req, res) => {
  let userId = req.session.passport.user;
  if (!userId) return res.status(400).send({
    message: "User undefine!"
  });

  let item = { userId: userId };
  return new Promise(async (resolve, reject) => {
    // Kiểm tra data có tồn tại chưa
    let checkExists = await achievementModel.checkExists(item);
    if (checkExists) {
      return res.send({ message: "Data đã tồn tại." });
    }
    let newItem = item;
    let newListVocab = achievementModel.createNew(newItem);
    res.send("Tạo data thành tích học tập thành công");
    resolve(newListVocab);
  });
};

let updateAchievement = async (req, res) => {
  let userId = req.session.passport.user;
  if (!userId) return res.status(400).send({
    message: "User undefine!"
  });
  let item = { userId: userId };
  return new Promise(async (resolve, reject) => {
    // Kiểm tra data có tồn tại chưa
    let newItem = await achievementModel.checkExists(item);
    if (!newItem) {
      return res.send("Nguời dùng đã đăng xuất!");
    }

    newItem.corona = newItem.corona + 1,
      newItem.kn = newItem.kn + 10,
      newItem.totalKn = newItem.totalKn + 10

    let updateNewAchievement = achievementModel.updateAchivement(newItem);
    resolve(updateNewAchievement);
  });

}


module.exports = {
  initData: initData,
  updateAchievement: updateAchievement
};
