# 📊 Frontend Dashboard Assessment

A responsive **Frontend Dashboard UI** built using **React + Vite** and **Tailwind CSS** as part of a **Frontend Developer Skill Assessment**.  
The project focuses on accurately translating a provided **Figma design** into a clean, scalable, and responsive frontend application while maintaining proper code structure and UI consistency.

---

## 📌 Project Overview

This project was completed as a hiring assessment task. The objective was to:

- Convert a provided Figma design into a functional frontend UI
- Ensure responsiveness across desktop, tablet, and mobile devices
- Maintain clean component structure and readable code
- Follow modern frontend development best practices

The application does not include backend logic and focuses purely on UI implementation.

---

## 🎨 Figma Design Reference

The UI was implemented based on the design provided by the hiring team.

🔗 **Figma Link:**  
https://www.figma.com/design/VP7gq0YBFt96zWQTigQUXy/Assessment-for-frontend-developer?node-id=0-1&p=f&t=fr89UR6KT0ffvI6p-0

---

## 🚀 Tech Stack

- **React** – Component-based UI development
- **Vite** – Fast development server and build tool
- **Tailwind CSS** – Utility-first CSS for styling and responsiveness
- **React Router DOM** – Client-side routing and layouts
- **Recharts** – Data visualization and charts
- **React Icons** – Icon library
- **ESLint** – Code linting and quality enforcement

---

## ✨ Features

- Fully responsive dashboard layout
- Sidebar navigation with active route handling
- Clean header and content sections aligned with Figma design
- Chart and data visualization using Recharts
- Reusable and modular React components
- Scalable folder and route structure
- Pixel-consistent spacing, colors, and typography

---

## 🧭 Application Routes

Example route structure used in the project:

- `/` – Dashboard overview
- `/overview` – Charts and analytics view
- `/call-logs` – Call Logs and History UI
- `/appointments` – Appointments page layout
- `/settings` – Settings page layout
- `/settings/profile` – Profile page inside Settings page

*(Routes may vary depending on implementation, but follow a clean and scalable structure.)*

---

## 📁 Project Structure

```txt
src/
├── components/     # Reusable UI components
├── layouts/        # Shared layout (Sidebar, Header)
├── pages/          # Page-level components
├── assets/         # Static assets (images, icons)
└── main.jsx        # Application entry point and also Route configuration
