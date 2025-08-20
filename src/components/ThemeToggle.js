import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // save to localStorage
  };

  // Initialize theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    setTheme(savedTheme);
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      style={{
        background: "var(--brand-medium)",
        color: "var(--background)",
        border: "none",
        padding: "0.5rem 1rem",
        borderRadius: "20px",
        cursor: "pointer",
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        transition: "all var(--transition-speed) ease"
      }}
    >
      {theme === "light" ? "🌙" : "☀️"} Switch Theme
    </button>
  );
};

export default ThemeToggle;
