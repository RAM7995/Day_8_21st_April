class Movie{
     constructor(title, studio, rating){
      this.title=title;
      this.studio=studio;
      this.rating=rating;

     }

}

var m1= new Movie("Schindler's List", "WB", "A");
console.log(m1);


/* Write a “person” class to hold all the details */

class Person{
     constructor(Name, Age, Place){
      this.Name=Name;
      this.Age=Age;
      this.Place=Place;

     }

}

var p1= new Person("Mohit", 45, "Hyderabad");
console.log(p1);
