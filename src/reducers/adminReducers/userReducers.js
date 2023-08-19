import {
  USER_LIST_SUCCESS,
  USER_LIST_REQUEST,
  USER_LIST_FAIL,
  USER_CREATE_REQUEST,
  USER_CREATE_SUCCESS,
  USER_CREATE_FAIL,
  USER_CREATE_RESET,
  ADD_BADGE_REQUEST,
  ADD_BADGE_FAIL,
  ADD_BADGE_RESET,
  ADD_BADGE_SUCCESS,
} from "constants/adminConstants";

export const usersListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loadingUsers: true, users: [] };
    case USER_LIST_SUCCESS:
      return { loadingUsers: false, users: action.payload };
    case USER_LIST_FAIL:
      return { loadingUsers: false, usersError: action.payload };
    default:
      return state;
  }
};

export const userCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_CREATE_REQUEST:
      return { loading: true };
    case USER_CREATE_SUCCESS:
      return { loading: false, userSuccess: true, user: action.payload };
    case USER_CREATE_FAIL:
      return { loading: false, userSuccess: false, userError: action.payload };
    case USER_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const badgeAddReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_BADGE_REQUEST:
      return {};
    case ADD_BADGE_SUCCESS:
      return { badgeSuccess: true, badge: action.payload };
    case ADD_BADGE_FAIL:
      return { badgeSuccess: false, badgeError: action.payload };
    case ADD_BADGE_RESET:
      return {};
    default:
      return state;
  }
};
