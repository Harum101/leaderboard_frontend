import axios from "axios";

import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_CREATE_REQUEST,
  USER_CREATE_SUCCESS,
  USER_CREATE_FAIL,
  USER_CREATE_RESET,
} from "constants/adminConstants";

export const listUsers = () => async (dispatch) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });

    const { data } = await axios.get("/users");

    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createUser =
  ({ name, email, linkedin, profilePic, yearsOfExp, availability }) =>
  async (dispatch) => {
    try {
      dispatch({ type: USER_CREATE_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      await axios.post(
        "/users/create",
        {
          name,
          email,
          linkedin_url: linkedin,
          profile_pic_url: profilePic,
          years_of_experience: yearsOfExp,
          availability,
        },
        config
      );

      dispatch({
        type: USER_CREATE_SUCCESS,
        payload: {
          name,
          email,
          linkedin_url: linkedin,
          profile_pic_url: profilePic,
          years_of_experience: yearsOfExp,
          availability,
        },
      });
    } catch (error) {
      dispatch({
        type: USER_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
