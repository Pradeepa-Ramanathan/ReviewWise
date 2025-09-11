// src/components/Notifications.js
import React, { useState } from 'react';
import { Bell, CheckCircle, AlertTriangle, Info, X, Settings } from 'lucide-react';

const Notifications = () => {
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
    },
    {
      id: 4,
      type: 'success',
      title: 'Account Verified',
      message: 'Your account has been successfully verified.',
      time: '1 day ago',
      read: true
    },
    {
      id: 5,
      type: 'info',
      title: 'New Feature Available',
      message: 'Check out our new sentiment analysis feature in the dashboard.',
      time: '2 days ago',
      read: true
    }
  ]);

  const [filter, setFilter] = useState('all');

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircle size={20} className="text-green-500" />;
      case 'warning':
        return <AlertTriangle size={20} className="text-yellow-500" />;
      case 'info':
        return <Info size={20} className="text-blue-500" />;
      default:
        return <Bell size={20} className="text-gray-500" />;
    }
  };

  const markAsRead = (id) => {
    setNotifications(prev =>
      prev.map(notif =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const filteredNotifications = notifications.filter(notif => {
    if (filter === 'unread') return !notif.read;
    if (filter === 'read') return notif.read;
    return true;
  });

  const unreadCount = notifications.filter(notif => !notif.read).length;

  return (
    <div className="notifications-page">
      <div className="page-header">
        <div className="header-content">
          <h1>Notifications</h1>
          <div className="notification-badge">
            {unreadCount > 0 && <span className="badge">{unreadCount}</span>}
          </div>
        </div>
        <p>Stay updated with your latest activity and alerts</p>
      </div>

      <div className="notifications-controls">
        <div className="filter-tabs">
          <button
            className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All ({notifications.length})
          </button>
          <button
            className={`filter-tab ${filter === 'unread' ? 'active' : ''}`}
            onClick={() => setFilter('unread')}
          >
            Unread ({unreadCount})
          </button>
          <button
            className={`filter-tab ${filter === 'read' ? 'active' : ''}`}
            onClick={() => setFilter('read')}
          >
            Read ({notifications.length - unreadCount})
          </button>
        </div>
        
        <div className="notification-actions">
          <button className="mark-all-read-btn" onClick={markAllAsRead}>
            Mark all as read
          </button>
          <button className="settings-btn">
            <Settings size={16} />
            Settings
          </button>
        </div>
      </div>

      <div className="notifications-list">
        {filteredNotifications.length === 0 ? (
          <div className="empty-state">
            <Bell size={48} />
            <h3>No notifications found</h3>
            <p>You're all caught up! Check back later for new updates.</p>
          </div>
        ) : (
          filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`notification-item ${!notification.read ? 'unread' : ''}`}
            >
              <div className="notification-icon">
                {getNotificationIcon(notification.type)}
              </div>
              
              <div className="notification-content">
                <div className="notification-header">
                  <h4 className="notification-title">{notification.title}</h4>
                  <span className="notification-time">{notification.time}</span>
                </div>
                <p className="notification-message">{notification.message}</p>
              </div>

              <div className="notification-actions">
                {!notification.read && (
                  <button
                    className="mark-read-btn"
                    onClick={() => markAsRead(notification.id)}
                    title="Mark as read"
                  >
                    <CheckCircle size={16} />
                  </button>
                )}
                <button
                  className="delete-btn"
                  onClick={() => deleteNotification(notification.id)}
                  title="Delete notification"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notifications;
