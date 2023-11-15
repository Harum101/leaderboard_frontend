import axios from "axios";

import {
  TITLE_CREATE_REQUEST,
  TITLE_CREATE_SUCCESS,
  TITLE_CREATE_FAIL,
  ACHIEVEMENTS_GET_SUCCESS,
  ACHIEVEMENTS_GET_FAIL,
  ACHIEVEMENTS_GET_REQUEST,
  SUBTITLE_CREATE_REQUEST,
  SUBTITLE_CREATE_SUCCESS,
  SUBTITLE_CREATE_FAIL,
  USER_ADD_ACHIEVEMENT_REQUEST,
  USER_ADD_ACHIEVEMENT_SUCCESS,
  USER_ADD_ACHIEVEMENT_FAIL,
} from "constants/adminConstants";

export const postMainTitle =
  ({ skillId, mainTitle }) =>
  async (dispatch) => {
    try {
      dispatch({ type: TITLE_CREATE_REQUEST });
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      console.log(skillId, mainTitle);
      const { data } = await axios.post(
        "/achievements/createMainTitle",
        {
          skillId,
          mainTitle,
        },
        config
      );

      dispatch({
        type: TITLE_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: TITLE_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const postSubTitle =
  ({ subSkillId: skillId, mainTitleId, subTitle }) =>
  async (dispatch) => {
    try {
      dispatch({ type: SUBTITLE_CREATE_REQUEST });
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      console.log(skillId, mainTitleId, subTitle);
      await axios.post(
        "/achievements/createSubTitle",
        {
          skillId,
          mainTitleId,
          subTitle,
        },
        config
      );

      dispatch({
        type: SUBTITLE_CREATE_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: SUBTITLE_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const fetchAchievements = () => async (dispatch) => {
  try {
    dispatch({ type: ACHIEVEMENTS_GET_REQUEST });

    const { data } = await axios.get("/achievements/getAchievements");

    dispatch({
      type: ACHIEVEMENTS_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ACHIEVEMENTS_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addAchievements =
  ({ userId, mainTitle, subTitle }) =>
  
  async (dispatch) => {
    try {
      dispatch({ type: USER_ADD_ACHIEVEMENT_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `/achievements/createUserAchievements`,
        {
          userId,
          mainTitle,
          subTitle,
        },
        config
      );

      dispatch({
        type: USER_ADD_ACHIEVEMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_ADD_ACHIEVEMENT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
