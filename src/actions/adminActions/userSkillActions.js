import axios from "axios";
import { USER_SKILL_UPDATE_FAIL } from "constants/adminConstants";
import { USER_SKILL_UPDATE_SUCCESS } from "constants/adminConstants";
import { USER_SKILL_UPDATE_REQUEST } from "constants/adminConstants";

export const updateUserSkill =
  ({ userId, skillId, skillLevel, avatarLink, score }) =>
  async (dispatch) => {
    try {
      dispatch({ type: USER_SKILL_UPDATE_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      await axios.post(
        `/users/${userId}/update-skill`,
        {
          skill: skillId,
          skill_level: skillLevel,
          avatar_url: avatarLink,
          score,
        },
        config
      );

      dispatch({
        type: USER_SKILL_UPDATE_SUCCESS,
        payload: {
          skill: skillId,
          skill_level: skillLevel,
          avatar_url: avatarLink,
          score,
        },
      });
    } catch (error) {
      dispatch({
        type: USER_SKILL_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
