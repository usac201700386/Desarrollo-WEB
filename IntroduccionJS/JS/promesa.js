const usuarioAutenticado = new Promise((resolve,reject)=>{
    const auth=false;
    if(auth){
        resolve('Usiario Autenticado');
    }
    else{
        reject("No se puedo autenticar");
    }
});

usuarioAutenticado
    .then((resolve)=>console.log(resolve))
    .catch((reject)=>console.log(reject))



//Valores de los promises
// Pending: No se ha cumplido, pero no se ha rechazado
// Fullfield: Ya se cumplio 
// Reject: No se cumplio