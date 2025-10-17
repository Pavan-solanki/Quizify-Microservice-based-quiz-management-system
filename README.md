<!-- HEADER BANNER -->
<p align="center">
  <img src="https://img.shields.io/badge/Project-Quizify-blue?style=for-the-badge&logo=springboot" alt="Quizify Logo">
</p>

<h1 align="center">🎯 Quizify – Microservices-based Quiz Management System</h1>
<p align="center">
  <b>Spring Boot | Microservices | Spring Cloud | JPA | PostgreSQL</b>
  <br/>
  A modular and distributed quiz management system built using Java & Spring Boot microservices architecture.
</p>

---

## 📚 Table of Contents
- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Microservices](#-microservices)
- [API Endpoints](#-api-endpoints)
- [Installation & Setup](#-installation--setup)
- [Future Enhancements](#-future-enhancements)
- [Author](#-author)

---

## 🧠 Overview
**Quizify** is a microservices-based quiz application built with **Spring Boot** and **Spring Cloud**.  
It consists of multiple independent services communicating via REST APIs to create, fetch, and manage quizzes dynamically.

Each service runs independently, ensuring scalability, maintainability, and smooth deployment.

---

## ⚙️ Tech Stack

| Layer | Technologies |
|-------|---------------|
| **Language** | Java 17 |
| **Frameworks** | Spring Boot 3, Spring Cloud, Spring Data JPA |
| **Microservices Tools** | Eureka Server, API Gateway, Feign Client |
| **Database** | PostgreSQL |
| **Testing** | Postman, JUnit |
| **Build Tool** | Maven |
| **IDE** | IntelliJ IDEA |
| **Version Control** | Git & GitHub |

---

## 🧩 Architecture

```bash
           ┌───────────────────────┐
           │     API GATEWAY       │  (Port: 8080)
           └──────────┬────────────┘
                      │
        ┌─────────────┴─────────────┐
        ▼                           ▼
┌───────────────────┐       ┌───────────────────┐
│  QUIZ SERVICE     │       │ QUESTION SERVICE  │
│ (Port: 8082)      │◄─────▶│ (Port: 8081)      │
└───────────────────┘       └───────────────────┘
                      │
                      ▼
              PostgreSQL Databases
Pavan Solanki
Full Stack Developer (Java | Spring Boot | React | DSA)
📩 pawansk268@gmail.com
