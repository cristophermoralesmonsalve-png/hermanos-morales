// ======================================
// HERMANOS MORALES
// script.js
// ======================================


// ======================================
// NAVBAR
// ======================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// ======================================
// PANELES
// ======================================

const categorias = document.querySelectorAll(".categoria");

const modelosContainer = document.querySelector(".modelos");

const detalleProducto = document.querySelector(".detalle-producto");


// Ocultar al iniciar

modelosContainer.style.display = "none";

detalleProducto.style.display = "none";


// ======================================
// MODELOS POR CATEGORÍA
// ======================================

const modelosPorCategoria = {

0:`

<h2>Modelos disponibles</h2>

<div class="modelo">

<img src="img/sofas/sofa1-7.jpg">

<div class="modelo-info">

<h3>Sillón Natural</h3>

<span>Madera de pino</span>

</div>

</div>

<div class="modelo">

<img src="img/sofas/sofa1-6.jpg">

<div class="modelo-info">

<h3>Sillón Barniz Marino</h3>

<span>Tono natural</span>

</div>

</div>

<div class="modelo">

<img src="img/sofas/sofa1-8.jpg">

<div class="modelo-info">

<h3>Sillón Nogal</h3>

<span>Acabado natural</span>

</div>

</div>

<div class="modelo">

<img src="img/sofas/sofa1-1.jpg">

<div class="modelo-info">

<h3>Trabajos realizados</h3>

<span>Diseño moderno</span>

</div>

</div>

`,

1:`

<h2>Modelos disponibles</h2>

<div class="modelo">

<img src="img/bancas/banca1-1.jpg">

<div class="modelo-info">

<h3>Banca doble Natural</h3>

<span>Madera de pino</span>

</div>

</div>

<div class="modelo">

<img src="img/bancas/banca1-2.jpg">

<div class="modelo-info">

<h3>Banca doble Barniz Marino</h3>

<span>Tono natural</span>

</div>

</div>

<div class="modelo">

<img src="img/bancas/banca1-3.jpg">

<div class="modelo-info">

<h3>Banca doble Nogal</h3>

<span>Acabado natural</span>

</div>

</div>
<div class="modelo">

<img src="img/bancas/banca2-2.jpg">

<div class="modelo-info">

<h3>Banca triple Natural</h3>

<span>Madera de pino</span>

</div>

</div>

<div class="modelo">

<img src="img/bancas/banca2-3.jpg">

<div class="modelo-info">

<h3>Banca triple Barniz Marino</h3>

<span>Tono natural</span>

</div>

</div>

<div class="modelo">

<img src="img/bancas/banca2-4.jpg">

<div class="modelo-info">

<h3>Banca triple Nogal</h3>

<span>Acabado natural</span>

</div>

</div>

<div class="modelo">

<img src="img/sofas/sofa1-1.jpg">

<div class="modelo-info">

<h3>Trabajos realizados</h3>

<span>Diseño moderno</span>

</div>

</div>

`,

2:`

<h2>Modelos disponibles</h2>

<div class="modelo">

<img src="img/jardinyexterior/jardinera1-1.jpg">

<div class="modelo-info">

<h3>Jardinera Vertical de Madera</h3>

<span>Ideal para plantas y decoración</span>

</div>

</div>

`,

3:`

<h2>Modelos disponibles</h2>

<div class="modelo">

<img src="img/jardineinterior/portallaves1-1.jpg">

<div class="modelo-info">

<h3>Porta Llaves de Madera</h3>

<span>Decoración para interiores</span>

</div>

</div>

`

};


// ======================================
// CATEGORÍAS
// ======================================

categorias.forEach((categoria,index)=>{

    categoria.addEventListener("click",()=>{

        categorias.forEach(c=>c.classList.remove("activa"));

        categoria.classList.add("activa");

        modelosContainer.innerHTML=modelosPorCategoria[index];

        modelosContainer.style.display="block";

        detalleProducto.style.display="none";

        inicializarModelos();

    });

});
// ======================================
// MODELOS
// ======================================

function inicializarModelos(){

    const modelos = document.querySelectorAll(".modelo");

    const imagenDetalle =
        document.querySelector(".detalle-imagen img");

    const tituloDetalle =
        document.querySelector(".detalle-info h2");

    const descripcionDetalle =
        document.querySelector(".detalle-info p");

    modelos.forEach((modelo)=>{

        modelo.addEventListener("click",()=>{

            // Quitar selección anterior

            modelos.forEach(m=>{

                m.classList.remove("activo");

            });

            // Marcar seleccionado

            modelo.classList.add("activo");

            // Actualizar imagen

            imagenDetalle.src =
                modelo.querySelector("img").src;

            // Actualizar título

            tituloDetalle.textContent =
                modelo.querySelector("h3").textContent;

            // Actualizar descripción

            descripcionDetalle.textContent =
                "Modelo " +
                modelo.querySelector("h3").textContent +
                ". " +
                modelo.querySelector("span").textContent +
                ". Fabricado completamente a medida con distintas opciones de madera, color y terminaciones.";

            // Mostrar detalle

            detalleProducto.style.display = "block";

        });

    });

}


// ======================================
// INICIALIZACIÓN
// ======================================

// NO LLAMAR inicializarModelos() AL CARGAR LA PÁGINA
// porque los modelos están ocultos.
//
// Solo se ejecuta después de hacer click
// en una categoría.
// ======================================
// CATEGORÍAS
// ======================================

categorias.forEach((categoria, index) => {

    categoria.addEventListener("click", () => {

        // Activar categoría
        categorias.forEach(c => c.classList.remove("activa"));
        categoria.classList.add("activa");

        // Ocultar detalle mientras cambia de categoría
        detalleProducto.style.display = "none";

        // Cargar modelos
        if (modelosPorCategoria[index]) {

            modelosContainer.innerHTML = modelosPorCategoria[index];

            // Mostrar panel modelos
            modelosContainer.style.display = "block";

            // IMPORTANTE:
            // Esperar que el HTML exista antes de asignar eventos

            setTimeout(() => {

                inicializarModelos();

            }, 0);

        }

    });

});
// ======================================
// MODELOS
// ======================================

function inicializarModelos() {

    const modelos = document.querySelectorAll(".modelo");

    const imagenDetalle =
        document.querySelector(".detalle-imagen img");

    const tituloDetalle =
        document.querySelector(".detalle-info h2");

    const descripcionDetalle =
        document.querySelector(".detalle-info p");

    modelos.forEach((modelo) => {

        // Evita duplicar eventos
        modelo.onclick = null;

        modelo.onclick = function () {

            modelos.forEach(m => {
                m.classList.remove("activo");
            });

            this.classList.add("activo");

            const img = this.querySelector("img");
            const titulo = this.querySelector("h3");
            const subtitulo = this.querySelector("span");

            imagenDetalle.src = img.src;
            imagenDetalle.alt = titulo.textContent;

            tituloDetalle.textContent = titulo.textContent;

            descripcionDetalle.textContent =
                "Modelo " +
                titulo.textContent +
                ". " +
                subtitulo.textContent +
                ". Fabricado completamente a medida con distintas opciones de madera, color y terminaciones.";

            detalleProducto.style.display = "block";

            detalleProducto.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        };

    });

}
// ======================================
// INICIALIZACIÓN
// ======================================

// Al iniciar la página
window.addEventListener("DOMContentLoaded", () => {

    // Ocultar paneles
    modelosContainer.style.display = "none";
    detalleProducto.style.display = "none";

    // Limpiar categorías activas
    categorias.forEach(c => c.classList.remove("activa"));

});


// ======================================
// FUNCIONES EXTRA
// ======================================

// Mostrar panel de modelos
function mostrarModelos() {

    modelosContainer.style.display = "block";

}

// Ocultar panel de modelos
function ocultarModelos() {

    modelosContainer.style.display = "none";

}

// Mostrar detalle
function mostrarDetalle() {

    detalleProducto.style.display = "block";

}

// Ocultar detalle
function ocultarDetalle() {

    detalleProducto.style.display = "none";

}


// ======================================
// FIN SCRIPT
// ======================================