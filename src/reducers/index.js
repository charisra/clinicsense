import {
  EXPORT_CALCULATION_AND_RESULT,
  CLEAR_CALCULATION
} from "../constants/action-types";

const initiaState = {
  calculation: [],
  result: 0
};

const rootReducer = (state = initiaState, action) => {
  switch (action.type) {
    case EXPORT_CALCULATION_AND_RESULT:
      return {
        calculation: action.payload.calculation,
        result: action.payload.result
      };
    case CLEAR_CALCULATION:
      return {
        calculation: [],
        result: 0
      };
    default:
      return state;
  }
};

export default rootReducer;
