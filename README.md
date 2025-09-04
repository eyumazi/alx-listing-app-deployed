# airbnb-clone-project
This project is a full-stack clone of the popular accommodation booking platform AirBnB. The goal is to build a functional web application that allows users to browse property listings, view detailed property information, and complete bookings. The project will cover frontend development, backend APIs, database design, and deployment.
# UI/UX Design Planning

## 🎯 Design Goals

- Create an intuitive booking flow.
- Maintain visual consistency across pages and components.
- Ensure fast loading times for better performance.
- Prioritize mobile responsiveness with a mobile-first approach.

## ✨ Key Features

- Property search and filtering
- Detailed property viewing
- Secure checkout process
- User authentication

## 📄 Primary Pages

| Page                  | Description                                                                |
|-----------------------|----------------------------------------------------------------------------|
| **Property Listing View** | Grid display of available properties with filters                          |
| **Listing Detailed View** | Complete property details with images and booking form                     |
| **Simple Checkout View**  | Streamlined payment and booking confirmation process                       |

## ✅ Importance of User-Friendly Design

A well-designed booking system reduces friction in the user journey, increases conversion rates, and improves customer satisfaction. Clear navigation, intuitive interfaces, and responsive design are critical for success. By maintaining consistency and simplicity, users can effortlessly find and book properties.

---

## More UI/UX Design Planning

### 🎨 Color Styles

- **Primary:** `#FF5A5F`
- **Secondary:** `#008489`
- **Background:** `#FFFFFF`
- **Text:** `#222222`
- **Secondary Text:** `#717171`

### 🖋️ Typography

- **Primary Font:** Circular
  - Font Weight: Medium (500)
  - Font Size: 16px
- **Headings:**
  - Font Weight: Bold (700)
  - Font Sizes: 24px - 32px
- **Secondary Text:**
  - Font Weight: Book (400)
  - Font Size: 14px

### 🧠 Importance of Identifying Design Properties

Understanding the design properties defined in the mockup (such as in [this Figma file](https://www.figma.com/design/E2BRqdPcKkrnX6hLGPto8Z/Project-Airbnb?node-id=1-4&p=f)) is crucial to faithfully implementing the design. It ensures visual consistency, speeds up the development process, improves collaboration between designers and developers, and guarantees that the final UI matches the intended user experience.

---

# Project Roles and Responsibilities

| Role               | Responsibilities                                                                 |
|--------------------|----------------------------------------------------------------------------------|
| **Project Manager** | Oversees project timeline, coordinates team efforts, and ensures deliverables.   |
| **Frontend Developers** | Build and style UI components, implement responsive design principles.         |
| **Backend Developers** | Develop APIs, handle business logic, and manage database interactions.         |
| **Designers**          | Create mockups, maintain design systems, and ensure a high-quality UX.        |
| **QA/Testers**         | Write and execute test cases, identify bugs, and verify feature functionality. |
| **DevOps Engineers**   | Handle deployment processes, CI/CD pipelines, and server infrastructure.       |
| **Product Owner**      | Define feature requirements and priorities, and represent stakeholder needs.   |
| **Scrum Master**       | Facilitate agile ceremonies, remove blockers, and improve team workflow.       |

---

# UI Component Patterns

## 🧩 Planned Components

### 1. **Navbar**
- Includes: Logo, Search bar, User navigation, and Responsive menu
- Reusability: Used across all pages
- Responsiveness: Adapts to all screen sizes

### 2. **Property Card**
- Includes: Property image, price, location, rating, and favorite button
- Layout: Grid-ready, mobile-responsive
- Purpose: Displayed in listings and search results

### 3. **Footer**
- Includes: Site links, Company info, Social media links, and Copyright
- Visibility: Shown on all pages for consistency

Each component will be developed with reusability, clarity, and performance in mind to maintain a consistent and maintainable UI architecture across the application.

# 🏡 Airbnb Clone

An **Airbnb Clone** built with **Next.js** for the frontend, styled with **Tailwind CSS**, and powered by **custom-built API endpoints**.  
This project replicates the core functionality of Airbnb — property listings, booking system, and authentication — while being scalable and extendable for future improvements.

---

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) – React framework for scalable full-stack apps  
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework  
- **Language:** [TypeScript](https://www.typescriptlang.org/) – Type safety across the app  
- **Database:** [Supabase](https://supabase.com/) or [MongoDB](https://www.mongodb.com/) – Store users, properties, and bookings  
- **ORM:** [Prisma](https://www.prisma.io/) – Database toolkit (if using SQL-based DB)  
- **API:** Custom-built REST API endpoints with Next.js API routes  
- **Authentication:** [NextAuth.js](https://next-auth.js.org/) – Secure auth (Google, GitHub, Email, etc.)  
- **Deployment:** [Vercel](https://vercel.com/) – Hosting and deployment  

---

## ⚙️ Features

- 🔑 **User Authentication** – Sign up / log in securely  
- 🏠 **Property Listings** – Browse rental properties with details  
- 📅 **Booking System** – Reserve available dates  
- 🔍 **Search & Filters** – Filter by location, dates, guests, and price  
- 📱 **Responsive UI** – Mobile-friendly with Tailwind CSS  
- ⚡ **API Endpoints** – Custom-built routes for users, properties, and bookings  

---

## 📂 Project Structure

```bash
airbnb-clone/
│── app/                # Next.js app directory
│── components/         # Reusable UI components
│── pages/              # Next.js pages & API routes
│── styles/             # Global styles (Tailwind config)
│── prisma/             # Prisma schema (if using Prisma)
│── public/             # Static assets (images, icons, etc.)
│── utils/              # Helper functions
│── package.json
│── README.md
  

