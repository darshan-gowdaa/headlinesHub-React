# 📰 **HeadlinesHub**  
**A React-based News Aggregator App**  

![React](https://img.shields.io/badge/React-18.3.1-blue)  ![Vite](https://img.shields.io/badge/Vite-6.0.5-orange)  ![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-purple)  

HeadlinesHub is a modern, responsive news aggregator app built with **React** and **Vite**. It fetches top headlines from various categories using the **NewsAPI** and displays them in a clean, user-friendly interface.  

![image](https://github.com/user-attachments/assets/ddce4004-f75d-4dc3-a1d5-be2277ea155e)


---

# Demo Video: https://tinyurl.com/54ja2sa7

---

## 🚀 **Features**  
- **📰 Top Headlines:** Fetch and display the latest news articles from multiple categories (e.g., Technology, Business, Sports).  
- **🔄 Infinite Scroll:** Load more articles seamlessly as you scroll using the `react-infinite-scroll-component`.  
- **📅 Date Formatting:** Display published dates in a user-friendly format.  
- **🌙 Dark Mode:** Built-in dark theme for a sleek and modern look.  
- **📱 Responsive Design:** Optimized for all screen sizes, from mobile to desktop.  
- **⚡ Fast Refresh:** Utilizes Vite's fast development server for quick updates during development.  

---

## 🛠️ **Tech Stack**  
- **Frontend:**  
  - React (v18.3.1)  
  - React Router (v7.1.1)  
  - Bootstrap (v5.3.3)  
- **Build Tool:**  
  - Vite (v6.0.5)  
- **API Integration:**  
  - NewsAPI (for fetching news articles)  
- **Linting & Formatting:**  
  - ESLint (with React, React Hooks, and React Refresh plugins)  

---

## 📂 **Project Structure**  
Here’s an overview of the key files and directories in the project:  

```
headlineHUB/  
├── public/  
│   └── index.html  
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
├── .eslintrc.js  
├── vite.config.js  
├── package.json  
└── README.md  
```

---

## 🚀 **Getting Started**  

### **Prerequisites**  
- Node.js (v16 or higher)  
- npm or yarn  

### **Installation**  
1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/headlineHUB.git
   cd headlineHUB
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Add your NewsAPI key:  
   Create a `.env` file in the root directory and add your API key:  
   ```env
   VITE_API_KEY=your_api_key_here
   ```

4. Start the development server:  
   ```bash
   npm run dev
   ```

5. Open the app in your browser:  
   Visit `http://localhost:5173` to see the app in action.  

---

## 🛠️ **Scripts**  
- **`npm run dev`:** Start the development server.  
- **`npm run build`:** Build the project for production.  
- **`npm run preview`:** Preview the production build locally.  
- **`npm run lint`:** Run ESLint to check for code issues.  

---

## 🎨 **Styling**  
- **Bootstrap:** Used for responsive layouts and components.  
- **Custom CSS:** Added in `index.css` for animations, dark theme, and custom styles.  

---

## 🙏 **Acknowledgments**  
- **NewsAPI:** For providing the news data.  
- **Vite:** For the fast and modern build tool.  
- **React Community:** For the amazing ecosystem of libraries and tools.

