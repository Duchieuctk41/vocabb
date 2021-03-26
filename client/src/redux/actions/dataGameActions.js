import axios from "axios";

import { dataGameURL } from "../../api";

export const loadDataGame = () => async (dispatch) => {
  const dataGame = await axios.get(dataGameURL());

  dispatch({
    type: "FETCH_DATA_GAME",
    payload: {
      dataGame: dataGame.data,
    },
  });
};
