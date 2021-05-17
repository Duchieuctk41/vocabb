import axios from "axios";
import { gameTypes } from "../types/gameTypes";
import { idGameURL } from "../../api";

export const gameActions = () => async (dispatch) => {
    const gameData = await axios.get(idGameURL());
    console.log("idGame: ", gameData);

    dispatch({
        type: gameTypes.FETCH_LIST_GAMES,
        payload: {
            game: gameData.data
        }
    })
}
