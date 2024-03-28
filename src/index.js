// index.js

// Function to add two numbers
function add(a, b) {
    return a + b;
  }
  
  // Function to subtract two numbers
  function subtract(a, b) {
    return a - b;
  }
  
  // Unique function to multiply a number by 2
  function double(a) {
    return a * 2;
  }
  
  // Unique function to calculate the square of a number
  function square(a) {
    return a * a;
  }
  
  // Export all functions using a single name
  const Prasun = {
    add,
    subtract,
    double,
    square
  };
  
  // Export Prasun
  export default Prasun;