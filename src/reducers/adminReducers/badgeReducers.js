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

const initialState = {
  loading: false,
  badgeSuccess: false,
  badgeError: null,
  badge: {
    badge_name: "",
    badge_image: {},
  },
};

export const badgeCreateReducer = (state = initialState, action) => {
  switch (action.type) {
    case BADGE_CREATE_REQUEST:
      return { ...state, loading: true };
    case BADGE_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        badgeSuccess: true,
        badge: action.payload,
      };
    case BADGE_CREATE_FAIL:
      return {
        ...state,
        loading: false,
        badgeSuccess: false,
        badgeError: action.payload,
      };
    case BADGE_CREATE_RESET:
      return initialState;
    default:
      return state;
  }
};
