function calculateMinutesBetweenTimes(time1, time2) {
    // Function to convert time in format "hh:mmAM" or "hh:mmPM" to minutes
    const timeToMinutes = time => {
      const [timeStr, period] = time.split(/(?=[AP]M)/); // Split time from AM/PM
      const [hours, minutes] = timeStr.split(':').map(Number); // Split hours and minutes
      let totalMinutes = hours * 60 + minutes; // Calculate total minutes for the time
  
      // Adjust for PM (add 12 hours)
      if (period === 'PM') {
        totalMinutes += 12 * 60;
      }
  
      return totalMinutes;
    };
  
    const minutes1 = timeToMinutes(time1);
    const minutes2 = timeToMinutes(time2);
  
    const difference = Math.abs(minutes2 - minutes1);
    return difference;
  }
  
  // Example 
  const startTime = '12:01AM'; 
  const endTime = '12:00PM';
  
  const minutesDifference = calculateMinutesBetweenTimes(startTime, endTime);
  console.log(`Minutes between ${startTime} to ${endTime}: ${minutesDifference}`);
  