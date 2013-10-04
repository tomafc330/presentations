function Vehicle(color) {
    this.color = color;
}

// Instance methods
Vehicle.prototype = {
    go: function() {
        return this.color + " vehicle goes Vroom!";
    }
}

var vehicle = new Vehicle('Blue');
vehicle.go();

function Car() {};
Car.prototype = new Vehicle("Tan"); //important
Car.prototype.honk = function honk() { return "BEEP!" };

var car = new Car();
car.honk();             // "BEEP!"
car.go();               // "Tan vehicle goes Vroom!"
car.color;              // "tan"
car instanceof Car;     // true
car instanceof Vehicle; // true
