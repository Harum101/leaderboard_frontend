import axios from "axios";
import { SKILL_CREATE_FAIL } from "constants/adminConstants";
import { SKILL_CREATE_SUCCESS } from "constants/adminConstants";
import { SKILL_CREATE_REQUEST } from "constants/adminConstants";

import {
  SKILL_LIST_SUCCESS,
  SKILL_LIST_REQUEST,
  SKILL_LIST_FAIL,
} from "constants/adminConstants";

export const listSkills = () => async (dispatch) => {
  try {
    dispatch({ type: SKILL_LIST_REQUEST });

    const { data } = await axios.get("/skills");

    dispatch({
      type: SKILL_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SKILL_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createSkill =
  ({ skillName, skillImageLink }) =>
  async (dispatch) => {
    try {
      dispatch({ type: SKILL_CREATE_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      await axios.post(
        "/skills/create",
        {
          skill_name: skillName,
          skill_pic_url: skillImageLink,
        },
        config
      );

      dispatch({
        type: SKILL_CREATE_SUCCESS,
        payload: {
          skill_name: skillName,
          skill_pic_url: skillImageLink,
        },
      });
    } catch (error) {
      dispatch({
        type: SKILL_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
