//Example #1
function greet() {
	this.hi = 'hello';
}

greet();
hi === 'hello' //hi is on the global context


//Example #2 -this context in an object.
var obj = {
	greet: greet
}

obj.greet();

obj.hi === 'hello'; //hi is on the object


//Example 3: this context within a constructor
function Greeter() {
	this.newGreet = function () {
		this.foo = 'bar';
	}

	this.greet = greet;
}

var greeter = new Greeter();

greeter.greet();
greeter.hi === 'hello'

greeter.newGreet();
greeter.foo === 'bar'


