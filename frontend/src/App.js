import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FacultyForm from './components/FacultyForm';
import Dashboard from './components/Dashboard';
import CommonForm from './components/CommonForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './components/LandingPage';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">Faculty Management</a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/faculty-form">Faculty Form</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/dashboard">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/common-form">Activity Registration</a>
            </li>
          </ul>
        </nav>
        <div className="container mt-3">
          <Routes>
          <Route path="/" element= {<LandingPage />} />
            <Route path="/faculty-form" element={<FacultyForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/common-form" element={<CommonForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
