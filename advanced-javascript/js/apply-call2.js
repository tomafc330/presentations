//old way:
function forEach(collection) {
	for (var n = 0; n < collection.length; n++) {
		/* do something to collection[n] */
	}
}

//new way:
function forEachUsingCall(list, callback) {
	for (var n = 0; n < list.length; n++) {
		callback.call(list[n], n);
	}
}

var list = ['shuriken', 'katana', 'nunchucks'];
forEachUsingCall(list,
	function (index) {
		assert(this == list[index],
			"Got the expected value of " + list[index]);
	});
