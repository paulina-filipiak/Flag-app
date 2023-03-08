import { Outlet } from "react-router-dom"
import { Header } from "./Layout.styled"

import { useState, useEffect } from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../theme/globalStyles"
import { lightTheme, darkTheme } from "../theme/Themes"
import { Button } from "./Layout.styled"

const Layout = () => {
  const [theme, setTheme] = useState("light")
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyle />
        <Header>
          <h2>Where in the world?</h2>
          <Button onClick={themeToggler}>Switch Theme</Button>
        </Header>
        <main>
          <Outlet />
        </main>
      </>
    </ThemeProvider>
  )
}

export default Layout
