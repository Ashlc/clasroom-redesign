'use client'

import { DarkMode, DarkModeOutlined } from '@mui/icons-material'
import { useTheme } from 'next-themes'

type Props = {}

const Index = (props: Props) => {
  const {setTheme, resolvedTheme} = useTheme()

  if (resolvedTheme === 'dark') {
    return <DarkMode fontSize='medium'  onClick={() => setTheme('light')} />
  }

  if (resolvedTheme === 'light') {
    return <DarkModeOutlined fontSize='medium' onClick={() => setTheme('dark')} />
  }
}

export default Index;