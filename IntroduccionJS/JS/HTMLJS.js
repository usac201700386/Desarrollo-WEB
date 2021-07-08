const boton=document.querySelector('#boton');

boton.addEventListener('click', function(){
    Notification.requestPermission()
        .then( resultado=> console.log(`La respuesta fue: ${resultado}`) )
});

if(Notification.permission =='granted'){
    new Notification('Esta es una notificacion',{
        body:'texto de la notiifacion'
    })
}