// Arreglos en JS

const matriz =[10,'hola',30,40,50]
const matriz2x2=[[1,2,3,4,5],['A','B','C']]
const matriz3x3=[[1,2,3,4,5],['A','B','C','D','E'],['A','B','C','D','E']]
const matriz3d=[[[10,11],['hola','adios']],[3,4],[['igual','python'],6]]


console.table(matriz3d)
console.log(matriz3d[0][0][1])

//ciclo for
matriz3d.forEach(function(pos){
    console.log(pos)
})
    