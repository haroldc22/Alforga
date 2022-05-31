window.onload = function(){
    let btnContinuar = document.getElementById('btnContinuar');
    let password = document.getElementById('password').value;
    btnContinuar.addEventListener('click',(e)=>{
        e.preventDefault();
        let email = document.getElementById('usuario');
        let mostrar = document.getElementById('mostrar');
        mostrar.innerHTML += "<h2 style='display: inline'>Usuario: </h2>" + email.value + "<br />";
    })
}
let imges = [
 "../img/i.e_republica_de_honduras1.png",
 "/img/ie_honduras.jpg",
 "/img/escudo_institucion.gif"
];
let counter = -1;
let carousel = document.getElementById('carousel');
function LeftSlider(){
    if(counter > 0){
        counter-=1;
        carousel.innerHTML = `<img class="carousel" src=${imges[counter]}>`;
    }
}
function RightSlider() {
    if(counter < 2){
        counter+=1;
        carousel.innerHTML = `<img class="carousel" src=${imges[counter]}>`;
    }
}