// src/components/Profile.js
import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Edit3, Camera } from 'lucide-react';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    fullName: 'Jane Doe',
    email: 'jane@example.com',
    phone: '+1-234-567-8900',
    location: 'New York, USA',
    joinDate: 'January 2024',
    bio: 'Digital marketing specialist with expertise in review management and customer engagement strategies.',
    avatar: null
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
    console.log('Profile saved:', profileData);
  };

  const stats = [
    { label: 'Total Reviews Analyzed', value: '1,234' },
    { label: 'Fake Reviews Detected', value: '156' },
    { label: 'Protected Businesses', value: '23' },
    { label: 'Success Rate', value: '94%' }
  ];

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>Profile</h1>
        <p>Manage your personal information and account settings</p>
      </div>

      <div className="profile-content">
        {/* Profile Card */}
        <div className="profile-card">
          <div className="profile-avatar-section">
            <div className="profile-avatar">
              {profileData.avatar ? (
                <img src={profileData.avatar} alt="Profile" />
              ) : (
                <User size={60} />
              )}
              <button className="avatar-edit-btn">
                <Camera size={16} />
              </button>
            </div>
            <div className="profile-basic-info">
              <h2>{profileData.fullName}</h2>
              <p className="profile-email">{profileData.email}</p>
              <div className="profile-meta">
                <span><Calendar size={14} /> Joined {profileData.joinDate}</span>
              </div>
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
                <div className="detail-value">
                  <User size={16} />
                  {profileData.fullName}
                </div>
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
                <div className="detail-value">
                  <Mail size={16} />
                  {profileData.email}
                </div>
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
                <div className="detail-value">
                  <Phone size={16} />
                  {profileData.phone}
                </div>
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
                <div className="detail-value">
                  <MapPin size={16} />
                  {profileData.location}
                </div>
              )}
            </div>

            <div className="detail-group">
              <label>Bio</label>
              {isEditing ? (
                <textarea
                  value={profileData.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  className="profile-textarea"
                  rows="3"
                />
              ) : (
                <div className="detail-value bio">
                  {profileData.bio}
                </div>
              )}
            </div>

            {isEditing && (
              <div className="profile-actions">
                <button className="save-btn" onClick={handleSave}>
                  Save Changes
                </button>
                <button className="cancel-btn" onClick={() => setIsEditing(false)}>
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Stats Card */}
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

export default Profile;
