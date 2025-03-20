import {
  facturas,
  todos,
  pendientes,
  pagadas,
  toggleModal,
  agregarFactura,
  eliminarFactura,
} from "./utilities.js";

// Secciones
const todosElement = document.querySelector("#todos");
const pendientesElement = document.querySelector("#pendientes");
const pagadasElement = document.querySelector("#pagada");

// Form
const addBtn = document.querySelector("#addContactBtn");
const closeModal = document.querySelector(".close");
const contactForm = document.querySelector("#contactForm");

// Tabla
const tablaBody = document.querySelector("#tablaBody");

// Eventos secciones
todosElement.addEventListener("click", () => todos(facturas));
pendientesElement.addEventListener("click", () => pendientes(facturas));
pagadasElement.addEventListener("click", () => pagadas(facturas));

// Eventos Form
addBtn.addEventListener("click", toggleModal);
closeModal.addEventListener("click", toggleModal);
contactForm.addEventListener("submit", agregarFactura);
tablaBody.addEventListener("click", eliminarFactura);

todos(facturas);
