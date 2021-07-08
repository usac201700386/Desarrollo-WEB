//Async Await
function descargaNuevosClientes(){
    return new Promise(resolve=>{
        console.log('Descargando Clientes... espere...');

        setInterval(() => {
            console.log(' Se descargaron los clientes ...')
        }, 3600);
    });
    

}
function descargaPedidos(){
    return new Promise(resolve=>{
        console.log('Descargando Pedidos... espere...');

        setInterval(() => {
            console.log(' Los pedidios se han descargado ...')
        }, 3600);
    });
    

}
async function app(){
    try{
        // const clientes= await descargaNuevosClientes();
        // const peidos= descargaPedidos();
        // console.log(clientes)

        const resultado= await Promise.all([descargaNuevosClientes(),descargaPedidos()]);
        console.log(resultado[0])
        console.log(resultado[1])
    } catch(error){
    console.log('app lista');
}}

app();

console.log('estamos en paralelo');