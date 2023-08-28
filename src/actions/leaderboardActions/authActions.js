import axios from "axios";

import {
  COMPANY_REGISTER_SUCCESS,
  COMPANY_REGISTER_REQUEST,
  COMPANY_REGISTER_FAIL,
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

      await axios.post(
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
