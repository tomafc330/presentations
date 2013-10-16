test( "hello test", function() {
  ok( 1 == "1", "Passed!" );
});

test( "ok test", function() {
	ok( true, "true succeeds" );
	ok( "non-empty", "non-empty string succeeds" );

});

test( "Appends a div", function() {
	var $fixture = $( "#qunit-fixture" );

	$fixture.append( "<div>hello!</div>" );
	equal( $( "div", $fixture ).length, 1, "div added successfully!" );
});

test( "Appends a span", function() {
	var $fixture = $( "#qunit-fixture" );

	$fixture.append("<span>hello!</span>" );
	equal( $( "span", $fixture ).length, 1, "span added successfully!" );
});