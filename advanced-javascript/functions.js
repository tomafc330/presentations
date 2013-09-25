function isNimble(){ return true; } 

window.isNimble === 'function'; 
isNimble.name === 'isNimble';

var canFly = function(){ return true; }; 

window.canFly === 'function';
canFly.name === ''; 




function outer(){ 
    typeof inner === 'function';

    function inner(){};

    typeof inner === 'function';
}

inner === undefined;
