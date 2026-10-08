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
    // JUEGOS  ·  una carpeta por juego dentro de img/juegos/
    //
    // FOTOS DESLIZABLES: cada juego usa  fotos: "img/juegos/<juego>/<juego>1-"
    // El sitio busca solo  <juego>1-1.jpg, <juego>1-2.jpg, <juego>1-3.jpg ...
    // (numeradas seguidas, sin saltos) y las muestra para deslizar.
    // Para agregar otra foto, solo guárdala con el siguiente número. No hay que tocar este archivo.
    // ==================================================================
    juegos: {
        nombre: "Juegos",
        modelos: [
            { titulo: "Cornhole", medidas: [["Tablero", "100 x 60 cm"], ["Incluye", "6 sacos para jugar"], ["Saco extra", "$1.000 c/u"]], detalle: "Juego de embocar bolsitas, ideal para patio y eventos", precio: "$40.000", imagen: "img/juegos/cornhole/cornhole1-1.jpg", fotos: "img/juegos/cornhole/cornhole1-" },
            { titulo: "Yenga", medidas: [["Piezas", "52 de 20 cm aprox."], ["Altura inicial", "74 cm"], ["Altura final", "140 cm aprox."]], detalle: "Torre de bloques de madera, versión tamaño gigante", precio: "$40.000", imagen: "img/juegos/yenga/yenga1-1.jpg", fotos: "img/juegos/yenga/yenga1-" },
            // PENDIENTE — medidas de Croquet, Pesca y Laberinto: agrégalas con
            //   medidas: [["Largo","__ cm"], ["Ancho","__ cm"]],
            { titulo: "Croquet", detalle: "Set clásico de croquet para el jardín", precio: "Consultar", imagen: "img/juegos/croquet/croquet1-1.jpg", fotos: "img/juegos/croquet/croquet1-" },
            { titulo: "Pesca Milagrosa", detalle: "Juego de pesca en madera para niños y adultos", precio: "Consultar", imagen: "img/juegos/pescamilagrosa/pesca1-1.jpg", fotos: "img/juegos/pescamilagrosa/pesca1-" },
            { titulo: "Laberinto", detalle: "Juego de habilidad y paciencia en madera", precio: "$40.000", imagen: "img/juegos/laberinto1/laberinto1-1.jpg", fotos: "img/juegos/laberinto1/laberinto1-" },
            { titulo: "Laberinto doble", detalle: "Laberinto de doble tablero, para jugar de a dos", precio: "$70.000", imagen: "img/juegos/laberintodoble/laberintodoble1-1.jpg", fotos: "img/juegos/laberintodoble/laberintodoble1-" }
            // ← agrega aquí más juegos
        ]
    },

    // ==================================================================
    // ARRIENDO DE JUEGOS  ·  se arma solo más abajo (ver "CONFIGURACIÓN DEL ARRIENDO")
    // ==================================================================
    arriendo: {
        nombre: "Arriendo de juegos",
        modelos: []
    }
};

// ======================================================================
// CONFIGURACIÓN DEL ARRIENDO
//
//  · PRECIOS_ARRIENDO: valor de cada juego. La persona NO ve estos valores,
//    solo ve el total. (Ojo: quien abra el código fuente de la página sí
//    puede verlos; para que sean 100% privados habría que calcularlos en un servidor.)
//  · ARRIENDO_MINIMO: mínimo de juegos para arrendar.
//  · COMUNAS_ARRIENDO: comunas donde se muestra el valor real. Cualquier otra
//    comuna ve el botón "Cotizar".
//  · Un juego con  proximamente: true  se muestra como "Próximamente" y no se puede elegir.
// ======================================================================
const ARRIENDO_MINIMO = 3;
const COMUNAS_ARRIENDO = ["Renca", "Cerro Navia", "Lo Prado", "Independencia"];
const PRECIOS_ARRIENDO = {
    "Cornhole": 12000,
    "Croquet": 12000,
    "Laberinto": 12000,
    "Laberinto doble": 15000,
    "Pesca Milagrosa": 15000,
    "Yenga": 12000
};
const beneficiosArriendo = [
    `Mínimo ${ARRIENDO_MINIMO} juegos por arriendo`,
    "Elige los juegos y ve el total al instante"
];

catalogo.arriendo.modelos = [
    ...catalogo.juegos.modelos
        .filter((m) => PRECIOS_ARRIENDO[m.titulo])
        .map((m) => ({
            ...m,
            valor: PRECIOS_ARRIENDO[m.titulo],
            precio: "Arriendo",
            medidas: (m.medidas || []).filter(([nombre]) => nombre !== "Saco extra"),
            descripcion: `${m.detalle}. Agrégalo a tu arriendo.`,
            beneficios: beneficiosArriendo
        })),
    {
        titulo: "Taca taca",
        detalle: "Taca taca de madera",
        descripcion: "Taca taca de madera. Agrégalo a tu arriendo.",
        valor: 20000,
        proximamente: false,
        precio: "Arriendo",
        medidas: [],
        beneficios: beneficiosArriendo,
        imagen: "img/juegos/tacataca/tacataca1-1.jpg",
        fotos: "img/juegos/tacataca/tacataca1-"
    }
];

const arriendoSel = new Set();
let modeloActual = null;
let categoriaActualId = "bancas";

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

    categoriaActualId = categoriaId;
    const esArriendo = categoriaId === "arriendo";
    document.querySelector(".catalogo-contenedor").classList.toggle("modo-arriendo", esArriendo);
    modelosContainer.querySelector("h2").textContent = esArriendo ? "Juegos disponibles" : "Modelos disponibles";
    modelosContainer.hidden = false;
    detalleProducto.hidden = esArriendo;
    if (esArriendo) {
        cargarArriendo();
        return;
    }

    const modelos = modelosLista.querySelectorAll(".modelo");

    modelos.forEach((modelo, index) => {
        modelo.addEventListener("click", () => {
            seleccionarModelo(categoriaId, index);
            if (window.matchMedia("(max-width: 992px)").matches) {
                detalleProducto.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    // Si el juego tiene varias fotos, la miniatura usa la primera que exista
    categoria.modelos.forEach((modelo, i) => {
        if (!modelo.fotos) return;
        fotosDe(modelo).then((lista) => {
            const img = modelosLista.querySelector(`.modelo[data-index="${i}"] img`);
            if (img && lista[0] && modelo === catalogo[categoriaId].modelos[i]) img.src = lista[0];
        });
    });

    refrescarListaArriendo();
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

// ---------- Fotos deslizables por producto ----------
const EXTENSIONES = ["jpg", "png", "jpeg", "webp"];
const MAX_FOTOS = 12;
const detalleCaja = document.querySelector(".detalle-imagen");
const carPrev = detalleCaja.querySelector(".car-prev");
const carNext = detalleCaja.querySelector(".car-next");
const carContador = detalleCaja.querySelector(".car-contador");
const carMinis = document.querySelector(".car-miniaturas");

let fotosActuales = [];
let fotoIdx = 0;
let tituloActual = "";
let seleccionToken = 0;

function existeImagen(src) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = src;
    });
}

// Busca prefijo1.jpg, prefijo2.jpg ... hasta que falte una
async function descubrirFotos(prefijo) {
    const lista = [];
    let ext = null;
    for (let n = 1; n <= MAX_FOTOS; n++) {
        if (!ext) {
            const res = await Promise.all(EXTENSIONES.map((e) => existeImagen(`${prefijo}${n}.${e}`)));
            const i = res.indexOf(true);
            if (i === -1) break;
            ext = EXTENSIONES[i];
        } else if (!(await existeImagen(`${prefijo}${n}.${ext}`))) {
            break;
        }
        lista.push(`${prefijo}${n}.${ext}`);
    }
    return lista;
}

function fotosDe(modelo) {
    if (!modelo._fotos) {
        if (modelo.imagenes) {
            modelo._fotos = Promise.resolve(modelo.imagenes);
        } else if (modelo.fotos) {
            modelo._fotos = descubrirFotos(modelo.fotos).then((l) => (l.length ? l : [modelo.imagen]));
        } else {
            modelo._fotos = Promise.resolve([modelo.imagen]);
        }
    }
    return modelo._fotos;
}

function mostrarFoto(i) {
    fotoIdx = (i + fotosActuales.length) % fotosActuales.length;
    delete detalleImagen.dataset.respaldo;
    detalleImagen.src = fotosActuales[fotoIdx];
    detalleImagen.alt = fotosActuales.length > 1 ? `${tituloActual} - foto ${fotoIdx + 1}` : tituloActual;
    carContador.textContent = `${fotoIdx + 1} / ${fotosActuales.length}`;

    [...carMinis.children].forEach((t, k) => t.classList.toggle("activa", k === fotoIdx));
    const activa = carMinis.children[fotoIdx];
    if (activa) {
        carMinis.scrollTo({ left: activa.offsetLeft - (carMinis.clientWidth - activa.clientWidth) / 2, behavior: "smooth" });
    }
}

function setFotos(lista) {
    fotosActuales = lista;
    const varias = lista.length > 1;
    carPrev.hidden = !varias;
    carNext.hidden = !varias;
    carContador.hidden = !varias;
    carMinis.hidden = !varias;
    carMinis.innerHTML = varias
        ? lista.map((src, k) => `<img src="${src}" alt="Foto ${k + 1}" loading="lazy" data-k="${k}">`).join("")
        : "";
    mostrarFoto(0);
}

carPrev.addEventListener("click", () => mostrarFoto(fotoIdx - 1));
carNext.addEventListener("click", () => mostrarFoto(fotoIdx + 1));
carMinis.addEventListener("click", (e) => {
    const k = e.target.dataset && e.target.dataset.k;
    if (k !== undefined) mostrarFoto(Number(k));
});
detalleImagen.addEventListener("click", () => {
    abrirLightbox(fotosActuales.map((src) => ({ src, alt: tituloActual })), fotoIdx);
});

// Deslizar con el dedo sobre la foto
let carToqueX = null;
detalleCaja.addEventListener("touchstart", (e) => { carToqueX = e.touches[0].clientX; }, { passive: true });
detalleCaja.addEventListener("touchend", (e) => {
    if (carToqueX === null) return;
    const dx = e.changedTouches[0].clientX - carToqueX;
    carToqueX = null;
    if (Math.abs(dx) > 40 && fotosActuales.length > 1) mostrarFoto(fotoIdx + (dx < 0 ? 1 : -1));
});

function seleccionarModelo(categoriaId, modeloIndex) {
    const categoria = catalogo[categoriaId];
    const modelo = categoria.modelos[modeloIndex];
    const token = ++seleccionToken;

    modelosLista.querySelectorAll(".modelo").forEach((item, index) => {
        item.classList.toggle("activo", index === modeloIndex);
    });

    tituloActual = modelo.titulo;
    setFotos([modelo.imagen]);
    fotosDe(modelo).then((lista) => {
        if (token !== seleccionToken) return;
        if (lista.length !== 1 || lista[0] !== modelo.imagen) setFotos(lista);
    });

    detalleWhats.href = `https://wa.me/${WA}?text=${encodeURIComponent("Hola, quiero cotizar: " + modelo.titulo)}`;
    detalleCategoria.textContent = categoria.nombre;
    detalleTitulo.textContent = modelo.titulo;
    detalleDescripcion.textContent = modelo.descripcion ||
        `${modelo.detalle}. Fabricado completamente a medida con opciones de madera, color y terminación según tu espacio.`;
    detallePrecio.textContent = modelo.precio;
    detallePrecio.hidden = false;

    const medidas = modelo.medidas || [];
    detalleMedidas.innerHTML = medidas
        .map(([nombre, valor]) => `<div><dt>${nombre}</dt><dd>${valor}</dd></div>`)
        .join("");
    detalleMedidas.hidden = medidas.length === 0;

    configurarArriendo(categoriaId, modelo);
    actualizarBeneficios(modelo.beneficios || (categoriaId === "juegos" ? beneficios : [...beneficios, beneficioSellado]));
}

function actualizarBeneficios(items) {
    const lista = detalleProducto.querySelector("ul");
    lista.innerHTML = items.map((beneficio) => `<li>${beneficio}</li>`).join("");
}


// ---------- Arriendo: elegir juegos, comuna y total ----------
const arrAgregar = document.querySelector(".arriendo-agregar");
const arrPanel = document.querySelector(".arriendo-panel");
const arrItems = document.querySelector(".arriendo-items");
const arrAviso = document.querySelector(".arriendo-aviso");
const arrComuna = document.getElementById("arriendo-comuna");
const arrOtra = document.getElementById("arriendo-otra");
const arrTotal = document.querySelector(".arriendo-total");
const arrWa = document.querySelector(".arriendo-wa");

arrComuna.innerHTML = '<option value="">Elige tu comuna</option>' +
    COMUNAS_ARRIENDO.map((c) => `<option value="${c}">${c}</option>`).join("") +
    '<option value="__otra">Otra comuna</option>';

const pesos = (n) => "$" + n.toLocaleString("es-CL");

// El panel "Tu arriendo" vive justo debajo de la barra de juegos (sin bajar hasta el detalle)
modelosContainer.appendChild(arrPanel);

// Arriendo rápido: tocar un juego lo agrega o quita; "Fotos" abre sus fotos
function cargarArriendo() {
    modelosLista.innerHTML = catalogo.arriendo.modelos.map((m, i) => `
        <div class="juego-card">
            <button class="modelo" type="button" data-index="${i}">
                <img src="${m.imagen}" alt="${m.titulo}" loading="lazy" decoding="async">
                <span class="modelo-info">
                    <strong>${m.titulo}</strong>
                    <em></em>
                </span>
            </button>
            <button class="juego-fotos" type="button" data-index="${i}" aria-label="Ver fotos de ${m.titulo}">Fotos</button>
        </div>`).join("");

    catalogo.arriendo.modelos.forEach((m, i) => {
        if (!m.fotos) return;
        fotosDe(m).then((lista) => {
            const img = modelosLista.querySelector(`.modelo[data-index="${i}"] img`);
            if (img && lista[0] && categoriaActualId === "arriendo") img.src = lista[0];
        });
    });

    arrPanel.hidden = false;
    refrescarListaArriendo();
    renderArriendo();
}

modelosLista.addEventListener("click", (e) => {
    if (categoriaActualId !== "arriendo") return;
    const botonFotos = e.target.closest(".juego-fotos");
    const tarjeta = e.target.closest(".modelo");
    if (botonFotos) {
        const m = catalogo.arriendo.modelos[Number(botonFotos.dataset.index)];
        fotosDe(m).then((lista) => abrirLightbox(lista.map((src) => ({ src, alt: m.titulo })), 0));
    } else if (tarjeta) {
        const m = catalogo.arriendo.modelos[Number(tarjeta.dataset.index)];
        if (!m.proximamente) alternarJuego(m.titulo);
    }
});

function configurarArriendo(categoriaId, modelo) {
    const esArriendo = categoriaId === "arriendo";
    modeloActual = modelo;

    detallePrecio.hidden = esArriendo;
    detalleWhats.hidden = esArriendo;
    arrAgregar.hidden = !esArriendo;
    arrPanel.hidden = !esArriendo;
    if (!esArriendo) return;

    actualizarBotonAgregar();
    renderArriendo();
}

function actualizarBotonAgregar() {
    if (!modeloActual) return;
    if (modeloActual.proximamente) {
        arrAgregar.textContent = "Próximamente";
        arrAgregar.disabled = true;
        return;
    }
    arrAgregar.disabled = false;
    arrAgregar.textContent = arriendoSel.has(modeloActual.titulo) ? "Quitar de mi arriendo" : "Agregar a mi arriendo";
}

function refrescarListaArriendo() {
    if (categoriaActualId !== "arriendo") return;
    catalogo.arriendo.modelos.forEach((m, i) => {
        const em = modelosLista.querySelector(`.modelo[data-index="${i}"] em`);
        if (!em) return;
        em.textContent = m.proximamente ? "Próximamente" : arriendoSel.has(m.titulo) ? "Agregado" : "Toca para agregar";
        em.closest(".modelo").classList.toggle("activo", arriendoSel.has(m.titulo));
    });
}

function alternarJuego(titulo) {
    if (arriendoSel.has(titulo)) arriendoSel.delete(titulo); else arriendoSel.add(titulo);
    actualizarBotonAgregar();
    refrescarListaArriendo();
    renderArriendo();
}

function renderArriendo() {
    const elegidos = catalogo.arriendo.modelos.filter((m) => arriendoSel.has(m.titulo));
    const faltan = ARRIENDO_MINIMO - elegidos.length;
    const comuna = arrComuna.value;
    const otra = comuna === "__otra";
    const conTarifa = COMUNAS_ARRIENDO.includes(comuna);

    arrItems.innerHTML = elegidos.length
        ? elegidos.map((m) => `<span class="arriendo-chip">${m.titulo}<button type="button" data-t="${m.titulo}" aria-label="Quitar ${m.titulo}">&times;</button></span>`).join("")
        : "<small>Aún no eliges juegos.</small>";

    arrAviso.textContent = faltan > 0
        ? `Elige al menos ${ARRIENDO_MINIMO} juegos (te ${faltan > 1 ? "faltan" : "falta"} ${faltan}).`
        : `${elegidos.length} juegos elegidos.`;

    arrOtra.hidden = !otra;

    const total = elegidos.reduce((suma, m) => suma + m.valor, 0);
    const mostrarTotal = faltan <= 0 && conTarifa;
    arrTotal.hidden = !mostrarTotal;
    arrTotal.textContent = mostrarTotal ? `Total del arriendo: ${pesos(total)}` : "";

    const nombres = elegidos.map((m) => m.titulo).join(", ");
    const comunaTxt = otra ? (arrOtra.value.trim() || "otra comuna") : comuna;
    const listo = faltan <= 0 && comuna !== "";
    let mensaje = `Hola, quiero ${conTarifa ? "arrendar" : "cotizar el arriendo de"}: ${nombres}. Comuna: ${comunaTxt}.`;
    if (mostrarTotal) mensaje += ` Total: ${pesos(total)}.`;

    arrWa.textContent = conTarifa ? "Reservar por WhatsApp" : "Cotizar por WhatsApp";
    arrWa.classList.toggle("deshabilitado", !listo);
    arrWa.href = listo ? `https://wa.me/${WA}?text=${encodeURIComponent(mensaje)}` : "#";
}

arrAgregar.addEventListener("click", () => {
    if (modeloActual && !modeloActual.proximamente) alternarJuego(modeloActual.titulo);
});
arrItems.addEventListener("click", (e) => {
    const t = e.target.dataset && e.target.dataset.t;
    if (t) alternarJuego(t);
});
arrComuna.addEventListener("change", renderArriendo);
arrOtra.addEventListener("input", renderArriendo);
arrWa.addEventListener("click", (e) => { if (arrWa.classList.contains("deshabilitado")) e.preventDefault(); });

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
// Cada ~2,5 s la fila avanza a la siguiente categoría hasta llegar al final y vuelve al inicio.
// Se detiene al tocarla y sigue sola después de 8 segundos.
// (Si el celular tiene "reducir animaciones", avanza igual pero sin deslizamiento suave.)
(function categoriasAutomaticas() {
    const caja = document.querySelector(".categorias");
    if (!caja) return;

    const suave = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
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

        const cajaX = caja.getBoundingClientRect().left;
        const actual = caja.scrollLeft;
        const relleno = parseFloat(getComputedStyle(caja).paddingLeft) || 0;
        const posiciones = items.map((el) => el.getBoundingClientRect().left - cajaX + actual - relleno);
        const siguiente = posiciones.find((p) => p > actual + 8);

        const destino = siguiente === undefined || actual >= maximo - 4 ? 0 : Math.min(siguiente, maximo);
        caja.scrollTo({ left: destino, behavior: suave });
    }, 2500);
})();
