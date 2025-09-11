// src/components/Settings.js
import React, { useState } from 'react';
import { Save, Trash2 } from 'lucide-react';

const Settings = () => {
  const [settings, setSettings] = useState({
    fullName: 'Jane Doe',
    email: 'jane@example.com',
    language: 'English(US)',
    notifications: {
      reviewAlerts: true,
      newsUpdates: true,
      securityNotifications: true,
      newCustomerReviews: true,
      securityAlerts: true
    },
    security: {
      changePassword: false
    }
  });

  const handleInputChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNotificationChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [field]: value
      }
    }));
  };

  const handleSave = () => {
    console.log('Settings saved:', settings);
    alert('Settings saved successfully!');
  };

  const handleDeactivateAccount = () => {
    if (window.confirm('Are you sure you want to deactivate your account?')) {
      console.log('Account deactivated');
      alert('Account deactivated');
    }
  };

  return (
    <div className="settings-page">
      <div className="page-header">
        <h1>Settings</h1>
      </div>

      <div className="settings-content">
        {/* Profile Section */}
        <div className="settings-section">
          <h3>Profile</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                value={settings.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                value={settings.email}
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
          {/* Account Section */}
          <div className="settings-section">
            <h3>Account</h3>
            <button className="deactivate-btn" onClick={handleDeactivateAccount}>
              <Trash2 size={16} />
              Deactivate Account
            </button>
            <p className="deactivate-text">
              Disabling your account will prevent you from logging in with your current credentials.
            </p>

            <div className="form-group">
              <label>Language</label>
              <select
                value={settings.language}
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

          {/* Security Section */}
          <div className="settings-section">
            <h3>Security</h3>
            <div className="security-item">
              <span>Change password</span>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.security.changePassword}
                  onChange={(e) => setSettings(prev => ({
                    ...prev,
                    security: { ...prev.security, changePassword: e.target.checked }
                  }))}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
            <div className="security-item">
              <span>Get notified of new customer reviews</span>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.notifications.newCustomerReviews}
                  onChange={(e) => handleNotificationChange('newCustomerReviews', e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
            <div className="security-item">
              <span>News and Updates</span>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.notifications.newsUpdates}
                  onChange={(e) => handleNotificationChange('newsUpdates', e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
            <div className="security-item">
              <span>Security Notifications</span>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.notifications.securityAlerts}
                  onChange={(e) => handleNotificationChange('securityAlerts', e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
        </div>

        {/* Notifications Section */}
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
                  checked={settings.notifications.reviewAlerts}
                  onChange={(e) => handleNotificationChange('reviewAlerts', e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>

            <div className="notification-item">
              <div className="notification-info">
                <span className="notification-title">News and Updates</span>
                <span className="notification-desc">Weekly summary</span>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.notifications.newsUpdates}
                  onChange={(e) => handleNotificationChange('newsUpdates', e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>

            <div className="notification-item">
              <div className="notification-info">
                <span className="notification-title">Security Notifications</span>
                <span className="notification-desc">Receive alerts about security events</span>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.notifications.securityNotifications}
                  onChange={(e) => handleNotificationChange('securityNotifications', e.target.checked)}
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

export default Settings;
