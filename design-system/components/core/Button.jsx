// components/core/Button.jsx
try { (() => {
const sizes = {
  m: {
    padding: '11px 22px',
    fontSize: 'var(--text-body-m)'
  },
  l: {
    padding: '14px 30px',
    fontSize: 'var(--text-body-l)'
  }
};
const variants = {
  primary: {
    background: 'var(--accent-primary)',
    color: 'var(--text-on-brand)',
    border: '1px solid var(--accent-primary)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--accent-secondary)',
    border: '1px solid var(--accent-secondary)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid transparent'
  }
};
const hoverBg = {
  primary: 'var(--accent-primary-hover)',
  secondary: 'var(--maroon-500)',
  ghost: 'var(--surface-sunken)'
};
function Button({
  children,
  variant = 'primary',
  size = 'm',
  disabled = false,
  onClick,
  style
}) {
  const v = variants[variant] || variants.primary;
  const s = sizes[size] || sizes.m;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    disabled: disabled,
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      letterSpacing: '0.02em',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
      opacity: disabled ? 0.45 : 1,
      transform: hover && !disabled ? 'translateY(-1px)' : 'none',
      ...v,
      ...s,
      ...(hover && !disabled ? {
        background: variant === 'ghost' ? hoverBg.ghost : hoverBg[variant],
        color: variant === 'secondary' ? 'var(--text-on-brand)' : v.color,
        borderColor: variant === 'secondary' ? 'var(--maroon-500)' : v.border
      } : {}),
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }
