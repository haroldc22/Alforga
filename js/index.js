import {
    onGetTasks,
    saveTask,
    deleteTask,
    getTask,
    updateTask,
    getTasks,
  } from "./firebase.js";
  
  const taskForm = document.getElementById("task-form");
  const MostrarHoras = document.getElementById("mostrarHoras");
  const btnContinuar = document.getElementById("btnEnviar");
  

  let editStatus = false;
  let id = "";
  window.addEventListener("DOMContentLoaded", async (e) => {
    onGetTasks((querySnapshot) => {
      MostrarHoras.innerHTML = "";
  
      querySnapshot.forEach((doc) => {
        const task = doc.data();
        console.log(task.docente);
        MostrarHoras.innerHTML += `
      <table class="ta">
        <td class="fecha" >${task.fecha}</td>
        <td class="tInicio">${task.timeInicio}</td>
        <td class="tFinal">${task.timeFinal}</td>
        <td class="docente">${task.docente}</td>
        <td class="descript">${task.descripcion}</td> 
      <div class="botones">
      <div id="borrar">
      
      <div id="editar">
        
      </div>
      </div>`;
      });
      const btnsDelete = MostrarHoras.querySelectorAll(".delete");
      btnsDelete.forEach((btn) =>
        btn.addEventListener("click", async ({ target: { dataset } }) => {
          try {
            await deleteTask(dataset.id);
          } catch (error) {
            
          }
        })
      );
  
      const btnsEdit = MostrarHoras.querySelectorAll("edit");
      btnsEdit.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          try {
            const doc = await getTask(e.target.dataset.id);
            const task = doc.data();
            taskForm["task.fecha"].value = task.fecha;
            taskForm["task.timeInicio"].value = task.timeInicio;
            taskForm["task.timeFinal"].value = task.timeFinal;
            taskForm["task.docente"].value = task.docente;
            taskForm["task.descripcion"].value = task.descripcion;
  
            editStatus = true;
            id = doc.id;
            taskForm["btn-task-form"].innerText = "Update";
          } catch (error) {
            
          }
        });
      });
    });
  });
  
  btnContinuar.addEventListener("click", async (e) => {
    e.preventDefault();
    alert(3)
    const fecha = taskForm["fecha"]
    const timeInicio = taskForm["timeInicio"]
    const timeFinal = taskForm["timeFinal"]
    const docente = taskForm["docente"]
    const descripcion = taskForm["descripcion"]
  
    try {
      if (!editStatus) {
        console.log(fecha.value, timeInicio.value, timeFinal.value, docente.value, descripcion.value);
        await saveTask(fecha.value, timeInicio.value, timeFinal.value, docente.value, descripcion.value);
      } else {
        await updateTask(id, {
          fecha: fecha.value,
          timeInicio: timeInicio.value,
          timeFinal: timeFinal.value,
          docente: docente.value,
          descripcion: descripcion.value
        });
  
        editStatus = false;
        id = "";
        taskForm["btn-task-form"].innerText = "Guardar";
      }
  
      taskForm.reset();
    } catch (error) {
      console.log(error);
    }
  });
  