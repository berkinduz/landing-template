import React, { createContext, useContext, ReactNode } from 'react'
import { themeConfig } from '@/config/theme.config'

const ThemeContext = createContext(themeConfig)

export function ThemeProvider({ children, config = themeConfig }: { children: ReactNode, config?: typeof themeConfig }) {
  return (
    <ThemeContext.Provider value={config}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext) 