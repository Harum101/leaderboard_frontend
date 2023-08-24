import axios from "axios";
import { SKILL_CREATE_FAIL } from "constants/adminConstants";
import { SKILL_UPDATE_SUCCESS } from "constants/adminConstants";
import { SKILL_UPDATE_FAIL } from "constants/adminConstants";
import { SKILL_UPDATE_REQUEST } from "constants/adminConstants";
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
  ({ skillName, skillImage }) =>
  async (dispatch) => {
    try {
      dispatch({ type: SKILL_CREATE_REQUEST });
      const config = {
        headers: {
          "content-type": "application/json",
          "Content-Type": "multipart-formdata",
        },
      };

      const formdata = new FormData();
      formdata.append("skill_name", skillName);
      formdata.append("skill_image", skillImage);

      await axios.post("/skills/create", formdata, config);

      dispatch({
        type: SKILL_CREATE_SUCCESS,
        payload: {
          skill_name: skillName,
          skill_pic_url: skillImage,
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
