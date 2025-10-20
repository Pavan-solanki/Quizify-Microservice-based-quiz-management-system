<!-- HEADER BANNER -->
<p align="center">
  <img src="https://img.shields.io/badge/Project-Quizify-blue?style=for-the-badge&logo=springboot" alt="Quizify Logo">
</p>

<h1 align="center">🎯 Quizify – Microservices-based Quiz Management System</h1>
<p align="center">
  <b>Spring Boot | React | Microservices | Spring Cloud | JPA | PostgreSQL | Vite</b>
  <br/>
  A modular and distributed full-stack quiz management system built with Java (Spring Boot Microservices) and React (Vite) frontend.
</p>

---

## 📚 Table of Contents
- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Frontend Preview](#-frontend-preview)
- [Microservices](#-microservices)
- [API Endpoints](#-api-endpoints)
- [Installation & Setup](#-installation--setup)
- [Future Enhancements](#-future-enhancements)
- [Author](#-author)

---
##frontend View
<img width="1887" height="891" alt="Screenshot 2025-10-20 094010" src="https://github.com/user-attachments/assets/af3671fd-a899-42cb-9fc2-5283a50c384e" />
<img width="1881" height="902" alt="Screenshot 2025-10-20 094031" src="https://github.com/user-attachments/assets/ce946828-24b5-4f93-85bc-865e1ff5eba3" />
<img width="1884" height="876" alt="Screenshot 2025-10-20 094112" src="https://github.com/user-attachments/assets/5a3b879e-912b-41ab-986a-c394b897b5ca" />

## 🧠 Overview
**Quizify** is a full-stack microservices-based **Quiz Management System** developed using **Spring Boot** for the backend and **React (Vite)** for the frontend.

It allows users to:
- Create and manage quizzes.
- Add questions dynamically.
- Attempt quizzes and view results in real-time.

Each backend service runs independently and communicates via REST APIs, ensuring scalability and maintainability.

The frontend is built using **React + Vite** with **Axios**, providing a smooth and modern UI experience.

---

## ⚙️ Tech Stack

| Layer | Technologies |
|-------|---------------|
| **Frontend** | React, Vite, Axios, Tailwind CSS |
| **Backend** | Spring Boot, Spring Cloud, Spring Data JPA |
| **Microservices Tools** | Eureka Server, API Gateway, Feign Client |
| **Database** | PostgreSQL |
| **Language** | Java 17 |
| **Build Tools** | Maven, npm |
| **Testing Tools** | Postman, JUnit |
| **Version Control** | Git & GitHub |
| **IDE** | IntelliJ IDEA, VS Code |

---

## 🧩 Architecture

```bash
                   ┌─────────────────────────────┐
                   │        React Frontend       │
                   │   (Vite + Tailwind CSS)     │
                   └──────────────┬──────────────┘
                                  │
                                  ▼
                     ┌──────────────────────────┐
                     │       API GATEWAY        │  (Port: 8080)
                     └───────────┬──────────────┘
                                 │
              ┌──────────────────┴──────────────────┐
              ▼                                     ▼
   ┌────────────────────┐               ┌────────────────────┐
   │   QUIZ SERVICE     │               │ QUESTION SERVICE   │
   │    (Port: 8082)    │◄────────────►│    (Port: 8081)    │
   └────────────────────┘               └────────────────────┘
                                 │
                                 ▼
                        PostgreSQL Databases





