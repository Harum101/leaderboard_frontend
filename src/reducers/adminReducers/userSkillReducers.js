import {
  USER_SKILL_UPDATE_FAIL,
  USER_SKILL_UPDATE_SUCCESS,
  USER_SKILL_UPDATE_REQUEST,
  USER_SKILL_UPDATE_RESET
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
