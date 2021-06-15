import axios from "axios";
import { storeTypes } from "./../types/storeTypes";
import { storeURL } from "./../../api";

export const storeActions = () => async (dispatch) => {
    const storeData = await axios({
        method: "GET",
        withCredentials: true,
        url: storeURL()
    });
    dispatch({
        type: storeTypes.FETCH_ALL_STORE,
        payload: {
            store: storeData.data,
        },
    });
};

export const addItem = (id) => ({
    type: storeTypes.ADD_STORE,
    payload: id
});

export const removeItem = (id) => ({
    type: storeTypes.REMOVE_STORE,
    payload: id
});
