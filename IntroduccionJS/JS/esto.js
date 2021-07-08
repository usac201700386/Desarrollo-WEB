//this, utilizado como el self en la clase
const reservacion= {
    nombre: "Jose",
    apellido:"Campos",
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es ${this.total}`)
    }
}

console.log(reservacion.informacion());