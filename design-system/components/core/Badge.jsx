// components/core/Badge.jsx
try { (() => {
const tones = {
  gold: {
    background: 'var(--gold-100)',
    color: 'var(--gold-700)',
    border: '1px solid var(--gold-300)'
  },
  maroon: {
    background: 'var(--cream-100)',
    color: 'var(--maroon-500)',
    border: '1px solid var(--border-strong)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--ink-700)',
    border: '1px solid var(--border-subtle)'
  }
};
function Badge({
  children,
  tone = 'gold'
}) {
  const t = tones[tone] || tones.gold;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      ...t
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }
