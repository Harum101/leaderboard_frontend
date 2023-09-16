import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

//Reducers
import {
  usersListReducer,
  userCreateReducer,
  badgeAddReducer,
} from "reducers/adminReducers/userReducers";
import {
  badgesListReducer,
  badgeCreateReducer,
} from "reducers/adminReducers/badgeReducers";
import {
  skillsListReducer,
  skillCreateReducer,
  skillUpdateReducer,
} from "reducers/adminReducers/skillReducers";
import {
  usersSkillsUpdateReducer,
  getAllUserSkillsReducer,
} from "reducers/adminReducers/userSkillReducers";
import {
  companyRegisterReducer,
  verificationReducer,
  companyLoginReducer,
} from "reducers/leaderboardReducers/authReducers";

const reducers = combineReducers({
  usersList: usersListReducer,
  badgesList: badgesListReducer,
  skillsList: skillsListReducer,
  userCreate: userCreateReducer,
  badgeCreate: badgeCreateReducer,
  badgeAdd: badgeAddReducer,
  skillCreate: skillCreateReducer,
  skillUpdate: skillUpdateReducer,
  userSkillsUpdate: usersSkillsUpdateReducer,
  getAllUserSkills: getAllUserSkillsReducer,
  companyRegister: companyRegisterReducer,
  verification: verificationReducer,
  companyLogin: companyLoginReducer,
});

const companyInfoFromStorage = localStorage.getItem("companyInfo")
  ? JSON.parse(localStorage.getItem("companyInfo"))
  : null;

const initialState = {
  companyLogin: { companyInfo: companyInfoFromStorage },
};

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  preloadedState: initialState,
});

export default store;
