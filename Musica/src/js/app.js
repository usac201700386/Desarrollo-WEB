document.addEventListener('DOMContentLoaded', function(){
    scrollNav();
    navegacionFija();
    

});

function navegacionFija(){
    
    const barra = document.querySelector('.header');
    //Elemento a observar
      
    //Registrar el Intersection Observer
    const observer = new IntersectionObserver( function (entries){
        if (entries[0].isIntersecting){
            barra.classList.remove('fijo');
            console.log('visible');
        }
        else{
            barra.classList.add('fijo');
            console.log('no visible');   
        }
    });
    

    observer.observe(document.querySelector('.contenido__info')); 
}


function scrollNav(){
    const enlaces= document.querySelectorAll('.navegacion-principal a');
    
    enlaces.forEach( function(enlace){
        enlace.addEventListener('click',function(evento){
            evento.preventDefault();
            
            console.log(evento.target.attributes.href.value);
            const seccion=document.querySelector(evento.target.attributes.href.value);
            seccion.scrollIntoView({
                behavior: 'smooth',
            });



        });
    });
}

