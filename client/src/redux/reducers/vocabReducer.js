const initState = {
  vocab: [
    {
      _id: "605cb312c881b239f6a1eadf",
      vocab: "Cơ bản",
      __v: 0,
    },
    {
      _id: "605cb312c881b239f6a1eae0",
      vocab: "Chào hỏi",
      __v: 0,
    },
    {
      _id: "605cb312c881b239f6a1eae1",
      vocab: "Giới thiệu",
      __v: 0,
    },
    {
      _id: "605cb312c881b239f6a1eae1",
      vocab: "Giới aaa",
      __v: 0,
    },
  ],
};

const vocabReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_VOCAB":
      console.log("fetch_VOCAB");
      return { ...state, vocab: action.payload.vocab };
    default:
      return state;
  }
};

export default vocabReducer;
