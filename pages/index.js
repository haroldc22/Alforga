window.onload = iniciar;

function iniciar() {
    var btnContinuar = document.getElementById("btnContinuar");
    btnContinuar.addEventListener("click", btnMostrar);

}
function btnMostrar(){
    alert("Haz cliqueado el boton")
}