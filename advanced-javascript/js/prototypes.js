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

ninja.constructor; // == the constructor we defined

ninja.swingSword();


