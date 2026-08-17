async function cargarServicios() {
  const respuesta = await fetch("http://localhost:3000/api/servicios");
  const servicios = await respuesta.json();

  const contenedor = document.getElementById("catalogo-servicios"); // 1. agarro la "bandeja vacía"
  const select = document.getElementById("servicio");

  servicios.forEach((s) => {
    const tarjeta = `
      <div class="col-md-4">
        <div class="card-servicio">
          <h3 class="h5 mb-0">${s.servicio}</h3>
          <div class="duracion mb-3">${s.tiempo}</div>
          <div class="precio">$${s.precio}</div>
        </div>
      </div>
    `;
    contenedor.innerHTML += tarjeta; // 2. le voy agregando cada tarjeta, una por una

    const opcion = `<option value="${s.id}">${s.servicio} — $${s.precio}</option>`;
    select.innerHTML += opcion; // 2. se la agrego al select, sin borrar el placeholder
  });
}

const form = document.getElementById("form-turno");

async function cargarPeluqueros() {
  const respuesta = await fetch("http://localhost:3000/api/peluqueros"); // 1. hago la petición al servidor
  const peluqueros = await respuesta.json(); // 2. obtengo la respuesta en formato JSON

  const contenedor = document.getElementById("catalogo-peluqueros"); // 3. agarro la "bandeja vacía"
  const select = document.getElementById("peluquero"); // 4. agarro el select del formulario

// 5. recorro la lista de peluqueros
  peluqueros.forEach((p) => {
    const iniciales = p.nombre.split(' ').map(n => n[0]).join('').toUpperCase();
    const tarjeta = `
      <div class="col-md-4">
        <div class="card-peluquero p-4 d-flex align-items-center gap-3">
          <div class="avatar">${iniciales}</div>
          <div>
            <h3 class="h6 mb-1">${p.nombre}</h3>
            <div class="especialidad">${p.especialidad}</div>
          </div>
        </div>
      </div>
    `;
    // 6. le voy agregando cada tarjeta, una por una este bloque de html al contenedor de peluqueros
    contenedor.innerHTML += tarjeta;

    // 7. le voy agregando cada peluquero al select del formulario, sin borrar el placeholder)
    const opcion = `<option value="${p.id}">${p.nombre}</option>`;
    select.innerHTML += opcion;
  });
}

form.addEventListener("submit", async (evento) => {
  evento.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const servicioId = document.getElementById("servicio").value;
  const peluqueroId = document.getElementById("peluquero").value;
  const dia = document.getElementById("dia").value;
  const hora = document.getElementById("hora").value;

  const nuevoTurno = { nombre, email, servicioId, peluqueroId, dia, hora };

  try {
    const respuesta = await fetch("http://localhost:3000/api/turnos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevoTurno)
    });

    const resultado = await respuesta.json();
    alert(resultado.mensaje);

    form.reset(); // limpia el formulario después de confirmar
  } catch (error) {
    console.error("Error al agendar el turno:", error);
  }
});

cargarServicios();
cargarPeluqueros();
