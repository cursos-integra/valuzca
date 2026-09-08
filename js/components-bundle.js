/* @ds-bundle: {"format":4,"namespace":"ValuzcaCandlesDesignSystem_b6f9f1","components":[{"name":"WhatsAppButton","sourcePath":"components/actions/WhatsAppButton.jsx"},{"name":"CategoryTab","sourcePath":"components/catalog/CategoryTab.jsx"},{"name":"PriceBlock","sourcePath":"components/catalog/PriceBlock.jsx"},{"name":"ProductCard","sourcePath":"components/catalog/ProductCard.jsx"},{"name":"SectionHeader","sourcePath":"components/catalog/SectionHeader.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/actions/WhatsAppButton.jsx":"55b845e85823","components/catalog/CategoryTab.jsx":"63760f3f47ef","components/catalog/PriceBlock.jsx":"2c75a85eac83","components/catalog/ProductCard.jsx":"26ffcbb746ec","components/catalog/SectionHeader.jsx":"40236578924c","components/core/Badge.jsx":"089b75b7857c","components/core/Button.jsx":"d7165b1a88ae","components/core/Tag.jsx":"865d2715647b","ui_kits/catalog/App.jsx":"63f47699f8e5","ui_kits/catalog/data.js":"5cb2fb266515"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ValuzcaCandlesDesignSystem_b6f9f1 = window.ValuzcaCandlesDesignSystem_b6f9f1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

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

// components/catalog/PriceBlock.jsx
try { (() => {
function PriceBlock({
  unit,
  bulk,
  bulkQty = 12,
  note
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '26px',
      fontWeight: 600,
      color: 'var(--maroon-500)'
    }
  }, unit), bulk && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body-s)',
      color: 'var(--text-secondary)'
    }
  }, bulk, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-300)'
    }
  }, "\xB7 desde ", bulkQty, " unidades")), note && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '4px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "outline"
  }, note)));
}
Object.assign(__ds_scope, { PriceBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/catalog/PriceBlock.jsx", error: String((e && e.message) || e) }); }

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

// ui_kits/catalog/App.jsx
try { (() => {
const {
  useState
} = React;
const NS = window.ValuzcaCandlesDesignSystem_b6f9f1;
function Header({
  onHome
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      background: 'var(--surface-page)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '14px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onHome,
    style: {
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '22px',
      color: 'var(--maroon-500)',
      display: 'flex',
      alignItems: 'baseline',
      gap: '8px'
    }
  }, "Valuzca Candles", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: '15px',
      color: 'var(--gold-600)',
      fontWeight: 600
    }
  }, "Shine your life")), /*#__PURE__*/React.createElement(NS.WhatsAppButton, {
    label: "3123672651",
    size: "m"
  }));
}
function Hero() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '56px 24px 40px',
      textAlign: 'center',
      background: 'linear-gradient(180deg, var(--cream-100), var(--surface-page))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--gold-600)'
    }
  }, "Cat\xE1logo premium \xB7 Julio 2026"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-display-xl)',
      color: 'var(--maroon-500)',
      margin: '10px 0',
      lineHeight: 1.05
    }
  }, "Detalles que iluminan", /*#__PURE__*/React.createElement("br", null), "momentos especiales"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--text-secondary)',
      maxWidth: '520px',
      margin: '0 auto 22px',
      fontSize: 'var(--text-body-l)',
      lineHeight: 1.6
    }
  }, "Velas artesanales premium, elaboradas a mano con materiales seleccionados. Cada pieza es \xFAnica."), /*#__PURE__*/React.createElement(NS.WhatsAppButton, {
    size: "l",
    message: "Hola, quiero ver el cat\xE1logo de Valuzca Candles",
    label: "Habla con nosotros"
  }));
}
function CategoryRail({
  categories,
  active,
  onSelect
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      overflowX: 'auto',
      padding: '18px 24px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, categories.map(c => /*#__PURE__*/React.createElement(NS.CategoryTab, {
    key: c.cat,
    active: active === c.cat,
    onClick: () => onSelect(c.cat)
  }, c.cat)));
}
function CategorySection({
  section,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '40px 24px'
    },
    id: section.cat
  }, /*#__PURE__*/React.createElement(NS.SectionHeader, {
    kicker: section.kicker,
    title: section.cat,
    description: section.desc
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
      gap: '18px',
      marginTop: '24px'
    }
  }, section.items.map(item => /*#__PURE__*/React.createElement(NS.ProductCard, {
    key: item.name,
    image: '../../assets/products/' + item.img,
    name: item.name,
    description: item.desc,
    unit: item.unit.split(' / ')[0],
    bulk: item.bulk,
    badge: item.badge,
    onClick: () => onOpen(item, section)
  }))));
}
function ProductDetail({
  item,
  section,
  onClose
}) {
  const [scent, setScent] = useState(window.VALUZCA_FRAGRANCES[27]);
  if (!item) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(58,24,16,0.45)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
      padding: '24px'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-l)',
      maxWidth: '860px',
      width: '100%',
      maxHeight: '90vh',
      overflow: 'auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      boxShadow: 'var(--shadow-modal)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: '../../assets/products/' + item.img,
    alt: item.name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      minHeight: '320px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px',
      display: 'flex',
      flexDirection: 'column',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      alignSelf: 'flex-end',
      border: 'none',
      background: 'none',
      color: 'var(--text-secondary)',
      cursor: 'pointer',
      fontSize: '20px'
    }
  }, "\xD7"), item.badge && /*#__PURE__*/React.createElement(NS.Badge, {
    tone: "gold"
  }, item.badge), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-display-m)',
      color: 'var(--maroon-500)',
      margin: 0
    }
  }, item.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--text-secondary)',
      margin: 0,
      lineHeight: 1.6
    }
  }, item.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-s)',
      color: 'var(--ink-500)'
    }
  }, item.measures), /*#__PURE__*/React.createElement(NS.PriceBlock, {
    unit: item.unit.split(' / ')[0],
    bulk: item.bulk
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--ink-500)',
      marginBottom: '8px'
    }
  }, "Fragancia"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      maxHeight: '96px',
      overflow: 'auto'
    }
  }, window.VALUZCA_FRAGRANCES.slice(0, 12).map(f => /*#__PURE__*/React.createElement(NS.Tag, {
    key: f,
    selected: scent === f,
    onClick: () => setScent(f)
  }, f)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '8px'
    }
  }, /*#__PURE__*/React.createElement(NS.WhatsAppButton, {
    size: "l",
    label: "Pedir por WhatsApp",
    message: `Hola, quiero pedir: ${item.name} (fragancia: ${scent})`
  })))));
}
function CustomOrderBanner() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      margin: '48px 24px',
      padding: '40px',
      borderRadius: 'var(--radius-l)',
      background: 'var(--maroon-500)',
      color: 'var(--text-on-brand)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color: 'var(--gold-300)'
    }
  }, "Velas personalizadas"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-display-l)',
      margin: '10px 0'
    }
  }, "\xBFTienes una idea exclusiva?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      maxWidth: '480px',
      margin: '0 auto 22px',
      opacity: 0.9,
      lineHeight: 1.6
    }
  }, "Env\xEDanos tu idea, la revisamos y la cotizamos. Personaliza aroma, colores, presentaci\xF3n y empaque."), /*#__PURE__*/React.createElement(NS.Button, {
    variant: "primary",
    size: "l",
    onClick: () => window.open('https://wa.me/573123672651?text=' + encodeURIComponent('Hola, tengo una idea para una vela personalizada'), '_blank')
  }, "Cotizar dise\xF1o exclusivo"));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '32px 24px',
      textAlign: 'center',
      borderTop: '1px solid var(--border-subtle)',
      fontFamily: 'var(--font-body)',
      color: 'var(--ink-500)',
      fontSize: 'var(--text-body-s)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: '26px',
      color: 'var(--gold-600)',
      marginBottom: '6px'
    }
  }, "Shine your life"), "Pedidos bajo solicitud \xB7 50% de anticipo \xB7 5\u201310 d\xEDas h\xE1biles \xB7 WhatsApp 3123672651");
}
function App() {
  const catalog = window.VALUZCA_CATALOG;
  const [active, setActive] = useState(catalog[0].cat);
  const [detail, setDetail] = useState(null);
  const select = cat => {
    setActive(cat);
    document.getElementById(cat)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    onHome: () => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(CategoryRail, {
    categories: catalog,
    active: active,
    onSelect: select
  }), catalog.map(section => /*#__PURE__*/React.createElement(CategorySection, {
    key: section.cat,
    section: section,
    onOpen: (item, sec) => setDetail({
      ...item,
      section: sec.cat
    })
  })), /*#__PURE__*/React.createElement(CustomOrderBanner, null), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(ProductDetail, {
    item: detail,
    onClose: () => setDetail(null)
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/catalog/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/catalog/data.js
try { (() => {
window.VALUZCA_CATALOG = [{
  cat: 'Velas con envase',
  kicker: 'Velas con envase',
  desc: 'Piezas decorativas y aromatizantes para espacios cálidos y regalos especiales.',
  items: [{
    name: 'Aura de Calma',
    desc: 'Vela de masaje con aceite de coco y karité. Nutre la piel, relaja el cuerpo y crea conexión.',
    img: 'aura-de-calma.png',
    unit: '$36.000',
    bulk: '$34.000',
    measures: 'Alto 7 cm · Diámetro 6 cm · Peso 81 gr'
  }, {
    name: 'Wax Melt',
    desc: 'Figura derretible aromatizante para pebetero.',
    img: 'aura-de-calma.png',
    unit: '$24.000',
    bulk: '$20.000 (24+)',
    measures: 'Ancho 5 cm · Largo 7 cm',
    note: 'Combo con pebetero $44.000'
  }, {
    name: 'Serene Floral',
    desc: 'Vela decorativa aromatizante, un detalle floral cálido.',
    img: 'serene-floral.png',
    unit: '$35.000',
    bulk: '$33.000',
    measures: 'Alto 5 cm · Diámetro 6 cm'
  }, {
    name: 'Luz Interior',
    desc: 'Para ambientes íntimos donde la luz y el aroma hacen el trabajo pesado.',
    img: 'serene-floral.png',
    unit: '$43.000',
    bulk: '$41.000',
    measures: 'Alto 4 cm · Diámetro 10 cm'
  }, {
    name: 'Pétalo de Seda',
    desc: 'Pieza delicada, femenina y luminosa.',
    img: 'petalo-de-seda.png',
    unit: '$45.000',
    bulk: '$43.000',
    measures: 'Alto 9 cm · Diámetro 8 cm'
  }, {
    name: 'Vela Origen',
    desc: 'Sobria, para espacios con carácter y estilo.',
    img: 'vela-marmol.png',
    unit: '$45.000',
    bulk: '$43.000',
    measures: 'Alto 9 cm · Diámetro 8 cm'
  }, {
    name: 'Vela Mármol',
    desc: 'Acabado limpio, elegante y con movimiento visual.',
    img: 'vela-marmol.png',
    unit: '$40.000',
    bulk: '$38.000',
    measures: 'Alto 9 cm · Diámetro 8 cm'
  }]
}, {
  cat: 'Ramos',
  kicker: 'Ramos',
  desc: 'Bouquets artesanales en vela para regalos con presencia y delicadeza.',
  items: [{
    name: 'Bouquet Swit Romance',
    desc: 'Un ramo en vela para convertir un regalo en un recuerdo especial.',
    img: 'bouquet-swit-romance.png',
    unit: '$120.000',
    bulk: '$115.000',
    measures: 'Alto 12 cm · Diámetro 15 cm',
    badge: 'Bajo pedido'
  }, {
    name: 'Bouquet Encanto Rosé',
    desc: 'Detalle romántico y delicado para fechas especiales.',
    img: 'bouquet-encanto-rose.png',
    unit: '$55.000',
    bulk: '$53.000',
    measures: 'Alto 9 cm · Diámetro 8 cm'
  }]
}, {
  cat: 'Velas tipo postre',
  kicker: 'Velas tipo postre',
  desc: 'Diseños inspirados en postres y bebidas, únicamente decorativos.',
  items: [{
    name: 'Chantilly Blue',
    desc: 'Dulzura visual — decorativa, no comestible.',
    img: 'chantilly-blue.png',
    unit: '$45.000',
    bulk: '$43.000',
    measures: 'Alto 7 cm · Diámetro 5.5 cm'
  }, {
    name: 'Vela Latte',
    desc: 'Aire de cafetería y aroma de hogar.',
    img: 'chantilly-blue.png',
    unit: '$50.000 / $28.000',
    bulk: 'grande y pequeño',
    measures: 'Grande 9×8 cm · Pequeño 7×6 cm'
  }]
}, {
  cat: 'Velas decorativas',
  kicker: 'Velas decorativas',
  desc: 'Formas suaves y acabados elegantes para mesas, regalos y ambientación.',
  items: [{
    name: 'Corazón Inclinado',
    desc: 'Corazón suave para detalles románticos o regalos personalizados.',
    img: 'corazon-inclinado.png',
    unit: '$35.000',
    bulk: '$32.000',
    measures: 'Alto 6 cm · Diámetro 7 cm'
  }, {
    name: 'Aura Dorada',
    desc: 'Toque dorado y cálido para mesas y regalos.',
    img: 'aura-dorada.png',
    unit: '$65.000 / $55.000',
    bulk: 'grande y mediana',
    measures: 'Grande 9×10 cm · Mediana 8×8.5 cm'
  }]
}, {
  cat: 'Velas de molde',
  kicker: 'Velas de molde',
  desc: 'Figuras decorativas para recuerdos, celebraciones y detalles simbólicos.',
  items: [{
    name: 'Vela Cruz',
    desc: 'Detalle simbólico y decorativo para ocasiones especiales.',
    img: 'vela-cruz.png',
    unit: '$25.000',
    bulk: '$23.000',
    measures: 'Alto 9.5 cm · Diámetro 7 cm'
  }, {
    name: 'Vela Virgencitas',
    desc: 'Pieza devocional delicada para obsequios y recuerdos.',
    img: 'vela-virgencitas.png',
    unit: '$12.000 / $15.000',
    bulk: 'sin / con fragancia',
    measures: 'Alto 7 cm · Ancho 4 cm'
  }]
}, {
  cat: 'Baby shower y pequeños encantos',
  kicker: 'Baby shower & encantos',
  desc: 'Recuerdos tiernos para baby shower, bautizos y celebraciones infantiles.',
  items: [{
    name: 'Luz de Ángel',
    desc: 'Recuerdos tiernos de baby shower, bautizos o celebraciones familiares.',
    img: 'luz-de-angel-1.png',
    unit: '$15.000 / $18.000',
    bulk: 'sin / con fragancia',
    measures: 'Alto 6 cm · Ancho 4 cm'
  }, {
    name: 'Alas de Esperanza',
    desc: 'Detalle sereno para recuerdos con significado y ternura.',
    img: 'alas-de-esperanza.png',
    unit: '$20.000 / $23.000',
    bulk: 'sin / con fragancia',
    measures: 'Alto 7 cm · Ancho 7 cm'
  }, {
    name: 'Colección Pequeños Encantos',
    desc: 'Para celebrar la llegada de momentos dulces y memorables.',
    img: 'pequenos-encantos.png',
    unit: '$20.000 / $23.000',
    bulk: 'sin / con fragancia',
    measures: 'Alto 8 cm · Ancho 6 cm'
  }, {
    name: 'Leoncín Vela',
    desc: 'Recuerdo infantil con presencia tierna y acabado artesanal.',
    img: 'leoncin-vela.png',
    unit: '$10.000 / $13.000',
    bulk: 'sin / con fragancia',
    measures: 'Grande 6×4.7 cm · Pequeño 4.5×2 cm'
  }, {
    name: 'Osi Vela',
    desc: 'Osito decorativo para recuerdos suaves y regalables.',
    img: 'osi-vela-1.png',
    unit: '$10.000 / $13.000',
    bulk: 'sin / con fragancia',
    measures: 'Alto 5 cm · Ancho 3.5 cm'
  }, {
    name: 'Osito de Luna',
    desc: 'Pieza tierna para recuerdos de nacimiento.',
    img: 'osito-de-luna.png',
    unit: '$28.000 / $30.000',
    bulk: 'sin / con fragancia',
    measures: 'Alto 7.8 cm · Ancho 6.4 cm'
  }, {
    name: 'Vela Crayola',
    desc: 'Colorida y alegre para detalles infantiles o creativos.',
    img: 'vela-crayola.png',
    unit: '$24.000 / $27.000',
    bulk: 'sin / con fragancia',
    measures: 'Alto 10 cm · Ancho 3.5 cm'
  }]
}, {
  cat: 'Mascotas',
  kicker: 'Mascotas',
  desc: 'Detalles dulces inspirados en huellitas y compañeros de cuatro patas.',
  items: [{
    name: 'Huellitas del Corazón',
    desc: 'Tres huellitas y base en parafina, para incluir a tus peluditos.',
    img: 'huellitas-del-corazon.png',
    unit: '$10.000 / $13.000',
    bulk: 'sin / con fragancia',
    measures: 'Diámetro 7 cm'
  }, {
    name: 'Patitas con Encanto I y II',
    desc: 'Detalle tierno para amantes de perros y gatos.',
    img: 'patitas-con-encanto-1.png',
    unit: '$12.000 / $15.000',
    bulk: 'sin / con fragancia',
    measures: 'Huella 5×5 cm'
  }]
}, {
  cat: 'Velas esotéricas o místicas',
  kicker: 'Esotéricas o místicas',
  desc: 'Figuras decorativas para espacios de calma, intención y armonía.',
  items: [{
    name: 'Dos Esencias',
    desc: 'Para decorar espacios de pausa, intención y equilibrio.',
    img: 'dos-esencias.png',
    unit: '$22.000 / $24.000',
    bulk: 'sin / con fragancia',
    measures: 'Diámetro 7 cm'
  }, {
    name: 'Energía Sagrada',
    desc: 'Figura decorativa para ambientes con intención, calma y presencia.',
    img: 'energia-sagrada.png',
    unit: '$22.000 / $24.000',
    bulk: 'sin / con fragancia',
    measures: 'Alto 8.5 cm · Ancho 6 cm'
  }, {
    name: 'Árbol de la Vida',
    desc: 'Para espacios que buscan naturaleza, textura y armonía.',
    img: 'arbol-de-la-vida.png',
    unit: '$25.000 / $28.000',
    bulk: 'sin / con fragancia',
    measures: 'Alto 8 cm · Ancho 7.5 cm'
  }]
}, {
  cat: 'Tabletas aromáticas',
  kicker: 'Tabletas aromáticas',
  desc: 'Piezas para aromatizar espacios pequeños con una presentación delicada.',
  items: [{
    name: 'Tableta Aromática',
    desc: 'Para aromatizar baños y clósets. No apta para vehículos.',
    img: 'tableta-aromatica.png',
    unit: '$25.000',
    bulk: '$23.000',
    measures: 'Largo 9 cm · Ancho 5 cm'
  }]
}];
window.VALUZCA_FRAGRANCES = ['Bambú', 'Cedro', 'Citronela', 'Cuero', 'Crema de Chocolate', 'Especias de Calabaza', 'Galleta', 'Granada con Flor de Loto', 'Guayaba', 'Lavanda Francesa', 'Licor de Frambuesa', 'Lychee', 'Licor de Pera', 'Limonello Fresh', 'Mango Attraction', 'Toronja', 'Sandía Plus', 'Sandía Lover', 'Pomelo', 'Vainilla Floral', 'Vainilla Francesa', 'Verbena y Bergamota', 'Naranja - Vainilla', 'Pino', 'Piña Colada', 'Rosas', 'Sándalo', 'Vainilla', 'Lavanda', 'Mandarina', 'Manzana', 'Manzana - Canela', 'Manzanilla', 'Maracuyá', 'Menta Fresca', 'Naranja', 'Palo Santo', 'Bebé', 'Brisa Marina', 'Canela', 'Coco', 'Café', 'Chocolate', 'Eucalipto', 'Frutos Rojos', 'Frutos Verdes', 'Jazmín'];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/catalog/data.js", error: String((e && e.message) || e) }); }

__ds_ns.WhatsAppButton = __ds_scope.WhatsAppButton;

__ds_ns.CategoryTab = __ds_scope.CategoryTab;

__ds_ns.PriceBlock = __ds_scope.PriceBlock;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Tag = __ds_scope.Tag;

})();
