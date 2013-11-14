(function () {
	var numClicks = 0;
	return function () {
		numClicks++;
	}
})();

//or

!function () {
	var numClicks = 0;
	return function () {
		numClicks++;
	}
}();

//module pattern - encapsulate 'private members'
var module = (function () {
	var counter = 100;

	return {
		add: function () {
			counter++;
		},
		subtract: function () {
			counter--;
		},
		getCount: function () {
			return counter;
		}
	};

})();

module.getCount();


//common pitfall
var div = document.getElementsByTagName("div");
for (var i = 0; i < div.length; i++) {
	div[i].addEventListener("click", function () {
		alert("div #" + i + " was clicked.");
	}, false);
}


//solution with IIFE
var div = document.getElementsByTagName("div");
for (var i = 0; i < div.length; i++) (function (i) {
	div[i].addEventListener("click", function () {
		alert("div #" + i + " was clicked.");
	}, false);
})(i);
