import { storeTypes } from "./../types/storeTypes";
import { addItem, removeItem } from "./../utils/storeUtils";

const initState = {
    store: [],
};

const storeReducer = (state = initState, action) => {
    switch (action.type) {
        case storeTypes.FETCH_ALL_STORE:
            return { ...state, store: action.payload.store };
        case storeTypes.ADD_STORE:
            return { ...state, store: addItem(state.store, action.payload)};
        case storeTypes.REMOVE_STORE:
            return { ...state, store: removeItem(state.store, action.payload)};

        default:
            return state;
    }
}

export default storeReducer;
