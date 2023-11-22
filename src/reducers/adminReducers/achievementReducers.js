import {
  TITLE_CREATE_REQUEST,
  TITLE_CREATE_SUCCESS,
  TITLE_CREATE_FAIL,
  TITLE_CREATE_RESET,
  ACHIEVEMENTS_GET_SUCCESS,
  ACHIEVEMENTS_GET_FAIL,
  ACHIEVEMENTS_GET_REQUEST,
  SUBTITLE_CREATE_REQUEST,
  SUBTITLE_CREATE_SUCCESS,
  SUBTITLE_CREATE_FAIL,
  SUBTITLE_CREATE_RESET,
  USER_ADD_ACHIEVEMENT_REQUEST,
  USER_ADD_ACHIEVEMENT_SUCCESS,
  USER_ADD_ACHIEVEMENT_FAIL,
  USER_ADD_ACHIEVEMENT_RESET,
} from "constants/adminConstants";

export const mainTitleCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case TITLE_CREATE_REQUEST:
      return {};
    case TITLE_CREATE_SUCCESS:
      return {
        mainTitlePostSuccess: true,
        mainTitlePostMessage: action.payload,
      };
    case TITLE_CREATE_FAIL:
      return { mainTitleError: action.payload };
    case TITLE_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const subTitleCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case SUBTITLE_CREATE_REQUEST:
      return {};
    case SUBTITLE_CREATE_SUCCESS:
      return {
        subTitlePostSuccess: true,
        subTitlePostMessage: action.payload,
      };
    case SUBTITLE_CREATE_FAIL:
      return { subTitleError: action.payload };
    case SUBTITLE_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const achievementGetReducer = (state = {}, action) => {
  switch (action.type) {
    case ACHIEVEMENTS_GET_REQUEST:
      return { loading: true };
    case ACHIEVEMENTS_GET_SUCCESS:
      return { loading: false, achievements: action.payload };
    case ACHIEVEMENTS_GET_FAIL:
      return { loading: false, mainTitleError: action.payload };
    default:
      return state;
  }
};

export const achievementAddReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_ADD_ACHIEVEMENT_REQUEST:
      return {};
    case USER_ADD_ACHIEVEMENT_SUCCESS:
      return { success: true, data: action.payload };
    case USER_ADD_ACHIEVEMENT_FAIL:
      return { success: false, error: action.payload };
    case USER_ADD_ACHIEVEMENT_RESET:
      return {};
    default:
      return state;
  }
};
