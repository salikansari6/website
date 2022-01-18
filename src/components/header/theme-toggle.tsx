import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import { Moon, Sun } from '../../images'

const ThemeToggle = () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <label className="pl-7 py-3 cursor-pointer">
        <input
          type="checkbox"
          onChange={event =>
            toggleTheme(event.target.checked ? 'dark' : 'light')
          }
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
