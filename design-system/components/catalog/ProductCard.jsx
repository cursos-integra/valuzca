// components/catalog/ProductCard.jsx
try { (() => {
function ProductCard({
  image,
  name,
  description,
  unit,
  bulk,
  badge,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-l)',
      overflow: 'hidden',
      cursor: onClick ? 'pointer' : 'default',
      boxShadow: hover ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
      transform: hover ? 'translateY(-3px)' : 'none',
      transition: 'all var(--duration-normal) var(--ease-standard)',
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4/3',
      background: 'var(--cream-100)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '12px',
      left: '12px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "gold"
  }, badge))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-display-s)',
      color: 'var(--maroon-500)',
      margin: 0
    }
  }, name), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-s)',
      color: 'var(--text-secondary)',
      margin: 0,
      lineHeight: 'var(--leading-normal)'
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '4px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PriceBlock, {
    unit: unit,
    bulk: bulk
  }))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/ProductCard.jsx", error: String((e && e.message) || e) }); }
