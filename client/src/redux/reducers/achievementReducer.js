import { achievementTypes } from "../types/achievementTypes";

const initState = {
    achievement: {}
}

const achievementReducer = (state = initState, action) => {
    switch (action.type) {
        case achievementTypes.FETCH_ACHIEVEMENT_BY_ID:
            return { ...state, achievement: action.payload.achievement };
        default:
            return state;
    }
}

export default achievementReducer;
