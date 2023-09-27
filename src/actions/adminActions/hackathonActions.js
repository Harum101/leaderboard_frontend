import axios from "axios";
import {
  HDATE_CREATE_REQUEST,
  HDATE_CREATE_SUCCESS,
  HDATE_CREATE_FAIL,
  HDATE_GET_REQUEST,
  HDATE_GET_SUCCESS,
  HDATE_GET_FAIL,
  HDATE_DELETE_REQUEST,
  HDATE_DELETE_SUCCESS,
  HDATE_DELETE_FAIL,
} from "constants/adminConstants";

export const getHackathon = () => async (dispatch) => {
  try {
    dispatch({ type: HDATE_GET_REQUEST });

    const { data } = await axios.get("/hackathon/fetch");

    dispatch({
      type: HDATE_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: HDATE_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createHackathon =
  ({ hackathonDate }) =>
  async (dispatch) => {
    try {
      dispatch({ type: HDATE_CREATE_REQUEST });
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      console.log(hackathonDate);
      await axios.post("/hackathon/create", { hackathonDate }, config);

      dispatch({
        type: HDATE_CREATE_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: HDATE_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const deleteHackathon = () => async (dispatch) => {
  try {
    dispatch({ type: HDATE_DELETE_REQUEST });

    await axios.delete("/hackathon/delete");

    dispatch({
      type: HDATE_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: HDATE_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
