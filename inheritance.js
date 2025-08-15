class Parent{
    great(){
        console.log("hello from parent");
    }
}
class Child extends Parent{
  sayhi(){
    console.log("hi from child");  
  }
}

const obj= new Child();
obj.great();
obj.sayhi();