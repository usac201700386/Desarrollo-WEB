
class Producto {
    constructor(nombre, precio){
        this.nombre=nombre;
        this.precio=precio;
    }

    formatear(){
        return `El prodcutor ${this.nombre} y cuesta ${this.precio}`
    }

}

const producto2 = new Producto('Monitor Curvo',800);//instancia
const producto3 = new Producto('Curvo',300);//instancia

//console.log(producto2.nombre)


//  Herencia

class Libro extends Producto{
    constructor(nombre,precio,id){
        super(nombre,precio);
        this.id=id;
    }
    formatear(){
        return `${super.formatear()}, id es: ${this.id}`
    }
}

const libro1 = new Libro('Cien Años de soledad',300,'adfadfa');//instancia

console.log(libro1.formatear())