// DOM Elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");
const todosList = document.getElementById("todos-list");
const itemsLeft = document.getElementById("items-left");
const clearCompletedBtn = document.getElementById("clear-completed");
const emptyState = document.querySelector(".empty-state");
const dateElement = document.getElementById("date");
const filters = document.querySelectorAll(".filter");

// Backend API URL
const API_URL = "http://localhost:3000/api/todos"; // Update if deployed

let todos = [];
let currentFilter = "all";

// Event Listeners
addTaskBtn.addEventListener("click", () => addTodoFromInput());
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTodoFromInput();
});
clearCompletedBtn.addEventListener("click", clearCompleted);

filters.forEach((filter) => {
  filter.addEventListener("click", () => setActiveFilter(filter.dataset.filter));
});

// Fetch Todos from Backend
async function loadTodos() {
  try {
    const res = await fetch(API_URL);
    todos = await res.json();
    renderTodos();
    updateItemsCount();
  } catch (err) {
    console.error("Error fetching todos:", err);
  }
}

// Add New Todo
async function addTodoFromInput() {
  const text = taskInput.value.trim();
  if (!text) return;

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const newTodo = await res.json();
    todos.push(newTodo);
    renderTodos();
    updateItemsCount();
    taskInput.value = "";
  } catch (err) {
    console.error("Error adding todo:", err);
  }
}

// Toggle Completed
async function toggleTodo(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`, { method: "PUT" });
    const updatedTodo = await res.json();

    // Update local todos array
    todos = todos.map((t) => (t.id === id ? updatedTodo : t));
    renderTodos();
    updateItemsCount();
  } catch (err) {
    console.error("Error toggling todo:", err);
  }
}

// Delete Todo
async function deleteTodo(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    await res.json();
    todos = todos.filter((t) => t.id !== id);
    renderTodos();
    updateItemsCount();
  } catch (err) {
    console.error("Error deleting todo:", err);
  }
}

// Clear Completed Todos
async function clearCompleted() {
  const completed = todos.filter((t) => t.completed);
  for (const todo of completed) {
    await deleteTodo(todo.id); // Reuse deleteTodo
  }
}

// Render Todos
function renderTodos() {
  todosList.innerHTML = "";

  const filteredTodos = filterTodos(currentFilter);

  if (filteredTodos.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  } else {
    emptyState.classList.add("hidden");
  }

  filteredTodos.forEach((todo) => {
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    if (todo.completed) todoItem.classList.add("completed");

    // Checkbox
    const checkboxContainer = document.createElement("label");
    checkboxContainer.classList.add("checkbox-container");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("todo-checkbox");
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => toggleTodo(todo.id));

    const checkmark = document.createElement("span");
    checkmark.classList.add("checkmark");

    checkboxContainer.appendChild(checkbox);
    checkboxContainer.appendChild(checkmark);

    // Task text
    const todoText = document.createElement("span");
    todoText.classList.add("todo-item-text");
    todoText.textContent = todo.text;

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
    deleteBtn.addEventListener("click", () => deleteTodo(todo.id));

    // Build <li>
    todoItem.appendChild(checkboxContainer);
    todoItem.appendChild(todoText);
    todoItem.appendChild(deleteBtn);

    todosList.appendChild(todoItem);
  });
}

// Filtering
function filterTodos(filter) {
  switch (filter) {
    case "active":
      return todos.filter((t) => !t.completed);
    case "completed":
      return todos.filter((t) => t.completed);
    default:
      return todos;
  }
}

function setActiveFilter(filter) {
  currentFilter = filter;
  filters.forEach((f) => {
    f.classList.toggle("active", f.dataset.filter === filter);
  });
  renderTodos();
}

// Items Left Count
function updateItemsCount() {
  const uncompleted = todos.filter((t) => !t.completed).length;
  itemsLeft.textContent = `${uncompleted} item${uncompleted !== 1 ? "s" : ""} left`;
}

// Set Date
function setDate() {
  const options = { weekday: "long", month: "short", day: "numeric" };
  const today = new Date();
  dateElement.textContent = today.toLocaleDateString("en-US", options);
}

// Initialize App
window.addEventListener("DOMContentLoaded", () => {
  loadTodos();
  setDate();
});
