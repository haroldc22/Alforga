import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth, onGetTasks } from "./firebase.js";

window.onload = () =>{
    let email = document.getElementById('user');
    let password = document.getElementById('contraseña')
    let mostrarDatos = document.getElementById('Mostrar');
    let boton = document.getElementById('btnContinuar')
    let rol = document.getElementById('rol')
    alert(rol.value)
    boton.addEventListener("click", async(e)=>{
        e.preventDefault()
        const userCredentials = await signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredentials)=>{
            alert("Ingresando")
            onGetTasks((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    if(doc.data().gmail == email.value){
                        document.cookie = `nombre=${doc.data().nombre};`;
                        document.cookie = `apellido=${doc.data().apellido};`;
                        document.cookie = `email=${doc.data().gmail};`;
                        document.cookie = `grado=${doc.data().grado};`;
                        document.cookie = `ti=${doc.data().ti};`;
                        alert(rol.value)
                       if(rol.value == "docente")
                            window.location.href = "/pages/perfildocente.html"
                        else if(rol.value == "estudiante")
                            window.location.href = "/pages/perfilestudiante.html"
                        
                    }
                })
            })
        })
        .catch((error)=>{
            alert("Se produjo un error")
            console.log(error);
        })
})
}


    