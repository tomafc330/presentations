//anonymous function 
var obj = {};
obj.whatever = function() {console.log('obj')};


//anonymous function but has a name
var obj2 = {};
obj2.whatever = function tom() {console.log('hi')};

o.whatever();
o.tom(); //error


//anonmyous function that has a name which is referenced within the function
var ninja = {
    chirp: function signal(n) {
        return n > 1 ? signal(n - 1) + "-chirp" : "chirp";
    }
};

ninja.chirp(3);
