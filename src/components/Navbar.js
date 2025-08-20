// NavigationbarRekorder.js
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/*
  Notes:
  - Requires framer-motion installed.
  - Uses CSS variables: --brand-dark, --brand-medium, --background, --background-rgb
  - Replace "Shaunak Wagh" with your name/logo if desired.
  - Optimized for mobile devices including iPhone 13
  - Fixed text overflow issues for longer words like "Certificates" and "Projects"
*/

const LINKS = [
  { href: "#about", label: "About", section: "about" },
  { href: "#projects", label: "Projects", section: "projects" },
  { href: "#skills", label: "Skills", section: "skills" },
  { href: "#certificates", label: "Certificates", section: "certificates" },
];

const panelVariants = {
  hidden: { x: "100%", opacity: 0, transition: { when: "afterChildren" } },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const linkItem = {
  hidden: { opacity: 0, x: 30, skewY: 4 },
  visible: {
    opacity: 1,
    x: 0,
    skewY: 0,
    transition: { type: "spring", stiffness: 320, damping: 28 },
  },
};

const maskedText = {
  hidden: { y: 30 },
  visible: { y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

const Hamburger = ({ open }) => {
  return (
    <svg width="24" height="18" viewBox="0 0 24 18" aria-hidden>
      <motion.rect
        width="24"
        height="2"
        rx="1"
        fill="currentColor"
        animate={open ? { y: 8, rotate: 45, transformOrigin: "12px 9px" } : { y: 0, rotate: 0 }}
        transition={{ duration: 0.28 }}
      />
      <motion.rect
        width="24"
        height="2"
        rx="1"
        fill="currentColor"
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.18 }}
        style={{ y: 8 }}
      />
      <motion.rect
        width="24"
        height="2"
        rx="1"
        fill="currentColor"
        animate={open ? { y: 8, rotate: -45, transformOrigin: "12px 9px" } : { y: 16, rotate: 0 }}
        transition={{ duration: 0.28 }}
        style={{ y: 16 }}
      />
    </svg>
  );
};

const NavigationbarRekorder = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("about");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      // section detection logic (keeps active item in sync)
      for (const link of LINKS) {
        const el = document.getElementById(link.section);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveLink(link.section);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Uniform font size based on "Certificates" length for consistency
  const getMobileFontSize = () => {
    const baseSize = window.innerWidth <= 480 ? 2.8 : 3.4;
    return `${baseSize * 0.75}rem`; // Same size as "Certificates" for all links
  };

  return (
    <nav
      aria-label="Primary"
      style={{
        position: "fixed",
        inset: "0 auto auto 0",
        zIndex: 2000,
        padding: scrolled ? "0.75rem 0" : "1rem 0",
        transition: "all 0.35s ease",
        backgroundColor: scrolled ? "var(--background)" : "rgba(var(--background-rgb), 0.88)",
        boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.08)" : "none",
        width: "100%",
      }}
    >
      <div
        className="container-fluid"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 1.25rem",
          maxWidth: "100%",
        }}
      >
        <a
          href="/"
          style={{
            fontFamily: '"IBM Plex Mono", monospace',
            fontWeight: 700,
            fontSize: `clamp(1.1rem, 4vw, 1.8rem)`,
            color: "var(--brand-dark)",
            textDecoration: "none",
            letterSpacing: "0.5px",
            transform: scrolled ? "scale(0.96)" : "scale(1)",
            transition: "transform 0.28s ease",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          Shaunak Wagh
        </a>

        {/* Desktop Links */}
        <div
          className="d-none d-md-flex"
          style={{ gap: "2rem", alignItems: "center", marginLeft: "auto" }}
        >
          {LINKS.map((l) => (
            <a
              key={l.section}
              href={l.href}
              onClick={() => setActiveLink(l.section)}
              style={{
                position: "relative",
                textDecoration: "none",
                color: "var(--brand-dark)",
                fontFamily: '"IBM Plex Mono", monospace',
                fontSize: "0.85rem",
                letterSpacing: "1px",
              }}
            >
              <span>{l.label.toUpperCase()}</span>
              <motion.span
                initial={false}
                animate={activeLink === l.section ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 360, damping: 28 }}
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  bottom: "-8px",
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--brand-medium)",
                  boxShadow: "0 0 8px var(--brand-medium)",
                }}
              />
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          aria-expanded={isOpen}
          aria-label="Open menu"
          onClick={() => setIsOpen((s) => !s)}
          className="d-md-none"
          style={{
            background: "transparent",
            border: "none",
            color: "var(--brand-dark)",
            cursor: "pointer",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "40px",
            minHeight: "40px",
          }}
        >
          <Hamburger open={isOpen} />
        </button>
      </div>

      {/* Mobile fullscreen panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="panel"
            variants={panelVariants}
            initial="hidden"
            animate="enter"
            exit="exit"
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 2050,
              background: "linear-gradient(180deg, rgba(10,10,10,0.96) 0%, rgba(0,0,0,0.98) 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              boxShadow: "inset -120px 0 120px rgba(0,0,0,0.25)",
            }}
          >
            <div
              style={{
                width: "min(90vw, 400px)", // Increased from 85vw to 90vw for more space
                padding: "0 1rem", // Reduced horizontal padding
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: window.innerWidth <= 480 ? 20 : 28, // Slightly reduced gaps
                maxHeight: "80vh", // Prevent overflow on small screens
                overflowY: "auto",
              }}
            >
              {/* Links container with stagger */}
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                style={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  gap: window.innerWidth <= 480 ? 12 : 16, // Reduced gaps between links
                  alignItems: "center",
                  width: "100%"
                }}
              >
                {LINKS.map((link, idx) => (
                  <motion.a
                    key={link.section}
                    variants={linkItem}
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.section);
                      setIsOpen(false);
                    }}
                    style={{
                      display: "inline-block",
                      textDecoration: "none",
                      overflow: "visible", // Changed from hidden to visible
                      lineHeight: 1.1, // Tighter line height
                      textAlign: "center",
                      width: "100%",
                      maxWidth: "100%",
                    }}
                  >
                    {/* Mobile-optimized text reveal with dynamic sizing */}
                    <div style={{ 
                      display: "block", 
                      overflow: "visible", // Changed from hidden
                      height: "auto", // Auto height instead of fixed
                      minHeight: window.innerWidth <= 480 ? 40 : 48, // Minimum height
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>
                      <motion.span
                        variants={maskedText}
                        style={{
                          display: "inline-block",
                          transform: "translateY(0)",
                          fontFamily: '"Work Sans", "IBM Plex Mono", sans-serif',
                          fontWeight: 600,
                          fontSize: getMobileFontSize(),
                          letterSpacing: "-0.8px", // Consistent tighter spacing for all links
                          color: activeLink === link.section ? "var(--brand-medium)" : "#fff",
                          textTransform: "none",
                          whiteSpace: "nowrap",
                          maxWidth: "100%",
                          textAlign: "center",
                        }}
                      >
                        {link.label}
                      </motion.span>
                    </div>
                  </motion.a>
                ))}
              </motion.div>

              {/* Mobile-optimized footer */}
              <div style={{ 
                marginTop: window.innerWidth <= 480 ? 8 : 12, 
                opacity: 0.65, 
                color: "#bbb", 
                fontSize: window.innerWidth <= 480 ? 11 : 13,
                textAlign: "center",
                lineHeight: 1.3,
                padding: "0 1rem"
              }}>
                © {new Date().getFullYear()} Shaunak Wagh
                <br />
                All rights reserved
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavigationbarRekorder;