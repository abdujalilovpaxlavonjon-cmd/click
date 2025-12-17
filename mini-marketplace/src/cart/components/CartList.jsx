import { CartItem } from "./CartItem.jsx";

export function CartList({ items, onRemove }) {
  if (!items.length) {
    return <div className="status">Cart is empty. Add something 🙂</div>;
  }

  return (
    <div>
      {items.map((item) => (
        <CartItem key={item.id} item={item} onRemove={onRemove} />
      ))}
    </div>
  );
}
