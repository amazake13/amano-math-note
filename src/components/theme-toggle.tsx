"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"

export function ThemeToggle() {
  const [theme, setTheme] = React.useState<"light" | "dark">("light")

  React.useEffect(() => {
    // 初期テーマの設定
    const currentTheme = document.documentElement.classList.contains("dark") ? "dark" : "light"
    setTheme(currentTheme)

    // テーマ変更イベントのリスナー
    const handleThemeChange = (e: CustomEvent) => {
      setTheme(e.detail)
    }

    window.addEventListener('theme-change', handleThemeChange as EventListener)
    return () => {
      window.removeEventListener('theme-change', handleThemeChange as EventListener)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    const root = document.documentElement
    if (newTheme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
    localStorage.setItem("theme", newTheme)
    setTheme(newTheme)
    window.dispatchEvent(new CustomEvent('theme-change', { detail: newTheme }))
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative h-9 w-9 text-foreground"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">テーマを切り替える</span>
    </Button>
  )
} 