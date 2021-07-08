// function nombre(){
//     console.log(10*10);
// }

// nombre()

// const sumar= function(){
//     console.log(3*3);
// }
// sumar();

// //IIFE 

// (function (){
//     console.log('Esto es una funcion')
// })();

function sumar(num1=3, num2=4){ // Ingresar lo parametros
    console.log(num1+num2);
}

sumar(6+6);// Estos numeros son los argumentos es decir los valores reales

const sumar2=function(n1,n2){
    return n1+n2;

}

resultado=sumar2(15,5);

console.log(resultado)