// ======================================
// HERMANOS MORALES
// script.js
// ======================================

// NAVBAR SCROLL

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// ======================================
// CATEGORÍAS
// ======================================

const categorias = document.querySelectorAll(".categoria");

categorias.forEach((categoria)=>{

    categoria.addEventListener("click",()=>{

        categorias.forEach(c=>c.classList.remove("activa"));

        categoria.classList.add("activa");

    });

});


// ======================================
// MODELOS
// ======================================

const modelos = document.querySelectorAll(".modelo");

const imagenDetalle = document.querySelector(".detalle-imagen img");

const tituloDetalle = document.querySelector(".detalle-info h2");

const descripcionDetalle = document.querySelector(".detalle-info p");


modelos.forEach((modelo)=>{

    modelo.addEventListener("click",()=>{

        modelos.forEach(m=>m.classList.remove("activo"));

        modelo.classList.add("activo");

        const img = modelo.querySelector("img").src;

        const nombre = modelo.querySelector("h3").textContent;

        const subtitulo = modelo.querySelector("span").textContent;

        imagenDetalle.src = img;

        tituloDetalle.textContent = nombre;

        descripcionDetalle.textContent =
        "Modelo " + nombre +
        ". " + subtitulo +
        ". Fabricado completamente a medida con distintas opciones de madera, color y terminaciones.";

    });

});