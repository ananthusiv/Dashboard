document.addEventListener('DOMContentLoaded', function () {
  // Sidebar Toggle Functionality
  document.getElementById("navbar-toggler").addEventListener("click", function () {
    const sidebar = document.querySelector(".sidebar");

    // Toggle sidebar fullscreen and visibility
    sidebar.classList.toggle("fullscreen");

    // Toggle the arrow icon between right and left
    const arrowIcon = document.querySelector(".navbar-toggler i");
    if (sidebar.classList.contains("fullscreen")) {
      arrowIcon.classList.remove("fa-arrow-right");
      arrowIcon.classList.add("fa-arrow-left");
    } else {
      arrowIcon.classList.remove("fa-arrow-left");
      arrowIcon.classList.add("fa-arrow-right");
    }
  });

  // Profile Dropdown Menu Toggle
  document.getElementById("profile-icon").addEventListener("click", function () {
    const dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.style.display = (dropdownMenu.style.display === "block") ? "none" : "block";
  });

  // Theme Toggler functionality (Ensure the button with id 'theme-toggler' exists)
  const themeToggler = document.getElementById("theme-toggler");
  if (themeToggler) {
    themeToggler.addEventListener("click", function () {
      const body = document.body;
      body.classList.toggle("dark-theme");
      body.classList.toggle("light-theme");

      // Save the theme preference in localStorage
      if (body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  } else {
    console.error("Theme toggler button not found.");
  }

  // Apply saved theme from localStorage on page load
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
  } else {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
  }



 // Bar Chart (Total Revenue)
const barChartData = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  datasets: [{
    label: 'Total Revenue (₹)',
    data: [5000, 7000, 8500, 10000],  // Revenue data for each week
    backgroundColor: '#a3080c',
    borderRadius: 8,
    borderWidth: 0
  }]
};

const barChartCtx = document.getElementById('ordersBarChart').getContext('2d');
const ordersBarChart = new Chart(barChartCtx, {
  type: 'bar',
  data: barChartData,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Weeks',
          color: '#333',
          font: {
            size: 14
          }
        }
      },
      y: {
        title: {
          display: true,
          text: 'Revenue (₹)',
          color: '#333',
          font: {
            size: 14
          }
        },
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: '#333',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#a3080c',
        borderWidth: 1
      }
    }
  }
});

// Line Chart (Completed Orders)
const lineChartData = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
  datasets: [{
    label: 'Completed Orders',
    data: [100, 150, 200, 180, 220],  // Number of completed orders each week
    borderColor: '#a3080c',
    backgroundColor: 'rgba(163, 8, 12, 0.2)',
    fill: true,
    tension: 0.3,
    borderWidth: 3
  }]
};

const lineChartCtx = document.getElementById('ordersLineChart').getContext('2d');
const ordersLineChart = new Chart(lineChartCtx, {
  type: 'line',
  data: lineChartData,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Weeks',
          color: '#333',
          font: {
            size: 14
          }
        }
      },
      y: {
        title: {
          display: true,
          text: 'Number of Orders',
          color: '#333',
          font: {
            size: 14
          }
        },
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: '#333',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#a3080c',
        borderWidth: 1
      }
    }
  }
});

  // Create other charts (e.g., Monthly Revenue, Customer Feedback, Regional Sales)
  const monthlyRevenueCtx = document.getElementById('monthlyRevenueChart').getContext('2d');
  new Chart(monthlyRevenueCtx, {
    type: 'bar',
    data: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [{
        label: 'Revenue',
        data: [5000, 7000, 8000, 6000],
        backgroundColor: '#a3080c',
      }]
    }
  });

  const customerFeedbackCtx = document.getElementById('customerFeedbackChart').getContext('2d');
  new Chart(customerFeedbackCtx, {
    type: 'doughnut',
    data: {
      labels: ['Positive', 'Neutral', 'Negative'],
      datasets: [{
        data: [70, 20, 10],
        backgroundColor: ['#a3080c', '#f5d4b7', '#333'],
      }]
    }
  });

  const regionalSalesCtx = document.getElementById('regionalSalesChart').getContext('2d');
  new Chart(regionalSalesCtx, {
    type: 'line',
    data: {
      labels: ['North', 'South', 'East', 'West'],
      datasets: [{
        label: 'Sales',
        data: [3000, 4000, 2500, 3500],
        borderColor: '#a3080c',
        fill: false,
      }]
    }
  });
});

// Product management functionality
const allProducts = [
  {
    image: "dashboard-assets/chicken bucket.webp",
    name: "Chicken Bucket",
    category: "Fried Chicken",
    price: "$12.99",
    stock: "20",
    status: "Available",
  },
  {
    image: "dashboard-assets/hot wings.webp",
    name: "Spicy Wings",
    category: "Hot Wings",
    price: "$8.99",
    stock: "15",
    status: "Available",
  },
  {
    image: "dashboard-assets/zinger burger.webp",
    name: "Zinger Burger",
    category: "Burgers",
    price: "$9.99",
    stock: "10",
    status: "Low Stock",
  },
  {
    image: "dashboard-assets/pop corn chicken.webp",
    name: "Pop corn chicken",
    category: "Sides",
    price: "$4.99",
    stock: "50",
    status: "Available",
  },
];

let isExpanded = false;

function toggleProductRows() {
  const productList = document.getElementById("product-list");
  const viewToggleBtn = document.querySelector(".view-more-btn");
  productList.innerHTML = ""; // Clear existing rows

  if (isExpanded) {
    // Show only the first product
    const product = allProducts[0];
    const row = document.createElement("tr");
    row.innerHTML = `
      <td data-label="Image">
        <img src="${product.image}" alt="${product.name}" class="product-thumbnail">
      </td>
      <td data-label="Product Name">${product.name}</td>
      <td data-label="Category">${product.category}</td>
      <td data-label="Price">${product.price}</td>
      <td data-label="Stock">${product.stock}</td>
      <td data-label="Status">${product.status}</td>
      <td data-label="Actions">
        <button class="action-btn edit-btn">Edit</button>
        <button class="action-btn delete-btn">Delete</button>
      </td>
    `;
    productList.appendChild(row);
    viewToggleBtn.textContent = "View More";
  } else {
    // Show all products
    allProducts.forEach(product => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td data-label="Image">
          <img src="${product.image}" alt="${product.name}" class="product-thumbnail">
        </td>
        <td data-label="Product Name">${product.name}</td>
        <td data-label="Category">${product.category}</td>
        <td data-label="Price">${product.price}</td>
        <td data-label="Stock">${product.stock}</td>
        <td data-label="Status">${product.status}</td>
        <td data-label="Actions">
          <button class="action-btn edit-btn">Edit</button>
          <button class="action-btn delete-btn">Delete</button>
        </td>
      `;
      productList.appendChild(row);
    });
    viewToggleBtn.textContent = "View Less";
  }

  isExpanded = !isExpanded;
}

function openAddProductModal() {
  document.getElementById("addProductModal").style.display = "block";
}

function closeAddProductModal() {
  document.getElementById("addProductModal").style.display = "none";
}

document.getElementById("addProductForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const productImage = document.getElementById("productImage").value;
  const productName = document.getElementById("productName").value;
  const productCategory = document.getElementById("productCategory").value;
  const productPrice = parseFloat(document.getElementById("productPrice").value).toFixed(2);
  const productStock = document.getElementById("productStock").value;
  const productStatus = document.getElementById("productStatus").value;

  const newProduct = {
    image: productImage,
    name: productName,
    category: productCategory,
    price: `$${productPrice}`,
    stock: productStock,
    status: productStatus,
  };

  allProducts.push(newProduct); // Add new product to the list

  if (!isExpanded) {
    toggleProductRows(); // Refresh the table
  }

  closeAddProductModal();
});
function toggleTab(tabName) {
  // Hide both sections
  document.getElementById("overview").style.display = "none";
  document.getElementById("reports").style.display = "none";
  
  // Remove the active class from all tabs
  document.querySelectorAll(".tab").forEach(tab => {
      tab.classList.remove("active");
  });

  // Show the selected section
  if (tabName === "overview") {
      document.getElementById("overview").style.display = "block";
      document.getElementById("overview-tab").classList.add("active");
  } else if (tabName === "reports") {
      document.getElementById("reports").style.display = "block";
      document.getElementById("reports-tab").classList.add("active");
  }
}

// Initialize default tab as 'overview'
toggleTab("overview");
document.addEventListener("DOMContentLoaded", () => {
  const staffItems = document.querySelectorAll(".staff-item");
  const popup = document.getElementById("achievement-popup");
  const popupText = popup.querySelector(".achievement-text");

  staffItems.forEach((item) => {
    item.addEventListener("mouseenter", (e) => {
      const achievement = item.getAttribute("data-achievement");
      popupText.textContent = achievement;

      const rect = item.getBoundingClientRect();
      popup.style.top = `${rect.top + window.scrollY - popup.offsetHeight - 10}px`;
      popup.style.left = `${rect.left + (rect.width / 2) - (popup.offsetWidth / 2)}px`;

      popup.style.display = "block";
    });

    item.addEventListener("mouseleave", () => {
      popup.style.display = "none";
    });
  });
});
// Function to refresh live order updates
function refreshLiveOrders() {
  const orderList = document.querySelector(".order-update-list");

  // Simulated updated orders data
  const updatedOrders = [
    { id: 3463, details: "Pasta Alfredo", status: "Preparing", time: "Just now" },
    { id: 3464, details: "Grilled Chicken", status: "Pending", time: "2 mins ago" },
    { id: 3465, details: "Veggie Burger", status: "Completed", time: "5 mins ago" },
    { id: 3466, details: "Cheese Pizza", status: "Preparing", time: "7 mins ago" },
    { id: 3467, details: "Chocolate Shake", status: "Pending", time: "10 mins ago" },
    { id: 3468, details: "Garlic Knots", status: "Completed", time: "12 mins ago" },
  ];

  // Clear the existing list
  orderList.innerHTML = "";

  // Update the list with new data
  updatedOrders.forEach((order) => {
    const listItem = document.createElement("li");
    listItem.classList.add("order-update-item");

    // Set the inner HTML for each order
    listItem.innerHTML = `
      <span class="order-details">Order #${order.id}: ${order.details}</span>
      <span class="order-status ${order.status.toLowerCase()}">${order.status}</span>
      <span class="order-time">${order.time}</span>
    `;

    // Append to the list
    orderList.appendChild(listItem);
  });

  // Notify user of the refresh
  alert("Live Order Updates refreshed!");
}

// Attach the refresh function to the button
document.querySelector(".refresh-button").addEventListener("click", refreshLiveOrders);


const feedbackList = document.querySelector('.feedback-list');
  feedbackList.addEventListener('animationiteration', () => {
    feedbackList.style.animation = 'none';
    feedbackList.offsetHeight; // Trigger reflow
    feedbackList.style.animation = 'scrollFeedback 10s linear infinite';
  });