# 🧑‍💼 HRMS Lite — Full Stack Application

A lightweight Human Resource Management System (HRMS Lite) built to manage employee records and track daily attendance through a clean and production-ready web interface.

This project was developed as part of a Full-Stack Coding Assessment to demonstrate end-to-end development skills including frontend UI, backend APIs, database persistence, and deployment readiness.

---

## 🚀 Project Overview

HRMS Lite allows an admin to:

* Add and manage employee records
* Track daily attendance (Present / Absent)
* View attendance history per employee
* Monitor total present days

The application simulates a basic internal HR tool focused on essential HR operations with a simple and professional UI.

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB (MongoDB Atlas)

### Deployment

* Frontend: Vercel 
* Backend: Render

---
##🔎 Backend Technology Note

The assessment mentioned Python (Full-Stack) as the preferred technology stack.

For this implementation, I used Node.js with Express to rapidly develop scalable REST APIs and complete all HRMS modules within the given timeline.

I am also comfortable working with Python backend frameworks such as FastAPI, Flask, and Django, and the system architecture is modular, allowing easy integration or migration of backend services to Python if required.

Python services can be incorporated for advanced modules such as:

Payroll analytics

Automated reporting

Employee data insights

AI-driven HR assistants

##🔮 Future Enhancements

📊 Advanced analytics dashboard

🤖 AI chatbot for HR queries

📄 Automated payslip generation

🧠 Resume parsing & hiring module

📱 Mobile responsive optimization

---

## ✨ Features

### Employee Management

* Add new employee
* View employee list
* Delete employee
* Duplicate employee validation
* Email format validation

### Attendance Management

* Mark attendance by date
* Present / Absent status
* View attendance records per employee
* Prevent duplicate attendance per day

### Bonus Feature

* Display total present days per employee

---

## 📂 Project Structure

```
hrms-lite/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── api/
│   └── App.jsx
│
└── README.md
```

---

## ⚙️ Run Project Locally

### 1️⃣ Clone Repository

```bash
git clone https://github.com/<your-username>/hrms-lite.git
cd hrms-lite
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
CLIENT_URL=http://localhost:5173
```

Run backend:

```bash
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🔗 API Endpoints

### Employees

* `POST /api/employees` — Add employee
* `GET /api/employees` — Get all employees
* `DELETE /api/employees/:id` — Delete employee

### Attendance

* `POST /api/attendance/:employeeId` — Mark attendance
* `GET /api/attendance/:employeeId` — Attendance records
* `GET /api/attendance/summary/:employeeId` — Total present days

---

## 🧾 Assumptions & Limitations

* Single admin user assumed (no authentication required)
* Payroll, leave, and advanced HR features are out of scope
* Only one attendance entry per employee per day is allowed
* Designed for internal HR usage

---

## 🌐 Deployment Links

Frontend: **<Live https://hrms-jdy6.vercel.app>**
Backend API: **<Live https://hrms-backend-i7tw.onrender.com>**

---

## 📌 Submission Note

This application fulfills all core requirements of the assessment including:

* Employee CRUD operations
* Attendance tracking
* Data persistence
* Validation & error handling
* Deployment readiness

Bonus functionality has also been implemented.
