function greet() {
    this.hi = 'hello';
}

greet();

hi;


//another example of the this context
var obj = {
    greet: greet
}

obj.greet();

obj.hi;


//yet another example of the this context
function Greeter() {}

Greeter.prototype.greet = function() {
    this.foo = 'bar';
}

var greeter = new Greeter();
greeter.greet();

greeter.foo




<button id="test">Click Me!</button>
<script>
var button = {
    clicked: false,
    click: function(){
        this.clicked = true;
    }
};
var elem = document.getElementById("test");
elem.addEventListener("click", button.click, false);
</script>




//instead
elem.addEventListener("click",button.click.apply(button,"click"),false);
