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
