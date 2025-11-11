'use strict';

// Import prompt-sync for user input
const prompt = require('prompt-sync')();

// ==================== INPUT VALIDATION FUNCTIONS ====================

/**
 * Get valid number input from user
 * @param {string} promptMessage - Message to display to user
 * @returns {number} - Valid number from user
 */
function getValidNumberInput(promptMessage) {
  let input;
  let number;
  
  while (true) {
    input = prompt(promptMessage);
    number = Number(input);
    
    // Validate if input is a valid number
    if (!isNaN(number) && input.trim() !== '') {
      return number;
    }
    
    console.log('Invalid input! Please enter a valid number.\n');
  }
}

/**
 * Get valid operator input from user
 * @param {string} promptMessage - Message to display to user
 * @returns {string} - Valid operator (+, -, *, /, %, **)
 */
function getValidOperatorInput(promptMessage) {
  const validOperators = ['+', '-', '*', '/', '%', '**'];
  let operator;
  
  while (true) {
    operator = prompt(promptMessage);
    
    // Validate if input is a valid operator
    if (validOperators.includes(operator)) {
      return operator;
    }
    
    console.log('Invalid operator! Please use: +, -, *, /, %, **\n');
  }
}

// ==================== ARITHMETIC OPERATION FUNCTIONS ====================

/**
 * Add two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} - Sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtract two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} - Difference of a and b
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiply two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} - Product of a and b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divide two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number|string} - Quotient or error message if division by zero
 */
function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero!";
  }
  return a / b;
}

/**
 * Calculate modulo of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} - Remainder of a divided by b
 */
function modulo(a, b) {
  return a % b;
}

/**
 * Calculate power of two numbers
 * @param {number} a - Base number
 * @param {number} b - Exponent
 * @returns {number} - a raised to the power of b
 */
function power(a, b) {
  return a ** b;
}

// ==================== DATA ANALYSIS FUNCTIONS ====================

/**
 * Analyze and display result information
 * @param {any} result - The calculation result to analyze
 */
function analyzeResult(result) {
  console.log('\n' + '='.repeat(50));
  console.log('RESULT ANALYSIS');
  console.log('='.repeat(50));
  
  // Use nullish coalescing operator to handle undefined/null
  const safeResult = result ?? "Result is undefined or null, something went wrong!";
  
  // Check if result was replaced by default message
  if (safeResult === "Result is undefined or null, something went wrong!") {
    console.log(safeResult);
    return;
  }
  
  // Get the type of result
  const resultType = typeof result;
  console.log(`Data Type: ${resultType}`);
  
  // Analyze based on data type
  if (resultType === 'number') {
    analyzeNumber(result);
  } else if (resultType === 'string') {
    console.log(result);
  } else {
    console.log(`Unexpected result type: ${resultType}`);
  }
  
  console.log('='.repeat(50) + '\n');
}

/**
 * Analyze number result
 * @param {number} num - Number to analyze
 */
function analyzeNumber(num) {
  // Check if positive, negative, or zero
  if (num > 0) {
    console.log('Value: Positive number');
  } else if (num < 0) {
    console.log('Value: Negative number');
  } else {
    console.log('Value: Zero');
  }
  
  // Check if integer or floating-point
  if (Number.isInteger(num)) {
    console.log('Type: Integer');
    
    // Use ternary operator to check even or odd
    const evenOrOdd = num % 2 === 0 ? 'Even' : 'Odd';
    console.log(`Parity: ${evenOrOdd}`);
    
    // Use logical operators for complex conditions
    if (num > 0 && num % 2 === 0) {
      console.log('Special: Positive and Even');
    } else if (num > 0 && num % 2 !== 0) {
      console.log('Special: Positive and Odd');
    } else if (num < 0 && num % 2 === 0) {
      console.log('Special: Negative and Even');
    } else if (num < 0 && num % 2 !== 0) {
      console.log('Special: Negative and Odd');
    }
  } else {
    console.log('Type: Floating-point number');
  }
}

// ==================== MAIN CALCULATOR LOGIC ====================

/**
 * Main calculator function
 */
function runCalculator() {
  console.log('\n' + '='.repeat(50));
  console.log('INTERACTIVE CALCULATOR & DATA ANALYZER');
  console.log('='.repeat(50));
  console.log('Available operators: +, -, *, /, %, **');
  console.log('='.repeat(50) + '\n');
  
  // Main loop - runs until user decides to exit
  while (true) {
    // Get user inputs
    const num1 = getValidNumberInput('Enter first number: ');
    const num2 = getValidNumberInput('Enter second number: ');
    const operator = getValidOperatorInput('Enter operator (+, -, *, /, %, **): ');
    
    let result;
    
    // Use switch statement to perform calculation based on operator
    switch (operator) {
      case '+':
        result = add(num1, num2);
        console.log(`\n${num1} + ${num2} = ${result}`);
        break;
      case '-':
        result = subtract(num1, num2);
        console.log(`\n${num1} - ${num2} = ${result}`);
        break;
      case '*':
        result = multiply(num1, num2);
        console.log(`\n${num1} * ${num2} = ${result}`);
        break;
      case '/':
        result = divide(num1, num2);
        if (typeof result === 'string') {
          console.log(`\n${num1} / ${num2} = ${result}`);
        } else {
          console.log(`\n${num1} / ${num2} = ${result}`);
        }
        break;
      case '%':
        result = modulo(num1, num2);
        console.log(`\n${num1} % ${num2} = ${result}`);
        break;
      case '**':
        result = power(num1, num2);
        console.log(`\n${num1} ** ${num2} = ${result}`);
        break;
      default:
        console.log('\nUnknown operator!');
        continue;
    }
    
    // Analyze the result
    analyzeResult(result);
    
    // Ask user if they want to continue
    const continueCalc = prompt('Do you want to perform another calculation? (yes/no): ');
    
    // Exit condition - case insensitive check
    const response = continueCalc.toLowerCase()
    if (response === 'no' || response === 'n') {
      console.log('\nThank you for using the calculator! Goodbye!\n');
      break;
    }
    
    console.log('\n');
  }
}

// ==================== START APPLICATION ====================

// Run the calculator
runCalculator();