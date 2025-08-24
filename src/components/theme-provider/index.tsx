import { useEffect, useMemo, useState } from "react";

import type { Theme, ThemeProviderProps } from "./type";

import { ThemeProviderContext } from "./theme-context";

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem(storageKey) as Theme) || defaultTheme);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const systemTheme = mediaQuery.matches ? "dark" : "light";
      root.classList.add(systemTheme);

      const changeTheme = (e: MediaQueryListEvent) => {
        root.classList.add(e.matches ? "dark" : "light");
      };

      mediaQuery.addEventListener("change", changeTheme);

      return () => {
        mediaQuery.removeEventListener("change", changeTheme);
      };
    }

    root.classList.add(theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme: (theme: Theme) => {
        localStorage.setItem(storageKey, theme);
        setTheme(theme);
      }
    }),
    [theme, storageKey]
  );

  return (
    <ThemeProviderContext {...props} value={value}>
      {children}
    </ThemeProviderContext>
  );
}
