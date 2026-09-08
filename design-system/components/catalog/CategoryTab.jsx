// components/catalog/CategoryTab.jsx
try { (() => {
function CategoryTab({
  children,
  active = false,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-body-m)',
      padding: '10px 20px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      background: active ? 'var(--maroon-500)' : 'transparent',
      color: active ? 'var(--text-on-brand)' : 'var(--text-secondary)',
      transition: 'all var(--duration-fast) var(--ease-standard)'
    }
  }, children);
}
Object.assign(__ds_scope, { CategoryTab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/CategoryTab.jsx", error: String((e && e.message) || e) }); }
