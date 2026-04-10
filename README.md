# 🚀 Modern 3D Portfolio

A highly immersive, performance-optimized, and visually stunning portfolio website built with **Next.js**, **React Three Fiber**, and **Framer Motion**. This project features cinematic 3D VFX, smooth transitions, and a premium dark-themed design.

## ✨ Features

- **Cinematic 3D Visuals**: Advanced WebGL effects using React Three Fiber, Bloom, and post-processing.
- **Dynamic Animations**: Smooth scroll reveals and micro-interactions powered by Framer Motion.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.
- **Interactive Coding Profiles**: Dynamic display of ratings across CodeChef, LeetCode, and Codeforces.
- **Functional Contact Form**: Direct mailing service integration via EmailJS.
- **Accessibility & SEO**: Semantic HTML, meta tags, and accessibility best practices implemented.

## 🛠️ Tech Stack

- **Core**: [Next.js](https://nextjs.org/) (App Router), [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/)
- **3D Graphics**: [Three.js](https://threejs.org/), [React Three Fiber](https://r3f.docs.pmnd.rs/), [Drei](https://github.com/pmndrs/drei)
- **Physics & Effects**: [@react-three/cannon](https://github.com/pmndrs/use-cannon), [@react-three/postprocessing](https://github.com/pmndrs/react-postprocessing)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: Vanilla CSS with PostCSS
- **External API**: [EmailJS](https://www.emailjs.com/) for contact infrastructure
- **Icons**: React Icons, FontAwesome

## 📂 Project Structure

```text
├── app/                # Next.js App Router (Layouts & Pages)
├── src/
│   ├── assets/         # Images, WebP, and static media
│   ├── components/     # Reusable UI components (3D Loaders, About, Portfolio, etc.)
│   │   ├── codingprofiles/
│   │   ├── contact/    # Contact form with EmailJS integration
│   │   ├── loader/     # Cinematic 3D VFX loading screens
│   │   └── ...
│   └── styles/         # Global styles and design system tokens
├── public/             # Static assets (Favicons, Sitemap)
└── .env                # Environment variables (Configuration)
```

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/bsurajpatra/portfolio.git
cd portfolio
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory and add your external service credentials:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_API=your_public_key

# GitHub Configuration
NEXT_PUBLIC_GITHUB_TOKEN=your_github_personal_access_token

# Build Configuration
GENERATE_SOURCEMAP=false
```

### 4. Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📧 EmailJS Setup

This portfolio uses **EmailJS** to handle contact form submissions without requiring a backend server.

1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. Add a new **Email Service** (e.g., Gmail).
3. Create an **Email Template** with variables: `from_name`, `from_email`, and `message`.
4. Copy your **Service ID**, **Template ID**, and **Public Key** into the `.env` file.

## 📝 License

This project is [MIT](./LICENSE) licensed.

---
Built with ❤️ by [B Suraj Patra](https://github.com/bsurajpatra)
