import React, { useEffect, useState } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import axios from 'axios'; // Axios for fetching data

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const Dashboard = () => {
  const [entries, setEntries] = useState([]);
  const [facultyEntries, setFacultyEntries] = useState([]);

  // Fetch data from the backend
  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const commonFormResponse = await axios.get('http://localhost:5000/commonform'); // Fetch common form data
        const facultyFormResponse = await axios.get('http://localhost:5000/facultyform'); // Fetch faculty form data
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
      if (acc[keyValue]) {
        acc[keyValue]++;
      } else {
        acc[keyValue] = 1;
      }
      return acc;
    }, {});
  };

  // Pie chart for roles (from CommonForm)
  const roleCounts = countOccurrences('role', entries);
  const roleData = {
    labels: Object.keys(roleCounts),
    datasets: [
      {
        label: 'Roles',
        data: Object.values(roleCounts),
        backgroundColor: ['#FF6384', '#36A2EB']
      }
    ]
  };

  // Bar chart for activities (from CommonForm)
  const activityCounts = countOccurrences('activity', entries);
  const activityData = {
    labels: Object.keys(activityCounts),
    datasets: [
      {
        label: 'Activity Count',
        data: Object.values(activityCounts),
        backgroundColor: '#FFCE56'
      }
    ]
  };

  // Pie chart for faculty departments (from FacultyForm)
  const departmentCounts = countOccurrences('department', facultyEntries);
  const departmentData = {
    labels: Object.keys(departmentCounts),
    datasets: [
      {
        label: 'Departments',
        data: Object.values(departmentCounts),
        backgroundColor: ['#4BC0C0', '#FF9F40', '#FF6384', '#36A2EB', '#FFCE56', '#9966FF', '#C9CBCF']
      }
    ]
  };

  return (
    <div className="container">
      <h2>Dashboard</h2>

      <div className="row mt-4">
        <div className="col-md-6">
          <h3>Roles Distribution (Common Form)</h3>
          <Pie data={roleData} />
        </div>

        <div className="col-md-6">
          <h3>Activities (Common Form)</h3>
          <Bar data={activityData} />
        </div>

        <div className="col-md-6 mt-4">
          <h3>Departments Distribution (Faculty Form)</h3>
          <Pie data={departmentData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
