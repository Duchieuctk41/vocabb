import questionModel from "../models/questionModel";

let createNewItem = (item) => {
  return new Promise(async (resolve, reject) => {
    // Kiem tra item co ton tai hay ko
    let checkExists = await questionModel.checkExists(item);
    if (checkExists) {
      console.log("Câu hỏi đã tồn taị!");
      return reject(false);
    }

    let newItem = item;
    //console.log(newItem);
    let newListVocab = questionModel.createNew(newItem);
    resolve(newListVocab);
  });
};

// Model input

// let listQuestion = {
//   topic: "6078ff367e7c3f2076928234",
//   question: "Viết bằng Tiếng Việt",
//   sentense: "Thank you, bye",
//   Answer: [{ title: "Cảm ơn, chào", correct: true }],
//   type: "input",
// };

// Model order

// let listQuestion = {
//   topic: "6078ff367e7c3f2076928234",
//   question: `Dịch câu sau sang tiếng Anh "Cảm ơn, chào"`,
//   Answer: [
//     { title: "Thank you", correct: true, order: 1 },
//     { title: "bye", correct: true, order: 2 },
//     { title: "see you again" },
//     { title: "hello" },
//     { title: "nice" },
//   ],
//   type: "order",
// };

let initData = () => {
  createNewItem(listQuestion);
  return;
};

module.exports = {
  createNewItem: createNewItem,
  initData: initData,
};
