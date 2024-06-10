'use client'

import MuiThemeProvider from '@components/MuiThemeProvider'
import { ThemeProvider } from "next-themes"


type Props = {}

const Providers = ({children}: {children: React.ReactNode}) => {


  return (
    <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    >
      <MuiThemeProvider>
        {children}
        </MuiThemeProvider>
    </ThemeProvider>
  )
}

export default Providers