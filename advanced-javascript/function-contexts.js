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



elem.addEventListener("click",button.click.apply(button,"click"),false);
