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
