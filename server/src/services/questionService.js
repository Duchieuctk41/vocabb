import questionModel from "../models/questionModel";
import gameModel from "./../models/gameModel";

let initData = (req, res) => {
  let item = req.query;
  return new Promise(async (resolve, reject) => {
    // Kiem tra item co ton tai hay ko
    let newItem = {};
    switch (item.type) {
      case "choose":
        newItem = {
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
        break;
      case "input":
        newItem = {
          topic: item.topic,
          question: item.question,
          sentence: item.sentence,
          type: item.type,
          illustration: item.illustration,
          Answer: [
            {
              title: item.title1,
            },
          ]
        };
        break;
        case "order":
          newItem = {
            topic: item.topic,
            question: item.question,
            sentence: item.sentence,
            type: item.type,
            illustration: item.illustration,
            Answer: [
              {
                title: item.title1,
                correct: item.correct1,
                order: item.order1,
              },
              {
                title: item.title2,
                correct: item.correct2,
                order: item.order2,
              },
              {
                title: item.title3,
                correct: item.correct3,
                order: item.order3,
              },
              {
                title: item.title4,
                correct: item.correct4,
                order: item.order4,
              },
              {
                title: item.title5,
                correct: item.correct5,
                order: item.order5,
              },
              {
                title: item.title6,
                correct: item.correct6,
                order: item.order6,
              }
            ]
          };
          break;
          default:
            break;
      }; 
    let newListVocab = await questionModel.createNew(newItem);
    resolve(newListVocab);

    let newItem2 = {
      topic: newListVocab.topic,
      id: newListVocab._id
    }

    gameModel.addQuestion(newItem2);
  });
};

module.exports = {
  initData: initData,
};
