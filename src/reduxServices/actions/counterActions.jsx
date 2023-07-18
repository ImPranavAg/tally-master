import {
  DECREMENT,
  INCREMENT,
  RESET,
  SET,
} from "../constants/counterConstants";

export const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

export const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

export const resetCounter = () => {
  return {
    type: RESET,
  };
};

export const setCounter = (value) => {
  return {
    type: SET,
    payload: value,
  };
};
