# Valuzca Candles — sitio web

Landing page de catálogo para Valuzca (velas artesanales), diseñada originalmente en Claude Design.

## Estructura

- **`index.html`** — el sitio funcional y autocontenido tal como se exportó desde Claude Design. Es una sola página que se puede abrir directamente en el navegador o publicar tal cual (por ejemplo en GitHub Pages): no requiere build ni dependencias externas más allá de React/ReactDOM vía CDN.
- **`design-system/`** — el código fuente legible de los componentes React y los datos del catálogo, extraídos del bundle para poder editarlos de forma "formal" en Claude Code:
  - `components/core/` — `Badge`, `Button`, `Tag`
  - `components/catalog/` — `CategoryTab`, `PriceBlock`, `ProductCard`, `SectionHeader`
  - `components/actions/` — `WhatsAppButton`
  - `ui_kits/catalog/App.jsx` — layout de la página (Header, Hero, secciones del catálogo)
  - `ui_kits/catalog/data.js` — catálogo de productos y lista de fragancias (nombres, precios, descripciones)
  - `tokens.css` — variables de diseño (colores, tipografías, espaciados)

`design-system/` es la referencia de trabajo: no está todavía conectado a un build (Vite/webpack), así que para ver cambios reflejados en `index.html` hay que reconstruir el export desde Claude Design o migrar el proyecto a un setup de build propio.

## Próximos pasos sugeridos

- Definir si el sitio se queda como HTML estático (más simple, ya funcional) o se migra a un proyecto React con build (Vite) usando `design-system/` como base.
- Configurar despliegue (GitHub Pages u otro hosting) apuntando a `index.html`.
