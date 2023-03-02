import {
  GET_WOMEN_DATA_FAILURE,
  GET_WOMEN_DATA_REQUEST,
  GET_WOMEN_DATA_SUCCESS,
} from "./actionTypes";

const initialState = {
  women: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_WOMEN_DATA_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case GET_WOMEN_DATA_SUCCESS:
      return { ...state, isLoading: false, isError: false, women: payload };
    case GET_WOMEN_DATA_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};