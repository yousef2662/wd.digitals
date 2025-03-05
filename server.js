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

// Sign up route
app.post('/signup', async (req, res) => {
  const { email, password, name } = req.body;
  const { user, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { name } }
  });

  if (error) return res.status(400).json({ error: error.message });
  res.json({ user });
});

// Sign in route
app.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  const { user, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) return res.status(400).json({ error: error.message });
  res.json({ user });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
