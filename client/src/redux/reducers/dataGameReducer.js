import { VocabTypes } from "../types/vocabTypes";

const initState = {
  data: [
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

const dataGameReducer = (state = initState, action) => {
  switch (action.type) {
    case VocabTypes.FETCH_DATA_GAME:
      console.log("reducer", action.payload);
      return { ...state, data: action.payload.data };

    default:
      return state;
  }
};

export default dataGameReducer;
