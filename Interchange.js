function interchange(number) {
    // Convert number to string 
    let numStr = number.toString();
  
    // Check if the number has more than one digit
    if (numStr.length > 1) {
      let firstDigit = numStr[0];
      let lastDigit = numStr[numStr.length - 1];
  
      // Replace the first and last digits
      numStr = lastDigit + numStr.substring(1, numStr.length - 1) + firstDigit;
  
      // Convert back to a number
      let result = parseInt(numStr);
      return result;
    } else {
      return number;
    }
  }

const num = 97119352;
const result = interchange(num);
console.log('Number after interchanging first and last digit:',result);