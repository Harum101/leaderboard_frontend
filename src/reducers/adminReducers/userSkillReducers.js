import {
  ALL_USERS_SKILLS_REQUEST,
  ALL_USERS_SKILLS_SUCCESS,
  ALL_USERS_SKILLS_FAIL,
  USER_SKILL_REQUEST,
  USER_SKILL_SUCCESS,
  USER_SKILL_FAIL,
} from "constants/leaderboardConstants";

import {
  USER_SKILL_UPDATE_FAIL,
  USER_SKILL_UPDATE_SUCCESS,
  USER_SKILL_UPDATE_REQUEST,
  USER_SKILL_UPDATE_RESET,
} from "constants/adminConstants";

export const usersSkillsUpdateReducer = (
  state = { userSkills: {} },
  action
) => {
  switch (action.type) {
    case USER_SKILL_UPDATE_REQUEST:
      return { loading: true, userSkills: {} };
    case USER_SKILL_UPDATE_SUCCESS:
      return { loading: false, success: true, userSkills: action.payload };
    case USER_SKILL_UPDATE_FAIL:
      return { loading: false, success: false, error: action.payload };
    case USER_SKILL_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const getAllUserSkillsReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case ALL_USERS_SKILLS_REQUEST:
      return { loading: true, users: [] };
    case ALL_USERS_SKILLS_SUCCESS:
      return { loading: false, users: action.payload };
    case ALL_USERS_SKILLS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getSingleUserSkillReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SKILL_REQUEST:
      return { loading: true };
    case USER_SKILL_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_SKILL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
