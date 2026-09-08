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
