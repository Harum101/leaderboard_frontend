import {
  COMPANY_REGISTER_REQUEST,
  COMPANY_REGISTER_SUCCESS,
  COMPANY_REGISTER_FAIL,
} from "constants/leaderboardConstants";

export const companyRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case COMPANY_REGISTER_REQUEST:
      return {};
    case COMPANY_REGISTER_SUCCESS:
      return { success: true };
    case COMPANY_REGISTER_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
