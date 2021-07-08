/*--------------------------------------Eventos --------------------------------------- */

/*
// querySelector----> retorna de 0 a 1 elementos
const heading= document.querySelector('.header__texto h2');
//console.log(heading)
heading.textContent='Nuevo titulo';

// querySelectorAll
const enlaces= document.querySelectorAll('.navegacion a');
// console.log(enlaces[0]);
enlaces[0].textContent='Nuevo texto para enlace';
//enlaces[0].href = 'http://www.google.com';
enlaces[0].classList.add('nueva-clase');
//enlaces[0].classList.remove('navegacion__enlace');

//-----------------------------------getElementById-----------------------------------------
// Al igual que los anteriores, buscar por Id unicamente porque debemos especificar el ID de cada elemento
//const heading2= document.getElementById();
//--------------------------------------------------------------------------------------------

// Creando codigo HTMl con JS

const nuevoEnlace=document.createElement('A');

//Agregar el href
nuevoEnlace.href='nuevo-enlace.html';
//Agregar Texto
nuevoEnlace.textContent='Nuevo Enlace';
//Agregar clase
nuevoEnlace.classList.add('navegacion__enlace');
// Agregarlo al codigo de HTML

const navegacion=document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace)


//-------------------------------------------------Creando EVENTOs------------------------------------------ 
console.log(1);

window.addEventListener('load', function(){// Load espera a que el JS y los aarchivos que depende del HTML ese listos
    console.log(2);
})

window.onload = function(){
    console.log(3)
}

window.addEventListener('DOMContentLoaded', function(){// Solo espera que carguye el HTML, pero no espera CSS o imagenes, etc
    console.log(4);
})


// ONSCROLL

window.onscroll=function(){
    console.log('Estoy scroleando...')
}

*/

//-------------------- Seleccionando elementos y asociales un evento -------------------------
/*
const btnEnviar= document.querySelector('.boton--primario');
btnEnviar.addEventListener('click',function(evento){
    console.log(evento);
    evento.preventDefault();// esto es utili para que no ejecute la accion por defecto, en este caso el fomrulario ya este recarga la pagina
    console.log('enviando formulario')
})
*/

//------------------- EVENTOS DE LOS IMPUTS Y TEXTS AREA


const datos={
    nombre:'',
    email:'',
    mensaje:''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario= document.querySelector('.formulario');


function leerTexto(data){
    datos[data.target.id]=data.target.value;
    //console.log(datos)
}
function ErrorValidacion(mensaje){
    const comprobar= document.querySelector('.error');
    if (comprobar==null){

    const error= document.createElement('P');
    error.textContent=mensaje;
    error.classList.add('error');
    formulario.appendChild(error);

    //Borrando mensjae en 5 segundos
    setTimeout(()=>{
        error.remove();
    },5000)}
}
function mostrarMensaje(mensaje){
    const comprobar= document.querySelector('.correcto');
    if (comprobar==null){
    const msj= document.createElement('P');
    msj.textContent=mensaje;
    msj.classList.add('correcto');
    formulario.appendChild(msj);

    //Borrando mensjae en 5 segundos
    setTimeout(()=>{
        msj.remove();
    },3000)}
}
datos.nombre=nombre.addEventListener('input',leerTexto)
datos.mensaje=email.addEventListener('input',leerTexto)
datos.mensaje=mensaje.addEventListener('input',leerTexto)

//El evento de Submit
formulario.addEventListener('submit',function(evento){
    evento.preventDefault();

    // Validar el Formulario

    const {nombre, email, mensaje}=datos;
    
    if(nombre==''||email==''||mensaje==''){
        ErrorValidacion('Uno de los campos esta vacio');
        return ;
    }

    // Enviar el formulario
    
    mostrarMensaje('El mensaje se envio correctamente')
})