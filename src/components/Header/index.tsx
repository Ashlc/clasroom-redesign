'use client';

import PlaceholderPfp from '@assets/pfp.png';
import { LocalLibrary, Menu } from '@mui/icons-material';
import { Divider, Drawer, IconButton } from '@mui/material';
import sidebarItems from '@utils/SidebarItems';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState } from 'react';
import SidebarItem from '../SidebarItem';

const ThemeSwitcher = dynamic(() => import('../ThemeSwitcher'), {
  ssr: false,
});

type Props = {};

const Index = (props: Props) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  return (
    <div className="w-full border-b-2 h-[60px] px-4 flex flex-row items-center justify-between">
      <div className="flex flex-row gap-4 items-center">
        <IconButton
          aria-label="Menu"
          onClick={() => setDrawerVisible(!drawerVisible)}
        >
          <Menu />
        </IconButton>
        <Image src="/logo.svg" alt="Logo" height={36} width={36} />
        <p className="font-semibold text-lg">Classroom</p>
      </div>
      <ThemeSwitcher />
      <Drawer
        anchor="left"
        open={drawerVisible}
        onClose={() => setDrawerVisible(false)}
      >
        <div className="w-[300px]">
          <div className="flex flex-row items-center h-[80px] gap-4 px-4">
            <Image
              src={PlaceholderPfp}
              alt="Profile Picture"
              height={40}
              width={40}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <p className="font-bold">User</p>
              <p className="text-sm">user@email.com</p>
            </div>
          </div>
          <Divider />
          {sidebarItems.map((item, index) => (
            <SidebarItem
              key={item.title + index}
              title={item.title}
              path={item.path}
              icon={item.icon}
            />
          ))}
          <Divider />
          <SidebarItem title="Courses" path="." icon={<LocalLibrary />} />
        </div>
      </Drawer>
    </div>
  );
};

export default Index;
