function sortStringAlphabetically(str) {
    // Convert the string to an array of character, sort them, and join back to form a string
    const sortedString = str.split('').sort().join('');
    return sortedString;
  }
  
  // Example 
  const inputString = 'anurag'; 
  const sortedResult = sortStringAlphabetically(inputString);
  console.log('Sorted string:', sortedResult);