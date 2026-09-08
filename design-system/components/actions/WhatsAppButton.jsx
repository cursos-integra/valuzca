// components/actions/WhatsAppButton.jsx
try { (() => {
function WhatsAppButton({
  phone = '3123672651',
  message = 'Hola, quiero más información',
  label = 'Pedir por WhatsApp',
  size = 'm'
}) {
  const [hover, setHover] = React.useState(false);
  const href = `https://wa.me/57${phone}?text=${encodeURIComponent(message)}`;
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noreferrer",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      textDecoration: 'none',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: size === 'l' ? 'var(--text-body-l)' : 'var(--text-body-m)',
      padding: size === 'l' ? '15px 30px' : '11px 22px',
      borderRadius: 'var(--radius-pill)',
      background: hover ? 'var(--accent-primary-hover)' : 'var(--accent-primary)',
      color: 'var(--text-on-brand)',
      transform: hover ? 'translateY(-1px)' : 'none',
      transition: 'all var(--duration-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.14.82.84-3.06-.2-.31a8.22 8.22 0 0 1-1.26-4.35c0-4.55 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.82c0 4.55-3.7 8.24-8.24 8.24zm4.53-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.8-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01-.16 0-.44.06-.67.31-.23.25-.87.86-.87 2.09 0 1.23.9 2.42 1.02 2.59.12.17 1.76 2.68 4.26 3.76.6.26 1.06.41 1.43.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.17-.48-.29z"
  })), label);
}
Object.assign(__ds_scope, { WhatsAppButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/WhatsAppButton.jsx", error: String((e && e.message) || e) }); }
