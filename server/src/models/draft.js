/**
 * vocab model
 */

// let VocabModel = new Schema({
//   vocabId: String,
//   EnName: String,
//   ViName: String,
//   img: "",
// });

// (VocabModel.statics = {
//   createNew(item) {
//     return this.create(item);
//   },
  
//   checkExists(item) {
//     return this.findOne({
//       EnName: item.EnName,
//       ViName: item.ViName,
//       img: ""
//     })
//   },

//   // Lay tat ca du lieu
//   getAllData() {
//     return this.find({});
//   }
// }),
//   (module.exports = mongoose.model("vocabularies", VocabModel));

/**
 * lesson model
 */

// let Schema = mongoose.Schema;

// let LessonModel = new Schema({
//   vocabId: String,
//   vocab: String,
// });

// (LessonModel.statics = {
//   createNew(item) {
//     return this.create(item);
//   },

//   checkExists(item) {
//     return this.findOne({
//       vocab: item,
//     });
//   },

//   getAllData() {
//     return this.find({});
//   },
// }),
//   (module.exports = mongoose.model("lessons", LessonModel));
