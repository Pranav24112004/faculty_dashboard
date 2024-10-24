const express = require('express');
const router = express.Router();
const Faculty = require('../modules/Faculty');

// Route to create a new faculty entry
router.post('/', async (req, res) => {
  const { name, email, phone, department, designation, gender } = req.body;
  try {
    const newFaculty = new Faculty({ name, email, phone, department, designation, gender });
    await newFaculty.save();
    res.status(201).json(newFaculty);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Route to get all faculty entries
router.get('/', async (req, res) => {
  try {
    const faculty = await Faculty.find();
    res.json(faculty);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
