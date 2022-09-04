import { peliculas } from "../base/peliculas";


export const tarjetaPeliculas = () => {
    const fila=document.getElementById("fila");

    peliculas.forEach(function(pelicula){
    
        //TRAVERSING (CREAR ETIQUETAS DE HTML DESDE JS)

        //1. creamos una columna para cada pelicula
        const columna=document.createElement("div")
        columna.classList.add("col")

        //2. creamos una tarjeta para cada pelicula
        const tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100", "p-3")

        //3. creamos una foto para cada pelicula
        const poster=document.createElement("img")
        poster.classList.add("card-img-top")
        poster.src=pelicula.poster

        //4. Creamos el nombre de la pelicula
        const nombre = document.createElement('h2')
        nombre.classList.add('card-title','text-center', 'my-3', 'fw-bold')
        nombre.textContent = pelicula.nombre

        //5. Creamos el genero de cada pelicula
        const genero = document.createElement("p")
        genero.classList.add("text-start")
        genero.textContent = "Genero: " + pelicula.genero

        //6. Creamos el idioma de cada pelicula
        const idioma=document.createElement("p")
        idioma.classList.add("fw-bold")
        idioma.textContent = 'Idioma: ' + pelicula.idioma

        //7. Creamos la sinopsis
        const sinopsis=document.createElement("p")
        sinopsis.classList.add("d-none")
        sinopsis.textContent=pelicula.sinopsis
        

        //Padres e Hijos
        tarjeta.appendChild(poster)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(genero)
        tarjeta.appendChild(idioma)
        tarjeta.appendChild(sinopsis)

        columna.appendChild(tarjeta)
        fila.appendChild(columna)

    })

    //DETECTANDO SELECCION DE UNA PELICULA
    fila.addEventListener("click",function(){
        alert("Esta seleccionando una pelicula")
    })
}