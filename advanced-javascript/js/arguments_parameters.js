function myAddFn(a, b, c) {
	console.log('Adding ' + a + ' + ' + b + ' + '+ c);

	console.log('Arguments is: ' + arguments);
	console.log('Arguments length: ' + arguments.length);
}

myAddFn(1); //ok
myAddFn(1, 2, 3, 4, 5); //also ok
