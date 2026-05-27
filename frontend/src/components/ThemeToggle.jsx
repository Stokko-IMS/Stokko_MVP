import { Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/themeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex items-center justify-center gap-2 rounded-stokko border border-slate-600 px-3 py-2 text-sm font-bold text-slate-200 transition hover:bg-slate-800 hover:text-white md:w-full md:justify-start"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
      <span className="hidden sm:inline md:inline">
        {isDark ? "Light" : "Dark"}
      </span>
    </button>
  );
}
