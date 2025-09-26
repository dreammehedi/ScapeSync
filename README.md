# ScapeSync

Here’s a professional `README.md` tailored for your project and the given requirements:

````markdown
# ScapeSync – Frontend Landing Page & Auth

[Live Demo](https://scape-sync-umber.vercel.app/)

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation & Setup](#installation--setup)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Author](#author)

---

## Project Overview

**ScapeSync** is a responsive, pixel-perfect landing page with authentication pages (Login, Register, Forgot Password) built with **React.js**. The project strictly follows the provided Figma design, ensuring a modern, user-friendly experience.

The frontend implements smooth animations, full responsiveness across devices, and integrates with authentication APIs for a complete end-to-end flow.

---

## Features

### Landing Page

- Pixel-perfect recreation of Figma design
- Fully responsive (mobile, tablet, desktop)
- Smooth scroll-based animations using **AOS**
- Interactive sections with hover effects and transitions

### Authentication

- Login, Register, Forgot Password forms
- Client-side validation and error handling
- Loading indicators on form submission
- Redirects after successful registration/login

### UI & UX

- Accessible and modern design
- Animations triggered only when sections enter the viewport
- Persistent user session management using **Redux Toolkit & redux-persist**

---

## Tech Stack

- **Frontend:** React.js, TypeScript, React Router DOM
- **State Management:** Redux Toolkit, React Redux, Redux Persist
- **Styling:** Tailwind CSS, AOS for animations
- **UI Components:** Lucide React Icons, React Hot Toast
- **Utilities:** js-cookie, @dr.pogodin/react-helmet
- **Build Tools:** Vite, TypeScript, ESLint

---

## Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/dreammehedi/ScapeSync.git
cd scapesync
```
````

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm run dev
```

4. **Build for production**

```bash
npm run build
```

5. **Preview production build**

```bash
npm run preview
```

---

## Available Scripts

| Script            | Description                 |
| ----------------- | --------------------------- |
| `npm run dev`     | Start development server    |
| `npm run build`   | Build production bundle     |
| `npm run preview` | Preview production build    |
| `npm run lint`    | Run ESLint for code quality |

---

## Deployment

The project is deployed on **Vercel**:

[https://scape-sync-umber.vercel.app/](https://scape-sync-umber.vercel.app/)

---

## Author

**Mehedi Hassan**
Full Stack Developer
[GitHub](https://github.com/dreammehedi)
