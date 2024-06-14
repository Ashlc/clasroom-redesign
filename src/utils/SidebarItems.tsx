import { Bookmark, Event, Home, School } from '@mui/icons-material';

const sidebarItems = [
  {
    title: 'Home',
    path: '/',
    icon: <Home />,
  },
  {
    title: 'Calendar',
    path: '/calendar',
    icon: <Event />,
  },
  {
    title: 'Bookmarks',
    path: '/bookmarks',
    icon: <Bookmark />,
  }
];

export default sidebarItems;
