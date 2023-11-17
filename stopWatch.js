class Stopwatch {
    constructor() {
      this.startTime = 0;
      this.running = false;
      this.elapsedTime = 0;
    }
  
    start() {
      if (!this.running) {
        this.running = true;
        this.startTime = Date.now() - this.elapsedTime;
        this.timer = setInterval(() => {
          this.elapsedTime = Date.now() - this.startTime;
          this.printTime();
        }, 100);
      }
    }
  
    pause() {
      if (this.running) {
        this.running = false;
        clearInterval(this.timer);
      }
    }
  
    stop() {
      if (this.running) {
        clearInterval(this.timer);
        this.running = false;
      }
      this.elapsedTime = 0;
      this.printTime();
    }
  
    printTime() {
      const minutes = Math.floor(this.elapsedTime / 60000);
      const seconds = Math.floor((this.elapsedTime % 60000) / 1000);
      const milliseconds = Math.floor((this.elapsedTime % 1000) / 100);
      console.log(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds}`);
    }
  }
  
  // Example usage:
  const stopwatch = new Stopwatch();
  
  // Start the stopwatch
  stopwatch.start();
  
  // Pause after 5 seconds
  setTimeout(() => {
    stopwatch.pause();
  }, 5000);
  
  // Resume after 2 seconds
  setTimeout(() => {
    stopwatch.start();
  }, 7000);
  
  // Stop after 10 seconds
  setTimeout(() => {
    stopwatch.stop();
  }, 15000);
  