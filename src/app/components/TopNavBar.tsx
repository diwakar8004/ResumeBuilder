"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cx } from "lib/cx";

export const TopNavBar = () => {
  const pathName = usePathname();
  const isHomePage = pathName === "/";
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage for saved preference
    const savedMode = localStorage.getItem("theme-mode");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = savedMode ? savedMode === "dark" : prefersDark;
    
    if (shouldBeDark) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme-mode", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme-mode", "light");
    }
  };

  if (!mounted) return null;

  return (
    <header
      aria-label="Site Header"
      className={cx(
        "flex h-[var(--top-nav-bar-height)] items-center border-b-2 border-gray-100 dark:border-gray-700 px-3 lg:px-12 bg-white dark:bg-gray-900 transition-colors duration-300",
        isHomePage && "bg-dot dark:bg-dot-dark"
      )}
    >
      <div className="flex w-full items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-3xl font-bold text-transparent hover:opacity-80 transition-opacity">
            ResumeBuilder
          </span>
        </Link>
        <nav aria-label="Site Nav Bar" className="flex items-center gap-4 text-sm font-medium">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <svg
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-gray-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l-2.12-2.12a4 4 0 00-5.656-5.656l-2.12 2.12a1 1 0 001.414 1.414l2.12-2.12a2 2 0 013.536 3.536l-2.12 2.12a1 1 0 101.414 1.414l2.12-2.12a4 4 0 005.656-5.656l2.12 2.12a1 1 0 11-1.414 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};
