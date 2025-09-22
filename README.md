# 📚 Book Library API

A simple **Node.js + Express.js** project that provides a RESTful API for managing books (CRUD Operations).  
The API supports creating, reading, updating, and deleting books with basic validation.

---

## 🚀 Tech Stack
- Node.js
- Express.js
- Morgan (for logging requests)
- File System (fs) for JSON data storage

---

## 📂 Project Structure
Book-Library-API/  
│── Controllers/  
│   └── BookControllers.js  
│── Data/  
│   └── Books.json  
│── Routes/  
│   └── BookRoutes.js  
│── index.js  
│── server.js  
│── package.json  
│── package-lock.json  

---

## ⚙️ Installation & Running the Project

1. **Clone the repository**
```bash
git clone <repo-link>
cd Book-Library-API
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the server**
```bash
nodemon server.js
```

The server will start on:  
👉 `http://localhost:3000`

---

## 📌 API Endpoints

### 🔹 Get all books
`GET /api/Books`

### 🔹 Get book by ID
`GET /api/Books/:id`

### 🔹 Create a new book
`POST /api/Books`  
**Request Body:**
```json
{
  "name": "Clean Code",
  "author": "Robert C. Martin",
  "year": 2008
}
```

### 🔹 Update a book
`PATCH /api/Books/:id`  

### 🔹 Delete a book
`DELETE /api/Books/:id`

---

## 🎯 Project Idea
A simple API performing CRUD operations on **Books**.  
The project demonstrates:

- Express.js Routers & Controllers  
- Middleware usage (`checkId`, `validDatabody`)  
- Data handling with JSON file  
- Logging with Morgan  

---

## 👨‍💻 Author
Developed as a practice project for learning **Node.js + Express.js** 🚀
