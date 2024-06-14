'use client';

import { Menu } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import sizes from '@utils/Sizes';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState } from 'react';
import MobileSidebar from './MobileSidebar';

const ThemeSwitcher = dynamic(() => import('../ThemeSwitcher'), {
  ssr: false,
});

type Props = {};

const Index = (props: Props) => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  return (
    <div className="w-full border-b-2 h-[60px] px-4 flex flex-row items-center justify-between">
      <div className="flex flex-row gap-4 items-center">
        {window.innerWidth <= sizes.tablet && (
          <IconButton
            aria-label="Menu"
            onClick={() => setDrawerVisible(!drawerVisible)}
          >
            <Menu />
          </IconButton>
        )}
        <Image src="/logo.svg" alt="Logo" height={36} width={36} />
        <p className="font-semibold text-lg">Classroom</p>
      </div>
      <ThemeSwitcher />
      {window.innerWidth <= sizes.tablet && (
        <MobileSidebar visible={drawerVisible} setVisible={setDrawerVisible} />
      )}
    </div>
  );
};

export default Index;
