/** @format */

import axios from "axios";
import { GET_ALL_DATA, GET_BY_ID } from "./constants";

export const getAllPokemon = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
      );
      const result = await response.data;
      dispatch({ type: GET_ALL_DATA, payload: result });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getById = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        ` https://pokeapi.co/api/v2/pokemon/${name}`
      );
      const result = await response.data;
      dispatch({ type: GET_BY_ID, payload: result });
    } catch (error) {
      console.log(error);
    }
  };
};
