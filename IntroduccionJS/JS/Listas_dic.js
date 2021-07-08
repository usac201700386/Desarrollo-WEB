"use strict";// correr js en modo stricto

const producto ={
    par1:"hola",
    par2:100,
    par3:false
}
const pesos ={
    par1:"adios",
    par2:-1000,
    par3:true
} 

const nuevoProducto ={...producto,...pesos}