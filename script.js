// ======================================
// HERMANOS MORALES
// ======================================

// REPRODUCTOR DE YOUTUBE
function hmYoutubeId(value) {
    try {
        const raw = value.trim();
        const url = new URL(
            /^https?:\/\//i.test(raw) ? raw : "https://" + raw
        );

        if (
            !["http:", "https:"].includes(url.protocol) ||
            url.username ||
            url.password
        ) {
            return null;
        }

        const host = url.hostname.toLowerCase();
        const parts = url.pathname.split("/").filter(Boolean);
        let id = null;

        if (["youtu.be", "www.youtu.be"].includes(host)) {
            id = parts[0];
        } else if (
            [
                "youtube.com",
                "www.youtube.com",
                "m.youtube.com",
                "music.youtube.com"
            ].includes(host)
        ) {
            if (url.pathname === "/watch") {
                id = url.searchParams.get("v");
            } else if (
                ["shorts", "live", "embed"].includes(parts[0])
            ) {
                id = parts[1];
            }
        }

        return id && /^[A-Za-z0-9_-]{11}$/.test(id) ? id : null;
    } catch {
        return null;
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("hm-video-form");
    if (!form) return;

    const input = document.getElementById("hm-video-url");
    const player = document.getElementById("hm-video-player");
    const status = document.getElementById("hm-video-status");
    const clear = document.getElementById("hm-video-clear");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const id = hmYoutubeId(input.value);

        if (!id) {
            status.textContent =
                "Revisa el enlace: debe ser de un video de YouTube válido.";
            input.setAttribute("aria-invalid", "true");
            input.focus();
            return;
        }

        input.removeAttribute("aria-invalid");

        const iframe = document.createElement("iframe");
        iframe.title = "Reproductor de YouTube";
        iframe.src =
            "https://www.youtube.com/embed/" + id + "?playsinline=1";
        iframe.allow =
            "accelerometer; autoplay; clipboard-write; encrypted-media; " +
            "gyroscope; picture-in-picture; web-share";
        iframe.allowFullscreen = true;
        iframe.referrerPolicy = "strict-origin-when-cross-origin";

        player.replaceChildren(iframe);
        player.hidden = false;

        status.textContent =
            "Reproductor insertado. Presiona ▶. Si aparece un error, " +
            "prueba otro video o revisa el acceso de la red.";
    });

    clear.addEventListener("click", () => {
        player.replaceChildren();
        player.hidden = true;
        form.reset();
        input.removeAttribute("aria-invalid");
        status.textContent = "Pega otro enlace para cargar un video.";
        input.focus();
    });
});
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

const catalogo = {
    sillones: {
        nombre: "Sillones individuales",
        modelos: [
            {
                titulo: "Sillón natural",
                detalle: "Madera de pino",
                precio: "$50.000",
                imagen: "img/sofas/sofa1-7.jpg"
            },
            {
                titulo: "Sillón barniz marino",
                detalle: "Tono natural",
                precio: "$50.000",
                imagen: "img/sofas/sofa1-6.jpg"
            },
            {
                titulo: "Sillón nogal",
                detalle: "Acabado natural",
                precio: "$50.000",
                imagen: "img/sofas/sofa1-8.jpg"
            },
            {
                titulo: "Trabajos realizados",
                detalle: "Diseño moderno",
                precio: "$50.000",
                imagen: "img/sofas/sofa1-1.jpg"
            }
        ]
    },
    bancas: {
        nombre: "Bancas y asientos",
        modelos: [
            {
                titulo: "Banca doble natural",
                detalle: "Madera de pino",
                precio: "$70.000",
                imagen: "img/bancas/banca1-1.jpg"
            },
            {
                titulo: "Banca doble barniz marino",
                detalle: "Tono natural",
                precio: "$70.000",
                imagen: "img/bancas/banca1-2.jpg"
            },
            {
                titulo: "Banca doble nogal",
                detalle: "Acabado natural",
                precio: "$70.000",
                imagen: "img/bancas/banca1-3.jpg"
            },
            {
                titulo: "Banca triple natural",
                detalle: "Madera de pino",
                precio: "$100.000",
                imagen: "img/bancas/banca2-2.jpg"
            },
            {
                titulo: "Banca triple barniz marino",
                detalle: "Tono natural",
                precio: "$100.000",
                imagen: "img/bancas/banca2-3.jpg"
            },
            {
                titulo: "Banca triple nogal",
                detalle: "Acabado natural",
                precio: "$100.000",
                imagen: "img/bancas/banca2-4.jpg"
            }
        ]
    },
    exterior: {
        nombre: "Jardín y exterior",
        modelos: [
            {
                titulo: "Jardinera vertical de madera",
                detalle: "Ideal para plantas y decoración",
                precio: "$25.000",
                imagen: "img/jardinyexterior/jardinera1-1.jpg"
            }
        ]
    },
    interior: {
        nombre: "Interior",
        modelos: [
            {
                titulo: "Organizador porta llaves",
                detalle: "Decoración funcional para espacios interiores",
                precio: "$20.000",
                imagen: "img/ventas/Portallaves1-1.jpg.png"
            }
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