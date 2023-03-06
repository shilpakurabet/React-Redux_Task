/** @format */

import { GET_ALL_DATA, GET_BY_ID } from "./constants";

const initialState = {
  getAllData: [],
  getSingleData: [],
};
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DATA: {
      return {
        ...state,
        getAllData: action.payload,
      };
    }
    case GET_BY_ID: {
      return {
        ...state,
        getSingleData: action.payload,
      };
    }
    default:
      return state;
  }
};
