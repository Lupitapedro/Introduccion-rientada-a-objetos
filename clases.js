// class rectangulo{
//     constructor (height, width){
//         this.height =height;
//         this.width=width;
//     }

// //getter
// get area(){
// return this.calcArea();
// }
// //metodo
// calcArea (){
//     return this.height*this.width;
//  }
// }
// const square = new rectangulo (10,10);
// const rectangulo1 = new rectangulo (5,10);
// const rectangulo2 = new rectangulo (15,10);

// console.log(square.area);
// console.log(rectangulo1.area);
// console.log(rectangulo2.area);


// class persona {
//     constructor(name, year){
//       this.name = name;
//       this.year = year;
//     }
//   }
  
//   const persona1 = new persona("nombre",1987);
//   const persona2 = new persona("Angeles", 2000);
  
//   console.log(persona1);
//   console.log(persona2);
  
//   document.getElementById("id").innerHTML=persona1;

// class padre {
//     constructor(apellido) {

//         this.apellidoPaterno = apellido;
//     }
// }

// class hijo extends padre { //clase es una plantilla
//     constructor(nombre, apellido) {
//         super(apellido)   //
//         this.nombrehijo = nombre;
//     }
//     registro() {
//         return "el nombre del hijo sera" + this.nombrehijo + " " + this.apellidoPaterno;
//     }
// }

// let Hijo1 = new hijo("Mario", "Valdes");
// let Hijo2 = new hijo("Maria", "Valdes");
// document.getElementById("id").innerHTML = Hijo1.registro();
// document.getElementById("id2").innerHTML = Hijo2.registro();

let apellido= prompt("apellido?");
let nombre1= prompt("Nombre hijo 1");
let nombre2=prompt("Nombre hijo2");


class padre {
    constructor(apellido) {

        this.apellidoPaterno = apellido;
    }
}

class hijo extends padre { //clase es una plantilla
    constructor(nombre, apellido) {
        super(apellido)   //
        this.nombrehijo = nombre;
    }
    registro() {
        return "el nombre del hijo sera" + this.nombrehijo + " " + this.apellidoPaterno;
    }
}

let Hijo1=  new hijo(nombre1,apellido);
let Hijo2=  new hijo(nombre2,apellido);

document.getElementById("id").innerHTML = Hijo1.registro();
document.getElementById("id2").innerHTML = Hijo2.registro();