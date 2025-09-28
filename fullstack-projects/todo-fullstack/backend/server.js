const express = require("express");
const cors = require("cors");
const app = express();

// Enable CORS so frontend (on another port) can fetch data
app.use(cors());

// Middleware to parse JSON body
app.use(express.json());

// In-memory todos array
let todos = [];

// GET all todos
app.get("/api/todos", (req, res) => {
  res.json(todos);
});

// POST new todo
app.post("/api/todos", (req, res) => {
  const todo = { id: Date.now(), text: req.body.text, completed: false };
  todos.push(todo);
  res.json(todo);
});

// PUT toggle completed
app.put("/api/todos/:id", (req, res) => {
  const todo = todos.find((t) => t.id == req.params.id);
  if (todo) {
    todo.completed = !todo.completed;
    res.json(todo);
  } else res.status(404).json({ error: "Todo not found" });
});

// DELETE todo
app.delete("/api/todos/:id", (req, res) => {
  todos = todos.filter((t) => t.id != req.params.id);
  res.json({ message: "Deleted" });
});

// Start server
app.listen(3000, () => console.log("Backend running on http://localhost:3000"));
