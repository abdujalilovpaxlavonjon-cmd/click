const API_URL = "https://fakestoreapi.com/products";

function money(n) {
  return `$${Number(n).toFixed(2)}`;
}

function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product";

  const img = document.createElement("img");
  img.className = "product__img";
  img.src = product.image;
  img.alt = product.title;

  const right = document.createElement("div");

  const title = document.createElement("h3");
  title.className = "product__title";
  title.textContent = product.title;

  const price = document.createElement("p");
  price.className = "product__price muted";
  price.textContent = `Price: ${money(product.price)}`;

  const btn = document.createElement("button");
  btn.className = "btn btn--primary";
  btn.textContent = "Add to cart";
  btn.addEventListener("click", () => {
    window.dispatchEvent(
      new CustomEvent("cart:add", { detail: product })
    );
  });

  right.append(title, price, btn);
  card.append(img, right);

  return card;
}

export async function initProducts() {
  const status = document.getElementById("products-status");
  const root = document.getElementById("products");

  try {
    status.textContent = "Loading products...";
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("API error: " + res.status);

    const products = await res.json();

    root.innerHTML = "";
    products.forEach((p) => root.appendChild(createProductCard(p)));
    status.textContent = `Loaded ${products.length} products`;
  } catch (e) {
    status.textContent = "Failed to load products. Please try again later.";
    console.error(e);
  }
}
