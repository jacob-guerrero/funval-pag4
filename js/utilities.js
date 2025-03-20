export const facturas = [
  {
    id: 1,
    numeroFactura: "F001",
    descripcion: "Compra de muebles de oficina",
    estado: "pagada",
    fecha: "12-10-2023",
  },
  {
    id: 2,
    numeroFactura: "F002",
    descripcion: "Suscripción a servicio de internet",
    estado: "pendiente",
    fecha: "05-02-2024",
  },
  {
    id: 3,
    numeroFactura: "F003",
    descripcion: "Reparación de equipo de cómputo",
    estado: "pagada",
    fecha: "18-03-2024",
  },
  {
    id: 4,
    numeroFactura: "F004",
    descripcion: "Compra de papelería",
    estado: "pendiente",
    fecha: "02-04-2024",
  },
  {
    id: 5,
    numeroFactura: "F005",
    descripcion: "Pago de servicios públicos",
    estado: "pagada",
    fecha: "11-04-2024",
  },
  {
    id: 6,
    numeroFactura: "F006",
    descripcion: "Mantenimiento de software",
    estado: "pendiente",
    fecha: "15-04-2024",
  },
  {
    id: 7,
    numeroFactura: "F007",
    descripcion: "Compra de licencias de software",
    estado: "pagada",
    fecha: "23-11-2023",
  },
  {
    id: 8,
    numeroFactura: "F008",
    descripcion: "Servicios de diseño gráfico",
    estado: "pendiente",
    fecha: "10-01-2024",
  },
  {
    id: 9,
    numeroFactura: "F009",
    descripcion: "Capacitación en seguridad informática",
    estado: "pagada",
    fecha: "27-02-2024",
  },
  {
    id: 10,
    numeroFactura: "F010",
    descripcion: "Compra de equipos de oficina",
    estado: "pendiente",
    fecha: "13-03-2024",
  },
  {
    id: 11,
    numeroFactura: "F011",
    descripcion: "Compra de material de oficina",
    estado: "pendiente",
    fecha: "18-04-2024",
  },
  {
    id: 12,
    numeroFactura: "F012",
    descripcion: "Pago de renta de local comercial",
    estado: "pagada",
    fecha: "23-04-2024",
  },
  {
    id: 13,
    numeroFactura: "F013",
    descripcion: "Servicios de limpieza",
    estado: "pendiente",
    fecha: "25-04-2024",
  },
  {
    id: 14,
    numeroFactura: "F014",
    descripcion: "Mantenimiento de equipos de aire acondicionado",
    estado: "pagada",
    fecha: "27-04-2024",
  },
  {
    id: 15,
    numeroFactura: "F015",
    descripcion: "Compra de insumos médicos",
    estado: "pendiente",
    fecha: "30-04-2024",
  },
];

export function todos(arr) {
  tablaBody.innerHTML = "";
  arr.forEach((item) => {
    fila(item);
  });
}
export function pendientes(arr) {
  tablaBody.innerHTML = "";
  arr.forEach((item) => {
    if (item.estado === "pendiente") fila(item);
  });
}
export function pagadas(arr) {
  tablaBody.innerHTML = "";
  arr.forEach((item) => {
    if (item.estado === "pagada") fila(item);
  });
}

export function fila(item) {
  const template_fila = `
        <tr>
            <td>${item.id}</td>
            <td>${item.numeroFactura}</td>
            <td>${item.descripcion}</td>
            <td class="${item.estado}">${item.estado}</td>
            <td>${item.fecha}</td>
            
            <td><button id="${item.id}" class="${
    item.estado === "pagada" ? "action" : ""
  }">Del</button></td>
        </tr>
    `;
  tablaBody.innerHTML += template_fila;
}

export function toggleModal() {
  const modal = document.querySelector("#modal");
  if (modal.classList.contains("hidden")) {
    modal.classList.remove("hidden");
    modal.classList.add("show");
  } else {
    modal.classList.remove("show");
    modal.classList.add("hidden");
  }
}
export function agregarFactura(e) {
  e.preventDefault();
  const form = new FormData(contactForm);
  const formFactura = form.get("factura");
  const formDescripcion = form.get("descripcion");
  const formEstado = form.get("estado");
  const formFecha = form.get("fecha");
  const formatedFecha = formFecha.split("-").reverse().join("-");
  const formObj = {
    id: facturas[facturas.length - 1].id + 1 || 1,
    numeroFactura: formFactura,
    descripcion: formDescripcion,
    estado: formEstado,
    fecha: formatedFecha,
  };

  facturas.push(formObj);
  todos(facturas);
  toggleModal();
  contactForm.reset();
}
export function eliminarFactura(e) {
  if (e.target.classList.contains("action")) {
    const btnId = +e.target.id;
    const eliminarFacturaId = facturas.findIndex((item) => item.id === btnId);
    facturas.splice(eliminarFacturaId, 1);
    todos(facturas);
  }
}
