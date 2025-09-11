// src/components/Dashboard.js
import React, { useState } from 'react';
import { 
  FileText, 
  CheckCircle, 
  PieChart, 
  Shield, 
  Monitor
} from 'lucide-react';
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const [dashboardStats] = useState({
    fakeReviews: 25,
    totalAnalyses: 134,
    suspiciousPercentage: 14,
    protectedListings: 10
  });

  const [activities] = useState([
    "Detection run finished",
    "Review flagged as fake",
    "Suspicious reviews found in",
    "Detection run Started",
    "Analysis settings updated"
  ]);

  const [recentAnalyses] = useState([
    { listing: "Widget co.", date: "May 21,2025", suspicious: "12%" },
    { listing: "LMN Goods", date: "May 17,2025", suspicious: "16%" },
    { listing: "E-shop.", date: "Apr 20,2025", suspicious: "9%" }
  ]);

  const chartData = [
    { name: 'Genuine', value: 86, color: '#2196F3' },
    { name: 'Suspicious', value: 14, color: '#87CEEB' }
  ];

  return (
    <div className="dashboard-page">
      <div className="page-header">
        <h1>User Dashboard</h1>
        <p>Review your recent activity and perform new analyses.</p>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <FileText size={40} />
          </div>
          <div className="stat-content">
            <div className="stat-number">{dashboardStats.fakeReviews}</div>
            <div className="stat-label">Fake Reviews Detected</div>
          </div>
        </div>

        <div className="stat-card blue">
          <div className="stat-icon">
            <CheckCircle size={40} />
          </div>
          <div className="stat-content">
            <div className="stat-number">{dashboardStats.totalAnalyses}</div>
            <div className="stat-label">Total Analyses</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <PieChart size={40} />
          </div>
          <div className="stat-content">
            <div className="stat-number">{dashboardStats.suspiciousPercentage}%</div>
            <div className="stat-label">Suspicious Reviews</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <Shield size={40} />
          </div>
          <div className="stat-content">
            <div className="stat-number">{dashboardStats.protectedListings}</div>
            <div className="stat-label">Protected Listings</div>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="dashboard-content">
        {/* Activity Section */}
        <div className="activity-section">
          <h3>Activity</h3>
          <div className="activity-timeline">
            {activities.map((activity, index) => (
              <div key={index} className="activity-item">
                <div className="activity-dot"></div>
                <div className="activity-text">{activity}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Content */}
        <div className="right-content">
          {/* Analyze Reviews */}
          <div className="analyze-section">
            <div className="analyze-header">
              <Monitor size={24} />
              <h3>Analyze Reviews</h3>
            </div>
            <p>Perform a new fake review detection analysis</p>
            <button className="run-analysis-btn">
              Run analysis
            </button>
          </div>

          {/* Statistics */}
          <div className="statistics-section">
            <h3>Statistics</h3>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={150}>
                <RechartsPieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={60}
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>
            <button className="view-details-btn">
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Recent Analyses Table */}
      <div className="recent-analyses">
        <h3>Recent Analyses</h3>
        <div className="table-container">
          <table className="analyses-table">
            <thead>
              <tr>
                <th>Listing</th>
                <th>Date</th>
                <th>Suspicious</th>
              </tr>
            </thead>
            <tbody>
              {recentAnalyses.map((analysis, index) => (
                <tr key={index}>
                  <td>{analysis.listing}</td>
                  <td>{analysis.date}</td>
                  <td>{analysis.suspicious}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
