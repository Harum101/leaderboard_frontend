import axios from "axios";

import {
  BADGE_LIST_FAIL,
  BADGE_LIST_REQUEST,
  BADGE_LIST_SUCCESS,
  BADGE_CREATE_FAIL,
  BADGE_CREATE_REQUEST,
  BADGE_CREATE_RESET,
  BADGE_CREATE_SUCCESS,
} from "constants/adminConstants";

export const listBadges = () => async (dispatch) => {
  try {
    dispatch({ type: BADGE_LIST_REQUEST });

    const { data } = await axios.get("/badges");

    dispatch({
      type: BADGE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BADGE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createBadge =
  ({ badgeName, badgeImageLink }) =>
  async (dispatch) => {
    try {
      dispatch({ type: BADGE_CREATE_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      await axios.post(
        "/badges/create",
        {
          badge_name: badgeName,
          badge_pic_url: badgeImageLink,
        },
        config
      );

      dispatch({
        type: BADGE_CREATE_SUCCESS,
        payload: {
          badge_name: badgeName,
          badge_pic_url: badgeImageLink,
        },
      });
    } catch (error) {
      dispatch({
        type: BADGE_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
