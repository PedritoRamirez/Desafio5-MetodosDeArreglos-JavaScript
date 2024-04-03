const listaTareas = [
  {
    id: 1,
    titulo: "Jugar con el gato",
    estado: false,
  },
  {
    id: 2,
    titulo: "Hacer aseo",
    estado: true,
  },
  {
    id: 3,
    titulo: "Hacer las compras",
    estado: false,
  },
];

const agregarTareabox5 = document.querySelector(".box5");
let nuevaTareaInput = document.querySelector("#nuevaTarea");
const btnAgregar = document.querySelector("#butonAgre");
let contTareas = document.querySelector(".spaTot");
let tareasRealizadas = document.querySelector(".spaRea");
let cont = 0;
let checkbox = document.querySelector("#chek");

btnAgregar.addEventListener("click", () => {
  const nuevaTarea = nuevaTareaInput.value;
  let ultimoId = listaTareas[listaTareas.length - 1];
  listaTareas.push({ id: ultimoId.id + 1, titulo: nuevaTarea, estado: false });
  nuevaTareaInput.value = ""; /* Vaciamos el input y el div*/
  agregarTareabox5.innerHTML = "";
  contTareas.textContent = `${listaTareas.length}`;
  /* Actualizamos la información en el HTML */
  muestraTodo();
});

function muestraTodo() {
  listaTareas.forEach((tarea) => {
    const nuevoDiv = document.createElement("div");
    nuevoDiv.classList.add("box4");
    nuevoDiv.innerHTML = `<h3>${tarea.id}</h3>
                            <h3>${tarea.titulo}</h3>
                            <input type="checkbox" id="chek" onclick="modificar(${tarea.id})">
                            <button id="btnEli" onclick="borrar(${tarea.id})">X</button>`;
    agregarTareabox5.appendChild(nuevoDiv);
  });
  contTareas.textContent = `${listaTareas.length}`;
  tareasRealizadas.textContent = totRealizadas();
}
muestraTodo();

function borrar(id) {
  const index = listaTareas.findIndex((ele) => ele.id == id);
  listaTareas.splice(index, 1);
  nuevaTareaInput.value = ""; /* Vaciamos el input y el div*/
  agregarTareabox5.innerHTML = "";
  muestraTodo()  
}

function modificar(id) {
  // const forma = listaTareas.findIndex((ele) => ele.estado == estado)
  const estadoEncontrado = listaTareas.find((tarea) => tarea.id === id);
  if (estadoEncontrado.estado !== true) {
    estadoEncontrado.estado = true;
  } else {
    estadoEncontrado.estado = false;
  }
  agregarTareabox5.innerHTML = "";
  muestraTodo();
}

function totRealizadas(){
  const realizados = listaTareas.filter(listaTarea => listaTarea.estado === true);
  return realizados.length
}