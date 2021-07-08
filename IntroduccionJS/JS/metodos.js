
const reproductor= {
    reproducir: function(id){
        console.log(`Reproduciendo cacnio el ID: ${id}`)
    },
    pausar: function(){
        console.log('Pausando.....')
    }
}

reproductor.borrarCancion=function(id){
    console.log(`Eliminando la Cancion: ${id}`)
 }

reproductor.reproducir(5);
reproductor.pausar();
reproductor.borrarCancion(150);