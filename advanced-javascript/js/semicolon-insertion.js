//an example where 
//a function
function wtf() {
    console.log("this function doesn't actually return anything")
    console.log("So when you call it, it evaluates to undefined")
}

wtf()
(function(){
    // this pattern is known as an immediately invoking function definition
    // it is mostly used to introduce local state
    var foo = 1
})()



//an example where semi-colon insertion can lead to bad results 
return
{
    status: true
};
