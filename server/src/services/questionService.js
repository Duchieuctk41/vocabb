import questionModel from "../models/questionModel";

let initData = (req, res) => {
  console.log("vao day roi ne");
  let item = req.query;
  return new Promise(async (resolve, reject) => {
    // Kiem tra item co ton tai hay ko
    let newItem = {
      topic: item.topic,
      question: item.question,
      sentence: item.sentence,
      type: item.type,
      illustration: item.illustration,
      Answer: [
        {
          title: item.title1,
          correct: item.correct1,
          img: item.img1,
        },
        {
          title: item.title2,
          correct: item.correct2,
          img: item.img2,
        },
        {
          title: item.title3,
          correct: item.correct3,
          img: item.img3,
        }
      ]
    };
    // console.log(newItem);
    let newListVocab = questionModel.createNew(newItem);
    resolve(newListVocab);
    console.log("donee");
  });
};

// Model choose 

// let listQuestion = {
//  topic: "609e740a083e0a0930a07890",
//   question: "Con bò bằng tiếng Anh",
//   sentense: "cow",
//   Answer: [{ title: "cow", correct: true, img: "chick" }, { title: "cat", img: "chick" },{ title: "dog", img: "chick" }],
//   type: "choose",
// };


// Model input

// let listQuestion = {
//   topic: "609e740a083e0a0930a07890",
//   question: "Viết bằng Tiếng Việt",
//   sentense: "Thank you, bye",
//   Answer: [{ title: "Cảm ơn, chào", correct: true }],
//   type: "input",
// };

// Model order

// let listQuestion = {
//   topic: "609e740a083e0a0930a07890",
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

// let initData = () => {
//   createNewItem(listQuestion);
//   return;
// };

module.exports = {
  initData: initData,
};
