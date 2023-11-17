function SmallestAndSecondSmallest(arr) {
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        secondSmallest = smallest;
        smallest = arr[i];
      } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
        secondSmallest = arr[i];
      }
    }
    
    if (secondSmallest === Infinity) {
      // if all the elements are same
      console.log('No second smallest element.');
    } else {
      console.log('Smallest element:', smallest);
      console.log('Second smallest element:', secondSmallest);
    }
  }
  
  const array = [12, 4, 7, 9, 2, 15, 4, 8];
  SmallestAndSecondSmallest(array);