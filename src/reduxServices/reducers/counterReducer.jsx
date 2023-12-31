import {
  DECREMENT,
  INCREMENT,
  RESET,
  SET,
} from "../constants/counterConstants";

const initialCounterState = {
  count: 0,
};

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };

    case SET:
      return {
        ...state,
        count: action.payload,
      };

    default:
      return state;
  }
};

export default counterReducer;
