import axios from "axios";

import {
  COMPANY_REGISTER_SUCCESS,
  COMPANY_REGISTER_REQUEST,
  COMPANY_REGISTER_FAIL,
  COMPANY_LOGIN_REQUEST,
  COMPANY_LOGIN_SUCCESS,
  COMPANY_LOGIN_FAIL,
  COMPANY_LOGOUT,
  VERIFICATION_SUCCESS,
  VERIFICATION_REQUEST,
  VERIFICATION_FAIL,
} from "constants/leaderboardConstants";

export const registerCompany =
  ({
    name,
    contact,
    email,
    companyName,
    companyWebsite,
    noOfEmployees,
    industry,
    password,
  }) =>
  async (dispatch) => {
    try {
      dispatch({ type: COMPANY_REGISTER_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const data = await axios.post(
        "/authCom/register",
        {
          name,
          contact,
          email,
          company_name: companyName,
          company_website: companyWebsite,
          no_of_employees: noOfEmployees,
          industry,
          password,
        },
        config
      );

      dispatch({
        type: COMPANY_REGISTER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      // ERROR HANDLER
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(error.response.data, "text/html");
      const h1Element = htmlDoc.querySelector("h1");
      const h2Element = htmlDoc.querySelector("h2");

      const errorMessage = h1Element ? h1Element.textContent : "Unknown Error";
      const statusCode = h2Element ? h2Element.textContent : "Unknown Status";

      dispatch({
        type: COMPANY_REGISTER_FAIL,
        payload: `Error: ${statusCode} | ${errorMessage}`,
      });
    }
  };

export const verification =
  ({ id, token }) =>
  async (dispatch) => {
    try {
      dispatch({ type: VERIFICATION_REQUEST });

      const { data } = await axios.get(`/authCom/${id}/verify/${token}`);

      dispatch({
        type: VERIFICATION_SUCCESS,
        payload: data,
      });
    } catch (error) {
      // ERROR HANDLER
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(error.response.data, "text/html");
      const h1Element = htmlDoc.querySelector("h1");
      const h2Element = htmlDoc.querySelector("h2");

      const errorMessage = h1Element ? h1Element.textContent : "Unknown Error";
      const statusCode = h2Element ? h2Element.textContent : "Unknown Status";

      dispatch({
        type: VERIFICATION_FAIL,
        payload: `Error: ${statusCode} | ${errorMessage}`,
      });
    }
  };

export const loginCompany =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      dispatch({ type: COMPANY_LOGIN_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/authCom/login",
        {
          email,
          password,
        },
        config
      );

      dispatch({
        type: COMPANY_LOGIN_SUCCESS,
        payload: data,
      });

      localStorage.setItem("companyInfo", JSON.stringify(data));
    } catch (error) {
      // ERROR HANDLER
      if (error.response.data.message) {
        dispatch({
          type: COMPANY_LOGIN_FAIL,
          payload: `${error.response.data.message}`,
        });
      } else {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(
          error.response.data,
          "text/html"
        );
        const h1Element = htmlDoc.querySelector("h1");
        const h2Element = htmlDoc.querySelector("h2");

        const errorMessage = h1Element
          ? h1Element.textContent
          : "Unknown Error";
        const statusCode = h2Element ? h2Element.textContent : "Unknown Status";

        dispatch({
          type: COMPANY_LOGIN_FAIL,
          payload: `Error: ${statusCode} | ${errorMessage}`,
        });
      }
    }
  };

export const logoutCompany = () => async (dispatch) => {
  localStorage.removeItem("companyInfo");
  dispatch({ type: COMPANY_LOGOUT });
};
