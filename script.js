// ======================================
// HERMANOS MORALES
// ======================================

const navbar = document.querySelector(".navbar");
const categorias = document.querySelectorAll(".categoria");
const modelosContainer = document.querySelector(".modelos");
const modelosLista = document.querySelector(".modelos-lista");
const detalleProducto = document.querySelector(".detalle-producto");
const detalleImagen = document.querySelector(".detalle-imagen img");
const detalleCategoria = document.querySelector(".detalle-categoria");
const detalleTitulo = document.querySelector(".detalle-info h2");
const detalleDescripcion = document.querySelector(".detalle-info p");
const detallePrecio = document.querySelector(".detalle-precio");

const beneficios = [
    "Fabricación a medida",
    "Diferentes colores y terminaciones",
    "Terminación premium",
    "Uso interior y exterior"
];

// ======================================================================
// CATÁLOGO — AQUÍ SE AGREGAN FOTOS Y PRODUCTOS A MANO
//
// Para agregar un producto: copia una línea { titulo, detalle, precio, imagen }
// dentro de la categoría que quieras (respeta las comas) y cambia los datos.
// Las fotos se guardan en la carpeta img/ y aquí se escribe la ruta, ej:
//     imagen: "img/juegos/cornhole1.jpg"
// Si la foto todavía no existe, el sitio muestra el logo en su lugar.
// ======================================================================

const catalogo = {

    // ==================================================================
    // SILLONES INDIVIDUALES  ·  fotos en: img/sofas/
    // ==================================================================
    sillones: {
        nombre: "Sillones individuales",
        modelos: [
            { titulo: "Sillón natural",       detalle: "Madera de pino",  precio: "$50.000", imagen: "img/sofas/sofa1-7.jpg" },
            { titulo: "Sillón barniz marino", detalle: "Tono natural",    precio: "$50.000", imagen: "img/sofas/sofa1-6.jpg" },
            { titulo: "Sillón nogal",         detalle: "Acabado natural", precio: "$50.000", imagen: "img/sofas/sofa1-8.jpg" },
            { titulo: "Trabajos realizados",  detalle: "Diseño moderno",  precio: "$50.000", imagen: "img/sofas/sofa1-1.jpg" }
            // ← agrega aquí más sillones
        ]
    },

    // ==================================================================
    // BANCAS Y ASIENTOS  ·  fotos en: img/bancas/
    // ==================================================================
    bancas: {
        nombre: "Bancas y asientos",
        modelos: [
            { titulo: "Banca doble natural",        detalle: "Madera de pino",  precio: "$70.000",  imagen: "img/bancas/banca1-1.jpg" },
            { titulo: "Banca doble barniz marino",  detalle: "Tono natural",    precio: "$70.000",  imagen: "img/bancas/banca1-2.jpg" },
            { titulo: "Banca doble nogal",          detalle: "Acabado natural", precio: "$70.000",  imagen: "img/bancas/banca1-3.jpg" },
            { titulo: "Banca triple natural",       detalle: "Madera de pino",  precio: "$100.000", imagen: "img/bancas/banca2-2.jpg" },
            { titulo: "Banca triple barniz marino", detalle: "Tono natural",    precio: "$100.000", imagen: "img/bancas/banca2-3.jpg" },
            { titulo: "Banca triple nogal",         detalle: "Acabado natural", precio: "$100.000", imagen: "img/bancas/banca2-4.jpg" }
            // ← agrega aquí más bancas
        ]
    },

    // ==================================================================
    // JARDÍN Y EXTERIOR  ·  fotos en: img/jardinyexterior/
    // ==================================================================
    exterior: {
        nombre: "Jardín y exterior",
        modelos: [
            { titulo: "Jardinera vertical de madera", detalle: "Ideal para plantas y decoración", precio: "$25.000", imagen: "img/jardinyexterior/jardinera1-1.jpg" }
            // ← agrega aquí más productos de jardín
        ]
    },

    // ==================================================================
    // INTERIOR  ·  fotos en: img/ventas/
    // ==================================================================
    interior: {
        nombre: "Interior",
        modelos: [
            { titulo: "Organizador porta llaves", detalle: "Decoración funcional para espacios interiores", precio: "$20.000", imagen: "img/ventas/Portallaves1-1.jpg.png" }
            // ← agrega aquí más productos de interior
        ]
    },

    // ==================================================================
    // JUEGOS  ·  fotos en: img/juegos/
    // Guarda cada foto con el nombre indicado (o cambia la ruta).
    // Más fotos del mismo juego: copia la línea, ponle otro título
    // (ej. "Cornhole - modelo 2") y otra imagen (cornhole2.jpg).
    // ==================================================================
    juegos: {
        nombre: "Juegos",
        modelos: [
            { titulo: "Cornhole",        detalle: "Juego de embocar bolsitas, ideal para patio y eventos", precio: "Consultar", imagen: "img/juegos/cornhole1.jpg" },
            { titulo: "Yenga",           detalle: "Torre de bloques de madera, versión tamaño gigante",    precio: "Consultar", imagen: "img/juegos/yenga1.jpg" },
            { titulo: "Croquet",         detalle: "Set clásico de croquet para el jardín",                 precio: "Consultar", imagen: "img/juegos/croquet1.jpg" },
            { titulo: "Pesca laberinto", detalle: "Juego de habilidad y paciencia para niños y adultos",   precio: "Consultar", imagen: "img/juegos/pesca-laberinto1.jpg" }
            // ← agrega aquí más juegos
        ]
    }
};

window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

categorias.forEach((categoria) => {
    categoria.addEventListener("click", () => {
        const categoriaId = categoria.dataset.category;

        categorias.forEach((item) => item.classList.remove("activa"));
        categoria.classList.add("activa");

        cargarCategoria(categoriaId);
    });
});

function cargarCategoria(categoriaId) {
    const categoria = catalogo[categoriaId];

    if (!categoria) {
        return;
    }

    modelosLista.innerHTML = categoria.modelos
        .map((modelo, index) => crearModelo(modelo, index))
        .join("");

    modelosContainer.hidden = false;
    detalleProducto.hidden = false;

    const modelos = modelosLista.querySelectorAll(".modelo");

    modelos.forEach((modelo, index) => {
        modelo.addEventListener("click", () => {
            seleccionarModelo(categoriaId, index);
        });
    });

    seleccionarModelo(categoriaId, 0);
}

function crearModelo(modelo, index) {
    return `
        <button class="modelo" type="button" data-index="${index}">
            <img src="${modelo.imagen}" alt="${modelo.titulo}">
            <span class="modelo-info">
                <strong>${modelo.titulo}</strong>
                <small>${modelo.detalle}</small>
                <em>${modelo.precio}</em>
            </span>
        </button>
    `;
}

function seleccionarModelo(categoriaId, modeloIndex) {
    const categoria = catalogo[categoriaId];
    const modelo = categoria.modelos[modeloIndex];

    modelosLista.querySelectorAll(".modelo").forEach((item, index) => {
        item.classList.toggle("activo", index === modeloIndex);
    });

    detalleImagen.src = modelo.imagen;
    detalleImagen.onclick = () => {

    lightbox.classList.add("activo");
    lightboxImg.src = modelo.imagen;
    lightboxImg.alt = modelo.titulo;

};
    detalleImagen.alt = modelo.titulo;
    detalleCategoria.textContent = categoria.nombre;
    detalleTitulo.textContent = modelo.titulo;
    detalleDescripcion.textContent = `${modelo.detalle}. Fabricado completamente a medida con opciones de madera, color y terminación según tu espacio.`;
    detallePrecio.textContent = modelo.precio;
    detallePrecio.hidden = false;

    actualizarBeneficios();
}

function actualizarBeneficios() {
    const lista = detalleProducto.querySelector("ul");

    lista.innerHTML = beneficios
        .map((beneficio) => `<li>${beneficio}</li>`)
        .join("");
}

window.addEventListener("DOMContentLoaded", () => {
    cargarCategoria("bancas");
});
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const imagenGrande = document.getElementById("imagenGrande");

imagenGrande.addEventListener("click", () => {

    lightbox.classList.add("activo");
    lightboxImg.src = imagenGrande.src;
    lightboxImg.alt = imagenGrande.alt;

});

document.addEventListener("click", (e) => {

    if (
        e.target === lightbox ||
        e.target === lightboxImg ||
        e.target.classList.contains("cerrar")
    ) {

        lightbox.classList.remove("activo");

    }

});

function cambiarImagen(imagen){

    const grande = document.getElementById("imagenGrande");

    // Pequeño efecto
    grande.style.opacity = "0";

    setTimeout(() => {
        grande.src = imagen.src;
        grande.style.opacity = "1";
    }, 180);

    // Quitar selección anterior
    document.querySelectorAll(".thumb").forEach(img=>{
        img.classList.remove("activa");
    });

    // Marcar la seleccionada
    imagen.classList.add("activa");
}

// ---------- Si una foto no existe todavía, muestra el logo ----------
document.addEventListener("error", (e) => {
    if (e.target.tagName === "IMG" && !e.target.dataset.respaldo) {
        e.target.dataset.respaldo = "1";
        e.target.src = "img/prelogo.jpg";
    }
}, true);

// ---------- Sala de videos (YouTube) ----------
(function salaDeVideos() {
    const form = document.getElementById("hm-video-form");
    if (!form) return;

    const input = document.getElementById("hm-video-url");
    const estado = document.getElementById("hm-video-status");
    const reproductor = document.getElementById("hm-video-player");
    const limpiar = document.getElementById("hm-video-clear");
    const ayuda = "Acepta enlaces normales, cortos, Shorts y directos.";

    function idYoutube(texto) {
        let url;
        try {
            const t = texto.trim();
            url = new URL(/^https?:\/\//i.test(t) ? t : "https://" + t);
        } catch (err) {
            return null;
        }
        const host = url.hostname.replace(/^(www\.|m\.|music\.)/, "");
        let id = null;

        if (host === "youtu.be") {
            id = url.pathname.slice(1).split("/")[0];
        } else if (host === "youtube.com" || host === "youtube-nocookie.com") {
            if (url.pathname === "/watch") {
                id = url.searchParams.get("v");
            } else {
                const partes = url.pathname.split("/").filter(Boolean);
                if (["shorts", "live", "embed", "v"].includes(partes[0])) id = partes[1];
            }
        }
        return /^[\w-]{11}$/.test(id || "") ? id : null;
    }

    function vaciar() {
        reproductor.innerHTML = "";
        reproductor.hidden = true;
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const id = idYoutube(input.value);

        if (!id) {
            vaciar();
            estado.textContent = "No pude reconocer ese enlace. Revisa que sea de YouTube.";
            return;
        }

        reproductor.innerHTML =
            `<iframe src="https://www.youtube-nocookie.com/embed/${id}" title="Video de YouTube" ` +
            `allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture" ` +
            `allowfullscreen loading="lazy"></iframe>`;
        reproductor.hidden = false;
        estado.textContent = "Video cargado.";
    });

    limpiar.addEventListener("click", () => {
        input.value = "";
        vaciar();
        estado.textContent = ayuda;
    });
})();
