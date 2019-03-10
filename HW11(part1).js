function Shape(sides, name){
	this.sides = sides; 
	this.name = name;
}

function Rectangle(height, width, sides, name){
	this.height = height; 
	this.width = width; 
	Shape.call(this, sides, name);
}

function Square(height, width, sides, name){
	Rectangle.call(this, height, width, sides, name); 
	if(this.height != this.width) this.height = this.width; 
}

Rectangle.prototype = Object.create(Shape.prototype); 
Square.prototype = Object.create(Rectangle.prototype);

Rectangle.prototype.area = function(){
	console.log(this.height * this.width); 
}

Rectangle.prototype.perimeter = function(){
	console.log((2*this.height)+(2*this.width)); 
}



var shape1 = new Shape(3, "jim"); 
var rect1 = new Rectangle(5, 4, 4, "tim"); 
var sq1 = new Square(5, 4, 4, "red"); 
var sq2 = new Square(3, 3, 4, "bob"); 

console.log(shape1.sides); 

console.log(rect1.height, rect1.width);
rect1.area();
rect1.perimeter();

console.log(sq1.height, sq1.width);
sq1.area();
sq1.perimeter();

console.log(sq2.height, sq2.width);
sq2.area();
sq2.perimeter();