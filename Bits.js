function countBitsToRepresentNumber(number) {
    // Calculate the log base 2 of the number and round up to the nearest int
    let bitsCount = Math.ceil(Math.log2(number + 1)); // Adding 1 to corner cases when the number itself is a power of 2
  
    return bitsCount;
  }
  
  const num = 16; 
  const bitsRequired = countBitsToRepresentNumber(num);
  console.log(`Number of bits required to represent ${num} in binary: ${bitsRequired}`);