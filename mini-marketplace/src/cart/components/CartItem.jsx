function money(n) {
  return `$${Number(n).toFixed(2)}`;
}

export function CartItem({ item, onRemove }) {
  return (
    <div className="cartRow">
      <img className="cartImg" src={item.image} alt={item.title} />
      <div className="cartMeta">
        <h4 title={item.title}>{item.title}</h4>
        <p>
          {money(item.price)} × <b>{item.qty}</b> ={" "}
          <b>{money(item.price * item.qty)}</b>
        </p>
      </div>

      <button className="btn btn--danger" onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </div>
  );
}
