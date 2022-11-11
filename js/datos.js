window.onload = iniciar;
// crear una lista vacia para guardar Datos
let Datos = [];
let dato;
// funcion iniciar para ejecutar el js y que pida datos
function iniciar(){
    // nombramos las variables de cada uno de los datos que necesitamos y los obtenemos con getElementById
    const Dato1 = document.getElementById('name');
    const Dato2 = document.getElementById('age');
    const Dato3 = document.getElementById('city');
    const Dato4 = document.getElementById('interes');

    const boton1 = document.getElementById('btnComplet');
// crear evento click 
    boton1.addEventListener('click', traerDato)
    
    
}


// nueva funcion para que una vez extraido los datos , pegarlos en el html
function traerDato(){
for(let i = 0; i <4; i++){
        Datos.push(prompt('Ingrese Datos:'));
    }
    
    
    document.getElementById('name').innerText = Datos[0];
    document.getElementById('age').innerText = Datos[1];
    document.getElementById('city').innerText = Datos[2];
    document.getElementById('interes').innerText = Datos[3];

}
