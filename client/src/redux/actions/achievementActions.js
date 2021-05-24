import axios from "axios";
import { achievementTypes } from "../types/achievementTypes";
import { apiAchievementURL } from "../../api";

export const achievementActions = () => async (dispatch) => {
    const achievementData = await axios({
        method: "GET",
        withCredentials: true,
        url: apiAchievementURL(),
      });
    // console.log("achievement: ", achievementData);

    dispatch({
        type: achievementTypes.FETCH_ACHIEVEMENT_BY_ID,
        payload: {
            achievement: achievementData.data
        }
    })
}
