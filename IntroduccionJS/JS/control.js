// const puntaje=100;

// if(puntaje===1000){
//     console.log("Si, es correcto")
// }
// else{
//     console.log("no es igual")
// }

// const metodo= 'dinero';

// switch(metodo){
//     case 'targeta': console.log('Pagaste con targeta');
//         break;
//     case 'efectivo': console.log('Pagaste con efectivo');
//         break;
//     default:
//         console.log('Aun no has pagado');
//         break;
// }

// For Loop

// for(let i=1;i<=10;i++){
//     if(i%2==0){
//         console.log(`${i} es par`)}
//     else{ console.log('Es impar')}
// }

 const matriz=[
     {nombre: 'celular', precio:100},
     {nombre: 'tablet', precio:500},
     {nombre: 'compu', precio:900},
     {nombre: 'cecasalular', precio:500}
 ]

 //For Each: este solo es un iterador
const arreglo1=matriz.forEach(producto =>producto.nombre);

//map: utilizarlo cuando se crea una nueva variable o arreglo

const arreglo2 = matriz.map(producto =>producto.nombre);

console.log(arreglo1);
console.log(arreglo2);
// for(let i=0; i<matriz.length; i++){
//     console.log(matriz[i].nombre);
// }

// While Loop

// let i=5;
// while(i<10){
//     console.log(`${i} Menor que 10`);
//     i++;
// }
// Do while loop
// do{
//     console.log(`${i} probando`);
//     i++;
// } while(i<10)