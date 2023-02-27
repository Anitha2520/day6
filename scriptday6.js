//1.https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
class Movie{
  
    constructor(title,studio,rating){
  
      this.title=title;
      this.studio=studio;
      if(rating==''){
        this.rating = "PG";  
      }else{
        this.rating = rating;
      }
      
    }
    getPG(filmarray){
        return filmarray.filter((ele)=>ele.rating==="PG13");
    }
  }
  
  var film=new Movie("Casino Royale","Eon Productions","PG13");
  var filmlistarray = [{title:"No Time to Die", studio:"Eon Productions", rating:"PG13"},{title:"Dr.No", studio:"Eon Productions", rating:"PG"},{title:"Till", studio:"Eon Productions", rating:"PG13"}];
  console.log(film.getPG(filmlistarray));
  
    //2. 
    
    
    class Circle{
        constructor(radius,color){
            this.radius = radius;
            this.color  = color;
        }
        getArea(){
            return 3.14*(Math.pow(this.radius,2));
            
        }
        getCircumference(){
            return 2*3.14*this.radius;
        }
        getColor(){
            return `color is ${this.color}`;
        }
        setColor(color){
            return `new color is {$color}`;
            
        }
    }
    var c1 = new Circle(1.0,"red");
    console.log(c1.getArea());
    console.log(c1.getCircumference());
    console.log(c1.getColor());
    console.log(c1.setColor("black"));
    
    //3.Write a “person” class to hold all the details.
  
    class Person{
   
      constructor(name,age,occupation,address,city,pincode){
        this.name=name;
        this.age = age;
        this.occupation = occupation;
        this.address = address;
        this.city = city;
        this.pincode=pincode;
        
      }
    
       printdetails(){
          return `I am  ${this.name}. My age is ${this.age} and doing ${this.occupation} and my city is ${this.city}`;
      }
    }
    
  var p1=new Person("Anitha",33,"business","kovur","chennai",600128);
  console.log(p1.printdetails());
  //4.write a class to calculate the uber price.
    
   class Uber{
      constructor(basefare,cities,uberrates){ 
          this.basefare = basefare;
          this.cities = cities;
          this.uberrates = uberrates;
      
      }
      printfaredetaila(customername,customercity){
          for(var i=0;i<this.cities.length;i++){
              if(this.cities[i]==customercity){
                  this.totalfare = this.basefare*uberrates[i];
              }
              
          }
         return  `Dear ${customername}. your city is ${customercity} and your total fare is ${this.totalfare}`;
      }
  
   }
   var basefare = 5;
   var cities = ["porur", "kovur", "chennai"];
   var uberrates = [100, 200, 300];
   var u1 = new Uber(basefare,cities,uberrates);
   
   var cname = "Anitha";
   var ccity = "kovur";
   
   console.log(u1.printfaredetaila(cname,ccity));
  
  