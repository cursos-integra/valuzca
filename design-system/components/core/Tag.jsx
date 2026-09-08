// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  selected = false,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-s)',
      fontWeight: 500,
      padding: '8px 16px',
      borderRadius: 'var(--radius-pill)',
      cursor: onClick ? 'pointer' : 'default',
      border: selected ? '1px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
      background: selected ? 'var(--gold-100)' : 'var(--surface-card)',
      color: selected ? 'var(--gold-700)' : 'var(--text-secondary)',
      transition: 'all var(--duration-fast) var(--ease-standard)'
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }
