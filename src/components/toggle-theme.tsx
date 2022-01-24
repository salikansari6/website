import React, { BaseSyntheticEvent } from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import Sun from '../assets/images/light-sun.svg'
import Moon from '../assets/images/dark-moon.svg'

interface ThemeToggleProps {
  theme: string
  toggleTheme: (event: string) => void
}

const ThemeToggle = () => (
  <ThemeToggler>
    {({ theme, toggleTheme }: ThemeToggleProps) => (
      <label className="cursor-pointer flex items-center pl-4">
        <input
          type="checkbox"
          onChange={(event: BaseSyntheticEvent) => {
            toggleTheme(event.target.checked ? 'dark' : 'light')
          }}
          checked={theme === 'dark'}
          className="hidden"
        />
        {theme === 'dark' ? (
          <Sun height="24" width="24" />
        ) : (
          <Moon height="24" width="24" />
        )}
      </label>
    )}
  </ThemeToggler>
)

export default ThemeToggle
