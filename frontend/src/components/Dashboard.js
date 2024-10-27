import React, { useEffect, useState } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import axios from 'axios';
import './Dashboard.css'; // Import custom CSS for styling

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const Dashboard = () => {
  const [entries, setEntries] = useState([]);
  const [facultyEntries, setFacultyEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const commonFormResponse = await axios.get('http://localhost:5000/commonform');
        const facultyFormResponse = await axios.get('http://localhost:5000/facultyform');
        setEntries(commonFormResponse.data);
        setFacultyEntries(facultyFormResponse.data);
      } catch (error) {
        console.error('Error fetching entries:', error);
      }
    };

    fetchEntries();
  }, []);

  const countOccurrences = (key, dataset) => {
    return dataset.reduce((acc, entry) => {
      const keyValue = entry[key];
      acc[keyValue] = acc[keyValue] ? acc[keyValue] + 1 : 1;
      return acc;
    }, {});
  };

  const roleCounts = countOccurrences('role', entries);
  const activityCounts = countOccurrences('activity', entries);
  const departmentCounts = countOccurrences('department', facultyEntries);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Dashboard</h2>
      <div className="dashboard-row">
        <div className="dashboard-card">
          <h3 className="chart-title">Roles Distribution</h3>
          <Pie data={{
            labels: Object.keys(roleCounts),
            datasets: [{ label: 'Roles', data: Object.values(roleCounts), backgroundColor: ['#FF6384', '#36A2EB'] }]
          }} />
        </div>
        <div className="dashboard-card">
          <h3 className="chart-title">Activity Distribution</h3>
          <Bar data={{
            labels: Object.keys(activityCounts),
            datasets: [{ label: 'Activity Count', data: Object.values(activityCounts), backgroundColor: '#FFCE56' }]
          }} />
        </div>
        <div className="dashboard-card">
          <h3 className="chart-title">Department Distribution</h3>
          <Pie data={{
            labels: Object.keys(departmentCounts),
            datasets: [{ label: 'Departments', data: Object.values(departmentCounts), backgroundColor: ['#4BC0C0', '#FF9F40'] }]
          }} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
