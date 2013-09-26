function Shape() {
    this.x = 0;
    this.y = 0;
}

//superclass method
Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.info("Shape moved.");
};

// Rectangle - subclass
function Rectangle() {
    Shape.call(this); //call super constructor.
}


Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

rect instanceof Rectangle;
rect instanceof Shape;

rect.move(1, 1);

rect;


