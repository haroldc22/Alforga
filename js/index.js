import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth, saveTask } from "./firebase.js";

const taskForm = document.getElementById("task-form");
const MostrarHoras = document.getElementById("Mostrar");
const btnContinuar = document.getElementById("btnGuardar");

let editStatus = false;
let id = "";
window.addEventListener("DOMContentLoaded", async (e) => {

btnContinuar.addEventListener("click", async (e) => {
  e.preventDefault();
  const nombre = taskForm["user"]
  const gmail = taskForm["email"]
  const apellido = taskForm["apellido"]
  const grado = taskForm['Grado']
  const ti = taskForm["id"]
  const contraseña = taskForm["contra"]
  try {
    if (!editStatus) {
      await saveTask(nombre.value, apellido.value, gmail.value, grado.value, ti.value);
      const userCredential = await createUserWithEmailAndPassword(auth, gmail.value, contraseña.value)
      .then((usersCredential)=>{
        alert("Usuario Registrado")
      })
      console.log(userCredential)
      editStatus = false;
      id = "";
      taskForm["btn-task-form"].innerText = "Guardar";
    }

    taskForm.reset();
  } catch (error) {
    console.log(error);
  }
});
});
