import {
  HDATE_CREATE_REQUEST,
  HDATE_CREATE_SUCCESS,
  HDATE_CREATE_FAIL,
  HDATE_CREATE_RESET,
  HDATE_GET_REQUEST,
  HDATE_GET_SUCCESS,
  HDATE_GET_FAIL,
  HDATE_DELETE_REQUEST,
  HDATE_DELETE_SUCCESS,
  HDATE_DELETE_FAIL,
} from "constants/adminConstants";

export const hackathonCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case HDATE_CREATE_REQUEST:
      return {};
    case HDATE_CREATE_SUCCESS:
      return { success: true };
    case HDATE_CREATE_FAIL:
      return { error: action.payload };
    case HDATE_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const hackathonDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case HDATE_DELETE_REQUEST:
      return {};
    case HDATE_DELETE_SUCCESS:
      return { success: true };
    case HDATE_DELETE_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};

export const hackathonGetReducer = (state = { hackathon: {} }, action) => {
  switch (action.type) {
    case HDATE_GET_REQUEST:
      return { loading: true, hackathon: {} };
    case HDATE_GET_SUCCESS:
      return { success: true, hackathon: action.payload };
    case HDATE_GET_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
