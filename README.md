# Valuzca Candles — sitio web

Landing page de catálogo para Valuzca (velas artesanales), diseñada originalmente en Claude Design.

## Estructura

- **`index.html`** — la página (marcado + estilos + el catálogo de productos como datos JS legibles, todo inline, ~40 KB). Esto es lo que se edita para cambiar textos, precios, descripciones o fragancias del catálogo.
- **`js/`** — scripts de soporte:
  - `vendor/react.production.min.js`, `vendor/react-dom.production.min.js` — React
  - `dc-runtime.js` — motor que monta la página a partir del contenido de `index.html`
  - `components-bundle.js` — componentes de UI reutilizables (botón de WhatsApp, etc.)
  - `omelette-image-slot.js` — utilidad de imágenes (no se usa actualmente en esta página, se dejó por si acaso)
- **`fonts/`** — tipografías (Cormorant Garamond, Poppins, Dancing Script) en `.woff2`
- **`images/`** — fotos del catálogo y fondos, como archivos reales
- **`.nojekyll`** — evita que GitHub Pages procese el sitio con Jekyll

## Por qué está así

El archivo original exportado desde Claude Design era un único `index.html` de ~18 MB que empaquetaba todo (imágenes, fuentes y código) comprimido en Base64, y lo *desempaquetaba en el navegador cada vez que se abría la página* con JavaScript. Eso lo hacía muy lento de cargar (varios minutos en equipos normales, tanto en Netlify como en GitHub Pages).

Esta versión extrae esos mismos recursos a archivos reales (imágenes, fuentes, scripts) y dejó **exactamente el mismo comportamiento y diseño**, pero cargando de forma normal — el navegador ya no tiene que descomprimir nada, solo pedir cada archivo por HTTP. Se probó y carga en ~1 segundo.

## Próximos pasos sugeridos

- Configurar despliegue (GitHub Pages u otro hosting) apuntando a `index.html` — ya debería estar activo si sigues los pasos de `Settings → Pages`.
- Para editar el catálogo (agregar/quitar productos, cambiar precios o fotos), busca el bloque `productData` dentro de `index.html`. Las imágenes referenciadas ahí viven en `images/`.
