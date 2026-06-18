import { createContext, useContext, ReactNode } from 'react'
import { useTheme as useThemeHook } from '../hooks/useTheme'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  isDark: boolean
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { isDark, theme, setTheme, toggleTheme } = useThemeHook()

  return (
    <ThemeContext.Provider value={{ isDark, theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme debe ser usado dentro de ThemeProvider')
  }
  return context
}
