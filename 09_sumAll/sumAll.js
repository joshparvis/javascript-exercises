const sumAll = function(numOne, numTwo) {
  let sum = 0;

  if (numOne > numTwo) {
    temp = numOne;
    numOne = numTwo;
    numTwo = temp; 
  }

  for (i = numOne; i < numTwo + 1; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
