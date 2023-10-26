// Obtén una referencia al elemento "container" en el documento HTML
const container = document.getElementById("container");

// URL de la API y opciones de solicitud
const url = 'https://moviesdatabase.p.rapidapi.com/titles?startYear=2010&list=most_pop_movies&endYear=2023&limit=40';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4efbdba58bmsh4496a9180f2c7e0p1c0125jsn3ec35151f687',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
};

// Función asincrónica para obtener y mostrar películas
async function fetchAndDisplayMovies() {
    try {
        // Realiza una solicitud a la API de películas
        const response = await fetch(url, options);
        const data = await response.json();
        
        // Obtiene el arreglo de resultados de películas
        const movies = data.results;

        // Itera a través de las películas y muestra la información
        movies.forEach(movie => {
            const title = movie.originalTitleText.text;
            const image = movie.primaryImage ? movie.primaryImage.url : "imagen no encontrada";
            
            // Crea elementos HTML para mostrar la película
            const img = document.createElement("img");
            img.src = image;
            img.classList.add("grow");
            
            const titulo = document.createElement("p");
            titulo.textContent = title;
            
            const peli = document.createElement("section");
            peli.appendChild(img);
            peli.appendChild(titulo);
            
            // Agrega la película al contenedor
            container.appendChild(peli);
        });
    } catch (error) {
        console.error(error);
    }
}

// Llama a la función para obtener y mostrar películas
fetchAndDisplayMovies();