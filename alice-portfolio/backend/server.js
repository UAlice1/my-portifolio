const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'portfolio-backend' });
});

app.get('/api/profile', (req, res) => {
  res.json({
    name: 'Alice Umubyeyi',
    title: 'Frontend & Backend Developer',
    summary:
      'I design and build clean, scalable web applications using React, Next.js, Node.js, and modern database systems.'
  });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  return res.status(201).json({
    message: 'Contact request received successfully.',
    submittedAt: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Portfolio backend running on http://localhost:${PORT}`);
});
