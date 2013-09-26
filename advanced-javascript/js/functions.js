//created via literals
function isNimble() { return true; } //exist in the global context

typeof isNimble === 'function'; 
isNimble.name === 'isNimble';

//assigned to variables
var canFly = function(){ return true; }; //can be assigned to a variable

canFly === 'function';
canFly.name === ''; //anonymous

//passed as arguments to functions
function callOther(func) {
    func();
}

callOther(function() {console.log('muahaha')});

//returned as values from functions
function returnFunc() {
    return callOther;
}

returnFunc()(function() { console.log('bwahahaha') });

//contain functions within functions
function outer(){ 
    typeof inner === 'function';

    function inner(){};

    typeof inner === 'function';
}

typeof outer === 'function';

inner === undefined;
