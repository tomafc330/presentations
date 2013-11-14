//anonymous function 
var obj = {};
obj.whatever = function() {console.log('obj')};


//anonymous function but has a name
var obj2 = {};
obj2.eat = function tomEating() {console.log('hi')};

o.eat();
o.tomEating(); //error


//anonmyous function that has a name which is referenced within the function
var obj3 = {
    chirp: function signal(n) {
        return n > 1 ? signal(n - 1) + "-chirp" : "chirp";
    }
};

obj3.chirp(3);
