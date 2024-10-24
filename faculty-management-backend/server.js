const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const db = 'mongodb://localhost:27017/faculty-dashboard'; // Adjust the URL based on your MongoDB setup
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Importing Routes
const activityRoutes = require('./routes/activityRoutes');
const facultyRoutes = require('./routes/facultyRoutes');

// Use Routes
app.use('/commonform', activityRoutes); // Endpoints for common form activities
app.use('/facultyform', facultyRoutes); // Endpoints for faculty form submissions

// Port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
