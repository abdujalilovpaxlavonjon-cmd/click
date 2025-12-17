import { useEffect, useMemo, useState } from "react";
import { CartList } from "./components/CartList.jsx";

const LS_KEY = "mini_marketplace_cart_v1";

function safeLoad() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function safeSave(items) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(items));
  } catch {}
}

export function CartApp() {
  const [cartItems, setCartItems] = useState(() => safeLoad());

  // Save to localStorage whenever cart changes
  useEffect(() => {
    safeSave(cartItems);
  }, [cartItems]);

  // Listen to Vanilla JS events: "cart:add"
  useEffect(() => {
    const onAdd = (e) => {
      const product = e.detail;
      setCartItems((prev) => {
        const existing = prev.find((x) => x.id === product.id);
        if (existing) {
          return prev.map((x) =>
            x.id === product.id ? { ...x, qty: x.qty + 1 } : x
          );
        }
        return [...prev, { ...product, qty: 1 }];
      });
    };

    window.addEventListener("cart:add", onAdd);
    return () => window.removeEventListener("cart:add", onAdd);
  }, []);

  const totalCount = useMemo(
    () => cartItems.reduce((sum, x) => sum + x.qty, 0),
    [cartItems]
  );

  const totalPrice = useMemo(
    () => cartItems.reduce((sum, x) => sum + x.qty * x.price, 0),
    [cartItems]
  );

  function removeItem(id) {
    setCartItems((prev) => prev.filter((x) => x.id !== id));
  }

  function clearCart() {
    setCartItems([]);
  }

  return (
    <div>
      <div className="muted" style={{ marginBottom: 10 }}>
        Items: <b>{totalCount}</b>
      </div>

      <CartList items={cartItems} onRemove={removeItem} />

      <div className="cartSummary">
        <div>
          <div className="muted">Total</div>
          <div style={{ fontSize: 18, fontWeight: 700 }}>
            ${totalPrice.toFixed(2)}
          </div>
        </div>

        <button className="btn btn--danger" onClick={clearCart}>
          Clear cart
        </button>
      </div>
    </div>
  );
}
