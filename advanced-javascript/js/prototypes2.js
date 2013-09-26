var Vehicle = function Vehicle(color) {
    this.color = color;
}
// Instance methods
Vehicle.prototype = {
    go: function go() {
        return "Vroom!";
    }
}

var Car = function Car() {};
Car.prototype = new Vehicle("tan"); //important
Car.prototype.honk = function honk() { return "BEEP!" };

var car = new Car();
car.honk();             // "BEEP!"
car.go();               // "Vroom!"
car.color;              // "tan"
car instanceof Car;     // true
car instanceof Vehicle; // true
      
