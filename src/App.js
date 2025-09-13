// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { User, BarChart3, Settings, Bell, FileText, CheckCircle, PieChart, Shield, Monitor, Edit3, Save, AlertTriangle, Info, Home, Menu, TrendingUp, Package } from 'lucide-react';
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import './App.css';

// Enhanced Sidebar Component
const Sidebar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { path: '/dashboard', icon: Home, label: 'Dashboard' },
    { path: '/profile', icon: User, label: 'Profile' },
    { path: '/notifications', icon: Bell, label: 'Notifications' },
    { path: '/analytics', icon: BarChart3, label: 'Analytics' },
    { path: '/products', icon: Package, label: 'Products' },
    { path: '/settings', icon: Settings, label: 'Settings' }
  ];

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <button 
          className="menu-toggle"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <Menu size={20} />
        </button>
        {!isCollapsed && (
          <div className="logo">
            <User className="logo-icon" />
            <span>RAVUE</span>
          </div>
        )}
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${isActive ? 'active' : ''}`}
              title={isCollapsed ? item.label : ''}
            >
              <Icon size={20} />
              {!isCollapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="user-avatar">
            <User size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Dashboard Component
const Dashboard = () => {
  const [dashboardStats] = useState({
    totalProducts: 4800,
    fakeReviewsDetected: 1200,
    reviewActivity: 120,
    detectionAccuracy: 92,
    suspiciousReviews: 5
  });

  const [recentReviews] = useState([
    { id: 1, reviewer: 'John Smith', review: 'Great Product', status: 'Fake' },
    { id: 2, reviewer: 'Alice Johnson', review: 'Misleading des...', status: 'Real' },
    { id: 3, reviewer: 'Mark Brown', review: 'Excellent value', status: 'Fake' },
    { id: 4, reviewer: 'Emily Wilson', review: 'Poor quality item', status: 'Real' }
  ]);

  const chartData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 },
    { name: 'Jun', value: 700 }
  ];

  const sentimentData = [
    { name: 'Negative', value: 35, color: '#f44336' },
    { name: 'Positive', value: 45, color: '#4CAF50' },
    { name: 'Neutral', value: 20, color: '#2196F3' }
  ];

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1>DASHBOARD</h1>
      </div>

      <div className="dashboard-grid">
        {/* Stats Cards */}
        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-content">
              <div className="stat-label">Total Products</div>
              <div className="stat-number">{dashboardStats.totalProducts.toLocaleString()}</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-content">
              <div className="stat-label">Fake Reviews Detected</div>
              <div className="stat-number">{dashboardStats.fakeReviewsDetected.toLocaleString()}</div>
            </div>
          </div>

          <div className="stat-card alert-card">
            <div className="alert-icon">
              <AlertTriangle size={24} />
            </div>
            <div className="stat-content">
              <div className="stat-label">Alert</div>
              <div className="alert-text">{dashboardStats.suspiciousReviews} suspicious reviews flagged today</div>
            </div>
          </div>
        </div>

        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-content">
              <div className="stat-label">Review Activity</div>
              <div className="stat-number">{dashboardStats.reviewActivity}%</div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-content">
              <div className="stat-label">Detection Accuracy</div>
              <div className="stat-number">{dashboardStats.detectionAccuracy}%</div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="charts-section">
          <div className="chart-card">
            <h3>Review Trends</h3>
            <div className="line-chart-container">
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#8884d8" 
                    strokeWidth={3}
                    dot={{ fill: '#8884d8', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="chart-card">
            <h3>Review Sentiment</h3>
            <div className="sentiment-chart">
              <ResponsiveContainer width="100%" height={200}>
                <RechartsPieChart>
                  <Pie
                    data={sentimentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    dataKey="value"
                  >
                    {sentimentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </RechartsPieChart>
              </ResponsiveContainer>
              <div className="sentiment-legend">
                {sentimentData.map((item, index) => (
                  <div key={index} className="legend-item">
                    <div 
                      className="legend-color" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Reviews Table */}
        <div className="recent-reviews-section">
          <h3>Recent Reviews</h3>
          <div className="reviews-table">
            <div className="table-header">
              <div className="header-cell">Review</div>
              <div className="header-cell">Reviewer</div>
              <div className="header-cell">Status</div>
            </div>
            {recentReviews.map((review) => (
              <div key={review.id} className="table-row">
                <div className="table-cell">{review.review}</div>
                <div className="table-cell">{review.reviewer}</div>
                <div className="table-cell">
                  <span className={`status-badge ${review.status.toLowerCase()}`}>
                    {review.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Keep all other components the same (Profile, SettingsPage, NotificationsPage)
const Profile = () => {
  const [profileData, setProfileData] = useState({
    fullName: 'Jane Doe',
    email: 'jane@example.com',
    phone: '+1-234-567-8900',
    location: 'New York, USA',
    bio: 'Digital marketing specialist with expertise in review management.'
  });
  const [isEditing, setIsEditing] = useState(false);

  const stats = [
    { label: 'Total Reviews Analyzed', value: '1,234' },
    { label: 'Fake Reviews Detected', value: '156' },
    { label: 'Protected Businesses', value: '23' },
    { label: 'Success Rate', value: '94%' }
  ];

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="page">
      <div className="page-header">
        <h1>Profile</h1>
        <p>Manage your personal information and account settings</p>
      </div>

      <div className="profile-content">
        <div className="profile-card">
          <div className="profile-avatar-section">
            <div className="profile-avatar">
              <User size={60} />
            </div>
            <div className="profile-basic-info">
              <h2>{profileData.fullName}</h2>
              <p className="profile-email">{profileData.email}</p>
            </div>
            <button 
              className="edit-profile-btn"
              onClick={() => setIsEditing(!isEditing)}
            >
              <Edit3 size={16} />
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>

          <div className="profile-details">
            <div className="detail-group">
              <label>Full Name</label>
              {isEditing ? (
                <input
                  type="text"
                  value={profileData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="profile-input"
                />
              ) : (
                <div className="detail-value">{profileData.fullName}</div>
              )}
            </div>

            <div className="detail-group">
              <label>Email Address</label>
              {isEditing ? (
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="profile-input"
                />
              ) : (
                <div className="detail-value">{profileData.email}</div>
              )}
            </div>

            <div className="detail-group">
              <label>Phone Number</label>
              {isEditing ? (
                <input
                  type="tel"
                  value={profileData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="profile-input"
                />
              ) : (
                <div className="detail-value">{profileData.phone}</div>
              )}
            </div>

            <div className="detail-group">
              <label>Location</label>
              {isEditing ? (
                <input
                  type="text"
                  value={profileData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="profile-input"
                />
              ) : (
                <div className="detail-value">{profileData.location}</div>
              )}
            </div>
          </div>

          {isEditing && (
            <div className="profile-actions">
              <button className="save-btn" onClick={() => setIsEditing(false)}>
                Save Changes
              </button>
              <button className="cancel-btn" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </div>
          )}
        </div>

        <div className="profile-stats">
          <h3>Account Statistics</h3>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Settings Component
const SettingsPage = () => {
  const [settingsData, setSettingsData] = useState({
    fullName: 'Jane Doe',
    email: 'jane@example.com',
    language: 'English(US)',
    notifications: {
      reviewAlerts: true,
      newsUpdates: true,
      securityNotifications: true,
      newCustomerReviews: true,
      securityAlerts: true
    }
  });

  const handleInputChange = (field, value) => {
    setSettingsData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNotificationChange = (field, value) => {
    setSettingsData(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [field]: value
      }
    }));
  };

  const handleSave = () => {
    alert('Settings saved successfully!');
  };

  const handleDeactivateAccount = () => {
    if (window.confirm('Are you sure you want to deactivate your account?')) {
      alert('Account deactivated');
    }
  };

  return (
    <div className="page">
      <div className="page-header">
        <h1>Settings</h1>
      </div>

      <div className="settings-content">
        <div className="settings-section">
          <h3>Profile</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                value={settingsData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                value={settingsData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="form-input"
              />
            </div>
          </div>
          <button className="save-btn" onClick={handleSave}>
            <Save size={16} />
            Save
          </button>
        </div>

        <div className="settings-row">
          <div className="settings-section">
            <h3>Account</h3>
            <button className="deactivate-btn" onClick={handleDeactivateAccount}>
              Deactivate Account
            </button>
            <p className="deactivate-text">
              Disabling your account will prevent you from logging in with your current credentials.
            </p>

            <div className="form-group">
              <label>Language</label>
              <select
                value={settingsData.language}
                onChange={(e) => handleInputChange('language', e.target.value)}
                className="form-select"
              >
                <option value="English(US)">English(US)</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
              </select>
            </div>
          </div>

          <div className="settings-section">
            <h3>Security</h3>
            <div className="security-item">
              <span>Change password</span>
              <label className="toggle-switch">
                <input type="checkbox" defaultChecked={false} />
                <span className="toggle-slider"></span>
              </label>
            </div>
            <div className="security-item">
              <span>Get notified of new customer reviews</span>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settingsData.notifications.newCustomerReviews}
                  onChange={(e) => handleNotificationChange('newCustomerReviews', e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h3>Notifications</h3>
          <div className="notifications-grid">
            <div className="notification-item">
              <div className="notification-info">
                <span className="notification-title">Review Alerts</span>
                <span className="notification-desc">Get notified of new customer reviews</span>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settingsData.notifications.reviewAlerts}
                  onChange={(e) => handleNotificationChange('reviewAlerts', e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Notifications Component
const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'success',
      title: 'Analysis Complete',
      message: 'Your review analysis for Widget Co. has been completed successfully.',
      time: '2 minutes ago',
      read: false
    },
    {
      id: 2,
      type: 'warning',
      title: 'Suspicious Activity Detected',
      message: 'We found 3 potentially fake reviews for your business listing.',
      time: '1 hour ago',
      read: false
    },
    {
      id: 3,
      type: 'info',
      title: 'Weekly Report Available',
      message: 'Your weekly review analysis report is ready for download.',
      time: '2 hours ago',
      read: true
    }
  ]);

  const getIcon = (type) => {
    switch (type) {
      case 'success': return <CheckCircle size={20} style={{color: '#4CAF50'}} />;
      case 'warning': return <AlertTriangle size={20} style={{color: '#FF9800'}} />;
      case 'info': return <Info size={20} style={{color: '#2196F3'}} />;
      default: return <Bell size={20} style={{color: '#666'}} />;
    }
  };

  const markAsRead = (id) => {
    setNotifications(prev =>
      prev.map(notif =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const unreadCount = notifications.filter(notif => !notif.read).length;

  return (
    <div className="page">
      <div className="page-header">
        <div className="header-content">
          <h1>Notifications</h1>
          {unreadCount > 0 && <span className="badge">{unreadCount}</span>}
        </div>
        <p>Stay updated with your latest activity and alerts</p>
      </div>

      <div className="notifications-list">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`notification-item ${!notification.read ? 'unread' : ''}`}
            onClick={() => !notification.read && markAsRead(notification.id)}
          >
            <div className="notification-icon">
              {getIcon(notification.type)}
            </div>
            <div className="notification-content">
              <div className="notification-header">
                <h4 className="notification-title">{notification.title}</h4>
                <span className="notification-time">{notification.time}</span>
              </div>
              <p className="notification-message">{notification.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main App Component
function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/analytics" element={<Dashboard />} />
            <Route path="/products" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
