import { UPDATE_MODEL, ADD_MODEL, DEL_MODEL, INIT_MODEL } from "../types";

const modelReducer = (state = [], action) => {
  switch (action.type) {
    case INIT_MODEL:
      return [...state, ...action.payload];
    case ADD_MODEL:
      return [...state, action.payload];
    case DEL_MODEL:
      return [...state.filter((model) => model._id !== action.payload._id)];
    case UPDATE_MODEL:
      const newState = state.map((model) => {
        if (model._id == action.payload._id) {
          return action.payload;
        } else {
          return model;
        }
      });
      return newState;
    default:
      return state;
  }
};

export default modelReducer;
