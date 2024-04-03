import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import '../css/PerformanceReport.css';

// Sample data with metrics
const data = [
  { month: 'December-2023', technical: 60, criminal: 40, festives: 30, entertainment: 50, views: 10000, likes: 5000, engagementRate: 0.05 },
  { month: 'January', technical: 50, criminal: 30, festives: 20, entertainment: 40, views: 12000, likes: 6000, engagementRate: 0.04 },
  { month: 'February', technical: 60, criminal: 40, festives: 30, entertainment: 50, views: 11000, likes: 5500, engagementRate: 0.045 },
  { month: 'March', technical: 80, criminal: 20, festives: 10, entertainment: 40, views: 13000, likes: 7000, engagementRate: 0.053 },
  { month: 'April', technical: 70, criminal: 20, festives: 80, entertainment: 70, views: 15000, likes: 7500, engagementRate: 0.05 },
  
];

// Component to render BarChart
const TechnicalBarChart = () => {
  return (
    <div className="chart">
      <h2 className="chartTitle">Technical News Bar Chart</h2>
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="technical" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

// Component to render PieChart
const CriminalPieChart = () => {
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  return (
    <div className="chart">
      <h2 className="chartTitle">Criminal News Pie Chart</h2>
      <PieChart width={400} height={300}>
        <Pie data={data} dataKey="criminal" nameKey="month" cx="50%" cy="50%" outerRadius={100} fill="#8884d8">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

// Component to render BarChart with views metric
const ViewsBarChart = () => {
  return (
    <div className="chart">
      <h2 className="chartTitle">Views Bar Chart</h2>
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="views" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

// Component to render PieChart with likes metric
const LikesPieChart = () => {
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  return (
    <div className="chart">
      <h2 className="chartTitle">Likes Pie Chart</h2>
      <PieChart width={400} height={300}>
        <Pie data={data} dataKey="likes" nameKey="month" cx="50%" cy="50%" outerRadius={100} fill="#8884d8">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

// Component to render BarChart with engagement rate metric
const EngagementRateBarChart = () => {
  return (
    <div className="chart">
      <h2 className="chartTitle">Engagement Rate Bar Chart</h2>
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="engagementRate" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

// Main component
const PerformanceReport = () => {
  return (
    <div className="container">
      <TechnicalBarChart />
      <CriminalPieChart />
      <ViewsBarChart />
      <LikesPieChart />
      <EngagementRateBarChart />
    </div>
  );
};

export default PerformanceReport;
