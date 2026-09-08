// components/catalog/SectionHeader.jsx
try { (() => {
function SectionHeader({
  kicker,
  title,
  description,
  align = 'left'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      maxWidth: '640px',
      margin: align === 'center' ? '0 auto' : 0
    }
  }, kicker && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--gold-600)',
      marginBottom: '8px'
    }
  }, kicker), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-display-l)',
      color: 'var(--maroon-500)',
      margin: 0,
      lineHeight: 'var(--leading-tight)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-l)',
      color: 'var(--text-secondary)',
      marginTop: '12px',
      lineHeight: 'var(--leading-normal)'
    }
  }, description));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/SectionHeader.jsx", error: String((e && e.message) || e) }); }
