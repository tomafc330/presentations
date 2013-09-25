function Ninja(){
    this.swung = false;
    this.swingSword = function(){
        return !this.swung;
    };
}
Ninja.prototype.swingSword = function(){
    return this.swung;
};
var ninja = new Ninja();

ninja.swingSword(); // 


function MyArray() {}

MyArray.prototype = new Array();

var mine = new MyArray();

mine instanceof Array

MyArray.prototype


function User(first, last){
  this.name = first + " " + last;
}
var name = "Rukia";
var user = User("Ichigo", "Kurosaki"); 

name

