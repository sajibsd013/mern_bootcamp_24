// const name = "Rahim"
// let age = 99

// I'm Rahim. I'm 99 years old
// console.log(`I'm ${name}. I'm ${age} years old`);


// const students = {
//     name: "Korim",
//     id: 1901,
//     dept: "CSE",
//     phone: "0177xxxxxxx",
//     msg: function () {
//         return `My name is ${this.name}`;
//     }

// }

// // const id = students.id
// // const dept = students.dept

// const {id,dept} = students

// let myMsg = students.msg()
// console.log(id, dept,myMsg);


// class Students {
//     constructor(name, id,dept, phone) {
//       this.name = name;
//       this.id = id;
//       this.dept = dept
//       this.phone = phone
//     }

// }

// let korim = new Students("Korim", "190103020013","CSE","017xxxxxxx")
// let rohim = new Students("Rohim", "190103020014","CSE","017xxxxxxx")


// console.log(korim);

// class Car {
//     constructor(color,brand){
//         this.color = color
//         this.brand = brand
//     }
//     info(){
//         console.log(`This is my car, Brand: ${this.brand} & Color ${this.color}`, );
//     }
//     run(){
//         console.log("car is runnig");
//     }

// }

// class Bus extends Car{
//     constructor(){

//     }
// }

// let bus = new Car("black", "ABC")
// bus.info()
// bus.run()

// console.log(bus);

class Car {
    constructor(color, brand) {
      this.color = color;
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(color, brand, mod) {
      super(color, brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
    static hello() {
        return "Hello!!";
    }
  }
  
  let myCar = new Model("black", "Ford", "Mustang");

//   console.log(myCar.show());
//   console.log(myCar.present());
  console.log(Model.hello());
  
//   document.getElementById("demo").innerHTML = myCar.show();
