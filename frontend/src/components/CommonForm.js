import React, { useState } from 'react';
import axios from 'axios';

const CommonForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Student', // Default value
    activity: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/commonform', formData); // Adjust the backend URL
      alert('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form', error);
      alert('There was an error submitting the form');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Activity Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select
            className="form-control"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="Student">Student</option>
            <option value="Faculty">Faculty</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="activity">Activity</label>
          <input
            type="text"
            className="form-control"
            id="activity"
            name="activity"
            value={formData.activity}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
};

export default CommonForm;
