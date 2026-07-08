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
