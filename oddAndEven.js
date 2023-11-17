function oddAndEven(arr) {
    // Separate even and odd numbers
    const evens = arr.filter(num => num % 2 === 0);
    const odds = arr.filter(num => num % 2 !== 0);
  
    // Remove duplicates
    const uniqueEvens = [...new Set(evens)];
    const uniqueOdds = [...new Set(odds)];
  
    // combine even and odd numbers
    const result = [uniqueEvens, uniqueOdds];
    return result;
  }
  
  // Example 
  const numbers = [4, 2, 5, 7, 8, 2, 5, 4, 8, 9, 3, 7]; 
  const separatedArray = oddAndEven(numbers);
  console.log('Separated array with duplicates removed:', separatedArray);
  