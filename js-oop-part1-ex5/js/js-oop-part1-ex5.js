//1:
class Shape {
   constructor(type, color) {
      this.type = type;
      this.color = color;
   }
}

//2:
let shape1 = new Shape("circle", "blue");
let shape2 = new Shape("square", "red");

//3:
shape1.radius = 3;

//4:
shape2.edgeLength = 5;

//5:
shape2.calcArea = function (edgeLength) {
   return (edgeLength * edgeLength);
};

//6:
shape1.calcArea = function (radius) {
   return (Math.PI * radius * radius);
}

//7:
function calcShapeArea(shape) {
   if (shape.type === "circle") {
      return (Math.PI * shape.radius * shape.radius);
   } else if (shape.type === "square") {
      return (shape.edgeLength * shape.edgeLength);

   }
}

//8:
let circleArea = calcShapeArea(shape1);
let squareArea = calcShapeArea(shape2);

//10:
shape1.calcArea2 = function () {
   return (Math.PI * this.radius * this.radius);
}
//9:
shape2.calcArea2 = function () {
   return (this.edgeLength * this.edgeLength);
}
//11:
function calcShapeArea2(shape) {
   return (shape.calcArea2());
}
