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
const detalleMedidas = document.querySelector(".detalle-medidas");
const detalleWhats = document.querySelector(".detalle-info .btn");
const WA = "56966060170";

const beneficios = [
    "Fabricación a medida",
    "Diferentes colores y terminaciones",
    "Terminación premium",
    "Uso interior y exterior"
];

// Si el cliente lo pide sellado, el mueble queda a prueba de agua.
// (No se muestra en la categoría Juegos.)
const beneficioSellado = "Si lo pides sellado, queda a prueba de agua";

// ======================================================================
// MEDIDAS — se muestran en el detalle de cada producto
// Formato: [ ["Nombre", "valor"], ["Nombre", "valor"] ]
// Si la lista está vacía ( [] ) no se muestra nada.
// ======================================================================
const MEDIDAS_BANCA_DOBLE = [
    ["Ancho", "120 cm"], ["Profundidad", "50 cm"], ["Alto total", "90 cm"], ["Alto del asiento", "45 cm"]
];
const MEDIDAS_BANCA_TRES = [
    ["Ancho", "160 cm"], ["Profundidad", "50 cm"], ["Alto total", "90 cm"], ["Alto del asiento", "45 cm"]
];

const MEDIDAS_INDIVIDUAL = [
    ["Ancho", "62 cm"], ["Profundidad", "50 cm"], ["Alto total", "90 cm"], ["Alto del asiento", "45 cm"]
];

// ======================================================================
// CATÁLOGO — AQUÍ SE AGREGAN FOTOS Y PRODUCTOS A MANO
//
//  CÓMO AGREGAR MÁS FOTOS A UNA CATEGORÍA (paso a paso)
//
//  1) Guarda la foto en la carpeta de su categoría (se indica sobre cada bloque):
//        Sillones → img/sofas/        Bancas   → img/bancas/
//        Jardín   → img/jardinyexterior/   Interior → img/ventas/
//        Juegos   → img/juegos/
//     Usa nombres sin espacios ni tildes, por ejemplo:  banca4-1.jpg
//
//  2) Dentro de la categoría elegida, copia UNA línea completa  { ... }
//     y pégala debajo de la última. Cada línea termina en coma,
//     salvo la última de la categoría.
//
//  3) Cambia titulo, detalle, precio, imagen y medidas.
//        medidas: [["Ancho","100 cm"], ["Alto","50 cm"]]    (o  medidas: []  si no hay)
//
//  4) Guarda, sube con git y listo.
//
//  El tamaño de la foto no importa: el sitio la ajusta sola dentro de su
//  marco, sin recortarla ni descuadrar la página. Para que cargue rápido,
//  conviene que pese menos de 500 KB (puedes reducirla en squoosh.app).
//  Si la foto aún no existe, se muestra el logo en su lugar.
// ======================================================================

const catalogo = {

    // ==================================================================
    // SILLONES INDIVIDUALES  ·  fotos en: img/sofas/
    // ==================================================================
    sillones: {
        nombre: "Sillones individuales",
        modelos: [
            { titulo: "Sillón natural", medidas: MEDIDAS_INDIVIDUAL,       detalle: "Madera de pino",  precio: "$50.000", imagen: "img/sofas/sofa1-7.jpg" },
            { titulo: "Sillón barniz marino", medidas: MEDIDAS_INDIVIDUAL, detalle: "Tono natural",    precio: "$50.000", imagen: "img/sofas/sofa1-6.jpg" },
            { titulo: "Sillón nogal", medidas: MEDIDAS_INDIVIDUAL,         detalle: "Acabado natural", precio: "$50.000", imagen: "img/sofas/sofa1-8.jpg" },
            { titulo: "Sillón diseño moderno", medidas: MEDIDAS_INDIVIDUAL, detalle: "Diseño moderno",  precio: "$50.000", imagen: "img/sofas/sofa1-1.jpg" }
            // ← agrega aquí más sillones
        ]
    },

    // ==================================================================
    // BANCAS Y ASIENTOS  ·  fotos en: img/bancas/
    // ==================================================================
    bancas: {
        nombre: "Bancas y asientos",
        modelos: [
            { titulo: "Banca doble natural", medidas: MEDIDAS_BANCA_DOBLE,        detalle: "Madera de pino",  precio: "$70.000",  imagen: "img/bancas/banca1-1.jpg" },
            { titulo: "Banca doble barniz marino", medidas: MEDIDAS_BANCA_DOBLE,  detalle: "Tono natural",    precio: "$70.000",  imagen: "img/bancas/banca1-2.jpg" },
            { titulo: "Banca doble nogal", medidas: MEDIDAS_BANCA_DOBLE,          detalle: "Acabado natural", precio: "$70.000",  imagen: "img/bancas/banca1-3.jpg" },
            { titulo: "Banca tres cuerpos natural", medidas: MEDIDAS_BANCA_TRES,       detalle: "Madera de pino",  precio: "$100.000", imagen: "img/bancas/banca2-2.jpg" },
            { titulo: "Banca tres cuerpos barniz marino", medidas: MEDIDAS_BANCA_TRES, detalle: "Tono natural",    precio: "$100.000", imagen: "img/bancas/banca2-3.jpg" },
            { titulo: "Banca tres cuerpos nogal", medidas: MEDIDAS_BANCA_TRES,         detalle: "Acabado natural", precio: "$100.000", imagen: "img/bancas/banca2-4.jpg" }
            // ← agrega aquí más bancas
        ]
    },

    // ==================================================================
    // JARDÍN Y EXTERIOR  ·  fotos en: img/jardinyexterior/
    // ==================================================================
    exterior: {
        nombre: "Jardín y exterior",
        modelos: [
            // ▼▼ AQUÍ VAN LAS MEDIDAS DE LA JARDINERA (cuando las tengas) ▼▼
            // Reemplaza  medidas: []  por, por ejemplo:
            //   medidas: [["Ancho", "__ cm"], ["Alto", "__ cm"], ["Profundidad", "__ cm"]],
            { titulo: "Jardinera vertical de madera", medidas: [], detalle: "Ideal para plantas y decoración", precio: "$25.000", imagen: "img/jardinyexterior/jardinera1-1.jpg" }
            // ← agrega aquí más productos de jardín
        ]
    },

    // ==================================================================
    // INTERIOR  ·  fotos en: img/ventas/
    // ==================================================================
    interior: {
        nombre: "Interior",
        modelos: [
            { titulo: "Organizador porta llaves", medidas: [["Ancho", "50 cm"], ["Alto", "60 cm"], ["Profundidad", "7 cm"]], detalle: "Decoración funcional para espacios interiores", precio: "$20.000", imagen: "img/ventas/Portallaves1-1.jpg.png" }
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
            { titulo: "Cornhole", medidas: [["Tablero", "100 x 60 cm"], ["Incluye", "6 sacos para jugar"], ["Saco extra", "$1.000 c/u"]],        detalle: "Juego de embocar bolsitas, ideal para patio y eventos", precio: "$40.000", imagen: "img/juegos/cornhole1.jpg",  },
            { titulo: "Yenga", medidas: [["Piezas", "52 de 20 cm aprox."], ["Altura inicial", "74 cm"], ["Altura final", "140 cm aprox."]],           detalle: "Torre de bloques de madera, versión tamaño gigante",    precio: "$40.000", imagen: "img/juegos/yenga.png"},
            // PENDIENTE — medidas de Croquet, Pesca y Laberinto: agrégalas con
            //   medidas: [["Largo","__ cm"], ["Ancho","__ cm"]],
            { titulo: "Croquet",         detalle: "Set clásico de croquet para el jardín",                 precio: "Consultar", imagen: "img/juegos/croquet1.jpg" },
            { titulo: "Pesca",           detalle: "Juego de pesca en madera para niños y adultos",         precio: "Consultar", imagen: "img/juegos/pesca1.jpg" },
            { titulo: "Laberinto",       detalle: "Juego de habilidad y paciencia en madera",              precio: "$40.000", imagen: "img/juegos/laberinto1.jpg" },
            // La foto del laberinto doble se guarda en: img/juegos/laberinto2.png
            // (mientras no exista, el sitio muestra el logo en su lugar)
            { titulo: "Laberinto doble", detalle: "Laberinto de doble tablero, para jugar de a dos",       precio: "$70.000", imagen: "img/juegos/laberinto2.png" }
            // ← agrega aquí más juegos
        ]
    }
};

// ======================================================================
// RECOMENDACIONES — AQUÍ SE AGREGAN LAS FOTOS Y CAPTURAS DE WHATSAPP
// (se muestran junto a "Nosotros", casi al final de la página)
//
// Guarda las imágenes en la carpeta img/clientes/ y agrega una línea por
// cada foto o captura (respeta las comas). "texto" es opcional: puede ser
// una frase corta o quedar vacío (texto: "").
// Mientras esta lista esté vacía, el recuadro de recomendaciones no se muestra.
// ======================================================================

const clientes = [
    // { imagen: "img/clientes/cliente1.jpg",  texto: "Banca triple nogal" },
    // { imagen: "img/clientes/captura1.jpg",  texto: "Comentario de un cliente por WhatsApp" },
];

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
            if (window.matchMedia("(max-width: 992px)").matches) {
                detalleProducto.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    seleccionarModelo(categoriaId, 0);
}

function crearModelo(modelo, index) {
    return `
        <button class="modelo" type="button" data-index="${index}">
            <img src="${modelo.imagen}" alt="${modelo.titulo}" loading="lazy" decoding="async">
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
    detalleImagen.onclick = () => abrirLightbox(
        categoria.modelos.map((x) => ({ src: x.imagen, alt: x.titulo })),
        modeloIndex
    );
    detalleWhats.href = `https://wa.me/${WA}?text=${encodeURIComponent("Hola, quiero cotizar: " + modelo.titulo)}`;
    detalleImagen.alt = modelo.titulo;
    detalleCategoria.textContent = categoria.nombre;
    detalleTitulo.textContent = modelo.titulo;
    detalleDescripcion.textContent = `${modelo.detalle}. Fabricado completamente a medida con opciones de madera, color y terminación según tu espacio.`;
    detallePrecio.textContent = modelo.precio;
    detallePrecio.hidden = false;

    const medidas = modelo.medidas || [];
    detalleMedidas.innerHTML = medidas
        .map(([nombre, valor]) => `<div><dt>${nombre}</dt><dd>${valor}</dd></div>`)
        .join("");
    detalleMedidas.hidden = medidas.length === 0;

    actualizarBeneficios(categoriaId !== "juegos");
}

function actualizarBeneficios(conSellado) {
    const lista = detalleProducto.querySelector("ul");
    const items = conSellado ? [...beneficios, beneficioSellado] : beneficios;

    lista.innerHTML = items
        .map((beneficio) => `<li>${beneficio}</li>`)
        .join("");
}

window.addEventListener("DOMContentLoaded", () => {
    cargarCategoria("bancas");
});
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lbPrev = lightbox.querySelector(".lb-prev");
const lbNext = lightbox.querySelector(".lb-next");
const lbContador = lightbox.querySelector(".lb-contador");
const imagenGrande = document.getElementById("imagenGrande");

let lbLista = [];
let lbIndice = 0;

function mostrarLightbox() {
    const foto = lbLista[lbIndice];
    const varias = lbLista.length > 1;

    lightboxImg.src = foto.src;
    lightboxImg.alt = foto.alt || "";
    lbPrev.hidden = !varias;
    lbNext.hidden = !varias;
    lbContador.textContent = varias ? `${lbIndice + 1} / ${lbLista.length}` : "";
}

function abrirLightbox(lista, indice = 0) {
    lbLista = lista;
    lbIndice = indice;
    mostrarLightbox();
    lightbox.classList.add("activo");
    document.body.style.overflow = "hidden";
}

function cerrarLightbox() {
    lightbox.classList.remove("activo");
    document.body.style.overflow = "";
}

function moverLightbox(paso) {
    lbIndice = (lbIndice + paso + lbLista.length) % lbLista.length;
    mostrarLightbox();
}

lbPrev.addEventListener("click", (e) => { e.stopPropagation(); moverLightbox(-1); });
lbNext.addEventListener("click", (e) => { e.stopPropagation(); moverLightbox(1); });

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target.classList.contains("cerrar")) {
        cerrarLightbox();
    }
});

document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("activo")) return;
    if (e.key === "Escape") cerrarLightbox();
    if (e.key === "ArrowLeft" && lbLista.length > 1) moverLightbox(-1);
    if (e.key === "ArrowRight" && lbLista.length > 1) moverLightbox(1);
});

// Deslizar el dedo para cambiar de foto
let toqueX = null;
lightbox.addEventListener("touchstart", (e) => { toqueX = e.touches[0].clientX; }, { passive: true });
lightbox.addEventListener("touchend", (e) => {
    if (toqueX === null) return;
    const dx = e.changedTouches[0].clientX - toqueX;
    toqueX = null;
    if (Math.abs(dx) > 50 && lbLista.length > 1) moverLightbox(dx < 0 ? 1 : -1);
});

// Foto grande de la galería: abre el visor con todas las miniaturas
imagenGrande.addEventListener("click", () => {
    const miniaturas = [...document.querySelectorAll(".thumb")];
    const activa = Math.max(0, miniaturas.findIndex((t) => t.classList.contains("activa")));
    abrirLightbox(miniaturas.map((t) => ({ src: t.src, alt: t.alt })), activa);
});

function cambiarImagen(imagen){

    const grande = document.getElementById("imagenGrande");

    // Pequeño efecto
    grande.style.opacity = "0";

    setTimeout(() => {
        grande.src = imagen.src;
        grande.alt = imagen.alt;
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


// ---------- Recomendaciones (fotos y capturas de clientes) ----------
(function recomendaciones() {
    const caja = document.querySelector(".confianza-caja");
    const panel = document.getElementById("recomendaciones");
    const tira = document.querySelector(".reco-tira");
    if (!caja || !panel || !tira) return;

    const hay = clientes.length > 0;
    panel.hidden = !hay;
    caja.classList.toggle("sin-reco", !hay);
    if (!hay) return;

    const lista = clientes.map((c) => ({ src: c.imagen, alt: c.texto || "Recomendación de un cliente" }));

    tira.innerHTML = clientes.map((c, i) => `
        <figure class="reco">
            <img src="${c.imagen}" alt="${lista[i].alt}" loading="lazy" data-i="${i}">
            ${c.texto ? `<figcaption>${c.texto}</figcaption>` : ""}
        </figure>`).join("");

    tira.querySelectorAll("img").forEach((img) =>
        img.addEventListener("click", () => abrirLightbox(lista, Number(img.dataset.i))));
})();

// ---------- Sala de videos oculta ----------
// Se abre con el ícono discreto del pie de página o con el enlace  tusitio/#videos
(function salaOculta() {
    const sala = document.getElementById("videos");
    const boton = document.getElementById("hm-abrir-videos");
    if (!sala) return;

    function abrir() {
        sala.hidden = false;
        sala.scrollIntoView({ behavior: "smooth" });
    }

    if (boton) {
        boton.addEventListener("click", () => {
            if (sala.hidden) abrir(); else sala.hidden = true;
        });
    }
    if (location.hash === "#videos") abrir();
    window.addEventListener("hashchange", () => { if (location.hash === "#videos") abrir(); });
})();

// ---------- Categorías que se desplazan solas en celular ----------
// Cada pocos segundos avanzan a la siguiente categoría para que se note que hay más.
// Se detienen al tocarlas y siguen solas después de unos segundos.
(function categoriasAutomaticas() {
    const caja = document.querySelector(".categorias");
    if (!caja || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = [...caja.querySelectorAll(".categoria")];
    let pausada = false;
    let reanudar;

    const pausar = () => {
        pausada = true;
        clearTimeout(reanudar);
        reanudar = setTimeout(() => { pausada = false; }, 8000);
    };
    ["touchstart", "pointerdown", "wheel"].forEach((ev) =>
        caja.addEventListener(ev, pausar, { passive: true }));

    setInterval(() => {
        const maximo = caja.scrollWidth - caja.clientWidth;
        if (pausada || document.hidden || maximo <= 4) return;   // solo si hay categorías fuera de pantalla

        const base = items[0].offsetLeft;
        const siguiente = items.find((el) => el.offsetLeft - base > caja.scrollLeft + 8);
        const destino = siguiente && caja.scrollLeft < maximo - 4 ? siguiente.offsetLeft - base : 0;
        caja.scrollTo({ left: destino, behavior: "smooth" });
    }, 2600);
})();
