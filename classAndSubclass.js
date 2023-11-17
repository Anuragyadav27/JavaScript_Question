class Shape {
    //  constructor
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  }
  
  class Triangle extends Shape {
    // inherited from Shape class
    area() {
      return 0.5 * this.width * this.height; // Calculating area of triangle
    }
  }
  
  class Rectangle extends Shape {
    area() {
      return this.width * this.height; // Calculating area of a rectangle
    }
  }
  
  const triangle = new Triangle(7, 8); 
  const rectangle = new Rectangle(5, 10); 
  
  console.log('Area of the triangle:', triangle.area());
  console.log('Area of the rectangle:', rectangle.area());