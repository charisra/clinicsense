export const calculation = (calcArray, currentResult) => {
  // Convert calc array to string & split based on operators
  if (isNaN(calcArray[calcArray.length - 1])) {
    return currentResult;
  }

  // Split the calcString based on operators and store to an Array & set default result and operator
  let arrNew = calcArray.join("").split(/(\+|-|\*|\/)/g);
  let result = 0;
  let operator = "+";

  // Calculate result by looping through the array
  for (let i = 0; i < arrNew.length; i++) {
    let item = arrNew[i];
    let isOperator = /(\+|-|\*|\/)/.test(item);
    // Check if the item is an operator.
    // If it is, set the last operator to do the calculation in the next loop cycle
    // If not, do the math by using the already stored operator (from the previous loop cycle)
    if (isOperator) {
      operator = item;
    } else {
      switch (operator) {
        case "+":
          result = result + parseInt(item);
          break;
        case "-":
          result = result - parseInt(item);
          break;
        case "*":
          result = result * parseInt(item);
          break;
        case "/":
          result = result / parseInt(item);
          break;
        default:
      }
    }
  }
  return result;
};

export const addValueToCalculation = (value, currentState) => {
  currentState = [...currentState];

  let operatorVals = ["*", "/", "+", "-"];

  // Return currentState if the new value is an operator & the calculation array is empty
  if (operatorVals.includes(value) && !currentState.length) {
    return currentState;
  }

  // Get the last value & check if operator
  let lastVal = currentState[currentState.length - 1];
  let lastValIsOperator = operatorVals.includes(lastVal);

  // Check if current value is an operator
  let currentValIsOperator = operatorVals.includes(value);

  // Check if last val in array is an operator with new operator
  if (lastValIsOperator && currentValIsOperator) {
    currentState[currentState.length - 1] = value;

    return currentState;
  }

  return [...currentState, value];
};
