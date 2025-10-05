import React, { useState } from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";

// Admin Dashboard Main Component
function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/signin");
  };

  return (
    <div className="admin-dashboard">
      <AdminNavbar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        onLogout={handleLogout}
      />

      <div className="admin-container">
        <AdminSidebar
          sidebarOpen={sidebarOpen}
          currentPath={window.location.pathname}
        />

        <div
          className={`admin-content ${
            sidebarOpen ? "sidebar-open" : "sidebar-closed"
          }`}
        >
          <div className="content-area">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/users" element={<Users />} />
              <Route path="/services" element={<Services />} />
              <Route path="/vendors" element={<Vendors />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>

      <style jsx>{`
        ${adminStyles}
      `}</style>
    </div>
  );
}

// Admin Navbar Component
function AdminNavbar({ sidebarOpen, setSidebarOpen, onLogout }) {
  return (
    <nav className="admin-navbar">
      <div className="nav-left">
        <button
          className="toggle-btn"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </button>
        <h2 className="admin-title">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="crown-icon"
          >
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
          </svg>
          Royal Creation Admin
        </h2>
      </div>

      <div className="nav-right">
        <div className="admin-user">
          <span>Welcome, Admin</span>
        </div>
        <button className="logout-btn" onClick={onLogout}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
          </svg>
          Logout
        </button>
      </div>
    </nav>
  );
}

// Admin Sidebar Component
function AdminSidebar({ sidebarOpen, currentPath }) {
  const menuItems = [
    { path: "/admin/dashboard", icon: "📊", label: "Overview" },
    { path: "/admin/dashboard/bookings", icon: "📅", label: "Bookings" },
    { path: "/admin/dashboard/contacts", icon: "📝", label: "Contacts" },
    { path: "/admin/dashboard/users", icon: "👥", label: "Users" },
    { path: "/admin/dashboard/services", icon: "🎯", label: "Services" },
    { path: "/admin/dashboard/vendors", icon: "🏪", label: "Vendors" },
    { path: "/admin/dashboard/settings", icon: "⚙️", label: "Settings" },
  ];

  return (
    <div className={`admin-sidebar ${sidebarOpen ? "open" : "closed"}`}>
      <div className="sidebar-menu">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`menu-item ${currentPath === item.path ? "active" : ""}`}
          >
            <span className="menu-icon">{item.icon}</span>
            <span className="menu-label">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Overview Component
function Overview() {
  const stats = [
    { title: "Total Bookings", value: "0", change: "+0", icon: "📅" },
    { title: "Revenue", value: "0", change: "+0", icon: "💰" },
    { title: "Active Users", value: "3", change: "+3%", icon: "👥" },
    { title: "Services", value: "8", change: "+0", icon: "🎯" },
  ];

  const recentActivities = [
    { user: "John Doe", action: "Booked Wedding Planning", time: "2 min ago" },
    { user: "Sarah Smith", action: "Cancelled Event", time: "1 hour ago" },
    { user: "Mike Johnson", action: "Updated Profile", time: "2 hours ago" },
    {
      user: "Emily Davis",
      action: "Booked Birthday Party",
      time: "3 hours ago",
    },
  ];

  return (
    <div className="overview-page">
      <div className="page-header">
        <h1>Dashboard Overview</h1>
        <p>Welcome to your admin dashboard</p>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <h3>{stat.value}</h3>
              <p>{stat.title}</p>
              <span
                className={`stat-change ${
                  stat.change.includes("+") ? "positive" : "negative"
                }`}
              >
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts and Activities */}
      <div className="overview-content">
        <div className="chart-section">
          <div className="section-card">
            <h3>Revenue Overview</h3>
            <div className="chart-placeholder">
              <div className="chart-bars">
                {[65, 80, 45, 90, 75, 50, 85].map((height, index) => (
                  <div
                    key={index}
                    className="chart-bar"
                    style={{ height: `${height}%` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="activities-section">
          <div className="section-card">
            <h3>Recent Activities</h3>
            <div className="activities-list">
              {recentActivities.map((activity, index) => (
                <div key={index} className="activity-item">
                  <div className="activity-avatar">
                    {activity.user.charAt(0)}
                  </div>
                  <div className="activity-details">
                    <strong>{activity.user}</strong>
                    <span>{activity.action}</span>
                  </div>
                  <div className="activity-time">{activity.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Bookings Component
function Bookings() {
  const bookings = [
    {
      id: "#BK001",
      customer: "John Doe",
      service: "Wedding Planning",
      date: "2024-01-15",
      status: "Confirmed",
      amount: "$2,500",
    },
    {
      id: "#BK002",
      customer: "Sarah Smith",
      service: "Birthday Party",
      date: "2024-01-16",
      status: "Pending",
      amount: "$800",
    },
    {
      id: "#BK003",
      customer: "Mike Johnson",
      service: "Corporate Event",
      date: "2024-01-17",
      status: "Confirmed",
      amount: "$3,200",
    },
    {
      id: "#BK004",
      customer: "Emily Davis",
      service: "Anniversary",
      date: "2024-01-18",
      status: "Cancelled",
      amount: "$1,200",
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Confirmed":
        return "status-confirmed";
      case "Pending":
        return "status-pending";
      case "Cancelled":
        return "status-cancelled";
      default:
        return "";
    }
  };

  return (
    <div className="bookings-page">
      <div className="page-header">
        <h1>Bookings Management</h1>
        <p>Manage all event bookings</p>
      </div>

      <div className="section-card">
        <div className="table-header">
          <h3>Recent Bookings</h3>
          <button className="btn-primary">+ New Booking</button>
        </div>

        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Customer</th>
                <th>Service</th>
                <th>Date</th>
                <th>Status</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.id}</td>
                  <td>{booking.customer}</td>
                  <td>{booking.service}</td>
                  <td>{booking.date}</td>
                  <td>
                    <span
                      className={`status-badge ${getStatusClass(
                        booking.status
                      )}`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td>{booking.amount}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-edit">Edit</button>
                      <button className="btn-delete">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Contacts Component
function Contacts() {
  const [quotes, setQuotes] = React.useState([]);

  React.useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/quotes");
        const data = await response.json();
        setQuotes(data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchQuotes();
  }, []);

  return (
    <div className="contacts-page">
      <div className="page-header">
        <h1>Contacts</h1>
        <p>View and manage customer contacts</p>
      </div>

      <div className="section-card">
        <div className="table-header">
          <h3>All Contacts</h3>
        </div>

        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Event Date</th>
                <th>Event Type</th>
              </tr>
            </thead>
            <tbody>
              {quotes.map((quote) => (
                <tr key={quote._id}>
                  <td>{quote.name}</td>
                  <td>{quote.email}</td>
                  <td>{new Date(quote.eventDate).toLocaleDateString()}</td>
                  <td>{quote.eventType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Users Component
function Users() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="users-page">
      <div className="page-header">
        <h1>Users Management</h1>
        <p>Manage all registered users</p>
      </div>

      <div className="section-card">
        <div className="table-header">
          <h3>Registered Users</h3>
          <input
            type="text"
            placeholder="Search users..."
            className="search-input"
          />
        </div>

        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Join Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>
                    <div className="user-info">
                      <div className="user-avatar">{user.name.charAt(0)}</div>
                      {user.name}
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-edit">View</button>
                      <button className="btn-delete">Message</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Services Component
function Services() {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "Wedding Planning",
      category: "Wedding",
      price: "$2,000+",
      status: "Active",
      bookings: 45,
    },
    {
      id: 2,
      name: "Birthday Party",
      category: "Party",
      price: "$500+",
      status: "Active",
      bookings: 23,
    },
    {
      id: 3,
      name: "Corporate Event",
      category: "Corporate",
      price: "$1,500+",
      status: "Active",
      bookings: 18,
    },
    {
      id: 4,
      name: "Anniversary",
      category: "Celebration",
      price: "$800+",
      status: "Inactive",
      bookings: 8,
    },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const newService = await response.json();
        setServices([...services, newService]);
        setShowForm(false);
        setFormData({
          name: "",
          description: "",
          price: "",
          category: "",
        });
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Failed to create service.");
      }
    } catch (error) {
      console.error("Create service error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="services-page">
      <div className="page-header">
        <h1>Services Management</h1>
        <p>Manage your event services</p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-header">
              <h3>{service.name}</h3>
              <span
                className={`service-status ${service.status.toLowerCase()}`}
              >
                {service.status}
              </span>
            </div>
            <div className="service-details">
              <p>
                <strong>Category:</strong> {service.category}
              </p>
              <p>
                <strong>Price:</strong> {service.price}
              </p>
              <p>
                <strong>Bookings:</strong> {service.bookings}
              </p>
            </div>
            <div className="service-actions">
              <button className="btn-edit">Edit</button>
              <button className="btn-delete">Delete</button>
            </div>
          </div>
        ))}
      </div>

      <button
        className="btn-primary add-service-btn"
        onClick={() => setShowForm(!showForm)}
      >
        + Add New Service
      </button>

      {showForm && (
        <div className="section-card">
          <h3>Add New Service</h3>
          <form onSubmit={handleSubmit}>
            <div className="setting-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="setting-group">
              <label>Description</label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="setting-group">
              <label>Price</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>
            <div className="setting-group">
              <label>Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              />
            </div>
            <div className="settings-actions">
              <button type="submit" className="btn-primary">
                Create Service
              </button>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

// Vendors Component
function Vendors() {
  const [vendors, setVendors] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    contact: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/vendors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const newVendor = await response.json();
        setVendors([...vendors, newVendor]);
        setShowForm(false);
        setFormData({
          name: "",
          service: "",
          contact: "",
          email: "",
        });
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Failed to create vendor.");
      }
    } catch (error) {
      console.error("Create vendor error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="vendors-page">
      <div className="page-header">
        <h1>Vendors Management</h1>
        <p>Manage your event vendors</p>
      </div>

      <button
        className="btn-primary add-vendor-btn"
        onClick={() => setShowForm(!showForm)}
      >
        + Add New Vendor
      </button>

      {showForm && (
        <div className="section-card">
          <h3>Add New Vendor</h3>
          <form onSubmit={handleSubmit}>
            <div className="setting-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="setting-group">
              <label>Service</label>
              <input
                type="text"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              />
            </div>
            <div className="setting-group">
              <label>Contact</label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </div>
            <div className="setting-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="settings-actions">
              <button type="submit" className="btn-primary">
                Create Vendor
              </button>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="section-card">
        <div className="table-header">
          <h3>Registered Vendors</h3>
        </div>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Service</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {vendors.map((vendor) => (
                <tr key={vendor._id}>
                  <td>{vendor.name}</td>
                  <td>{vendor.service}</td>
                  <td>{vendor.contact}</td>
                  <td>{vendor.email}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-edit">Edit</button>
                      <button className="btn-delete">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Settings Component

function Settings() {
  const [settings, setSettings] = useState({
    siteName: "Royal Creation",
    adminEmail: "admin@royalcreation.com",
    notifications: true,
    autoApprove: false,
  });

  const handleInputChange = (field, value) => {
    setSettings((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="settings-page">
      <div className="page-header">
        <h1>Settings</h1>
        <p>Manage your application settings</p>
      </div>

      <div className="settings-grid">
        <div className="section-card">
          <h3>General Settings</h3>
          <div className="setting-group">
            <label>Site Name</label>
            <input
              type="text"
              value={settings.siteName}
              onChange={(e) => handleInputChange("siteName", e.target.value)}
            />
          </div>
          <div className="setting-group">
            <label>Admin Email</label>
            <input
              type="email"
              value={settings.adminEmail}
              onChange={(e) => handleInputChange("adminEmail", e.target.value)}
            />
          </div>
        </div>

        <div className="section-card">
          <h3>Preferences</h3>
          <div className="setting-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={settings.notifications}
                onChange={(e) =>
                  handleInputChange("notifications", e.target.checked)
                }
              />
              <span className="checkmark"></span>
              Enable Email Notifications
            </label>
          </div>
          <div className="setting-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={settings.autoApprove}
                onChange={(e) =>
                  handleInputChange("autoApprove", e.target.checked)
                }
              />
              <span className="checkmark"></span>
              Auto-approve Bookings
            </label>
          </div>
        </div>
      </div>

      <div className="settings-actions">
        <button className="btn-primary">Save Changes</button>
        <button className="btn-secondary">Reset to Default</button>
      </div>
    </div>
  );
}

// CSS Styles
const adminStyles = `
  .admin-dashboard {
    min-height: 100vh;
    background: #f8f9fa;
  }

  /* Admin Navbar */
  .admin-navbar {
    background: white;
    padding: 0 2rem;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .nav-left {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .toggle-btn {
    background: none;
    border: none;
    color: rgb(255, 102, 163);
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 8px;
    transition: all 0.3s ease;
  }

  .toggle-btn:hover {
    background: rgba(255, 102, 163, 0.1);
  }

  .admin-title {
    color: #333;
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0;
  }

  .crown-icon {
    color: rgb(255, 102, 163);
  }

  .nav-right {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .admin-user {
    color: #666;
    font-weight: 500;
  }

  .logout-btn {
    background: rgb(255, 102, 163);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  .logout-btn:hover {
    background: #e60073;
    transform: translateY(-1px);
  }

  /* Admin Container */
  .admin-container {
    display: flex;
    min-height: calc(100vh - 70px);
  }

  /* Admin Sidebar */
  .admin-sidebar {
    background: white;
    width: 280px;
    transition: all 0.3s ease;
    box-shadow: 2px 0 10px rgba(0,0,0,0.1);
  }

  .admin-sidebar.closed {
    width: 0;
    transform: translateX(-100%);
  }

  .sidebar-menu {
    padding: 2rem 1rem;
  }

  .menu-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.5rem;
    color: #666;
    text-decoration: none;
    border-radius: 12px;
    margin-bottom: 0.5rem;
    transition: all 0.3s ease;
  }

  .menu-item:hover {
    background: rgba(255, 102, 163, 0.1);
    color: rgb(255, 102, 163);
  }

  .menu-item.active {
    background: rgb(255, 102, 163);
    color: white;
  }

  .menu-icon {
    font-size: 1.2rem;
  }

  .menu-label {
    font-weight: 500;
  }

  /* Admin Content */
  .admin-content {
    flex: 1;
    padding: 2rem;
    transition: all 0.3s ease;
  }

  .admin-content.sidebar-closed {
    margin-left: 0;
  }

  .content-area {
    max-width: 1200px;
    margin: 0 auto;
  }

  /* Common Components */
  .page-header {
    margin-bottom: 2rem;
  }

  .page-header h1 {
    color: #333;
    font-size: 2rem;
    font-weight: bold;
    margin: 0 0 0.5rem 0;
  }

  .page-header p {
    color: #666;
    margin: 0;
  }

  .section-card {
    background: white;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    margin-bottom: 2rem;
  }

  .section-card h3 {
    color: #333;
    margin: 0 0 1.5rem 0;
    font-size: 1.3rem;
  }

  /* Stats Grid */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .stat-card {
    background: white;
    padding: 1.5rem;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: transform 0.3s ease;
  }

  .stat-card:hover {
    transform: translateY(-5px);
  }

  .stat-icon {
    font-size: 2rem;
    background: rgba(255, 102, 163, 0.1);
    width: 60px;
    height: 60px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .stat-content h3 {
    color: #333;
    font-size: 1.8rem;
    margin: 0 0 0.25rem 0;
    font-weight: bold;
  }

  .stat-content p {
    color: #666;
    margin: 0 0 0.5rem 0;
  }

  .stat-change {
    font-weight: 600;
    font-size: 0.9rem;
  }

  .stat-change.positive {
    color: #10b981;
  }

  .stat-change.negative {
    color: #ef4444;
  }

  /* Overview Content */
  .overview-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
  }

  .chart-placeholder {
    background: linear-gradient(135deg, #fce4ec, #f8bbd9);
    height: 300px;
    border-radius: 12px;
    display: flex;
    align-items: end;
    padding: 1rem;
  }

  .chart-bars {
    display: flex;
    align-items: end;
    gap: 0.5rem;
    width: 100%;
    height: 100%;
  }

  .chart-bar {
    flex: 1;
    background: rgb(255, 102, 163);
    border-radius: 4px;
    min-height: 20px;
    transition: all 0.3s ease;
  }

  .chart-bar:hover {
    opacity: 0.8;
  }

  /* Activities List */
  .activities-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .activity-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 12px;
  }

  .activity-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgb(255, 102, 163);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }

  .activity-details {
    flex: 1;
  }

  .activity-details strong {
    color: #333;
    display: block;
  }

  .activity-details span {
    color: #666;
    font-size: 0.9rem;
  }

  .activity-time {
    color: #999;
    font-size: 0.8rem;
  }

  /* Table Styles */
  .table-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .btn-primary {
    background: rgb(255, 102, 163);
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  .btn-primary:hover {
    background: #e60073;
    transform: translateY(-2px);
  }

  .table-container {
    overflow-x: auto;
  }

  .data-table {
    width: 100%;
    border-collapse: collapse;
  }

  .data-table th {
    background: #f8f9fa;
    padding: 1rem;
    text-align: left;
    font-weight: 600;
    color: #333;
    border-bottom: 2px solid #e9ecef;
  }

  .data-table td {
    padding: 1rem;
    border-bottom: 1px solid #e9ecef;
    color: #666;
  }

  .data-table tr:hover {
    background: #f8f9fa;
  }

  /* Status Badges */
  .status-badge {
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
  }

  .status-confirmed {
    background: #d1fae5;
    color: #065f46;
  }

  .status-pending {
    background: #fef3c7;
    color: #92400e;
  }

  .status-cancelled {
    background: #fee2e2;
    color: #991b1b;
  }

  /* Action Buttons */
  .action-buttons {
    display: flex;
    gap: 0.5rem;
  }

  .btn-edit {
    background: rgba(255, 102, 163, 0.1);
    color: rgb(255, 102, 163);
    border: 1px solid rgb(255, 102, 163);
    padding: 0.5rem 1rem;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.8rem;
    transition: all 0.3s ease;
  }

  .btn-edit:hover {
    background: rgb(255, 102, 163);
    color: white;
  }

  .btn-delete {
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
    border: 1px solid #ef4444;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.8rem;
    transition: all 0.3s ease;
  }

  .btn-delete:hover {
    background: #ef4444;
    color: white;
  }

  /* User Info */
  .user-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .user-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgb(255, 102, 163);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 0.9rem;
  }

  /* Search Input */
  .search-input {
    padding: 0.75rem 1rem;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    font-size: 0.9rem;
    width: 250px;
  }

  .search-input:focus {
    outline: none;
    border-color: rgb(255, 102, 163);
    box-shadow: 0 0 0 3px rgba(255, 102, 163, 0.1);
  }

  /* Services Grid */
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .service-card {
    background: white;
    padding: 1.5rem;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    transition: transform 0.3s ease;
  }

  .service-card:hover {
    transform: translateY(-5px);
  }

  .service-header {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-bottom: 1rem;
  }

  .service-header h3 {
    color: #333;
    margin: 0;
    font-size: 1.2rem;
  }

  .service-status {
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
  }

  .service-status.active {
    background: #d1fae5;
    color: #065f46;
  }

  .service-status.inactive {
    background: #f3f4f6;
    color: #6b7280;
  }

  .service-details p {
    margin: 0.5rem 0;
    color: #666;
  }

  .service-actions {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .add-service-btn {
    width: 100%;
    max-width: 200px;
  }

  /* Settings */
  .settings-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .setting-group {
    margin-bottom: 1.5rem;
  }

  .setting-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #333;
  }

  .setting-group input[type="text"],
  .setting-group input[type="email"] {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;
  }

  .setting-group input:focus {
    outline: none;
    border-color: rgb(255, 102, 163);
    box-shadow: 0 0 0 3px rgba(255, 102, 163, 0.1);
  }

  .checkbox-group {
    display: flex;
    align-items: center;
  }

  .checkbox-label {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-weight: normal;
  }

  .checkbox-label input {
    margin-right: 0.75rem;
  }

  .settings-actions {
    display: flex;
    gap: 1rem;
  }

  .btn-secondary {
    background: #6b7280;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  .btn-secondary:hover {
    background: #4b5563;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .admin-navbar {
      padding: 0 1rem;
    }

    .admin-title {
      font-size: 1.2rem;
    }

    .admin-content {
      padding: 1rem;
    }

    .overview-content {
      grid-template-columns: 1fr;
    }

    .stats-grid {
      grid-template-columns: 1fr;
    }

    .table-header {
      flex-direction: column;
      gap: 1rem;
      align-items: stretch;
    }

    .settings-grid {
      grid-template-columns: 1fr;
    }

    .settings-actions {
      flex-direction: column;
    }
  }
`;

export default AdminDashboard;
