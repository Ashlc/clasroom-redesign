import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme } from "next-themes";

type Props = {
  children: React.ReactNode
}

function Index({children}: Props) {
  const { resolvedTheme } = useTheme()

  const theme = createTheme({ 
    palette: { 
        mode: resolvedTheme === 'light' ? 'light' : 'dark', 
    }, 
}); 
  return (
    <ThemeProvider theme={theme} >
        <CssBaseline /> 
        {children}
    </ThemeProvider>
  )
}

export default Index