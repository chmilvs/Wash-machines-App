import { CLEAR_ERROR, ERROR } from "../types";

export const errorAC = (payload) => {
  return {
    type: ERROR,
    payload,
  };
};

export const clearErrorAC = () => {
  return {
    type: CLEAR_ERROR,
  };
};
