import React, { useState } from 'react';
import axios from 'axios';

const FacultyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'Civil', // Default value
    designation: 'Teaching', // Default value
    gender: 'Male' // Default value
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
      await axios.post('http://localhost:5000/facultyform', formData); // Adjust the backend URL
      alert('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form', error);
      alert('There was an error submitting the form');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Faculty Form</h2>
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
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="department">Department</label>
          <select
            className="form-control"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          >
            <option value="Civil">Civil</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Electronics and Telecommunications">Electronics and Telecommunications</option>
            <option value="Aerospace">Aerospace</option>
            <option value="Metallurgy">Metallurgy</option>
            <option value="Printing">Printing</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="designation">Designation</label>
          <select
            className="form-control"
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            required
          >
            <option value="Teaching">Teaching</option>
            <option value="Non-Teaching">Non-Teaching</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            className="form-control"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
};

export default FacultyForm;
