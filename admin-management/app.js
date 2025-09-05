// Admin Application Data
let adminData = {
  orders: [
    {
      id: "ORD-2025-001",
      customerId: 2,
      customerName: "John Doe",
      customerEmail: "user@example.com",
      customerPhone: "555-0200",
      shippingAddress: {
        street: "456 User Ave",
        city: "User City",
        state: "UC",
        zipCode: "67890",
        country: "USA"
      },
      billingAddress: {
        street: "456 User Ave",
        city: "User City", 
        state: "UC",
        zipCode: "67890",
        country: "USA"
      },
      items: [
        {
          productId: 1,
          productName: "Wireless Bluetooth Headphones",
          quantity: 1,
          price: 79.99,
          image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
        },
        {
          productId: 3,
          productName: "JavaScript: The Good Parts",
          quantity: 1,
          price: 29.99,
          image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400"
        }
      ],
      subtotal: 109.98,
      shipping: 9.99,
      tax: 8.80,
      total: 128.77,
      status: "pending",
      orderDate: "2025-09-05T10:30:00Z",
      trackingNumber: null,
      statusHistory: [
        {
          status: "pending",
          timestamp: "2025-09-05T10:30:00Z",
          note: "Order placed by customer"
        }
      ]
    },
    {
      id: "ORD-2025-002",
      customerId: 3,
      customerName: "Sarah Wilson",
      customerEmail: "sarah.wilson@email.com",
      customerPhone: "555-0301",
      shippingAddress: {
        street: "789 Oak Street",
        city: "Springfield",
        state: "IL",
        zipCode: "62701",
        country: "USA"
      },
      billingAddress: {
        street: "789 Oak Street",
        city: "Springfield",
        state: "IL",
        zipCode: "62701",
        country: "USA"
      },
      items: [
        {
          productId: 2,
          productName: "Cotton T-Shirt",
          quantity: 2,
          price: 24.99,
          image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400"
        },
        {
          productId: 6,
          productName: "Denim Jacket",
          quantity: 1,
          price: 89.99,
          image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400"
        }
      ],
      subtotal: 139.97,
      shipping: 9.99,
      tax: 11.20,
      total: 161.16,
      status: "accepted",
      orderDate: "2025-09-05T09:15:00Z",
      trackingNumber: null,
      statusHistory: [
        {
          status: "pending",
          timestamp: "2025-09-05T09:15:00Z",
          note: "Order placed by customer"
        },
        {
          status: "accepted",
          timestamp: "2025-09-05T11:30:00Z",
          note: "Order accepted and processing started"
        }
      ]
    },
    {
      id: "ORD-2025-003",
      customerId: 4,
      customerName: "Mike Johnson",
      customerEmail: "mike.j@email.com",
      customerPhone: "555-0402",
      shippingAddress: {
        street: "321 Pine Road",
        city: "Denver",
        state: "CO",
        zipCode: "80202",
        country: "USA"
      },
      billingAddress: {
        street: "321 Pine Road",
        city: "Denver",
        state: "CO",
        zipCode: "80202",
        country: "USA"
      },
      items: [
        {
          productId: 5,
          productName: "Wireless Gaming Mouse",
          quantity: 1,
          price: 59.99,
          image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400"
        },
        {
          productId: 4,
          productName: "Smart LED Desk Lamp",
          quantity: 1,
          price: 45.99,
          image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400"
        }
      ],
      subtotal: 105.98,
      shipping: 9.99,
      tax: 8.48,
      total: 124.45,
      status: "shipped",
      orderDate: "2025-09-04T14:20:00Z",
      trackingNumber: "TRK123456789",
      statusHistory: [
        {
          status: "pending",
          timestamp: "2025-09-04T14:20:00Z",
          note: "Order placed by customer"
        },
        {
          status: "accepted",
          timestamp: "2025-09-04T15:00:00Z",
          note: "Order accepted and processing started"
        },
        {
          status: "packed",
          timestamp: "2025-09-05T08:30:00Z",
          note: "Order packed and ready for shipment"
        },
        {
          status: "shipped",
          timestamp: "2025-09-05T10:00:00Z",
          note: "Order shipped via FedEx"
        }
      ]
    }
  ],
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
      features: ["Noise Cancellation", "30hr Battery", "Bluetooth 5.0"],
      sku: "WBH-001",
      weight: "0.5 lbs",
      dimensions: "7 x 6 x 3 inches"
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
      features: ["Organic Cotton", "Machine Washable", "Multiple Colors"],
      sku: "CT-002",
      weight: "0.3 lbs",
      dimensions: "12 x 8 x 1 inches"
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
      features: ["Programming", "Web Development", "Best Practices"],
      sku: "JS-003",
      weight: "1.2 lbs",
      dimensions: "9 x 6 x 1 inches"
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
      features: ["USB Charging", "Adjustable", "Energy Efficient"],
      sku: "LED-004",
      weight: "2.1 lbs",
      dimensions: "10 x 8 x 18 inches"
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
      features: ["RGB Lighting", "High DPI", "Wireless"],
      sku: "WGM-005",
      weight: "0.4 lbs",
      dimensions: "5 x 3 x 2 inches"
    }
  ],
  categories: ["Electronics", "Clothing", "Books", "Home & Garden"],
  admins: [
    {
      id: 1,
      email: "admin@shopease.com",
      password: "admin123",
      firstName: "Admin",
      lastName: "Manager",
      role: "super_admin"
    },
    {
      id: 2,
      email: "warehouse@shopease.com",
      password: "warehouse123",
      firstName: "Warehouse",
      lastName: "Manager",
      role: "warehouse_admin"
    }
  ],
  notifications: [
    {
      id: 1,
      orderId: "ORD-2025-002",
      type: "order_accepted",
      message: "Your order has been accepted and is being processed.",
      sentAt: "2025-09-05T11:30:00Z",
      customerEmail: "sarah.wilson@email.com"
    },
    {
      id: 2,
      orderId: "ORD-2025-003",
      type: "order_shipped",
      message: "Your order has been shipped. Tracking: TRK123456789",
      sentAt: "2025-09-05T10:00:00Z",
      customerEmail: "mike.j@email.com"
    }
  ],
  analytics: {
    totalOrders: 3,
    pendingOrders: 1,
    processingOrders: 1,
    shippedOrders: 1,
    totalRevenue: 414.38,
    averageOrderValue: 138.13,
    topProducts: [
      {
        productId: 1,
        productName: "Wireless Bluetooth Headphones",
        orderCount: 1,
        revenue: 79.99
      },
      {
        productId: 2,
        productName: "Cotton T-Shirt",
        orderCount: 2,
        revenue: 49.98
      }
    ]
  }
};

// Application State
let appState = {
  currentAdmin: { id: 1, firstName: "Admin", lastName: "Manager", role: "super_admin" },
  currentSection: 'dashboard',
  filters: {
    orderStatus: '',
    productCategory: '',
    dateRange: ''
  }
};

// Utility Functions
function formatPrice(price) {
  return `$${parseFloat(price).toFixed(2)}`;
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function formatDateShort(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  });
}

function generateTrackingNumber() {
  return 'TRK' + Math.random().toString(36).substr(2, 9).toUpperCase();
}

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

function showLoading() {
  document.getElementById('loadingOverlay').classList.remove('hidden');
}

function hideLoading() {
  document.getElementById('loadingOverlay').classList.add('hidden');
}

// Navigation Functions
function switchSection(sectionName) {
  // Update navigation
  document.querySelectorAll('.admin-nav__link').forEach(link => {
    link.classList.remove('active');
  });
  document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');
  
  appState.currentSection = sectionName;
  
  // Render section content
  switch (sectionName) {
    case 'dashboard':
      renderDashboard();
      break;
    case 'orders':
      renderOrders();
      break;
    case 'products':
      renderProducts();
      break;
    case 'customers':
      renderCustomers();
      break;
    case 'analytics':
      renderAnalytics();
      break;
    case 'notifications':
      renderNotifications();
      break;
    default:
      renderDashboard();
  }
}

// Dashboard Rendering
function renderDashboard() {
  const adminContent = document.getElementById('adminContent');
  
  // Calculate statistics
  const totalOrders = adminData.orders.length;
  const pendingOrders = adminData.orders.filter(o => o.status === 'pending').length;
  const totalRevenue = adminData.orders.reduce((sum, order) => sum + order.total, 0);
  const totalProducts = adminData.products.length;
  
  // Get recent orders
  const recentOrders = adminData.orders.slice(-5).reverse();
  
  adminContent.innerHTML = `
    <div class="section-header">
      <h1 class="section-title">Dashboard</h1>
      <div class="section-actions">
        <span class="admin-time">${new Date().toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}</span>
      </div>
    </div>
    
    <!-- Statistics Cards -->
    <div class="dashboard-stats">
      <div class="stat-card">
        <div class="stat-card__header">
          <span class="stat-card__title">Total Orders</span>
          <div class="stat-card__icon stat-card__icon--orders">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"></path>
              <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
            </svg>
          </div>
        </div>
        <div class="stat-card__value">${totalOrders}</div>
        <div class="stat-card__change stat-card__change--positive">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          </svg>
          +12% from last month
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-card__header">
          <span class="stat-card__title">Total Revenue</span>
          <div class="stat-card__icon stat-card__icon--revenue">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"></path>
            </svg>
          </div>
        </div>
        <div class="stat-card__value">${formatPrice(totalRevenue)}</div>
        <div class="stat-card__change stat-card__change--positive">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          </svg>
          +8% from last month
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-card__header">
          <span class="stat-card__title">Products</span>
          <div class="stat-card__icon stat-card__icon--products">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 16V8a2 2 0 00-1-1.73L12 2L4 6.27A2 2 0 003 8v8a2 2 0 001 1.73L12 22l8-4.27A2 2 0 0021 16z"></path>
            </svg>
          </div>
        </div>
        <div class="stat-card__value">${totalProducts}</div>
        <div class="stat-card__change stat-card__change--positive">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          </svg>
          +2 new products
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-card__header">
          <span class="stat-card__title">Pending Orders</span>
          <div class="stat-card__icon stat-card__icon--customers">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"></path>
            </svg>
          </div>
        </div>
        <div class="stat-card__value">${pendingOrders}</div>
        <div class="stat-card__change stat-card__change--negative">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="1 18 8.5 10.5 13.5 15.5 23 6"></polyline>
          </svg>
          Needs attention
        </div>
      </div>
    </div>
    
    <!-- Order Workflow -->
    <div class="order-workflow">
      <div class="workflow-step">
        <div class="workflow-step__icon workflow-step__icon--new">1</div>
        <div class="workflow-step__title">New Orders</div>
        <div class="workflow-step__count">${adminData.orders.filter(o => o.status === 'pending').length}</div>
      </div>
      <div class="workflow-step">
        <div class="workflow-step__icon workflow-step__icon--accepted">2</div>
        <div class="workflow-step__title">Accepted</div>
        <div class="workflow-step__count">${adminData.orders.filter(o => o.status === 'accepted').length}</div>
      </div>
      <div class="workflow-step">
        <div class="workflow-step__icon workflow-step__icon--packed">3</div>
        <div class="workflow-step__title">Packed</div>
        <div class="workflow-step__count">${adminData.orders.filter(o => o.status === 'packed').length}</div>
      </div>
      <div class="workflow-step">
        <div class="workflow-step__icon workflow-step__icon--shipped">4</div>
        <div class="workflow-step__title">Shipped</div>
        <div class="workflow-step__count">${adminData.orders.filter(o => o.status === 'shipped').length}</div>
      </div>
    </div>
    
    <!-- Recent Orders Table -->
    <div class="table-container">
      <div class="table-header">
        <h3 class="table-title">Recent Orders</h3>
        <button class="btn btn--primary" onclick="switchSection('orders')">View All Orders</button>
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
          ${recentOrders.map(order => `
            <tr>
              <td><strong>${order.id}</strong></td>
              <td>${order.customerName}</td>
              <td>${formatDateShort(order.orderDate)}</td>
              <td><strong>${formatPrice(order.total)}</strong></td>
              <td><span class="order-status order-status--${order.status}">${order.status}</span></td>
              <td>
                <div class="action-buttons">
                  <button class="btn btn--action btn--view" onclick="viewOrderDetail('${order.id}')">View</button>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

// Orders Management
function renderOrders() {
  const adminContent = document.getElementById('adminContent');
  
  // Apply filters
  let filteredOrders = [...adminData.orders];
  if (appState.filters.orderStatus) {
    filteredOrders = filteredOrders.filter(order => order.status === appState.filters.orderStatus);
  }
  
  adminContent.innerHTML = `
    <div class="section-header">
      <h1 class="section-title">Order Management</h1>
      <div class="section-actions">
        <select class="form-control" id="orderStatusFilter" onchange="filterOrders()">
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="accepted">Accepted</option>
          <option value="packed">Packed</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
        </select>
        <button class="btn btn--outline" onclick="exportOrders()">Export CSV</button>
      </div>
    </div>
    
    <div class="table-container">
      <div class="table-header">
        <h3 class="table-title">All Orders (${filteredOrders.length})</h3>
        <div class="table-filters">
          <input type="search" class="form-control" placeholder="Search orders..." onkeyup="searchOrders(event)">
        </div>
      </div>
      <table class="data-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Email</th>
            <th>Date</th>
            <th>Items</th>
            <th>Total</th>
            <th>Status</th>
            <th>Tracking</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${filteredOrders.map(order => `
            <tr>
              <td><strong>${order.id}</strong></td>
              <td>${order.customerName}</td>
              <td>${order.customerEmail}</td>
              <td>${formatDateShort(order.orderDate)}</td>
              <td>${order.items.length} items</td>
              <td><strong>${formatPrice(order.total)}</strong></td>
              <td><span class="order-status order-status--${order.status}">${order.status}</span></td>
              <td>${order.trackingNumber || '-'}</td>
              <td>
                <div class="action-buttons">
                  <button class="btn btn--action btn--view" onclick="viewOrderDetail('${order.id}')">View</button>
                  ${order.status === 'pending' ? `<button class="btn btn--action btn--accept" onclick="acceptOrder('${order.id}')">Accept</button>` : ''}
                  ${order.status === 'accepted' ? `<button class="btn btn--action btn--edit" onclick="markAsPacked('${order.id}')">Mark Packed</button>` : ''}
                  ${order.status === 'packed' ? `<button class="btn btn--action btn--ship" onclick="markAsShipped('${order.id}')">Ship Order</button>` : ''}
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
  
  // Set filter value
  const filterEl = document.getElementById('orderStatusFilter');
  if (filterEl) {
    filterEl.value = appState.filters.orderStatus;
  }
}

// Products Management
function renderProducts() {
  const adminContent = document.getElementById('adminContent');
  
  // Apply filters
  let filteredProducts = [...adminData.products];
  if (appState.filters.productCategory) {
    filteredProducts = filteredProducts.filter(product => product.category === appState.filters.productCategory);
  }
  
  adminContent.innerHTML = `
    <div class="section-header">
      <h1 class="section-title">Product Management</h1>
      <div class="section-actions">
        <select class="form-control" id="productCategoryFilter" onchange="filterProducts()">
          <option value="">All Categories</option>
          ${adminData.categories.map(cat => `<option value="${cat}">${cat}</option>`).join('')}
        </select>
        <button class="btn btn--primary" onclick="showAddProductModal()">Add Product</button>
        <button class="btn btn--outline" onclick="exportProducts()">Export CSV</button>
      </div>
    </div>
    
    <div class="admin-product-grid">
      ${filteredProducts.map(product => `
        <div class="admin-product-card">
          <img src="${product.image}" alt="${product.name}" class="admin-product-image">
          <div class="admin-product-info">
            <div class="admin-product-header">
              <div>
                <h3 class="admin-product-name">${product.name}</h3>
                <span class="admin-product-category">${product.category}</span>
              </div>
            </div>
            <div class="admin-product-price">${formatPrice(product.price)}</div>
            <div class="admin-product-stock">Stock: ${product.stock} units</div>
            <div class="admin-product-actions">
              <button class="btn btn--action btn--edit" onclick="editProduct(${product.id})">Edit</button>
              <button class="btn btn--action btn--delete" onclick="deleteProduct(${product.id})">Delete</button>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  
  // Set filter value
  const filterEl = document.getElementById('productCategoryFilter');
  if (filterEl) {
    filterEl.value = appState.filters.productCategory;
  }
}

// Customer Management
function renderCustomers() {
  const adminContent = document.getElementById('adminContent');
  
  // Extract unique customers from orders
  const customers = [];
  const customerMap = new Map();
  
  adminData.orders.forEach(order => {
    if (!customerMap.has(order.customerId)) {
      const customerOrders = adminData.orders.filter(o => o.customerId === order.customerId);
      const totalSpent = customerOrders.reduce((sum, o) => sum + o.total, 0);
      
      customerMap.set(order.customerId, {
        id: order.customerId,
        name: order.customerName,
        email: order.customerEmail,
        phone: order.customerPhone,
        totalOrders: customerOrders.length,
        totalSpent: totalSpent,
        lastOrderDate: customerOrders[customerOrders.length - 1].orderDate
      });
    }
  });
  
  customers.push(...customerMap.values());
  
  adminContent.innerHTML = `
    <div class="section-header">
      <h1 class="section-title">Customer Management</h1>
      <div class="section-actions">
        <input type="search" class="form-control" placeholder="Search customers..." onkeyup="searchCustomers(event)">
        <button class="btn btn--outline" onclick="exportCustomers()">Export CSV</button>
      </div>
    </div>
    
    <div class="table-container">
      <div class="table-header">
        <h3 class="table-title">All Customers (${customers.length})</h3>
      </div>
      <table class="data-table">
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Total Orders</th>
            <th>Total Spent</th>
            <th>Last Order</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${customers.map(customer => `
            <tr>
              <td><strong>#${customer.id}</strong></td>
              <td>${customer.name}</td>
              <td>${customer.email}</td>
              <td>${customer.phone}</td>
              <td>${customer.totalOrders}</td>
              <td><strong>${formatPrice(customer.totalSpent)}</strong></td>
              <td>${formatDateShort(customer.lastOrderDate)}</td>
              <td>
                <div class="action-buttons">
                  <button class="btn btn--action btn--view" onclick="viewCustomerOrders(${customer.id})">View Orders</button>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

// Analytics Dashboard
function renderAnalytics() {
  const adminContent = document.getElementById('adminContent');
  
  adminContent.innerHTML = `
    <div class="section-header">
      <h1 class="section-title">Analytics & Reports</h1>
      <div class="section-actions">
        <select class="form-control" id="analyticsTimeRange">
          <option value="7d">Last 7 Days</option>
          <option value="30d" selected>Last 30 Days</option>
          <option value="90d">Last 90 Days</option>
          <option value="1y">Last Year</option>
        </select>
        <button class="btn btn--outline" onclick="exportAnalytics()">Export Report</button>
      </div>
    </div>
    
    <div class="analytics-grid">
      <div class="chart-container">
        <h3 class="chart-title">Order Status Distribution</h3>
        <canvas id="orderStatusChart"></canvas>
      </div>
      <div class="chart-container">
        <h3 class="chart-title">Revenue Trend</h3>
        <canvas id="revenueChart"></canvas>
      </div>
      <div class="chart-container">
        <h3 class="chart-title">Top Products</h3>
        <canvas id="topProductsChart"></canvas>
      </div>
      <div class="chart-container">
        <h3 class="chart-title">Category Performance</h3>
        <canvas id="categoryChart"></canvas>
      </div>
    </div>
    
    <div class="table-container">
      <div class="table-header">
        <h3 class="table-title">Performance Metrics</h3>
      </div>
      <table class="data-table">
        <thead>
          <tr>
            <th>Metric</th>
            <th>Current Period</th>
            <th>Previous Period</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Total Orders</td>
            <td>${adminData.orders.length}</td>
            <td>2</td>
            <td><span class="stat-card__change--positive">+50%</span></td>
          </tr>
          <tr>
            <td>Average Order Value</td>
            <td>${formatPrice(adminData.analytics.averageOrderValue)}</td>
            <td>$125.50</td>
            <td><span class="stat-card__change--positive">+10%</span></td>
          </tr>
          <tr>
            <td>Conversion Rate</td>
            <td>3.2%</td>
            <td>2.8%</td>
            <td><span class="stat-card__change--positive">+14%</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
  
  // Initialize charts after a brief delay
  setTimeout(() => {
    initializeCharts();
  }, 100);
}

// Notifications Management
function renderNotifications() {
  const adminContent = document.getElementById('adminContent');
  
  adminContent.innerHTML = `
    <div class="section-header">
      <h1 class="section-title">Notifications & Communication</h1>
      <div class="section-actions">
        <button class="btn btn--primary" onclick="sendBulkNotification()">Send Bulk Notification</button>
        <button class="btn btn--outline" onclick="clearAllNotifications()">Clear All</button>
      </div>
    </div>
    
    <div class="table-container">
      <div class="table-header">
        <h3 class="table-title">Recent Notifications (${adminData.notifications.length})</h3>
      </div>
      <div style="padding: var(--space-20);">
        ${adminData.notifications.length > 0 ? adminData.notifications.map(notification => `
          <div class="notification-item">
            <div class="notification-icon" style="background-color: var(--color-primary); color: white;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 01-3.46 0"></path>
              </svg>
            </div>
            <div class="notification-content">
              <div class="notification-title">Order ${notification.orderId} - ${notification.type.replace('_', ' ').toUpperCase()}</div>
              <div class="notification-message">${notification.message}</div>
              <div class="notification-time">
                Sent to: ${notification.customerEmail} • ${formatDate(notification.sentAt)}
              </div>
            </div>
          </div>
        `).join('') : '<div style="text-align: center; padding: var(--space-32); color: var(--color-text-secondary);">No notifications sent yet.</div>'}
      </div>
    </div>
  `;
}

// Order Actions - Fixed function definitions
window.acceptOrder = function(orderId) {
  showLoading();
  
  setTimeout(() => {
    const order = adminData.orders.find(o => o.id === orderId);
    if (order) {
      order.status = 'accepted';
      order.statusHistory.push({
        status: 'accepted',
        timestamp: new Date().toISOString(),
        note: 'Order accepted by admin'
      });
      
      // Send notification
      sendNotification(order, 'order_accepted', 'Your order has been accepted and is being processed.');
      
      hideLoading();
      showNotification('Order accepted successfully!', 'success');
      renderOrders();
    }
  }, 1000);
};

window.markAsPacked = function(orderId) {
  showLoading();
  
  setTimeout(() => {
    const order = adminData.orders.find(o => o.id === orderId);
    if (order) {
      order.status = 'packed';
      order.statusHistory.push({
        status: 'packed',
        timestamp: new Date().toISOString(),
        note: 'Order packed and ready for shipment'
      });
      
      // Send notification
      sendNotification(order, 'order_packed', 'Your order has been packed and will be shipped soon.');
      
      hideLoading();
      showNotification('Order marked as packed!', 'success');
      renderOrders();
    }
  }, 1000);
};

window.markAsShipped = function(orderId) {
  showLoading();
  
  setTimeout(() => {
    const order = adminData.orders.find(o => o.id === orderId);
    if (order) {
      order.status = 'shipped';
      order.trackingNumber = generateTrackingNumber();
      order.statusHistory.push({
        status: 'shipped',
        timestamp: new Date().toISOString(),
        note: `Order shipped with tracking number: ${order.trackingNumber}`
      });
      
      // Send notification
      sendNotification(order, 'order_shipped', `Your order has been shipped! Tracking number: ${order.trackingNumber}`);
      
      hideLoading();
      showNotification('Order shipped successfully!', 'success');
      renderOrders();
    }
  }, 1000);
};

window.viewOrderDetail = function(orderId) {
  const order = adminData.orders.find(o => o.id === orderId);
  if (!order) return;
  
  const modal = document.getElementById('orderDetailModal');
  const modalTitle = document.getElementById('orderModalTitle');
  const modalBody = document.getElementById('orderModalBody');
  const modalFooter = document.getElementById('orderModalFooter');
  
  modalTitle.textContent = `Order ${order.id}`;
  
  modalBody.innerHTML = `
    <div class="customer-info">
      <h4>Customer Information</h4>
      <div class="customer-details">
        <div class="customer-detail">
          <span class="customer-detail__label">Name</span>
          <span class="customer-detail__value">${order.customerName}</span>
        </div>
        <div class="customer-detail">
          <span class="customer-detail__label">Email</span>
          <span class="customer-detail__value">${order.customerEmail}</span>
        </div>
        <div class="customer-detail">
          <span class="customer-detail__label">Phone</span>
          <span class="customer-detail__value">${order.customerPhone}</span>
        </div>
        <div class="customer-detail">
          <span class="customer-detail__label">Shipping Address</span>
          <span class="customer-detail__value">
            ${order.shippingAddress.street}<br>
            ${order.shippingAddress.city}, ${order.shippingAddress.state} ${order.shippingAddress.zipCode}<br>
            ${order.shippingAddress.country}
          </span>
        </div>
      </div>
    </div>
    
    <div class="order-items">
      <h4>Order Items</h4>
      ${order.items.map(item => `
        <div class="order-item">
          <img src="${item.image}" alt="${item.productName}" class="order-item__image">
          <div class="order-item__info">
            <div class="order-item__name">${item.productName}</div>
            <div class="order-item__details">
              <span>Qty: ${item.quantity}</span>
              <span>Price: ${formatPrice(item.price)}</span>
            </div>
          </div>
          <div class="order-item__price">${formatPrice(item.price * item.quantity)}</div>
        </div>
      `).join('')}
      
      <div style="margin-top: var(--space-16); padding-top: var(--space-16); border-top: 1px solid var(--color-border);">
        <div style="display: flex; justify-content: space-between; margin-bottom: var(--space-8);">
          <span>Subtotal:</span>
          <span>${formatPrice(order.subtotal)}</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: var(--space-8);">
          <span>Shipping:</span>
          <span>${formatPrice(order.shipping)}</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: var(--space-8);">
          <span>Tax:</span>
          <span>${formatPrice(order.tax)}</span>
        </div>
        <div style="display: flex; justify-content: space-between; font-weight: var(--font-weight-bold); font-size: var(--font-size-lg);">
          <span>Total:</span>
          <span>${formatPrice(order.total)}</span>
        </div>
      </div>
    </div>
    
    <div class="order-timeline">
      <h4>Order Timeline</h4>
      ${order.statusHistory.map((history, index) => `
        <div class="timeline-item">
          <div class="timeline-icon" style="background-color: ${getStatusColor(history.status)};">${index + 1}</div>
          <div class="timeline-content">
            <div class="timeline-title">${capitalizeFirst(history.status)}</div>
            <div class="timeline-time">${formatDate(history.timestamp)}</div>
            <div class="timeline-note">${history.note}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  
  modalFooter.innerHTML = `
    <button class="btn btn--secondary" onclick="closeModal('orderDetailModal')">Close</button>
    ${order.status === 'pending' ? `<button class="btn btn--primary" onclick="acceptOrder('${order.id}'); closeModal('orderDetailModal')">Accept Order</button>` : ''}
    ${order.status === 'accepted' ? `<button class="btn btn--primary" onclick="markAsPacked('${order.id}'); closeModal('orderDetailModal')">Mark as Packed</button>` : ''}
    ${order.status === 'packed' ? `<button class="btn btn--primary" onclick="markAsShipped('${order.id}'); closeModal('orderDetailModal')">Ship Order</button>` : ''}
  `;
  
  modal.classList.remove('hidden');
};

// Product Management Functions
window.showAddProductModal = function() {
  const modal = document.getElementById('productModal');
  const modalTitle = document.getElementById('productModalTitle');
  const form = document.getElementById('productForm');
  
  modalTitle.textContent = 'Add New Product';
  form.reset();
  document.getElementById('productId').value = '';
  
  modal.classList.remove('hidden');
};

window.editProduct = function(productId) {
  const product = adminData.products.find(p => p.id === productId);
  if (!product) return;
  
  const modal = document.getElementById('productModal');
  const modalTitle = document.getElementById('productModalTitle');
  
  modalTitle.textContent = 'Edit Product';
  
  // Populate form
  document.getElementById('productId').value = product.id;
  document.getElementById('productName').value = product.name;
  document.getElementById('productCategory').value = product.category;
  document.getElementById('productPrice').value = product.price;
  document.getElementById('productStock').value = product.stock;
  document.getElementById('productImage').value = product.image;
  document.getElementById('productDescription').value = product.description;
  document.getElementById('productFeatures').value = product.features.join(', ');
  
  modal.classList.remove('hidden');
};

window.deleteProduct = function(productId) {
  if (!confirm('Are you sure you want to delete this product?')) return;
  
  showLoading();
  
  setTimeout(() => {
    adminData.products = adminData.products.filter(p => p.id !== productId);
    hideLoading();
    showNotification('Product deleted successfully!', 'success');
    renderProducts();
  }, 500);
};

// Utility Functions
function sendNotification(order, type, message) {
  const notification = {
    id: adminData.notifications.length + 1,
    orderId: order.id,
    type: type,
    message: message,
    sentAt: new Date().toISOString(),
    customerEmail: order.customerEmail
  };
  
  adminData.notifications.unshift(notification);
  console.log(`Notification sent to ${order.customerEmail}: ${message}`);
}

function getStatusColor(status) {
  const colors = {
    'pending': 'var(--color-info)',
    'accepted': 'var(--color-primary)',
    'packed': 'var(--color-warning)',
    'shipped': 'var(--color-success)',
    'delivered': 'var(--color-success)'
  };
  return colors[status] || 'var(--color-info)';
}

function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Filter Functions
window.filterOrders = function() {
  const filter = document.getElementById('orderStatusFilter');
  if (filter) {
    appState.filters.orderStatus = filter.value;
    renderOrders();
  }
};

window.filterProducts = function() {
  const filter = document.getElementById('productCategoryFilter');
  if (filter) {
    appState.filters.productCategory = filter.value;
    renderProducts();
  }
};

// Search Functions
window.searchOrders = function(event) {
  const query = event.target.value.toLowerCase();
  const rows = document.querySelectorAll('.data-table tbody tr');
  
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(query) ? '' : 'none';
  });
};

window.searchCustomers = function(event) {
  const query = event.target.value.toLowerCase();
  const rows = document.querySelectorAll('.data-table tbody tr');
  
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(query) ? '' : 'none';
  });
};

// Modal Functions
window.closeModal = function(modalId) {
  document.getElementById(modalId).classList.add('hidden');
};

// Export Functions
window.exportOrders = function() {
  showNotification('Orders export functionality would be implemented here', 'info');
};

window.exportProducts = function() {
  showNotification('Products export functionality would be implemented here', 'info');
};

window.exportCustomers = function() {
  showNotification('Customers export functionality would be implemented here', 'info');
};

window.exportAnalytics = function() {
  showNotification('Analytics report export functionality would be implemented here', 'info');
};

// Chart Initialization
function initializeCharts() {
  if (typeof Chart === 'undefined') {
    console.warn('Chart.js not loaded yet');
    return;
  }
  
  // Order Status Chart
  const orderStatusCtx = document.getElementById('orderStatusChart');
  if (orderStatusCtx) {
    new Chart(orderStatusCtx, {
      type: 'doughnut',
      data: {
        labels: ['Pending', 'Accepted', 'Packed', 'Shipped'],
        datasets: [{
          data: [
            adminData.orders.filter(o => o.status === 'pending').length,
            adminData.orders.filter(o => o.status === 'accepted').length,
            adminData.orders.filter(o => o.status === 'packed').length,
            adminData.orders.filter(o => o.status === 'shipped').length
          ],
          backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
  
  // Revenue Trend Chart
  const revenueCtx = document.getElementById('revenueChart');
  if (revenueCtx) {
    new Chart(revenueCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Revenue',
          data: [1200, 1900, 1500, 2200, 1800, 2400],
          borderColor: '#1FB8CD',
          backgroundColor: 'rgba(31, 184, 205, 0.1)',
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
  
  // Top Products Chart
  const topProductsCtx = document.getElementById('topProductsChart');
  if (topProductsCtx) {
    new Chart(topProductsCtx, {
      type: 'bar',
      data: {
        labels: ['Headphones', 'T-Shirt', 'Gaming Mouse', 'Desk Lamp'],
        datasets: [{
          label: 'Sales',
          data: [15, 25, 12, 18],
          backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
  
  // Category Performance Chart
  const categoryCtx = document.getElementById('categoryChart');
  if (categoryCtx) {
    new Chart(categoryCtx, {
      type: 'polarArea',
      data: {
        labels: ['Electronics', 'Clothing', 'Books', 'Home & Garden'],
        datasets: [{
          data: [40, 30, 20, 10],
          backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
}

function saveProduct() {
  const productId = document.getElementById('productId').value;
  const productData = {
    name: document.getElementById('productName').value,
    category: document.getElementById('productCategory').value,
    price: parseFloat(document.getElementById('productPrice').value),
    stock: parseInt(document.getElementById('productStock').value),
    image: document.getElementById('productImage').value,
    description: document.getElementById('productDescription').value,
    features: document.getElementById('productFeatures').value.split(',').map(f => f.trim()).filter(f => f)
  };
  
  showLoading();
  
  setTimeout(() => {
    if (productId) {
      // Edit existing product
      const productIndex = adminData.products.findIndex(p => p.id === parseInt(productId));
      if (productIndex !== -1) {
        adminData.products[productIndex] = { ...adminData.products[productIndex], ...productData };
        showNotification('Product updated successfully!', 'success');
      }
    } else {
      // Add new product
      const newProduct = {
        id: Math.max(...adminData.products.map(p => p.id)) + 1,
        ...productData,
        rating: 0,
        reviews: 0,
        sku: `SKU-${Date.now()}`
      };
      adminData.products.push(newProduct);
      showNotification('Product added successfully!', 'success');
    }
    
    hideLoading();
    closeModal('productModal');
    renderProducts();
  }, 1000);
}

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  // Set up navigation event listeners
  document.querySelectorAll('.admin-nav__link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const section = this.getAttribute('data-section');
      switchSection(section);
    });
  });
  
  // Modal event listeners
  document.getElementById('orderModalClose').addEventListener('click', () => closeModal('orderDetailModal'));
  document.getElementById('productModalClose').addEventListener('click', () => closeModal('productModal'));
  document.getElementById('cancelProductBtn').addEventListener('click', () => closeModal('productModal'));
  document.getElementById('notificationClose').addEventListener('click', function() {
    document.getElementById('notification').classList.add('hidden');
  });
  
  // Form submission
  document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault();
    saveProduct();
  });
  
  // Close modals when clicking outside
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        this.classList.add('hidden');
      }
    });
  });
  
  // Logout functionality
  document.getElementById('logoutBtn').addEventListener('click', function() {
    if (confirm('Are you sure you want to logout?')) {
      showNotification('Logged out successfully', 'success');
      // In a real app, this would redirect to login page
    }
  });
  
  // Load Chart.js
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
  script.onload = function() {
    // Chart.js is now available
    if (appState.currentSection === 'analytics') {
      setTimeout(initializeCharts, 100);
    }
  };
  document.head.appendChild(script);
  
  // Initialize the dashboard
  switchSection('dashboard');
});