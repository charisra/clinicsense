import {
  EXPORT_CALCULATION_AND_RESULT,
  CLEAR_CALCULATION
} from "../constants/action-types";
import { calculation, addValueToCalculation } from "../helpers";

export const updateCalculation = (inputValue, currentState, currentResult) => {
  const updateCalculationArr = addValueToCalculation(inputValue, currentState);
  const calcResult = calculation(updateCalculationArr, currentResult);

  return {
    type: EXPORT_CALCULATION_AND_RESULT,
    payload: {
      calculation: updateCalculationArr,
      result: calcResult
    }
  };
};

export const clearCalculation = () => {
  return {
    type: CLEAR_CALCULATION,
    payload: {
      calculation: [],
      result: 0
    }
  };
};
