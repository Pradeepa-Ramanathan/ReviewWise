import React from 'react';
import './style.css';

const PrivacyPolicy = () => {
  return (
    <div className="container">
      <p className="date">Last Updated: 20.03.2025</p>
      <p>
        At <b>Rauve</b>, we are committed to protecting your privacy and ensuring transparency in how we collect, use, and safeguard your personal information. This Privacy Policy outlines our practices regarding data collection, security, and compliance with applicable regulations.
      </p>
      <br />

      <div className="card gray">
        <h2>1. Information We Collect</h2>
        <p>We may collect the following types of data:</p>
        <ul>
          <li><b>Personal Information:</b> Name, email, and contact details (if provided).</li>
          <li><b>Usage Data:</b> Website interactions, browsing behavior, and preferences.</li>
          <li><b>Technical Data:</b> IP address, device type, and browser details.</li>
        </ul>
      </div>

      <div className="card blue">
        <h2>2. Purpose of Data Collection</h2>
        <ul>
          <li>✔ Enhance product features and deliver product reviews.</li>
          <li>✔ Detect and prevent fraudulent activities.</li>
          <li>✔ Improve user experience and website functionality.</li>
          <li>✔ Provide customer support and respond to inquiries.</li>
        </ul>
      </div>

      <div className="card gray">
        <h2>3. Data Protection & Security</h2>
        <p>We implement industry-standard security measures to protect your data from unauthorized access, misuse, or disclosure.</p>
      </div>

      <div className="card blue">
        <h2>4. Third-Party Sharing</h2>
        <p>We do not sell or share personal data with third parties, except when required by law or to improve fraud detection capabilities.</p>
      </div>

      <div className="card gray">
        <h2>5. Cookies & Tracking Technologies</h2>
        <p>We use cookies to enhance website functionality and analyze user behavior. You can manage cookie preferences in your browser settings.</p>
      </div>

      <div className="card blue">
        <h2>6. User Rights & Control</h2>
        <p>You have the right to:</p>
        <ul>
          <li>✔ Access, update, or delete your personal data.</li>
          <li>✔ Opt-out of data collection where applicable.</li>
          <li>✔ Request details on how your data is used.</li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
