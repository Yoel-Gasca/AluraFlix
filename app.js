// Arreglo para almacenar las películas
const listadoDePeliculas = [];

// Función para agregar una película
function agregarPelicula() {
  // Obtén el valor del input con id "pelicula"
  const urlPeliFavorita = document.getElementById("pelicula").value;

  if (urlPeliFavorita.endsWith(".jpg")) {
    // Si la URL termina con ".jpg", pide información adicional
    const infoPelicula = {
      imagen: urlPeliFavorita,
      nombre: prompt("Ingresa el Nombre de la Película"),
      trailer: prompt("Ingrese el Trailer de la Película")
    };
    
    // Agrega la información de la película al arreglo
    listadoDePeliculas.push(infoPelicula);

    // Limpia el input
    document.getElementById("pelicula").value = "";

    // Muestra las películas actualizadas
    verPeliculas();
  } else {
    // Si la URL no termina con ".jpg", muestra una alerta y limpia el input
    alert("El enlace debe terminar con '.jpg'");
    document.getElementById("pelicula").value = "";
  }
}

// Función para mostrar las películas
function verPeliculas() {
  const listaPeliculas = document.getElementById("listaPeliculas");

  // Limpia el contenido anterior de la lista
  listaPeliculas.innerHTML = '';

  // Itera a través de las películas y crea elementos para mostrarlas
  listadoDePeliculas.forEach((infoPelicula, index) => {
    const divPelicula = document.createElement("div");
    divPelicula.classList.add("infoPelicula");

    const enlaceImagen = document.createElement("a");
    enlaceImagen.href = infoPelicula.trailer;
    enlaceImagen.target = "_blank";

    const imagen = document.createElement("img");
    imagen.src = infoPelicula.imagen;
    imagen.alt = infoPelicula.nombre;

    const nombre = document.createElement("p");
    nombre.textContent = infoPelicula.nombre;
    nombre.style.color = "#ffffff";

    divPelicula.appendChild(enlaceImagen);
    enlaceImagen.appendChild(imagen);
    divPelicula.appendChild(nombre);

    // Agrega la película al contenedor de la lista
    listaPeliculas.appendChild(divPelicula);
  });
}

// Inicialmente, muestra las películas (si las hay)
verPeliculas();