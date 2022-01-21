// const arreglo =["Maria", "Pedro",26];

// console.log(arreglo[1]);

// let objeto ={
//     nombre:"Maria",
//     apeido:"Pedro",
//     edad:26,

// }
// console.log(objeto.nombre);

//acceder alas propiedades del objeto

// let objeto ={
//     nombre:"Maria",
//     apeido:{
//         paterno:"pedro",
//         materno:"ignacio",
//     }
    
//    // edad:26,

// }
// console.log(objeto.apeido.materno);

// let objeto ={
//     nombre:"Maria",
//     apeido:{
//         paterno:"pedro",
//         materno:"ignacio",
//     } 
//    edad:26

// }
// console.log(objeto.apeido["materno"]);

//  const arreglo =["Maria", "Pedro",26];
// let objeto ={
//     nombre:"Maria",
//     apellido:{
//         paterno:"pedro",
//         materno:"ignacio"} ,
//    edad:26,
//    nombreCompleto: function(){
//        return this.nombre +" "+ this.apellido.paterno;
//    }

// }
// console.log(objeto.nombreCompleto());


// const arreglo =["Maria", "Pedro",26];
// let objeto ={
//     nombre:"Maria",
//     apellido:{
//         paterno:"pedro",
//         materno:"ignacio"} ,
//    edad:26,
//    nombreCompleto: function(){
//        return this.nombre +" "+ this.apellido.paterno;
//    }

// }
// document.getElementById("boquita").innerHTML=objeto.nombreCompleto();

//practica


let articulo ={
    nombre:"Dona",
    descripcion:"chocolate con chispas gluten free",
    precio: 50,
    cantidad:5,
    fotografia:"https://www.nestleprofessional.com.mx/sites/default/files/styles/recipe/public/media/mini_donas_crunch.jpg?itok=xmWJdmGc"
}

let venta ={
    productos:{pan:"dona",},
    total: articulo.cantidad * articulo.precio,
    idCliente:1515,
    emailCliente:"idCliente1515@gmail.com"
}

console.log("Adquirió "+ articulo.cantidad + " "+articulo.nombre + " vendida a cliente no. "+ venta.idCliente + " total a pagar "+ venta.total);
