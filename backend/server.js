// Basic Express server (demo) - does NOT perform database writes in this demo setup
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const userRoutes = require('./routes/userRoutes');
const dietRoutes = require('./routes/dietRoutes');
const workoutRoutes = require('./routes/workoutRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Fitness & Diet Tracker API (Demo Backend)' }));

app.use('/api/users', userRoutes);
app.use('/api/diet', dietRoutes);
app.use('/api/workouts', workoutRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
