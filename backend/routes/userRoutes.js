const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Demo in-memory users (for Phase 1 demo)
const users = [];

// Register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ message: 'Missing fields' });
    const hashed = await bcrypt.hash(password, 10);
    const user = { id: users.length+1, name, email, password: hashed };
    users.push(user);
    res.json({ message: 'User registered (demo)', user: { id: user.id, name: user.name, email: user.email } });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// Login (returns demo JWT)
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ message: 'Invalid credentials' });
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || 'demo-secret', { expiresIn: '7d' });
    res.json({ message: 'Login successful (demo)', token });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// Protected demo route
router.get('/me', (req, res) => {
  // Not verifying token in demo backend; real app should verify JWT
  res.json({ id: 1, name: 'Demo User', email: 'demo@example.com' });
});

module.exports = router;
