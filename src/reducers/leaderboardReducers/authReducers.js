import {
  VERIFICATION_SUCCESS,
  VERIFICATION_REQUEST,
  VERIFICATION_FAIL,
  COMPANY_REGISTER_REQUEST,
  COMPANY_REGISTER_SUCCESS,
  COMPANY_REGISTER_FAIL,
  COMPANY_LOGIN_REQUEST,
  COMPANY_LOGIN_SUCCESS,
  COMPANY_LOGIN_FAIL,
  COMPANY_LOGOUT,
} from "constants/leaderboardConstants";

export const companyRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case COMPANY_REGISTER_REQUEST:
      return {};
    case COMPANY_REGISTER_SUCCESS:
      return { success: true, message: action.payload };
    case COMPANY_REGISTER_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};

export const verificationReducer = (state = {}, action) => {
  switch (action.type) {
    case VERIFICATION_REQUEST:
      return {};
    case VERIFICATION_SUCCESS:
      return { success: true, data: action.payload };
    case VERIFICATION_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};

export const companyLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case COMPANY_LOGIN_REQUEST:
      return {};
    case COMPANY_LOGIN_SUCCESS:
      return { success: true, companyInfo: action.payload };
    case COMPANY_LOGIN_FAIL:
      return { error: action.payload };
    case COMPANY_LOGOUT:
      return {};
    default:
      return state;
  }
};
