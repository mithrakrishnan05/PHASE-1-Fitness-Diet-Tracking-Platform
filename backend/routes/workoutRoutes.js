const express = require('express');
const router = express.Router();

const workouts = [
  { id:1, user_id:1, type:'Running', duration:30, calories_burned:300, date:'2025-10-06' }
];

router.get('/', (req, res) => res.json({ workouts }));
router.post('/', (req, res) => {
  const { user_id, type, duration, calories_burned, date } = req.body;
  const w = { id: workouts.length+1, user_id, type, duration, calories_burned, date };
  workouts.push(w);
  res.json({ message:'Workout logged (demo)', workout: w });
});

module.exports = router;
