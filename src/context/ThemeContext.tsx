import { createContext, useEffect, useState } from 'react'

export enum EnumTheme {
  LIGHT = 'light',
  DARK = 'dark',
}

interface ThemeContextProps {
  theme: string
  changeTheme: (value: string) => void
}

const defaultThemeContext: ThemeContextProps = {
  theme: EnumTheme.LIGHT,
  changeTheme: (value: string) => {},
}

export const ThemeContext =
  createContext<ThemeContextProps>(defaultThemeContext)

export default function ThemeContextProvider({
  children,
  defaultTheme,
}: {
  children: React.ReactNode
  defaultTheme: EnumTheme
}) {
  const [theme, setTheme] = useState<string>(defaultTheme || EnumTheme.LIGHT)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    setTheme(storedTheme || EnumTheme.LIGHT)

    // Set CSS variables based on theme
    document.documentElement.style.setProperty(
      '--header-bg-color',
      theme === EnumTheme.LIGHT ? '#f5f5f5' : '#ccc'
    )
    document.documentElement.style.setProperty(
      '--row-bg-color-even',
      theme === EnumTheme.LIGHT ? '#f2f2f2' : '#374151'
    )
    document.documentElement.style.setProperty(
      '--row-bg-color-odd',
      theme === EnumTheme.LIGHT ? '#fff' : '#1F2937'
    )
    document.documentElement.style.setProperty(
      '--text-color',
      theme === EnumTheme.LIGHT ? '#000' : '#fff'
    )
  }, [theme])

  const handleChangeTheme = (value: string) => {
    localStorage.setItem('theme', value)
    setTheme(value)
  }

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        changeTheme: (theme: string) => handleChangeTheme(theme),
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
