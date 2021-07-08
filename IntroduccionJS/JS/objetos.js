// Objeto Literal
const producto ={
    nombre: 'Tablet',
    precio:50
}

// Objeto Constructor

function Producto(nombre,precio){
    this.nombre= nombre;
    this.precio= precio; 

}

// Crear funciones que funcionan para un objeto especifico
Producto.prototype.formato=function() {
    return `El prodcutor ${this.nombre} y cuesta ${this.precio}`
}

const producto2 = new Producto('Monitor Curvo',800);//instancia
const producto3 = new Producto('Curvo',300);//instancia



console.log(producto2.formato())