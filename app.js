// Application Data
let appData = {
  products: [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      category: "Electronics",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      description: "Premium wireless headphones with noise cancellation and 30-hour battery life.",
      rating: 4.5,
      reviews: 234,
      stock: 15,
      features: ["Noise Cancellation", "30hr Battery", "Bluetooth 5.0"]
    },
    {
      id: 2,
      name: "Cotton T-Shirt",
      category: "Clothing",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      description: "100% organic cotton t-shirt, comfortable and breathable.",
      rating: 4.2,
      reviews: 156,
      stock: 50,
      features: ["Organic Cotton", "Machine Washable", "Multiple Colors"]
    },
    {
      id: 3,
      name: "JavaScript: The Good Parts",
      category: "Books",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400",
      description: "Essential guide to JavaScript programming best practices.",
      rating: 4.7,
      reviews: 89,
      stock: 25,
      features: ["Programming", "Web Development", "Best Practices"]
    },
    {
      id: 4,
      name: "Smart LED Desk Lamp",
      category: "Home & Garden",
      price: 45.99,
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400",
      description: "Adjustable LED desk lamp with USB charging port and multiple brightness levels.",
      rating: 4.3,
      reviews: 178,
      stock: 30,
      features: ["USB Charging", "Adjustable", "Energy Efficient"]
    },
    {
      id: 5,
      name: "Wireless Gaming Mouse",
      category: "Electronics",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
      description: "High-precision wireless gaming mouse with customizable RGB lighting.",
      rating: 4.6,
      reviews: 312,
      stock: 20,
      features: ["RGB Lighting", "High DPI", "Wireless"]
    },
    {
      id: 6,
      name: "Denim Jacket",
      category: "Clothing",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400",
      description: "Classic denim jacket with vintage wash and comfortable fit.",
      rating: 4.4,
      reviews: 92,
      stock: 35,
      features: ["Vintage Wash", "Classic Fit", "Cotton Blend"]
    },
    {
      id: 7,
      name: "Indoor Plant Set",
      category: "Home & Garden",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400",
      description: "Set of 3 low-maintenance indoor plants perfect for home decoration.",
      rating: 4.1,
      reviews: 145,
      stock: 40,
      features: ["Low Maintenance", "Air Purifying", "Decorative Pots"]
    },
    {
      id: 8,
      name: "Node.js Cookbook",
      category: "Books",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
      description: "Comprehensive guide to Node.js development with practical examples.",
      rating: 4.5,
      reviews: 67,
      stock: 18,
      features: ["Node.js", "Backend Development", "Practical Examples"]
    }
  ],
  categories: ["Electronics", "Clothing", "Books", "Home & Garden"],
  users: [
    {
      id: 1,
      email: "admin@store.com",
      password: "admin123",
      firstName: "Store",
      lastName: "Admin",
      role: "admin",
      address: "123 Admin St, Admin City, AC 12345",
      phone: "555-0100"
    },
    {
      id: 2,
      email: "user@example.com",
      password: "user123",
      firstName: "John",
      lastName: "Doe",
      role: "customer",
      address: "456 User Ave, User City, UC 67890",
      phone: "555-0200"
    }
  ],
  reviews: [
    {
      productId: 1,
      userId: 2,
      rating: 5,
      comment: "Amazing sound quality and battery life!",
      date: "2025-08-15"
    },
    {
      productId: 2,
      userId: 2,
      rating: 4,
      comment: "Very comfortable and good quality material.",
      date: "2025-08-10"
    },
    {
      productId: 3,
      userId: 2,
      rating: 5,
      comment: "Essential reading for any JavaScript developer.",
      date: "2025-07-25"
    }
  ]
};

// Application State
let appState = {
  currentUser: null,
  cart: [],
  wishlist: [],
  orders: [],
  currentView: 'home',
  searchQuery: '',
  selectedCategory: '',
  currentProduct: null
};

// Utility Functions
function generateId() {
  return Math.max(...appData.users.map(u => u.id), 0) + 1;
}

function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString();
}

function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let stars = '';
  
  for (let i = 0; i < fullStars; i++) {
    stars += '★';
  }
  if (hasHalfStar) {
    stars += '☆';
  }
  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars += '☆';
  }
  
  return stars;
}

// Authentication Functions
function login(email, password) {
  const user = appData.users.find(u => u.email === email && u.password === password);
  if (user) {
    appState.currentUser = user;
    updateUserInterface();
    showNotification('Login successful!', 'success');
    return true;
  }
  return false;
}

function register(userData) {
  // Check if email already exists
  if (appData.users.find(u => u.email === userData.email)) {
    return false;
  }
  
  const newUser = {
    id: generateId(),
    ...userData,
    role: 'customer'
  };
  
  appData.users.push(newUser);
  appState.currentUser = newUser;
  updateUserInterface();
  showNotification('Registration successful!', 'success');
  return true;
}

function logout() {
  appState.currentUser = null;
  appState.cart = [];
  appState.wishlist = [];
  updateUserInterface();
  showNotification('Logged out successfully!', 'success');
  showView('home');
}

function updateUserInterface() {
  const userBtn = document.getElementById('userBtn');
  const userBtnText = document.getElementById('userBtnText');
  const guestMenu = document.getElementById('guestMenu');
  const userLoggedMenu = document.getElementById('userLoggedMenu');
  const adminMenu = document.getElementById('adminMenu');
  
  if (appState.currentUser) {
    userBtnText.textContent = appState.currentUser.firstName;
    guestMenu.classList.add('hidden');
    userLoggedMenu.classList.remove('hidden');
    
    if (appState.currentUser.role === 'admin') {
      adminMenu.classList.remove('hidden');
    } else {
      adminMenu.classList.add('hidden');
    }
  } else {
    userBtnText.textContent = 'Account';
    guestMenu.classList.remove('hidden');
    userLoggedMenu.classList.add('hidden');
    adminMenu.classList.add('hidden');
  }
  
  updateCartCount();
}

// Cart Functions
function addToCart(productId, quantity = 1) {
  const product = appData.products.find(p => p.id === productId);
  if (!product) return false;
  
  const existingItem = appState.cart.find(item => item.productId === productId);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    appState.cart.push({
      productId,
      quantity,
      price: product.price
    });
  }
  
  updateCartCount();
  showNotification('Product added to cart!', 'success');
  return true;
}

function removeFromCart(productId) {
  appState.cart = appState.cart.filter(item => item.productId !== productId);
  updateCartCount();
  renderCartModal();
}

function updateCartQuantity(productId, quantity) {
  const item = appState.cart.find(item => item.productId === productId);
  if (item) {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      item.quantity = quantity;
      updateCartCount();
      renderCartModal();
    }
  }
}

function getCartTotal() {
  return appState.cart.reduce((total, item) => {
    const product = appData.products.find(p => p.id === item.productId);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);
}

function updateCartCount() {
  const cartCount = document.getElementById('cartCount');
  const totalItems = appState.cart.reduce((total, item) => total + item.quantity, 0);
  cartCount.textContent = totalItems;
}

// Product Functions
function getFilteredProducts() {
  let products = [...appData.products];
  
  // Apply category filter
  if (appState.selectedCategory) {
    products = products.filter(p => p.category === appState.selectedCategory);
  }
  
  // Apply search filter
  if (appState.searchQuery) {
    const query = appState.searchQuery.toLowerCase();
    products = products.filter(p => 
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
    );
  }
  
  return products;
}

function addToWishlist(productId) {
  if (!appState.currentUser) {
    showNotification('Please login to add items to wishlist', 'error');
    return;
  }
  
  if (!appState.wishlist.includes(productId)) {
    appState.wishlist.push(productId);
    showNotification('Added to wishlist!', 'success');
  }
}

// Global function to handle product card clicks
window.viewProduct = function(productId) {
  showView('product', productId);
};

// Global function to handle add to cart clicks
window.addProductToCartFromGrid = function(productId, event) {
  if (event) {
    event.stopPropagation();
  }
  addToCart(productId);
};

// Global function to handle wishlist clicks
window.addToWishlistFromGrid = function(productId, event) {
  if (event) {
    event.stopPropagation();
  }
  addToWishlist(productId);
};

// Order Functions
function createOrder(orderData) {
  const order = {
    id: Date.now(),
    userId: appState.currentUser.id,
    items: [...appState.cart],
    total: getCartTotal(),
    status: 'pending',
    date: new Date().toISOString().split('T')[0],
    shippingAddress: orderData.shippingAddress,
    billingAddress: orderData.billingAddress || orderData.shippingAddress
  };
  
  appState.orders.push(order);
  appState.cart = [];
  updateCartCount();
  
  return order;
}

// View Functions
function showView(viewName, data = null) {
  appState.currentView = viewName;
  const mainContent = document.getElementById('mainContent');
  
  switch (viewName) {
    case 'home':
      renderHome();
      break;
    case 'product':
      renderProductDetail(data);
      break;
    case 'checkout':
      renderCheckout();
      break;
    case 'profile':
      renderProfile();
      break;
    case 'orders':
      renderOrders();
      break;
    case 'wishlist':
      renderWishlist();
      break;
    case 'admin':
      renderAdmin();
      break;
    default:
      renderHome();
  }
}

function renderHome() {
  const products = getFilteredProducts();
  const mainContent = document.getElementById('mainContent');
  
  mainContent.innerHTML = `
    <div class="container">
      <section class="products-section">
        <div class="section-header">
          <h2 class="section-title">
            ${appState.selectedCategory ? appState.selectedCategory : 'Featured Products'}
            ${appState.searchQuery ? ` - "${appState.searchQuery}"` : ''}
          </h2>
          <div class="section-meta">
            <span>${products.length} products found</span>
          </div>
        </div>
        <div class="products-grid" id="productsGrid">
          ${products.map(product => `
            <div class="product-card" onclick="viewProduct(${product.id})">
              <img src="${product.image}" alt="${product.name}" class="product-image">
              <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                  <span class="rating-stars">${generateStars(product.rating)}</span>
                  <span class="rating-text">(${product.reviews} reviews)</span>
                </div>
                <div class="product-price">${formatPrice(product.price)}</div>
                <div class="product-actions">
                  <button class="btn btn--primary" onclick="addProductToCartFromGrid(${product.id}, event)">
                    Add to Cart
                  </button>
                  <button class="btn btn--outline btn-icon" onclick="addToWishlistFromGrid(${product.id}, event)" title="Add to Wishlist">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    </div>
  `;
}

function renderProductDetail(productId) {
  const product = appData.products.find(p => p.id === productId);
  if (!product) {
    showView('home');
    return;
  }
  
  appState.currentProduct = product;
  const productReviews = appData.reviews.filter(r => r.productId === productId);
  
  const mainContent = document.getElementById('mainContent');
  mainContent.innerHTML = `
    <div class="container">
      <div class="product-detail">
        <div class="product-detail-image-container">
          <img src="${product.image}" alt="${product.name}" class="product-detail-image">
        </div>
        <div class="product-detail-info">
          <div class="product-category">${product.category}</div>
          <h1>${product.name}</h1>
          <div class="product-rating">
            <span class="rating-stars">${generateStars(product.rating)}</span>
            <span class="rating-text">(${product.reviews} reviews)</span>
          </div>
          <div class="product-detail-price">${formatPrice(product.price)}</div>
          <p class="product-description">${product.description}</p>
          
          <div class="product-features">
            <h4>Features:</h4>
            <div class="features-list">
              ${product.features.map(feature => `
                <span class="feature-tag">${feature}</span>
              `).join('')}
            </div>
          </div>
          
          <div class="quantity-selector">
            <label>Quantity:</label>
            <button class="quantity-btn" onclick="updateQuantity(-1)">-</button>
            <input type="number" class="form-control quantity-input" id="productQuantity" value="1" min="1" max="${product.stock}">
            <button class="quantity-btn" onclick="updateQuantity(1)">+</button>
            <span class="stock-info">${product.stock} in stock</span>
          </div>
          
          <div class="product-actions">
            <button class="btn btn--primary btn--lg" onclick="addProductToCart()">Add to Cart</button>
            <button class="btn btn--outline" onclick="addToWishlist(${product.id})">Add to Wishlist</button>
          </div>
        </div>
      </div>
      
      <div class="reviews-section">
        <h3>Customer Reviews (${productReviews.length})</h3>
        <div class="reviews-list">
          ${productReviews.length > 0 ? productReviews.map(review => {
            const reviewer = appData.users.find(u => u.id === review.userId);
            return `
              <div class="review-item">
                <div class="review-header">
                  <div class="review-rating">
                    <span class="rating-stars">${generateStars(review.rating)}</span>
                  </div>
                  <div class="review-meta">
                    <span class="review-author">${reviewer ? reviewer.firstName : 'Anonymous'}</span>
                    <span class="review-date">${formatDate(review.date)}</span>
                  </div>
                </div>
                <p class="review-comment">${review.comment}</p>
              </div>
            `;
          }).join('') : '<p class="empty-reviews">No reviews yet. Be the first to review this product!</p>'}
        </div>
      </div>
    </div>
  `;
}

function renderCheckout() {
  if (!appState.currentUser) {
    showNotification('Please login to checkout', 'error');
    showModal('loginModal');
    return;
  }
  
  if (appState.cart.length === 0) {
    showNotification('Your cart is empty', 'error');
    showView('home');
    return;
  }
  
  const mainContent = document.getElementById('mainContent');
  mainContent.innerHTML = `
    <div class="container">
      <h2>Checkout</h2>
      <form class="checkout-form" id="checkoutForm">
        <div class="checkout-section">
          <h3>Shipping Information</h3>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="shippingFirstName">First Name</label>
              <input type="text" class="form-control" id="shippingFirstName" value="${appState.currentUser.firstName}" required>
            </div>
            <div class="form-group">
              <label class="form-label" for="shippingLastName">Last Name</label>
              <input type="text" class="form-control" id="shippingLastName" value="${appState.currentUser.lastName}" required>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label" for="shippingAddress">Address</label>
            <textarea class="form-control" id="shippingAddress" rows="3" required>${appState.currentUser.address || ''}</textarea>
          </div>
          <div class="form-group">
            <label class="form-label" for="shippingPhone">Phone</label>
            <input type="tel" class="form-control" id="shippingPhone" value="${appState.currentUser.phone || ''}" required>
          </div>
        </div>
        
        <div class="checkout-section">
          <h3>Payment Information</h3>
          <div class="form-group">
            <label class="form-label" for="cardNumber">Card Number</label>
            <input type="text" class="form-control" id="cardNumber" placeholder="1234 5678 9012 3456" required>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="expiryDate">Expiry Date</label>
              <input type="text" class="form-control" id="expiryDate" placeholder="MM/YY" required>
            </div>
            <div class="form-group">
              <label class="form-label" for="cvv">CVV</label>
              <input type="text" class="form-control" id="cvv" placeholder="123" required>
            </div>
          </div>
        </div>
        
        <div class="order-summary">
          <h3>Order Summary</h3>
          ${appState.cart.map(item => {
            const product = appData.products.find(p => p.id === item.productId);
            return `
              <div class="summary-item">
                <span>${product.name} × ${item.quantity}</span>
                <span>${formatPrice(product.price * item.quantity)}</span>
              </div>
            `;
          }).join('')}
          <div class="summary-item summary-total">
            <span>Total</span>
            <span>${formatPrice(getCartTotal())}</span>
          </div>
          
          <button type="submit" class="btn btn--primary btn--lg btn--full-width">Place Order</button>
        </div>
      </form>
    </div>
  `;
  
  // Add checkout form handler
  document.getElementById('checkoutForm').addEventListener('submit', handleCheckout);
}

function renderProfile() {
  if (!appState.currentUser) {
    showNotification('Please login to view profile', 'error');
    showModal('loginModal');
    return;
  }
  
  const mainContent = document.getElementById('mainContent');
  mainContent.innerHTML = `
    <div class="container">
      <div class="card">
        <div class="card__body">
          <h2>Profile</h2>
          <form id="profileForm">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="profileFirstName">First Name</label>
                <input type="text" class="form-control" id="profileFirstName" value="${appState.currentUser.firstName}" required>
              </div>
              <div class="form-group">
                <label class="form-label" for="profileLastName">Last Name</label>
                <input type="text" class="form-control" id="profileLastName" value="${appState.currentUser.lastName}" required>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label" for="profileEmail">Email</label>
              <input type="email" class="form-control" id="profileEmail" value="${appState.currentUser.email}" required>
            </div>
            <div class="form-group">
              <label class="form-label" for="profilePhone">Phone</label>
              <input type="tel" class="form-control" id="profilePhone" value="${appState.currentUser.phone || ''}">
            </div>
            <div class="form-group">
              <label class="form-label" for="profileAddress">Address</label>
              <textarea class="form-control" id="profileAddress" rows="3">${appState.currentUser.address || ''}</textarea>
            </div>
            <button type="submit" class="btn btn--primary">Update Profile</button>
          </form>
        </div>
      </div>
    </div>
  `;
  
  document.getElementById('profileForm').addEventListener('submit', handleProfileUpdate);
}

function renderOrders() {
  if (!appState.currentUser) {
    showNotification('Please login to view orders', 'error');
    showModal('loginModal');
    return;
  }
  
  const userOrders = appState.orders.filter(order => order.userId === appState.currentUser.id);
  
  const mainContent = document.getElementById('mainContent');
  mainContent.innerHTML = `
    <div class="container">
      <h2>Order History</h2>
      ${userOrders.length > 0 ? userOrders.map(order => `
        <div class="card" style="margin-bottom: var(--space-16);">
          <div class="card__body">
            <div class="flex justify-between items-center" style="margin-bottom: var(--space-16);">
              <h3>Order #${order.id}</h3>
              <span class="status status--success">${order.status}</span>
            </div>
            <p><strong>Date:</strong> ${formatDate(order.date)}</p>
            <p><strong>Total:</strong> ${formatPrice(order.total)}</p>
            <div class="order-items">
              <h4>Items:</h4>
              ${order.items.map(item => {
                const product = appData.products.find(p => p.id === item.productId);
                return `
                  <div class="summary-item">
                    <span>${product ? product.name : 'Unknown Product'} × ${item.quantity}</span>
                    <span>${formatPrice(item.price * item.quantity)}</span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      `).join('') : '<div class="empty-cart"><p>No orders found.</p></div>'}
    </div>
  `;
}

function renderWishlist() {
  if (!appState.currentUser) {
    showNotification('Please login to view wishlist', 'error');
    showModal('loginModal');
    return;
  }
  
  const wishlistProducts = appData.products.filter(product => appState.wishlist.includes(product.id));
  
  const mainContent = document.getElementById('mainContent');
  mainContent.innerHTML = `
    <div class="container">
      <h2>Wishlist</h2>
      ${wishlistProducts.length > 0 ? `
        <div class="products-grid">
          ${wishlistProducts.map(product => `
            <div class="product-card" onclick="viewProduct(${product.id})">
              <img src="${product.image}" alt="${product.name}" class="product-image">
              <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                  <span class="rating-stars">${generateStars(product.rating)}</span>
                  <span class="rating-text">(${product.reviews} reviews)</span>
                </div>
                <div class="product-price">${formatPrice(product.price)}</div>
                <div class="product-actions">
                  <button class="btn btn--primary" onclick="addProductToCartFromGrid(${product.id}, event)">
                    Add to Cart
                  </button>
                  <button class="btn btn--outline" onclick="removeFromWishlistGrid(${product.id}, event)">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      ` : '<div class="empty-cart"><p>Your wishlist is empty.</p></div>'}
    </div>
  `;
}

function renderAdmin() {
  if (!appState.currentUser || appState.currentUser.role !== 'admin') {
    showNotification('Access denied', 'error');
    showView('home');
    return;
  }
  
  const mainContent = document.getElementById('mainContent');
  mainContent.innerHTML = `
    <div class="container">
      <div class="admin-panel">
        <div class="admin-sidebar">
          <h3>Admin Panel</h3>
          <ul class="admin-nav">
            <li><a href="#" class="admin-nav-link active" onclick="showAdminSection('products')">Products</a></li>
            <li><a href="#" class="admin-nav-link" onclick="showAdminSection('orders')">Orders</a></li>
            <li><a href="#" class="admin-nav-link" onclick="showAdminSection('users')">Users</a></li>
          </ul>
        </div>
        <div class="admin-content" id="adminContent">
          <!-- Admin content will be loaded here -->
        </div>
      </div>
    </div>
  `;
  
  showAdminSection('products');
}

// Global functions for admin panel
window.showAdminSection = function(section) {
  // Update active nav link
  document.querySelectorAll('.admin-nav-link').forEach(link => {
    link.classList.remove('active');
  });
  event.target.classList.add('active');
  
  const adminContent = document.getElementById('adminContent');
  
  switch (section) {
    case 'products':
      adminContent.innerHTML = `
        <div class="admin-header">
          <h2>Manage Products</h2>
          <button class="btn btn--primary" onclick="showAddProductForm()">Add Product</button>
        </div>
        <table class="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${appData.products.map(product => `
              <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.category}</td>
                <td>${formatPrice(product.price)}</td>
                <td>${product.stock}</td>
                <td>
                  <button class="btn btn--sm btn--outline" onclick="editProduct(${product.id})">Edit</button>
                  <button class="btn btn--sm btn--outline" style="margin-left: var(--space-8); color: var(--color-error);" onclick="deleteProduct(${product.id})">Delete</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
      break;
      
    case 'orders':
      adminContent.innerHTML = `
        <div class="admin-header">
          <h2>Manage Orders</h2>
        </div>
        <table class="data-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${appState.orders.map(order => {
              const customer = appData.users.find(u => u.id === order.userId);
              return `
                <tr>
                  <td>#${order.id}</td>
                  <td>${customer ? customer.firstName + ' ' + customer.lastName : 'Unknown'}</td>
                  <td>${formatDate(order.date)}</td>
                  <td>${formatPrice(order.total)}</td>
                  <td><span class="status status--success">${order.status}</span></td>
                  <td>
                    <button class="btn btn--sm btn--outline" onclick="viewOrderDetails(${order.id})">View</button>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      `;
      break;
      
    case 'users':
      adminContent.innerHTML = `
        <div class="admin-header">
          <h2>Manage Users</h2>
        </div>
        <table class="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Orders</th>
            </tr>
          </thead>
          <tbody>
            ${appData.users.map(user => {
              const userOrderCount = appState.orders.filter(o => o.userId === user.id).length;
              return `
                <tr>
                  <td>${user.id}</td>
                  <td>${user.firstName} ${user.lastName}</td>
                  <td>${user.email}</td>
                  <td><span class="status ${user.role === 'admin' ? 'status--warning' : 'status--info'}">${user.role}</span></td>
                  <td>${userOrderCount}</td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      `;
      break;
  }
};

// Modal Functions
function showModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove('hidden');
}

function hideModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.add('hidden');
}

function renderCartModal() {
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  
  if (appState.cart.length === 0) {
    cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
    cartTotal.textContent = '$0.00';
    return;
  }
  
  cartItems.innerHTML = appState.cart.map(item => {
    const product = appData.products.find(p => p.id === item.productId);
    if (!product) return '';
    
    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}" class="cart-item-image">
        <div class="cart-item-info">
          <div class="cart-item-name">${product.name}</div>
          <div class="cart-item-price">${formatPrice(product.price)}</div>
        </div>
        <div class="cart-item-quantity">
          <button class="quantity-btn" onclick="updateCartQuantity(${item.productId}, ${item.quantity - 1})">-</button>
          <span>${item.quantity}</span>
          <button class="quantity-btn" onclick="updateCartQuantity(${item.productId}, ${item.quantity + 1})">+</button>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.productId})">Remove</button>
      </div>
    `;
  }).join('');
  
  cartTotal.textContent = formatPrice(getCartTotal());
}

// Event Handlers
function handleLogin(event) {
  event.preventDefault();
  
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const errorElement = document.getElementById('loginError');
  
  if (login(email, password)) {
    hideModal('loginModal');
    document.getElementById('loginForm').reset();
    errorElement.textContent = '';
  } else {
    errorElement.textContent = 'Invalid email or password';
  }
}

function handleRegister(event) {
  event.preventDefault();
  
  const firstName = document.getElementById('registerFirstName').value;
  const lastName = document.getElementById('registerLastName').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  const phone = document.getElementById('registerPhone').value;
  const address = document.getElementById('registerAddress').value;
  const errorElement = document.getElementById('registerError');
  
  // Basic validation
  if (password.length < 6) {
    errorElement.textContent = 'Password must be at least 6 characters long';
    return;
  }
  
  const userData = {
    firstName,
    lastName,
    email,
    password,
    phone,
    address
  };
  
  if (register(userData)) {
    hideModal('registerModal');
    document.getElementById('registerForm').reset();
    errorElement.textContent = '';
  } else {
    errorElement.textContent = 'Email already exists';
  }
}

function handleCheckout(event) {
  event.preventDefault();
  
  const shippingAddress = {
    firstName: document.getElementById('shippingFirstName').value,
    lastName: document.getElementById('shippingLastName').value,
    address: document.getElementById('shippingAddress').value,
    phone: document.getElementById('shippingPhone').value
  };
  
  const order = createOrder({ shippingAddress });
  
  showNotification(`Order #${order.id} placed successfully!`, 'success');
  showView('orders');
}

function handleProfileUpdate(event) {
  event.preventDefault();
  
  appState.currentUser.firstName = document.getElementById('profileFirstName').value;
  appState.currentUser.lastName = document.getElementById('profileLastName').value;
  appState.currentUser.email = document.getElementById('profileEmail').value;
  appState.currentUser.phone = document.getElementById('profilePhone').value;
  appState.currentUser.address = document.getElementById('profileAddress').value;
  
  updateUserInterface();
  showNotification('Profile updated successfully!', 'success');
}

// Utility Functions for Product Detail
window.updateQuantity = function(change) {
  const quantityInput = document.getElementById('productQuantity');
  const currentValue = parseInt(quantityInput.value);
  const newValue = Math.max(1, Math.min(appState.currentProduct.stock, currentValue + change));
  quantityInput.value = newValue;
};

window.addProductToCart = function() {
  const quantity = parseInt(document.getElementById('productQuantity').value);
  addToCart(appState.currentProduct.id, quantity);
};

window.removeFromWishlistGrid = function(productId, event) {
  if (event) {
    event.stopPropagation();
  }
  appState.wishlist = appState.wishlist.filter(id => id !== productId);
  renderWishlist();
  showNotification('Removed from wishlist', 'success');
};

// Admin Functions
window.showAddProductForm = function() {
  showNotification('Add product functionality would be implemented here', 'info');
};

window.editProduct = function(productId) {
  showNotification('Edit product functionality would be implemented here', 'info');
};

window.deleteProduct = function(productId) {
  if (confirm('Are you sure you want to delete this product?')) {
    appData.products = appData.products.filter(p => p.id !== productId);
    showAdminSection('products');
    showNotification('Product deleted successfully', 'success');
  }
};

window.viewOrderDetails = function(orderId) {
  showNotification('Order details functionality would be implemented here', 'info');
};

// Make cart functions global
window.updateCartQuantity = updateCartQuantity;
window.removeFromCart = removeFromCart;

// Notification Function
function showNotification(message, type = 'success') {
  const notification = document.getElementById('notification');
  const notificationMessage = document.getElementById('notificationMessage');
  
  notification.className = `notification notification--${type}`;
  notificationMessage.textContent = message;
  notification.classList.remove('hidden');
  
  setTimeout(() => {
    notification.classList.add('hidden');
  }, 3000);
}

// Search and Filter Functions
function performSearch() {
  appState.searchQuery = document.getElementById('searchInput').value;
  showView('home');
}

function performCategoryFilter() {
  appState.selectedCategory = document.getElementById('categoryFilter').value;
  showView('home');
}

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  // Set up event listeners
  
  // Navigation
  document.getElementById('searchBtn').addEventListener('click', performSearch);
  
  document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      performSearch();
    }
  });
  
  document.getElementById('categoryFilter').addEventListener('change', performCategoryFilter);
  
  // User menu
  document.getElementById('userBtn').addEventListener('click', function() {
    const dropdown = document.getElementById('userDropdown');
    dropdown.classList.toggle('hidden');
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    const userMenu = document.getElementById('userMenu');
    const dropdown = document.getElementById('userDropdown');
    if (!userMenu.contains(e.target)) {
      dropdown.classList.add('hidden');
    }
  });
  
  // Modal buttons
  document.getElementById('loginBtn').addEventListener('click', () => showModal('loginModal'));
  document.getElementById('registerBtn').addEventListener('click', () => showModal('registerModal'));
  document.getElementById('cartBtn').addEventListener('click', function() {
    renderCartModal();
    showModal('cartModal');
  });
  
  // Profile and navigation buttons
  document.getElementById('profileBtn').addEventListener('click', () => showView('profile'));
  document.getElementById('ordersBtn').addEventListener('click', () => showView('orders'));
  document.getElementById('wishlistBtn').addEventListener('click', () => showView('wishlist'));
  document.getElementById('adminBtn').addEventListener('click', () => showView('admin'));
  document.getElementById('logoutBtn').addEventListener('click', logout);
  
  // Modal close buttons
  document.getElementById('loginModalClose').addEventListener('click', () => hideModal('loginModal'));
  document.getElementById('registerModalClose').addEventListener('click', () => hideModal('registerModal'));
  document.getElementById('cartModalClose').addEventListener('click', () => hideModal('cartModal'));
  document.getElementById('continueShopping').addEventListener('click', () => hideModal('cartModal'));
  document.getElementById('notificationClose').addEventListener('click', function() {
    document.getElementById('notification').classList.add('hidden');
  });
  
  // Form submissions
  document.getElementById('loginForm').addEventListener('submit', handleLogin);
  document.getElementById('registerForm').addEventListener('submit', handleRegister);
  
  // Modal switching
  document.getElementById('switchToRegister').addEventListener('click', function() {
    hideModal('loginModal');
    showModal('registerModal');
  });
  
  document.getElementById('switchToLogin').addEventListener('click', function() {
    hideModal('registerModal');
    showModal('loginModal');
  });
  
  // Checkout button
  document.getElementById('checkoutBtn').addEventListener('click', function() {
    hideModal('cartModal');
    showView('checkout');
  });
  
  // Close modals when clicking outside
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this || e.target.classList.contains('modal__overlay')) {
        this.classList.add('hidden');
      }
    });
  });
  
  // Initialize the app
  updateUserInterface();
  showView('home');
});