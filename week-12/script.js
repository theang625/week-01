const products = [
  {
    id: 1,
    name: "Keyboard",
    price: 25.5,
  },
  {
    id: 2,
    name: "Mouse",
    price: 12.0,
  },
  {
    id: 3,
    name: "Monitor",
    price: 149.99,
  },
  {
    id: 4,
    name: "USB Hub",
    price: 18.75,
  },
  {
    id: 5,
    name: "CPU",
    price: 120.0,
  }
]; 

let cart = JSON.parse(localStorage.getItem("iteShopCart")) || [];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");

function renderProducts() {
  productList.innerHTML = products
    .map(
      (product) => `
    <div class="col-md-6">
      <div class="card product-card shadow-sm h-100">

        <div class="card-body d-flex flex-column">
          <h2 class="card-title">
            ${product.name}
          </h2>

          <p class="product-price mb-4">
            $${product.price.toFixed(2)}
          </p>

          <button
            class="btn btn-primary mt-auto align-self-start"
            onclick="addToCart(${product.id})"
          >
            Add to cart
          </button>
        </div>

      </div>
    </div>
  `,
    )
    .join("");
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);

  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  saveCart();
  renderCart();
}

function increaseQuantity(productId) {
  const item = cart.find((product) => product.id === productId);

  if (item) {
    item.quantity++;
    saveCart();
    renderCart();
  }
}

function decreaseQuantity(productId) {
  const item = cart.find((product) => product.id === productId);

  if (!item) {
    return;
  }

  item.quantity--;

  if (item.quantity <= 0) {
    cart = cart.filter((product) => product.id !== productId);
  }

  saveCart();
  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter((product) => product.id !== productId);

  saveCart();
  renderCart();
}

function clearCart() {
  cart = [];

  saveCart();
  renderCart();
}

function saveCart() {
  localStorage.setItem("iteShopCart", JSON.stringify(cart));
}

function renderCart() {
  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="list-group-item text-muted">
        Cart is empty
      </div>
    `;
  } else {
    cartItems.innerHTML = cart
      .map(
        (item) => `
      <div class="list-group-item">

        <div class="d-flex justify-content-between align-items-start gap-3">
          <div>
            <div class="cart-item-name">
              ${item.name}
            </div>

            <small class="text-muted">
              $${item.price.toFixed(2)} each
            </small>
          </div>

          <button
            class="btn btn-sm btn-outline-danger"
            onclick="removeFromCart(${item.id})"
          >
            Remove
          </button>
        </div>

        <div class="d-flex justify-content-between align-items-center mt-3">

          <div class="quantity-control">
            <button
              class="btn btn-sm btn-outline-secondary"
              onclick="decreaseQuantity(${item.id})"
            >
              −
            </button>

            <span class="quantity-number">
              ${item.quantity}
            </span>

            <button
              class="btn btn-sm btn-outline-secondary"
              onclick="increaseQuantity(${item.id})"
            >
              +
            </button>
          </div>

          <strong>
            $${(item.price * item.quantity).toFixed(2)}
          </strong>

        </div>
      </div>
    `,
      )
      .join("");

    cartItems.innerHTML += `
      <div class="list-group-item">
        <button
          class="btn btn-danger btn-sm w-100"
          onclick="clearCart()"
        >
          Clear Cart
        </button>
      </div>
    `;
  }

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  cartCount.textContent = totalQuantity;
  cartTotal.textContent = totalPrice.toFixed(2);
}

renderProducts();
renderCart();