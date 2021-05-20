import studiedModel from "../models/studiedModel";

let createNewItem = (userId, lessonId) => {
  return new Promise(async (resolve, reject) => {
    // Kiem tra item co ton tai hay ko
    let checkExists = await studiedModel.checkExists(userId, lessonId);
    if (checkExists) {
      return reject(false);
    }
    let newItem = item;
    console.log(newItem);
    let newListVocab = studiedModel.createNew(newItem);
    resolve(newListVocab);
  });
};

let listItem = [
  { userId: "60a386e98be7811ce053211a", lessonId: "609e545814e8251128b96d84", grade: 1 },
];

let initData = () => {
  for (let i = 0; i < listItem.length; i++) {
    createNewItem(listItem[i]);
  }
  console.log("==============");
  return;
};

let updateGrade = async (req, res) => {
  let id = req.path.split("/");
  id = id[2].split("-");
  let userId = id[0];
  let lessonId = id[1];
  // console.log("id ",id);
  return new Promise(async (resolve, reject) => {
    // Kiểm tra có tồn tại hay ko
    let item = { userId: userId, lessonId: lessonId }
    let checkExists = await studiedModel.checkExists(item);

    if (!checkExists) {
      let newItem = { userId: userId, lessonId: lessonId, grade: 1 };
      // console.log(newItem);
      let createNewLesson = studiedModel.createNew(newItem);
      resolve(createNewLesson);
    } else {
      let grade = await studiedModel.findGrade(item);
      grade = grade.grade + 1
      let newItem = { userId: userId, lessonId: lessonId, grade: grade };
      // console.log(newItem);
      let updateGradeInLesson = studiedModel.updateGrade(newItem);
      resolve(updateGradeInLesson);
    }
    res.send("Cập nhật thành công");
    // console.log("Cập nhật grade thành công");
  });
}

module.exports = {
  createNewItem: createNewItem,
  initData: initData,
  updateGrade: updateGrade
};
