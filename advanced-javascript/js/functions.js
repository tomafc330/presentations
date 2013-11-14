function a() {
	return true;
} //created as a function statement in the global context
typeof a === 'function';
a();

//created as literals and assigned to variables
var b = function () {
	return true;
}; //can be assigned to a variable
typeof b === 'function';
b.name === ''; //anonymous

//passed as arguments to functions
function c(func) {
	func();
}

c(function () {
	console.log('muahaha')
});

//returned as values from functions
function d() {
	return c;
}

d()(function () {
	console.log('bwahahaha')
});

//contain functions within functions
function outer() {
	function inner() {
	};
	typeof inner === 'function';
}

typeof outer === 'function';
inner === undefined;


