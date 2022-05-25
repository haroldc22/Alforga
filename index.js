window.onload = function(){
    let btnContinuar = document.getElementById('btnContinuar');
    let password = document.getElementById('password').value;
    btnContinuar.addEventListener('click',(e)=>{
        e.preventDefault();
        let email = document.getElementById('usuario');
        let mostrar = document.getElementById('mostrar');
        mostrar.innerHTML += "<h2 style='display: inline'>Usuario: </h2>" + email.value + <br />;
    })
}