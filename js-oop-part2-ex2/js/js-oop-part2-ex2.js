class Point {
   constructor(x, y) {
      this.x = x;
      this.y = y;
   }

   plus(otherPoint) {
      return (new Point(this.x + otherPoint.x, this.y + otherPoint.y));
   }

}

let myPoint = new Point(2, 3);
let yourPoint = new Point(3, 2);
console.log(myPoint.plus(yourPoint));

let myPoint2 = new Point(-4, -4);
let yourPoint2 = new Point(8, 8);
console.log(myPoint2.plus(yourPoint2));