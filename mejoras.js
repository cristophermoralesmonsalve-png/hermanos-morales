/* Mejoras adicionales: funciona junto a script.js sin modificarlo */
(function () {
  'use strict';

  var WA_NUMBER = '56966060170';

  function waLink(texto) {
    return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(texto);
  }

  /* 1. WhatsApp con el nombre del producto seleccionado */
  function actualizarWhatsApp() {
    var detalle = document.querySelector('.detalle-producto');
    if (!detalle) return;
    var titulo = detalle.querySelector('.detalle-info h2');
    var boton = detalle.querySelector('.detalle-info a[href*="wa.me"]');
    if (!titulo || !boton) return;
    var nombre = titulo.textContent.trim();
    if (!nombre) return;
    boton.href = waLink('Hola, quiero cotizar: ' + nombre);
  }

  var detalle = document.querySelector('.detalle-producto');
  if (detalle && 'MutationObserver' in window) {
    // Solo childList/characterData (no attributes) para evitar bucles al cambiar el href
    new MutationObserver(actualizarWhatsApp)
      .observe(detalle, { childList: true, subtree: true, characterData: true });
  }
  actualizarWhatsApp();

  /* 2. Imágenes del catálogo: carga diferida y alt por defecto */
  function optimizarImagenes(raiz) {
    raiz.querySelectorAll('img').forEach(function (img) {
      if (!img.hasAttribute('loading')) img.setAttribute('loading', 'lazy');
      if (!img.hasAttribute('alt')) img.setAttribute('alt', 'Mueble de madera Hermanos Morales');
    });
  }
  var lista = document.querySelector('.modelos-lista');
  if (lista) {
    optimizarImagenes(lista);
    if ('MutationObserver' in window) {
      new MutationObserver(function () { optimizarImagenes(lista); })
        .observe(lista, { childList: true, subtree: true });
    }
  }

  /* 3. Galería accesible con teclado (Enter o espacio) */
  document.querySelectorAll('.miniaturas .thumb').forEach(function (thumb) {
    thumb.setAttribute('tabindex', '0');
    thumb.setAttribute('role', 'button');
    thumb.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        thumb.click();
      }
    });
  });
})();
