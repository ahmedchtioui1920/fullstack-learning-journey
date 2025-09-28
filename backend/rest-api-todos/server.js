// Load the Express library
const express = require('express');

// Create an Express application instance
const app = express();

// Define the port the server will listen on
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies of incoming requests
app.use(express.json());

// In-memory storage for todos (array of objects)
let todos = [];

/* -------------------- ROUTES -------------------- */

// GET /api/todos → Fetch all todos
app.get('/api/todos', (req, res) => {
  // Send the entire todos array as JSON
  res.json(todos);
});

// POST /api/todos → Add a new todo
app.post('/api/todos', (req, res) => {
  const { text } = req.body; // Get 'text' from request body
  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  const todo = {
    id: Date.now(), // Unique ID based on timestamp
    text,
    completed: false,
  };

  todos.push(todo); // Add new todo to the array
  res.status(201).json(todo); // Respond with created todo
});

// PUT /api/todos/:id → Toggle completed status
app.put('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id); // Get ID from route param
  const todo = todos.find(t => t.id === id);

  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  todo.completed = !todo.completed; // Toggle completed
  res.json(todo); // Return updated todo
});

// DELETE /api/todos/:id → Delete a todo
app.delete('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id); // Get ID from route param
  const index = todos.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  const deletedTodo = todos.splice(index, 1); // Remove from array
  res.json(deletedTodo[0]); // Return deleted todo
});

/* -------------------- START SERVER -------------------- */
app.listen(PORT, () => {
  console.log(`REST API server running on http://localhost:${PORT}`);
});
