import { SKILL_CREATE_SUCCESS } from "constants/adminConstants";
import { SKILL_CREATE_RESET } from "constants/adminConstants";
import { SKILL_CREATE_FAIL } from "constants/adminConstants";
import { SKILL_CREATE_REQUEST } from "constants/adminConstants";
import {
  SKILL_LIST_SUCCESS,
  SKILL_LIST_REQUEST,
  SKILL_LIST_FAIL,
} from "constants/adminConstants";

export const skillsListReducer = (state = { skills: [] }, action) => {
  switch (action.type) {
    case SKILL_LIST_REQUEST:
      return { loadingSkills: true, skills: [] };
    case SKILL_LIST_SUCCESS:
      return { loadingSkills: false, skills: action.payload };
    case SKILL_LIST_FAIL:
      return { loadingSkills: false, skillsError: action.payload };
    default:
      return state;
  }
};

export const skillCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case SKILL_CREATE_REQUEST:
      return { loading: true };
    case SKILL_CREATE_SUCCESS:
      return { loading: false, skillSuccess: true, skill: action.payload };
    case SKILL_CREATE_FAIL:
      return { loading: false, skillError: action.payload };
    case SKILL_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
