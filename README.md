# 🎓 Student Management System - Backend API

## 📌 Overview
This is the backend API for the **Student Management System**, built using **Node.js and Express.js**.  
It provides RESTful APIs to perform CRUD operations on student data.

---

## 🚀 Features
- ➕ Create new student
- 📋 Get all students
- ✏️ Update student details
- ❌ Delete student
- 🌐 REST API architecture

---

## 🛠️ Tech Stack
- Node.js
- Express.js
- JavaScript
- JSON (for data storage)

---

## 📂 Project Structure
student-management-api/
│── server.js
│── package.json
│── package-lock.json
│── .gitignore

---

## 🔗 API Endpoints

### ➤ Get All Students

### ➤ Add Student

### ➤ Update Student

### ➤ Delete Student

---

## ⚙️ Setup Instructions

1. Clone the repository:https://github.com/vinny1110/student-management-api
  
2. Navigate to project:cd student-management-api

3. Install dependencies:npm install
   
4. Run the server:node serevr.js

---

## 🌐 Server Details
- Default Port: `8080`
  
---

## 🔄 Example API Usage

### Add Student
```json
POST /students
{
  "name": "Vinay",
  "age": 22
}
