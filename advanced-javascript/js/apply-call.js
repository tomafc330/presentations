function juggle() {
    var result = 0; 
    for (var n = 0; n < arguments.length; n++) { 
        result += arguments[n]; 
    } 
    this.result = result; 
} 

juggle(1,2);
result === 3; //notice 


var clown = {};
juggle.apply(clown,[1,2,3,4]);
clown.result === 10;


var krusty = {};
juggle.call(krusty,5,6,7,8);
krusty.result === 26;
