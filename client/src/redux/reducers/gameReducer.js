import { gameTypes } from "../types/gameTypes";

const initState = {
    game: []
}

const gameReducer = (state = initState, action) => {
    switch (action.type) {
        case gameTypes.FETCH_LIST_GAMES:
            return { ...state, game: action.payload.game };
        default:
            return state;
    }
}

export default gameReducer;
