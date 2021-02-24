import { ADD_NEW_MODEL, INIT_MODELS } from "../../utils/utils";
import { ADD_MODEL, INIT_MODEL, DEL_MODEL, UPDATE_MODEL } from "../types";
import { clearErrorAC, errorAC } from "./errorAC";

export const initModelsAC = (payload) => {
  return {
    type: INIT_MODEL,
    payload,
  };
};

export const addModelAC = (payload) => {
  return {
    type: ADD_MODEL,
    payload,
  };
};

export const deleteModelAC = (payload) => {
  return {
    type: DEL_MODEL,
    payload,
  };
};

export const updModelAC = (payload) => {
  return {
    type: UPDATE_MODEL,
    payload,
  };
};

export const fetchInitModelsAc = () => {
  return (dispatch) => {
    fetch(INIT_MODELS)
      .then((res) => res.json())
      .then((models) => {
        if (models.success) {
          dispatch(initModelsAC(models.models));
          dispatch(clearErrorAC());
        } else {
          dispatch(errorAC(models.message));
        }
      });
  };
};

export const fetchAddModelAC = ({ model }) => {
  return (dispatch) => {
    fetch(ADD_NEW_MODEL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ model }),
    })
      .then((res) => res.json())
      .then((model) => {
        if (model.success) {
          dispatch(addModelAC(model.newModel));
          dispatch(clearErrorAC());
        } else {
          dispatch(errorAC(model.message));
        }
      });
  };
};

export const fetchDeleteModelAC = ({ _id }) => {
  return (dispatch) => {
    fetch(`${INIT_MODELS}/${_id}`)
      .then((res) => res.json())
      .then((delModel) => {
        if (delModel.success) {
          dispatch(deleteModelAC(delModel.modelDelete));
          dispatch(clearErrorAC());
        } else {
          dispatch(errorAC(delModel.message));
        }
      });
  };
};

export const fetchAddInstanceAC = ({ _id }) => {
  return (dispatch) => {
    fetch(`${INIT_MODELS}/${_id}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())

      .then((instance) => {
        if (instance.success) {
          dispatch(updModelAC(instance.model));
          dispatch(clearErrorAC());
        } else {
          dispatch(errorAC(instance.message));
        }
      });
  };
};

export const fetchDeleteInstanceAC = ({ _id, id }) => {
  return (dispatch) => {
    fetch(`${INIT_MODELS}/${id}/${_id}`)
      .then((res) => res.json())
      .then((updModel) => dispatch(updModelAC(updModel.model)));
  };
};

export const fetchChangeStateAC = ({ _id, id }) => {
  return (dispatch) => {
    fetch(`${INIT_MODELS}/${id}/${_id}/state`)
      .then((res) => res.json())
      .then((updModel) => dispatch(updModelAC(updModel.model)));
  };
}; 
