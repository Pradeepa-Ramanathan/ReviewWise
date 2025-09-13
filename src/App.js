// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
import { Menu, User, Home, Bell, BarChart3, Package, Settings } from 'lucide-react';
import AppRoutes from './AppRoutes';

// Sidebar Component
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
    <div style={{
      width: isCollapsed ? '60px' : '220px',
      backgroundColor: '#1f2937',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      transition: 'width 0.3s'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: isCollapsed ? 'center' : 'space-between',
        padding: '10px 15px',
        borderBottom: '1px solid #374151'
      }}>
        {!isCollapsed && <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><User /> RAVUE</div>}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)} 
          style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
        >
          <Menu />
        </button>
      </div>
      <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
        {menuItems.map(item => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              title={isCollapsed ? item.label : ''}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 15px',
                backgroundColor: isActive ? '#374151' : 'transparent',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '5px',
                margin: '5px 10px'
              }}
            >
              <Icon size={20} />
              {!isCollapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>
      <div style={{ padding: '15px', borderTop: '1px solid #374151', textAlign: 'center' }}>
        <User size={24} />
      </div>
    </div>
  );
};

// Main App
function App() {
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
        <Sidebar />
        <div style={{ flex: 1, overflowY: 'auto', backgroundColor: '#f5f5f5' }}>
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
