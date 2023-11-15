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
import {
  hackathonCreateReducer,
  hackathonDeleteReducer,
  hackathonGetReducer,
} from "reducers/adminReducers/hackathonReducers";
import { mainTitleCreateReducer } from "reducers/adminReducers/achievementReducers";
import { achievementGetReducer } from "reducers/adminReducers/achievementReducers";
import { subTitleCreateReducer } from "reducers/adminReducers/achievementReducers";
import { getSingleUserSkillReducer } from "reducers/adminReducers/userSkillReducers";
import { achievementAddReducer } from "reducers/adminReducers/achievementReducers";

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
  getSingleUserSkill: getSingleUserSkillReducer,
  companyRegister: companyRegisterReducer,
  verification: verificationReducer,
  companyLogin: companyLoginReducer,
  hackathonCreate: hackathonCreateReducer,
  hackathonGet: hackathonGetReducer,
  hackathonDelete: hackathonDeleteReducer,
  mainTitleCreate: mainTitleCreateReducer,
  subTitleCreate: subTitleCreateReducer,
  achievementsGet: achievementGetReducer,
  achievementsAdd: achievementAddReducer,
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
