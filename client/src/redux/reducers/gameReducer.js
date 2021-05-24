import { gameTypes } from "../types/gameTypes";

const initState = {
  game: [],
};

const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case gameTypes.FETCH_GAME:
      // console.log("reducer:", action.payload);
      return { ...state, game: action.payload.game };

    default:
      return state;
  }
};

export default gameReducer;
