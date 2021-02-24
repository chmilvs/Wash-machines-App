import { CLEAR_ERROR, ERROR } from "../types";

const defaultState = {
  isError: false,
  text: "",
};

const errorReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        isError: true,
        text: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        isError: false,
        text: "",
      };
    default:
      return state;
  }
};

export default errorReducer;
