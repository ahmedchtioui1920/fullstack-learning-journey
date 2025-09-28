# 📝 Todo Fullstack App

A simple **fullstack Todo List application** built using:

- **Frontend:** HTML, CSS, JavaScript (Vanilla)  
- **Backend:** Node.js, Express (REST API with in-memory storage)

This project demonstrates connecting a custom frontend with a REST API backend to perform full **CRUD** operations.

---

## 🚀 Features

- ✅ Add new todos  
- ✅ Toggle completed state  
- ✅ Delete todos  
- ✅ REST API with full CRUD support  
- ✅ Frontend and backend communicate via HTTP requests  
- ✅ In-memory data storage (no database yet)

---

## 📁 Folder Structure

```bash
todo-fullstack/
│
├── backend/         # Express server with REST API
│   ├── server.js
│   └── package.json
│
└── frontend/        # HTML/CSS/JavaScript frontend
    ├── index.html
    ├── styles.css
    └── script.js
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/ahmedchtioui1920/fullstack-learning-journey.git
cd fullstack-learning-journey/fullstack-projects/todo-fullstack
```

### 2. Setup Backend

```bash
cd backend
npm install
npm start
```

Server will run on: `http://localhost:3000`

### 3. Setup Frontend

- Open `frontend/index.html` in your browser **or**  
- Use **Live Server** extension in VSCode

---

## 🌐 API Endpoints

| Method | Route           | Description             |
|--------|----------------|------------------------|
| GET    | /api/todos     | Fetch all todos         |
| POST   | /api/todos     | Add a new todo          |
| PUT    | /api/todos/:id | Toggle completed state  |
| DELETE | /api/todos/:id | Delete a todo           |

**Example Request / Response:**

```json
// POST /api/todos
{
  "text": "Buy groceries"
}

// Response
{
  "id": 1690000000000,
  "text": "Buy groceries",
  "completed": false
}
```

---

## 🔧 Technologies Used

- Node.js  
- Express.js  
- HTML5 / CSS3  
- JavaScript (ES6)  
- Fetch API  
- CORS

---

## 💡 How Frontend Talks to Backend

The backend runs on `http://localhost:3000`. The frontend uses the `fetch()` API to send HTTP requests (`GET`, `POST`, `PUT`, `DELETE`).  

CORS is enabled in the backend (`app.use(cors())`) to allow communication between different ports.

```js
// Example fetch from frontend
fetch("http://localhost:3000/api/todos")
  .then(res => res.json())
  .then(todos => {
    console.log(todos);
  });
```

> Later, when the frontend is served via Express static middleware, CORS can be removed.

---

## 🔮 Future Improvements

- Persist todos with **MongoDB**  
- Add **authentication** (login/register)  
- Deploy backend (Render, Railway)  
- Deploy frontend
