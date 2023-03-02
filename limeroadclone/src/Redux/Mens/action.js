import {
  GET_MENS_DATA_FAILURE,
  GET_MENS_DATA_REQUEST,
  GET_MENS_DATA_SUCCESS,
} from "./actionTypes";
import axios from "axios";
const getMensReq = () => {
  return { type: GET_MENS_DATA_REQUEST };
};
const getMensSuc = (payload) => {
  return { type: GET_MENS_DATA_SUCCESS, payload: payload };
};

const getMensErr = () => {
  return { type: GET_MENS_DATA_FAILURE };
};

export const getData = (params) => (dispatch) => {
  dispatch(getMensReq());
  return axios
    .get("https://unit-5backend.onrender.com/Mens", params)
    .then((res) => {
      dispatch(getMensSuc(res.data));
    })
    .catch((err) => {
      dispatch(getMensErr());
    });
};