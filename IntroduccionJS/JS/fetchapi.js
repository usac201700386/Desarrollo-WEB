async function obtenerEmpleados(){
    const archivo='/JS/empleados.json';
    // fetch(archivo)
    //     .then(resultado =>{
    //         console.log(resultado);
    //         return resultado.json();
    //     })
    //     .then( datos =>{
    //         //console.log(datos)
    //         const {empleados}=datos;
    //         //console.log(empleados);

    //         empleados.forEach(element => {
    //             console.log(element.nombre,element.id);

    //          });
    //     })

    const resultado= await fetch(archivo);
    const datos= await resultado.json();
    console.log(datos.empleados[0].id);
}

obtenerEmpleados();