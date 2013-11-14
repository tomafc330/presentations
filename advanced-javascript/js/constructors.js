function User(first, last){
      this.name = first + " " + last;
}
var user = User("Ichigo", "Kurosaki");
user.name === undefined;

var user2 = new User("Matt", "Deharlais");
user2.name === "Matt Deharlais";
