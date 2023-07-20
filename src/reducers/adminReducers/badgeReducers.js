import { BADGE_CREATE_SUCCESS } from "constants/adminConstants";
import { BADGE_CREATE_RESET } from "constants/adminConstants";
import { BADGE_CREATE_FAIL } from "constants/adminConstants";
import { BADGE_CREATE_REQUEST } from "constants/adminConstants";
import {
  BADGE_LIST_SUCCESS,
  BADGE_LIST_REQUEST,
  BADGE_LIST_FAIL,
} from "constants/adminConstants";

export const badgesListReducer = (state = { badges: [] }, action) => {
  switch (action.type) {
    case BADGE_LIST_REQUEST:
      return { loadingBadges: true, badges: [] };
    case BADGE_LIST_SUCCESS:
      return { loadingBadges: false, badges: action.payload };
    case BADGE_LIST_FAIL:
      return { loadingBadges: false, badgesError: action.payload };
    default:
      return state;
  }
};

export const badgeCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case BADGE_CREATE_REQUEST:
      return { loading: true };
    case BADGE_CREATE_SUCCESS:
      return { loading: false, badgeSuccess: true, badge: action.payload };
    case BADGE_CREATE_FAIL:
      return { loading: false, badgeError: action.payload };
    case BADGE_CREATE_RESET:
      return {};
    default:
      return state;
  }
};