// ======================================
// HERMANOS MORALES
// script.js
// ======================================

// ------------------------------
// NAVBAR AL HACER SCROLL
// ------------------------------

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

// ------------------------------
// CARRUSEL DE PRODUCTOS
// ------------------------------

const productos = document.querySelectorAll(".producto-img");

productos.forEach((img) => {

    const imagenes = img.dataset.imagenes.split(",");

    let indice = 0;
    let intervalo = null;

    img.addEventListener("mouseenter", () => {

        if (intervalo) return;

        intervalo = setInterval(() => {

            indice++;

            if (indice >= imagenes.length) {
                indice = 0;
            }

            img.style.opacity = "0";

            setTimeout(() => {

                img.src = imagenes[indice];
                img.style.opacity = "1";

            }, 180);

        }, 1400);

    });

    img.addEventListener("mouseleave", () => {

        clearInterval(intervalo);

        intervalo = null;

        indice = 0;

        img.style.opacity = "0";

        setTimeout(() => {

            img.src = imagenes[0];
            img.style.opacity = "1";

        }, 180);

    });

});