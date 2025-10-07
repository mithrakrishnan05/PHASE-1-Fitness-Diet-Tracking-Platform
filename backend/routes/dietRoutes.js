const express = require('express');
const router = express.Router();

// Demo in-memory meals
const meals = [
  { id:1, user_id:1, meal_name: 'Oatmeal', calories:250, date: '2025-10-07' }
];

router.get('/', (req, res) => {
  res.json({ meals });
});

router.post('/', (req, res) => {
  const { user_id, meal_name, calories, date } = req.body;
  const meal = { id: meals.length+1, user_id, meal_name, calories, date };
  meals.push(meal);
  res.json({ message: 'Meal added (demo)', meal });
});

module.exports = router;
