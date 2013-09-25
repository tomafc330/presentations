function Ninja() {
    var slices = 0;
    this.getSlices = function(){ 
        return slices; 
    }; 
}
this.slice = function(){
    slices++;
};
var ninja = new Ninja();
ninja.slice();

ninja.getSlices() == 1;
ninja.slices === undefined;




//example #2

jQuery('#testButton').click(function(){
    var elem$ = jQuery("div");
    elem$.html("Loading...");
    jQuery.ajax({
        url: "test.html",
        success: function(html){
            assert(elem$,
                "We can see elem$, via the closure for this callback.");
            elem$.html(html);
        }
    });
});
