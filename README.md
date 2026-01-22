# Infosys-Springboard-Virtual-Internship-
Infosys Springboard Virtual Internship - Project: Budget Wise AI Driven Expense Tracker and Budget Advisor
**💸 BudgetWise AI**

BudgetWise AI is a smart personal finance management application that helps users track expenses, visualize spending patterns, and receive AI-powered financial insights. Built with a modern React frontend and a secure Spring Boot backend, it combines clean UI, robust authentication, and intelligent recommendations.

**✨ Features**

**🔐 Secure Authentication**

Google OAuth powered by Clerk

Token validation using Spring Security OAuth2 Resource Server

Fully protected backend APIs

**🤖 AI-Powered Financial Insights**

Integration with Google Gemini API

Personalized saving tips and spending alerts

Automatic detection of high-spending categories with budget suggestions

**📊 Interactive Visualizations**

Dynamic charts using Recharts

Income vs. Expense analysis

Category-wise spending breakdown

Smooth animations with Framer Motion

**🧾 Transaction Management**

Full CRUD support for financial transactions

Reliable storage with MySQL

Clean and efficient data handling via Spring Data JPA

**⚙️ Tech Stack**
**Frontend**

React.js

Tailwind CSS

Framer Motion

React Router DOM

Clerk Authentication

Recharts

Lucide React

VS Code

**Backend**

Java (Spring Boot)

Spring Security (OAuth2 Resource Server)

Spring Data JPA

MySQL

Google Gemini API (Java GenAI SDK)

IntelliJ IDEA

Tools & Services

MySQL Workbench / phpMyAdmin

Google Gemini API

Clerk Authentication

**📥 Installation & Setup**
**Prerequisites**

Node.js & npm

Java JDK 17+

MySQL Server

Clerk account

Google Gemini API key

**🖥 Backend Setup (Spring Boot)**
# Clone the repository
git clone https://github.com/yourusername/budgetwise-ai.git

# Navigate to backend directory
cd budgetwise-backend

# Configure application.properties
# Add MySQL credentials and Gemini API key

# Run the backend server
./mvnw spring-boot:run

**🌐 Frontend Setup (React)**
# Navigate to frontend directory
cd budgetwise-frontend

# Install dependencies
npm install

# Create environment file
# Add: VITE_CLERK_PUBLISHABLE_KEY=your_key_here

# Start the development server
npm run dev
