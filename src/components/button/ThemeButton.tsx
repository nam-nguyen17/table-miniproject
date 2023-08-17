import React, { useContext } from 'react'
import { ThemeContext, EnumTheme } from '../../context/ThemeContext'
import Button from './Button'

const ThemeButton: React.FC = () => {
  const { changeTheme, theme } = useContext(ThemeContext)

  const handleThemeChange = () => {
    const newTheme =
      theme === EnumTheme.LIGHT ? EnumTheme.DARK : EnumTheme.LIGHT
    changeTheme(newTheme)
  }

  return (
    <Button onClick={handleThemeChange}>
      {theme === EnumTheme.LIGHT ? 'Switch to Dark' : 'Switch to Light'}
    </Button>
  )
}

export default ThemeButton
