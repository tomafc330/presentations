function User(first, last){
      this.name = first + " " + last;
}
var name = "Rukia";
var user = User("Ichigo", "Kurosaki"); 

user.name
name


user = new User("Ichigo", "Kurosaki");
user.name
