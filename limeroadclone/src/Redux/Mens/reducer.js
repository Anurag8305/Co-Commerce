import {
  GET_MENS_DATA_FAILURE,
  GET_MENS_DATA_REQUEST,
  GET_MENS_DATA_SUCCESS,
} from "./actionTypes";

const initialState = {
  Mens: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MENS_DATA_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case GET_MENS_DATA_SUCCESS:
      return { ...state, isLoading: false, isError: false, Mens: payload };
    case GET_MENS_DATA_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
