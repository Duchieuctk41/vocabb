import axios from "axios";
import { vocabTypes } from "../types/vocabTypes";
import { vocabURL } from "../../api";

export const vocabActions = () => async (dispatch) => {
    const vocabData = await axios({
        method: "GET",
        withCredentials: true,
        url: vocabURL(),
    });
    // console.log("achievement: ", achievementData);
    dispatch({
        type: vocabTypes.FETCH_ALL_VOCAB,
        payload: {
            vocab: vocabData.data
        }
    })
}
