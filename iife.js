(function(){
    var numClicks = 0;
    return function() {
        numClicks++;   
    }
})();

//or

!function(){ /* code */ }();

//module pattern




//common pitfall
var div = document.getElementsByTagName("div");
for (var i = 0; i < div.length; i++) {
    div[i].addEventListener("click", function() {
        alert("div #" + i + " was clicked.");
    }, false);
}

//solution with IIFE
var div = document.getElementsByTagName("div");
for (var i = 0; i < div.length; i++) (function(i){
    div[i].addEventListener("click", function(){
        alert("div #" + i + " was clicked.");
    }, false);
})(i);
