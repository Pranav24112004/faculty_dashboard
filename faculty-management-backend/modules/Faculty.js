const mongoose = require('mongoose');

const FacultySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true,
    enum: ['Civil', 'Computer Science', 'Mechanical', 'Electronics and Telecommunications', 'Aerospace', 'Metallurgy', 'Printing']
  },
  designation: {
    type: String,
    required: true,
    enum: ['Teaching', 'Non-Teaching']
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female', 'Other']
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Faculty', FacultySchema);
