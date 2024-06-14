import PlaceholderPfp from '@assets/pfp.png';
import { Archive, LocalLibrary, School, Settings } from '@mui/icons-material';
import { Divider, Drawer } from '@mui/material';
import sidebarItems from '@utils/SidebarItems';
import Image from 'next/image';
import React from 'react';
import SidebarItem from '../SidebarItem';

type Props = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileSidebar = ({ visible, setVisible }: Props) => {
  const coursesData = [
    {
      name: 'Artificial Intelligence',
    },
    {
      name: 'Compilers',
    },
  ];

  const enrolledData = [
    {
      name: 'Computer Graphics',
    },
    {
      name: 'Machine Learning',
    },
  ];
  return (
    <Drawer anchor="left" open={visible} onClose={() => setVisible(false)}>
      <div className="w-[300px]">
        <div className="flex flex-row items-center h-[80px] gap-4 px-8">
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
        <SidebarItem title="Courses" path="." icon={<LocalLibrary />}>
          {coursesData.map((item, index) => (
            <SidebarItem key={item.name + index} title={item.name} path="." />
          ))}
        </SidebarItem>
        <Divider />
        <SidebarItem
          title="Enrolled"
          path="."
          icon={<School />}
          openByDefault={true}
          createLabel="Enroll in a class"
        >
          {enrolledData.map((item, index) => (
            <SidebarItem key={item.name + index} title={item.name} path="." />
          ))}
        </SidebarItem>
        <Divider />
        <SidebarItem title="Archived" icon={<Archive />} path="." />
        <SidebarItem title="Settings" icon={<Settings />} path="." />
      </div>
    </Drawer>
  );
};

export default MobileSidebar;
