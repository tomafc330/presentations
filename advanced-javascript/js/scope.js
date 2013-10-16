//example 1
if (true) {
    var x = 713;
};

console.log(x);

//example 2
var g = "global";
function go() { 
    var l = "local";
}
go();
l; // throws a reference error


//example 3
var aNumber = 100;

function tweak() {
    console.log('output is: ' + aNumber);
    if (true) {
        var aNumber = 123;  
    }
}

tweak();
