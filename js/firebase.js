// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPDnUB_-0DoPGAZzHvHariIGuzO7dY448",
    authDomain: "alforga-rep.firebaseapp.com",
    projectId: "alforga-rep",
    storageBucket: "alforga-rep.appspot.com",
    messagingSenderId: "283854610757",
    appId: "1:283854610757:web:d248aee194ed7295135e2c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

/**
 * Save a New Task in Firestore
 * @param {string} fecha the title of the Task
 * @param {string} timeInicio the description of the Task
 * @param {string} timeFinal
 * @param {string} docente
 * @param {string} descripcion
 */
export const saveTask = (fecha, timeInicio, timeFinal, docente, descripcion) =>
  addDoc(collection(db, "Tasks"), { fecha, timeInicio, timeFinal, docente, descripcion });

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "Tasks"), callback);

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, "Task", id));

export const getTask = (id) => getDoc(doc(db, "Task", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "Task", id), newFields);

export const getTasks = () => getDocs(collection(db, "Task"));
