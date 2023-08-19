import axios from "axios";
import {
  ALL_USERS_SKILLS_SUCCESS,
  ALL_USERS_SKILLS_REQUEST,
  ALL_USERS_SKILLS_FAIL,
} from "constants/leaderboardConstants";
import {
  USER_SKILL_UPDATE_REQUEST,
  USER_SKILL_UPDATE_SUCCESS,
  USER_SKILL_UPDATE_FAIL,
} from "constants/adminConstants";

export const updateUserSkill =
  ({ userId: id, skillId, skillLevel, nftLink, score }) =>
  async (dispatch) => {
    try {
      dispatch({ type: USER_SKILL_UPDATE_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      console.log(id, skillId, skillLevel, nftLink, score);
      await axios.post(
        `/users/${id}/update-skills `,
        {
          skill: skillId,
          skill_level: skillLevel,
          avatar_url: nftLink,
          score,
        },
        config
      );

      dispatch({
        type: USER_SKILL_UPDATE_SUCCESS,
        payload: {
          skill: skillId,
          skill_level: skillLevel,
          avatar_url: nftLink,
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

export const getAllUserSkills = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_USERS_SKILLS_REQUEST });

    const { data } = await axios.get(`/users/get-all-skills`);

    dispatch({
      type: ALL_USERS_SKILLS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_USERS_SKILLS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
