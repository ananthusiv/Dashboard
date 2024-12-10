document.addEventListener("DOMContentLoaded", function () {
  // Update the time every second
  function updateTime() {
      const currentTime = new Date().toLocaleTimeString();
      document.getElementById("current-time").textContent = `Current Time: ${currentTime}`;
  }
  setInterval(updateTime, 1000);

  // Create charts for various sections
  const stockBarCtx = document.getElementById("stock-bar").getContext("2d");
  const wasteChartCtx = document.getElementById("waste-chart").getContext("2d");
  const salesGraphCtx = document.getElementById("sales-graph").getContext("2d");
  const topSellingCtx = document.getElementById("top-selling").getContext("2d");

  // Stock Levels Bar Chart
  new Chart(stockBarCtx, {
      type: 'bar',
      data: {
          labels: ['Chicken Legs', 'Wings', 'Breasts', 'Thighs', 'Drumsticks'],
          datasets: [{
              label: 'Stock Levels (kg)',
              data: [120, 80, 150, 130, 95],
              backgroundColor: '#d32f2f',
              borderColor: '#c62828',
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          plugins: {
              title: {
                  display: true,
                  text: 'Current Chicken Stock Levels'
              }
          }
      }
  });

  // Waste Tracking Pie Chart
  new Chart(wasteChartCtx, {
      type: 'pie',
      data: {
          labels: ['Unused Chicken', 'Processed Chicken', 'Wasted'],
          datasets: [{
              label: 'Waste Tracking',
              data: [60, 120, 40],
              backgroundColor: ['#ffb74d', '#4caf50', '#d32f2f'],
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          plugins: {
              title: {
                  display: true,
                  text: 'Waste Tracking'
              }
          }
      }
  });

  // Sales Graph Line Chart
  new Chart(salesGraphCtx, {
      type: 'line',
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [{
              label: 'Sales ($)',
              data: [15000, 20000, 25000, 22000, 28000, 32000],
              backgroundColor: 'rgba(33, 150, 243, 0.2)',
              borderColor: '#2196f3',
              borderWidth: 2
          }]
      },
      options: {
          responsive: true,
          plugins: {
              title: {
                  display: true,
                  text: 'Sales Performance'
              }
          }
      }
  });

  // Top-Selling Products Doughnut Chart
  new Chart(topSellingCtx, {
      type: 'doughnut',
      data: {
          labels: ['Chicken Wings', 'Chicken Legs', 'Chicken Breasts', 'Fries'],
          datasets: [{
              label: 'Top-Selling Products',
              data: [500, 300, 400, 200],
              backgroundColor: ['#ff5722', '#4caf50', '#fbc02d', '#2196f3'],
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          plugins: {
              title: {
                  display: true,
                  text: 'Top-Selling Products'
              }
          }
      }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Order Fulfillment Time Line Chart
  const ctxOrderTime = document.getElementById('order-fulfillment-time').getContext('2d');
  new Chart(ctxOrderTime, {
      type: 'line',
      data: {
          labels: ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM'],  // Example labels (hours of the day)
          datasets: [{
              label: 'Average Order Fulfillment Time (mins)',
              data: [5, 8, 7, 6, 4],  // Example data (minutes)
              borderColor: 'rgba(75, 192, 192, 1)',
              fill: false
          }]
      }
  });

  // Staff Efficiency Bar Chart
  const ctxStaffEfficiency = document.getElementById('staff-efficiency').getContext('2d');
  new Chart(ctxStaffEfficiency, {
      type: 'bar',
      data: {
          labels: ['Employee A', 'Employee B', 'Employee C'],  // Example employees
          datasets: [{
              label: 'Orders Completed',
              data: [20, 15, 30],  // Example data (orders completed)
              backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
              borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
              borderWidth: 1
          }]
      }
  });
});
document.addEventListener("DOMContentLoaded", function () {
    // Customer Satisfaction Doughnut Chart
    const ctxSatisfaction = document.getElementById('customer-satisfaction').getContext('2d');
    new Chart(ctxSatisfaction, {
        type: 'doughnut',
        data: {
            labels: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'],
            datasets: [{
                label: 'Customer Satisfaction',
                data: [60, 30, 10, 5],
                backgroundColor: ['#66bb6a', '#ffeb3b', '#ff7043', '#e53935'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Customer Satisfaction Breakdown'
                }
            }
        }
    });

    // Order Preferences Pie Chart
    const ctxPreferences = document.getElementById('order-preferences').getContext('2d');
    new Chart(ctxPreferences, {
        type: 'pie',
        data: {
            labels: ['Chicken Wings', 'Chicken Legs', 'Fries', 'Chicken Breasts'],
            datasets: [{
                label: 'Order Preferences',
                data: [40, 25, 15, 20],
                backgroundColor: ['#ff5722', '#4caf50', '#fbc02d', '#2196f3'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Customer Order Preferences'
                }
            }
        }
    });

    // Customer Demographics Bar Chart
    const ctxDemographics = document.getElementById('customer-demographics').getContext('2d');
    new Chart(ctxDemographics, {
        type: 'bar',
        data: {
            labels: ['18-25', '26-35', '36-50', '50+'],
            datasets: [{
                label: 'Age Group Distribution',
                data: [40, 35, 15, 10],
                backgroundColor: '#2196f3',
                borderColor: '#1976d2',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Customer Demographics'
                }
            }
        }
    });

    // Customer Retention Line Chart
    const ctxRetention = document.getElementById('customer-retention').getContext('2d');
    new Chart(ctxRetention, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'Customer Retention Rate (%)',
                data: [70, 72, 75, 78, 80],
                borderColor: '#4caf50',
                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Customer Retention Trends'
                }
            }
        }
    });

    // Customer Feedback Trends Bar Chart
    const ctxFeedback = document.getElementById('customer-feedback').getContext('2d');
    new Chart(ctxFeedback, {
        type: 'bar',
        data: {
            labels: ['Positive', 'Neutral', 'Negative'],
            datasets: [{
                label: 'Feedback Distribution',
                data: [85, 10, 5],
                backgroundColor: ['#66bb6a', '#ffeb3b', '#e53935'],
                borderColor: ['#4caf50', '#ffeb3b', '#d32f2f'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Customer Feedback Trends'
                }
            }
        }
    });

    // Loyalty Program Participation Pie Chart
    const ctxLoyalty = document.getElementById('loyalty-program').getContext('2d');
    new Chart(ctxLoyalty, {
        type: 'pie',
        data: {
            labels: ['Enrolled', 'Not Enrolled'],
            datasets: [{
                label: 'Loyalty Program Participation',
                data: [55, 45],
                backgroundColor: ['#ff7043', '#42a5f5'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Loyalty Program Participation'
                }
            }
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Total Sales Over Time Line Chart
    const ctxSales = document.getElementById('total-sales').getContext('2d');
    new Chart(ctxSales, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'Total Sales ($)',
                data: [50000, 55000, 60000, 52000, 58000],
                borderColor: '#42a5f5',
                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Total Sales Over Time'
                }
            }
        }
    });

    // Sales by Product Category Pie Chart
    const ctxCategory = document.getElementById('sales-category').getContext('2d');
    new Chart(ctxCategory, {
        type: 'pie',
        data: {
            labels: ['Chicken', 'Sides', 'Beverages', 'Desserts'],
            datasets: [{
                label: 'Sales by Product Category',
                data: [60, 25, 10, 5],
                backgroundColor: ['#ff5722', '#4caf50', '#fbc02d', '#2196f3'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Sales by Product Category'
                }
            }
        }
    });

    // Sales Growth Line Chart
    const ctxGrowth = document.getElementById('sales-growth').getContext('2d');
    new Chart(ctxGrowth, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'Sales Growth (%)',
                data: [10, 5, -10, 8, 12],
                borderColor: '#ff7043',
                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Sales Growth Over Time'
                }
            }
        }
    });

    // Sales by Region Bar Chart
    const ctxRegion = document.getElementById('sales-region').getContext('2d');
    new Chart(ctxRegion, {
        type: 'bar',
        data: {
            labels: ['North', 'South', 'East', 'West'],
            datasets: [{
                label: 'Sales by Region ($)',
                data: [20000, 15000, 10000, 5000],
                backgroundColor: '#42a5f5',
                borderColor: '#1e88e5',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Sales by Region'
                }
            }
        }
    });

    // Sales Performance of Promotions Bar Chart
    const ctxPromotions = document.getElementById('sales-promotions').getContext('2d');
    new Chart(ctxPromotions, {
        type: 'bar',
        data: {
            labels: ['Pre-promotion', 'During Promotion', 'Post-promotion'],
            datasets: [{
                label: 'Sales ($)',
                data: [40000, 60000, 50000],
                backgroundColor: '#66bb6a',
                borderColor: '#388e3c',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Sales Performance of Promotions'
                }
            }
        }
    });

    // Average Order Value Line Chart
    const ctxAOV = document.getElementById('average-order-value').getContext('2d');
    new Chart(ctxAOV, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'Average Order Value ($)',
                data: [15, 17, 16, 18, 19],
                borderColor: '#fbc02d',
                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Average Order Value Over Time'
                }
            }
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Create charts for the Sustainability section
    const carbonFootprintCtx = document.getElementById("carbon-footprint").getContext("2d");
    const energyConsumptionCtx = document.getElementById("energy-consumption").getContext("2d");
    const wasteManagementCtx = document.getElementById("waste-management").getContext("2d");

    // Carbon Footprint Line Chart
    new Chart(carbonFootprintCtx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'CO2 Emissions (kg)',
                data: [10000, 12000, 9500, 10500, 11000],
                borderColor: '#2196f3',
                backgroundColor: 'rgba(33, 150, 243, 0.2)',
                fill: true,
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Carbon Footprint Over Time'
                }
            }
        }
    });

    // Energy Consumption Stacked Bar Chart
    new Chart(energyConsumptionCtx, {
        type: 'bar',
        data: {
            labels: ['Store 1', 'Store 2', 'Store 3', 'Store 4'],
            datasets: [{
                label: 'Renewable Energy (%)',
                data: [70, 65, 80, 75],
                backgroundColor: '#4caf50',
            }, {
                label: 'Non-Renewable Energy (%)',
                data: [30, 35, 20, 25],
                backgroundColor: '#f44336',
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Energy Consumption by Source'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    // Waste Management Pie Chart
    new Chart(wasteManagementCtx, {
        type: 'pie',
        data: {
            labels: ['Recycled', 'Composted', 'Landfill'],
            datasets: [{
                label: 'Waste Management',
                data: [50, 30, 20],
                backgroundColor: ['#4caf50', '#ffeb3b', '#f44336'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Waste Management Breakdown'
                }
            }
        }
    });
});
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    if (type === 'error') {
        notification.classList.add('error');
    }
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.display = 'block';
    }, 100);

    setTimeout(() => {
        notification.style.display = 'none';
    }, 4000);
}

// Example Usage
showNotification('Data saved successfully!', 'success');


// Function to search/filter metrics by name
function searchMetrics() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const cards = document.querySelectorAll('.metric');

    cards.forEach(card => {
        const cardTitle = card.querySelector('h3').innerText.toLowerCase();
        if (cardTitle.includes(query)) {
            card.style.display = 'block';  // Show the card if the title matches the search
        } else {
            card.style.display = 'none';  // Hide the card if the title does not match the search
        }
    });
}

// Function to filter content based on selected timeframe
function filterByTimeframe() {
    const timeframe = document.getElementById('timeframe-select').value;
    const cards = document.querySelectorAll('.metric');

    cards.forEach(card => {
        // Add logic to handle different timeframes
        if (timeframe === "") {
            card.style.display = 'block';  // Show all cards if no timeframe is selected
        } else if (card.dataset.timeframe === timeframe) {
            card.style.display = 'block';  // Show cards that match the selected timeframe
        } else {
            card.style.display = 'none';  // Hide cards that do not match the timeframe
        }
    });
}
const translations = {
    "en": {
        "dashboard_title": "KFC Chicken Dashboard",
        "inventory": "Inventory",
        "sales": "Sales",
        "operations": "Operations",
        "customers": "Customer Insights",
        "sales_trends": "Sales Trends",
        "sustainability": "Sustainability",
        "performance": "Performance",
        "inventory_overview": "Inventory Overview",
        "chicken_stock_levels": "Chicken Stock Levels",
        "waste_tracking": "Waste Tracking",
        "sales_performance": "Sales Performance",
        "daily_sales": "Daily Sales",
        "top_selling_products": "Top-Selling Products",
        "operations_section": "Operations",
        "order_fulfillment_time": "Order Fulfillment Time",
        "staff_efficiency": "Staff Efficiency",
        "customer_insights": "Customer Insights",
        "customer_satisfaction": "Customer Satisfaction",
        "order_preferences": "Order Preferences",
        "sales_trends_section": "Sales Trends",
        "total_sales": "Total Sales Over Time",
        "sales_by_category": "Sales by Product Category",
        "carbon_footprint": "Carbon Footprint",
        "energy_consumption": "Energy Consumption",
        "staff_performance": "Staff Performance",
        "export_csv": "Export CSV",
        "export_excel": "Export Excel",
        "export_pdf": "Export PDF",
        "daily": "Daily",
        "monthly": "Monthly",
        "yearly": "Yearly"
    },
    "es": {
        "dashboard_title": "Panel de Control de Pollo KFC",
        "inventory": "Inventario",
        "sales": "Ventas",
        "operations": "Operaciones",
        "customers": "Información del Cliente",
        "sales_trends": "Tendencias de Ventas",
        "sustainability": "Sostenibilidad",
        "performance": "Desempeño",
        "inventory_overview": "Vista General del Inventario",
        "chicken_stock_levels": "Niveles de Stock de Pollo",
        "waste_tracking": "Seguimiento de Desperdicios",
        "sales_performance": "Desempeño de Ventas",
        "daily_sales": "Ventas Diarias",
        "top_selling_products": "Productos Más Vendidos",
        "operations_section": "Operaciones",
        "order_fulfillment_time": "Tiempo de Cumplimiento de Pedidos",
        "staff_efficiency": "Eficiencia del Personal",
        "customer_insights": "Información del Cliente",
        "customer_satisfaction": "Satisfacción del Cliente",
        "order_preferences": "Preferencias de Pedidos",
        "sales_trends_section": "Tendencias de Ventas",
        "total_sales": "Ventas Totales a lo Largo del Tiempo",
        "sales_by_category": "Ventas por Categoría de Producto",
        "carbon_footprint": "Huella de Carbono",
        "energy_consumption": "Consumo de Energía",
        "staff_performance": "Desempeño del Personal",
        "export_csv": "Exportar CSV",
        "export_excel": "Exportar Excel",
        "export_pdf": "Exportar PDF",
        "daily": "Diario",
        "monthly": "Mensual",
        "yearly": "Anual"
    },
    "fr": {
        "dashboard_title": "Tableau de Bord Poulet KFC",
        "inventory": "Inventaire",
        "sales": "Ventes",
        "operations": "Opérations",
        "customers": "Informations Clients",
        "sales_trends": "Tendances des Ventes",
        "sustainability": "Durabilité",
        "performance": "Performance",
        "inventory_overview": "Aperçu de l'Inventaire",
        "chicken_stock_levels": "Niveaux de Stock de Poulet",
        "waste_tracking": "Suivi des Déchets",
        "sales_performance": "Performance des Ventes",
        "daily_sales": "Ventes Quotidiennes",
        "top_selling_products": "Produits Les Plus Vendus",
        "operations_section": "Opérations",
        "order_fulfillment_time": "Temps de Traitement des Commandes",
        "staff_efficiency": "Efficacité du Personnel",
        "customer_insights": "Informations Clients",
        "customer_satisfaction": "Satisfaction des Clients",
        "order_preferences": "Préférences de Commande",
        "sales_trends_section": "Tendances des Ventes",
        "total_sales": "Ventes Totales au Fil du Temps",
        "sales_by_category": "Ventes par Catégorie de Produit",
        "carbon_footprint": "Empreinte Carbone",
        "energy_consumption": "Consommation d'Énergie",
        "staff_performance": "Performance du Personnel",
        "export_csv": "Exporter CSV",
        "export_excel": "Exporter Excel",
        "export_pdf": "Exporter PDF",
        "daily": "Quotidien",
        "monthly": "Mensuel",
        "yearly": "Annuel"
    }
};

function changeLanguage() {
    const language = document.getElementById('language-select').value;

    // Translate the text content for all elements with the data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });

    // For title and other page elements like header or metrics
    document.querySelector('h1').textContent = translations[language]["dashboard_title"];
}
// Get the toggle button and add event listener
const themeToggleButton = document.querySelector('.theme-toggle-button');

// Check for saved user preference from localStorage
const currentTheme = localStorage.getItem('theme');

// If there is a saved theme preference, apply it
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
} else {
    document.body.classList.remove('dark-mode');
}

// Function to toggle between dark mode and light mode
function toggleTheme() {
    // Toggle the class on the body
    document.body.classList.toggle('dark-mode');

    // Save the user's preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Add event listener to the theme toggle button
themeToggleButton.addEventListener('click', toggleTheme);
