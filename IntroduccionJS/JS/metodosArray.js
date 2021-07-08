const meses =['Enero','Febrero','Marzo','Abril','Mayo','Diciembre',15]

const matriz=[
    {nombre: 'celular', precio:100},
    {nombre: 'tablet', precio:500},
    {nombre: 'compu', precio:900},
    {nombre: 'cecasalular', precio:500}
]

// Ejemplos de for

meses.forEach(function(mes){
    if(mes=='Marzo'){
        console.log('Marzo si existe')
    }
})
// Para Arreglos de una dimension
let resultado= meses.includes(13)

// Para arreglos de objetos
resultado= matriz.some(function(producto){
    return producto.nombre =='compu'
})
// Reduce
resultado= matriz.reduce(function(total, producto){
    return total + producto.precio
},0)// Esto debolvio la suma de cada precio dentro dela array

// Filter

resultado=matriz.filter(function(producto){
    return producto.precio >400
})// Retrona toda la fila que cumple esa condicon
console.log(resultado)