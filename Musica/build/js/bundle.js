console.log('Listas!!!')
document.addEventListener('DOMContentLoaded',function(){
    crearGaleria();

});

function mostrarImagen(e){
    

    const id= parseInt(e.target.dataset.id);
    const imagen=document.createElement('IMG');
    imagen.src=`build/img/grande/${id}.webp`;
    const overlay=document.createElement('DIV');
    //agregando imagen a overlay
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    //creando y agregando el boton en el overlay
    const cerraImagen=document.createElement('P');
    cerraImagen.textContent='X';
    cerraImagen.classList.add('btn-cerrar');

    overlay.appendChild(cerraImagen);

    const body =document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');


    //Cerra imagen Cuando se Cierra
    cerraImagen.onclick=function(){
        overlay.remove();
        body.classList.remove('fijar-body');

    }

    //Cerrar imagen cuando de da click en overlay (fuera de la imagen)
    overlay.onclick=function(){
        overlay.remove();
        body.classList.remove('fijar-body');


    }
   


}

function crearGaleria(){
    const galeria=document.querySelector('.galeria-imagenes');
    for(let i=1;i<=12;i++){
        const imagen= document.createElement('IMG');
        imagen.src=`build/img/thumb/${i}.webp`;
        imagen.dataset.id=i;
        //Añadiendo la funcion de mostrarImagen
        imagen.onclick=mostrarImagen;
        const lista=document.createElement('LI');
        lista.appendChild(imagen);
        
        galeria.appendChild(lista);
    }
}
