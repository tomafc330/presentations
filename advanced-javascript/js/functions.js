function a() { return true; } //exist in the global context

typeof a === 'function'; 
a.name === 'isNimble';

a();

//assigned to variables
var b = function(){ return true; }; //can be assigned to a variable

typeof b === 'function';
b.name === ''; //anonymous

//passed as arguments to functions
function c(func) {
    func();
}

c(function() {console.log('muahaha')});

//returned as values from functions
function d() {
    return c;
}

d()(function() { console.log('bwahahaha') });

//contain functions within functions
function outer(){ 
    typeof inner === 'function';

    function inner(){};

    typeof inner === 'function';
}

typeof outer === 'function';

inner === undefined;


