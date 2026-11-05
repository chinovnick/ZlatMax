//nazar
const API_URL = "products.json";

const CARD_TYPES = {
  ".product": {
    img: ".product-img",
    title: ".product-name",
    brand: ".product-brand",
    desc: ".product-description",
    reviews: ".review-count",
    price: ".price",
    button: ".buy-button",
  },
  ".hike-card": {
    img: ".hike-card-image img",
    title: ".hike-card-title",
    meta: ".hike-card-minitext", 
    reviews: ".hike-card-rating",
    price: ".hike-card-price",
    button: ".hike-card-btn",
  },
  ".sale-card": {
    img: ".sale-card-image img",
    title: ".sale-card-title",
    meta: ".sale-card-meta",
    reviews: ".sale-card-reviews",
    price: ".sale-card-price",
    button: ".sale-card-btn",
  },
  ".cntrlc-card": {
    img: ".cntrlc-card-image img",
    title: ".cntrlc-card-title",
    meta: ".cntrlc-card-meta",
    reviews: ".cntrlc-card-reviews",
    price: ".cntrlc-card-price",
    button: ".cntrlc-card-btn",
  },
};

const cart = []; // кошик (в пам'яті)

function setText(root, selector, text) {
  const el = selector && root.querySelector(selector);
  if (el) el.textContent = text;
}

function fillCard(card, p, sel) {
  const img = card.querySelector(sel.img);
  if (img) {
    img.src = p.image;
    img.alt = p.name;
  }
  setText(card, sel.title, p.name);
  setText(card, sel.brand, p.brand);
  setText(card, sel.desc, p.descriptionShort);
  setText(card, sel.price, p.priceFormatted);

  if (sel.meta) {
    const spans = card.querySelectorAll(sel.meta + " span");
    if (spans[0]) spans[0].textContent = p.brand;
    if (spans[1]) spans[1].textContent = p.descriptionShort;
  }

  const reviews = p.reviewsCount + " відгуків";
  const reviewsEl = card.querySelector(sel.reviews);
  if (reviewsEl) {
    reviewsEl.textContent = reviewsEl.matches(".hike-card-rating")
      ? "⭐⭐⭐⭐⭐ " + reviews
      : reviews;
  }

  const btn = card.querySelector(sel.button);
  if (btn) {
    btn.addEventListener("click", () => {
      cart.push(p.id);
      console.log("У кошику:", cart);
    });
  }
}

async function loadProducts() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    const byId = new Map(data.map((p) => [p.id, p]));

    for (const [cardSelector, sel] of Object.entries(CARD_TYPES)) {
      document.querySelectorAll(cardSelector + "[data-id]").forEach((card) => {
        const p = byId.get(Number(card.dataset.id));
        if (p) fillCard(card, p, sel);
        else console.warn("Товар не знайдено, id =", card.dataset.id);
      });
    }
  } catch (err) {
    console.error("Не вдалося завантажити товари:", err);
  }
}

loadProducts();
