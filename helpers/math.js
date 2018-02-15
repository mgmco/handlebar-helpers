/**
 * Performs simple mathematical operations in a Handlebar
 * @param {Number} operand1 is the first number
 * @param {String} operator could be +, -, *, /, %, >, >=, <, <=. Anything else will return a 0
 * @param {Number} operand2 is the second number
 * @return {Number|Boolean} will return the result of the calculation. If you are performing an
 * operation, you will get a number, and if it is a comparison you will get a boolean
 */
const math = (operand1, operator, operand2) => {
  switch (operator) {
    case '+': return Number(operand1) + Number(operand2);
    case '-': return Number(operand1) - Number(operand2);
    case '*': return Number(operand1) * Number(operand2);
    case '/': return Number(operand1) / Number(operand2);
    case '%': return Number(operand1) % Number(operand2);
    case '>': return Number(operand1) > Number(operand2);
    case '>=': return Number(operand1) >= Number(operand2);
    case '<': return Number(operand1) < Number(operand2);
    case '<=': return Number(operand1) <= Number(operand2);
    default: return 0;
  }
};

module.exports = math;
