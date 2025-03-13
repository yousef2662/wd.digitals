const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Supabase client
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

// Test route
app.get('/', (req, res) => {
  res.send('API is running successfully!');
});

// Sign up route
app.post('/signup', async (req, res) => {
  const { email, password, name } = req.body;
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { name } }
  });

  if (error) return res.status(400).json({ error: error.message });
  res.json({ data });
});

// Sign in route
app.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) return res.status(400).json({ error: error.message });
  res.json({ data });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on ${process.env.RAILWAY_STATIC_URL || `http://localhost:${port}`}`);
});

// Contact form submission
app.post('/contact', async (req, res) => {
  const { name, mail, message } = req.body;

  if (!name || !mail || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const { data, error } = await supabase
    .from('contacts')
    .insert([{ name, mail, message }]);

  if (error) return res.status(500).json({ error: error.message });

  res.json({ message: 'Form submitted successfully!', data });
});
