'use client'

import { DarkMode, DarkModeOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useTheme } from 'next-themes';

type Props = {}

const Index = (props: Props) => {
  const {setTheme, resolvedTheme} = useTheme()

  if (resolvedTheme === 'dark') {
    return (
    <IconButton onClick={() => setTheme('light')}>
      <DarkMode fontSize='medium' />
      </IconButton>
    )
  }

  if (resolvedTheme === 'light') {
    return (
      <IconButton onClick={() => setTheme('dark')}>
      <DarkModeOutlined fontSize='medium'/>
      </IconButton>
    )
  }
}

export default Index;