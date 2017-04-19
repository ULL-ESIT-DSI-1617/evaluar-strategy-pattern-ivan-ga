// module.exports = function(shape, options) {
//   var area = 0;
//
//   switch (shape) {
//     case 'Triangle':
//       area = .5 * options.width * options.height;
//       break;
//
//     case 'Square':
//       area = Math.pow(options.width, 2);
//       break;
//
//     case 'Rectangle':
//       area = options.width * options.height;
//       break;
//
//     default:
//       throw new Error('Invalid shape: ' + shape);
//   }
//
//   return area;
// }


////////////////////////////////////////////////////////////////////////////////
"use strict"


 class Shape {

    constructor(options) {
      Object.assign(this, options)
    }

    getArea(){
      return this.area()
    }
  }

Shape.tipo = Shape.tipo || {}

  class Triangle extends Shape {

    constructor(options) {

      super(options)

    }


    area() {

      var area = 0;
      area = .5 * this.width * this.height;
      return area;
    }
  }

Shape.tipo.Triangle = Triangle;

  class Rectangle extends Shape {

    constructor(options) {

      super(options)

    }

    area() {

      var area = 0;
      area = this.width * this.height;
      return area;
    }
  }

  Shape.tipo.Rectangle = Rectangle;

  class Square extends Shape {

    constructor(options) {

      super(options)

    }


    area() {

      var area = 0;
      area = Math.pow(this.width, 2);
      return area;
    }
  }

  Shape.tipo.Square = Square;

module.exports = {Shape: Shape,
Triangle: Triangle,
Square: Square,
Rectangle: Rectangle}
