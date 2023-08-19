import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

//Reducers
import {
  usersListReducer,
  userCreateReducer,
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

const reducers = combineReducers({
  usersList: usersListReducer,
  badgesList: badgesListReducer,
  skillsList: skillsListReducer,
  userCreate: userCreateReducer,
  badgeCreate: badgeCreateReducer,
  skillCreate: skillCreateReducer,
  skillUpdate: skillUpdateReducer,
  userSkillsUpdate: usersSkillsUpdateReducer,
  getAllUserSkills: getAllUserSkillsReducer,
});

// const cartItemsFromStorage = localStorage.getItem("cartItems")
//   ? JSON.parse(localStorage.getItem("cartItems"))
//   : [];

// const userInfoFromStorage = localStorage.getItem("userInfo")
//   ? JSON.parse(localStorage.getItem("userInfo"))
//   : null;

// const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
//   ? JSON.parse(localStorage.getItem("shippingAddress"))
//   : {};

// const initialState = {
//   cart: {
//     cartItems: cartItemsFromStorage,
//     shippingAddress: shippingAddressFromStorage,
//   },
//   userLogin: { userInfo: userInfoFromStorage },
// };

const store = configureStore({
  reducer: reducers,
  //   preloadedState: initialState,
});

export default store;
