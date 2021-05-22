import { storeTypes } from "./../types/storeTypes";

const initState = {
    store: [],
};

const storeReducer = (state = initState, action) => {
    switch (action.type) {
        case storeTypes.FETCH_ALL_STORE:
            console.log("store: ", action.payload);
            return { ...state, store: action.payload.store };
            default:
            return state;
    }
}

export default storeReducer;
