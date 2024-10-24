const express = require('express');
const router = express.Router();
const Activity = require('../modules/Activity');

// Route to create a new activity entry
router.post('/', async (req, res) => {
  const { name, email, role, activity } = req.body;
  try {
    const newActivity = new Activity({ name, email, role, activity });
    await newActivity.save();
    res.status(201).json(newActivity);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Route to get all activities
router.get('/', async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
