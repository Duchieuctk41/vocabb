import { vocabTypes } from "../types/vocabTypes";

const initState = {
  vocab: [
    {
      _id: "605daaa6b5be904c8e59d16e",
      EnName: "cold",
      ViName: "lạnh",
      img: "",
      __v: 0,
    },
    {
      _id: "605daaa6b5be904c8e59d16f",
      EnName: "sun",
      ViName: "mặt tròi",
      img: "",
      __v: 0,
    },
  ],
};

const vocabReducer = (state = initState, action) => {
  switch (action.type) {
    case vocabTypes.FETCH_ALL_VOCAB:
      // console.log("reducer:", action.payload);
      return { ...state, vocab: action.payload.vocab };

    default:
      return state;
  }
};

export default vocabReducer;
