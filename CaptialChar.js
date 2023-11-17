function capitalizeCharacter(str, char) {
    // Convert the character to uppercase
    const uppercaseChar = char.toUpperCase();
  
    // Split the string into an array of characters
    const strArray = str.split('');
  
    // Iterate through the string array and capitalize the specified character
    for (let i = 0; i < strArray.length; i++) {
      if (strArray[i] === char) {
        strArray[i] = uppercaseChar;
      }
    }
  
    // Join the modified array back into a string
    const capitalizedString = strArray.join('');
    return capitalizedString;
  }
  
//  Example
  const inputString = 'anurag yadav'; 
  const characterToCapitalize = 'a'; 
  
  const result = capitalizeCharacter(inputString, characterToCapitalize);
  console.log(`String after capitalizing '${characterToCapitalize}': ${result}`);