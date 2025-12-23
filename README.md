# 📰 **HeadlinesHub**

**A React-based News Aggregator App**

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_Site-success?style=for-the-badge)](https://headlines-hub-react.vercel.app/)

![React](https://img.shields.io/badge/React-18.3.1-blue) ![Vite](https://img.shields.io/badge/Vite-6.0.5-orange) ![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-purple) ![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black)

HeadlinesHub is a modern, responsive news aggregator app built with **React** and **Vite**. It fetches top headlines from various categories using the **NewsAPI** and displays them in a clean, user-friendly interface.

![image](https://github.com/user-attachments/assets/ddce4004-f75d-4dc3-a1d5-be2277ea155e)

---

## 🌐 **Live Demo**

🔗 **[https://headlines-hub-react.vercel.app/](https://headlines-hub-react.vercel.app/)**

---

## 🎥 **Demo Video**

📺 [Watch Demo](https://tinyurl.com/54ja2sa7)

---

## 🚀 **Features**

- **📰 Top Headlines:** Fetch and display the latest news articles from multiple categories (Technology, Business, Sports, etc.)
- **🔄 Infinite Scroll:** Load more articles seamlessly as you scroll
- **📅 Date Formatting:** Display published dates in a user-friendly format
- **🌙 Dark Mode:** Built-in dark theme for a sleek, modern look
- **📱 Responsive Design:** Optimized for all screen sizes
- **⚡ Fast Refresh:** Vite's lightning-fast development server
- **☁️ Serverless API:** CORS-free news fetching via Vercel serverless functions

---

## 🛠️ **Tech Stack**

| Category | Technology |
|----------|------------|
| **Frontend** | React 18, React Router 7 |
| **Styling** | Bootstrap 5.3 |
| **Build Tool** | Vite 6 |
| **API** | NewsAPI |
| **Deployment** | Vercel |
| **Serverless** | Vercel Functions |

---

## 📂 **Project Structure**

```
headlineHUB/
├── api/
│   └── news.js              # Vercel serverless function
├── src/
│   ├── assets/
│   │   └── logos.png
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── NewsComp.jsx
│   │   ├── NewsDisplay.jsx
│   │   └── Spinner.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── App.css
├── vercel.json              # Vercel config for SPA routing
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 **Getting Started**

### **Prerequisites**

- Node.js (v16 or higher)
- npm or yarn
- NewsAPI key from [newsapi.org](https://newsapi.org/register)

### **Installation**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/darshan-gowdaa/headlinesHub-React.git
   cd headlinesHub-React
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your NewsAPI key:
   ```env
   VITE_API_KEY=your_api_key_here
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   Visit `http://localhost:5173`

---

## ☁️ **Deployment (Vercel)**

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Add environment variable:
   - **Name:** `VITE_API_KEY`
   - **Value:** Your NewsAPI key
4. Deploy!

> **Note:** The app uses a serverless function (`api/news.js`) to bypass CORS restrictions in production. NewsAPI only allows browser requests from `localhost`.

---

## 🛠️ **Scripts**

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## ⚠️ **API Rate Limits**

NewsAPI free tier has usage limits:
- **100 requests/day** for free accounts
- Requests only work from **localhost** in browser (production uses serverless proxy)

If you see a "rate limit exceeded" message, wait 24 hours or [get your own API key](https://newsapi.org/register).

---

## 🎨 **Styling**

- **Bootstrap 5:** Responsive layouts and components
- **Custom CSS:** Animations, dark theme, and custom styles in `index.css`

---

## 🙏 **Acknowledgments**

- [NewsAPI](https://newsapi.org/) — For providing the news data
- [Vite](https://vitejs.dev/) — Fast build tool
- [Vercel](https://vercel.com/) — Seamless deployment
- [Bootstrap](https://getbootstrap.com/) — UI components
