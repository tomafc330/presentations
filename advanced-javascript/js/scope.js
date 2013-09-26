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
tweak();

function tweak() {
    document.write(aNumber);
    if (false) {
        var aNumber = 123;  
    }
}
