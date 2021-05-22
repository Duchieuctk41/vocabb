import axios from "axios";
import { vocabTypes } from "../types/vocabTypes";
import { vocabURL, deleteVocabURL } from "../../api";

export const vocabActions = (storeId) => async (dispatch) => {
    const vocabData = await axios({
        method: "GET",
        withCredentials: true,
        url: vocabURL(storeId),
    });
    // console.log("vocabData: ", vocabData);
    dispatch({
        type: vocabTypes.FETCH_ALL_VOCAB,
        payload: {
            vocab: vocabData.data
        }
    })
};

export const deleteVocabActions = (id) => async (dispatch) => {
    dispatch({
        type: vocabTypes.DELETE_VOCAB,
        payload: id
    })

    return axios({
        method: "DELETE",
        withCredentials: true,
        url: deleteVocabURL(id),
    });
    
};
