# Portfolio Website

A personal portfolio website showcasing my skills, projects, and experience as a Software Engineer with a focus on Flutter Development.

## 🔗 Live Demo

[Add your live site link here]

## 📖 About

This portfolio highlights:
- My background and journey as a Software Engineer
- Technical skills (Flutter, Dart, Firebase, JavaScript, React, and more)
- Featured projects, including **Smart School Management and Public Ranking System**
- Work experience and internships
- Certifications
- Contact options (WhatsApp, GitHub, downloadable CV)

## 🛠️ Built With

- **HTML5** — page structure
- **CSS3** — custom styling (`css/style.css`)
- **Tailwind CSS (CDN)** — utility-first styling framework
- **JavaScript** — interactivity (`js/script.js`, `js/tailwind-config.js`)
- **Material Symbols** — icons
- **Google Fonts** — Inter & Geist

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/
│   └── style.css           # Custom styles (animations, glass cards, dialog fixes, etc.)
├── js/
│   ├── tailwind-config.js  # Tailwind theme configuration (colors, spacing, fonts)
│   └── script.js           # Typing effect, scroll reveal, read-more toggle, video modal, navbar
└── assets/
    ├── [Your-CV].pdf       # Downloadable resume
    └── demo/
        └── [project-videos].mp4  # Project demo recordings
```

## ✨ Features

- **Responsive design** — works across desktop, tablet, and mobile
- **Dark theme** with glassmorphism-style cards
- **Animated typing effect** in the hero section
- **Scroll reveal animations** for sections as you scroll
- **Read More / Read Less** toggle for long project descriptions
- **In-page video demo modal** — watch project screen recordings without leaving the site
- **Direct CV download** button
- **One-click WhatsApp contact** with a pre-filled message
- **Direct GitHub profile link**
- **Project status indicators** — completed (✅ links to source code) vs. under construction (🚧)

## 🚀 Getting Started

1. Clone or download this repository
2. Open `index.html` directly in your browser, or serve it with a local server:
   ```bash
   # Using Python
   python3 -m http.server 8000

   # Then open http://localhost:8000
   ```
3. No build step or dependencies required — Tailwind is loaded via CDN

## ✏️ Making Changes

- **Content/text** → edit `index.html`
- **Colors, spacing, fonts (Tailwind theme)** → edit `js/tailwind-config.js`
- **Custom animations/effects** → edit `css/style.css`
- **Interactive behavior** (read more, video modal, typing effect, scroll reveal) → edit `js/script.js`
- **Resume file** → replace the PDF inside `assets/`
- **Project demo videos** → replace files inside `assets/demo/`

> ⚠️ If your site is hosted via manual upload (FTP/cPanel), changes made locally won't reflect live until you re-upload the updated files. If hosted via GitHub Pages/Netlify/Vercel connected to a Git repo, pushing changes to GitHub will auto-update the live site.

## 📬 Contact

- **WhatsApp:** [Add number]
- **GitHub:** [https://github.com/syedjavedshah](https://github.com/syedjavedshah)
- **Email:** [Add email]

## 📄 License

This project is open for personal use and customization. Feel free to fork and adapt it for your own portfolio.
