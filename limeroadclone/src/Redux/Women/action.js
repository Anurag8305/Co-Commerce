import {
    GET_WOMEN_DATA_FAILURE,
    GET_WOMEN_DATA_REQUEST,
    GET_WOMEN_DATA_SUCCESS,
  } from "./actionTypes";
  import axios from "axios";
  const getWomenReq = () => {
    return { type: GET_WOMEN_DATA_REQUEST };
  };
  const getWomenSuc = (payload) => {
    return { type: GET_WOMEN_DATA_SUCCESS, payload: payload };
  };
  
  const getWomenErr = () => {
    return { type: GET_WOMEN_DATA_FAILURE };
  };
  
  export const getwomenData = (params) => (dispatch) => {
    dispatch(getWomenReq());
    return axios
      .get("https://unit-5backend.onrender.com/Women", params)
      .then((res) => {
  
        dispatch(getWomenSuc(res.data));
      })
      .catch((err) => {
        dispatch(getWomenErr());
      });
  };
  