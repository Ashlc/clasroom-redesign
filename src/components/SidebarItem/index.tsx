import { Collapse, Icon } from '@mui/material';
import React from 'react';

type Props = {
  title: string;
  icon: React.ReactNode;
  path?: string;
  children?: React.ReactNode;
};

const defaultProps: Props = {
  title: 'Title',
  icon: <Icon />,
  path: '.',
};

const Index = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div
      className="h-[60px] w-full px-4
    flex flex-row gap-4 hover:bg-secondary
    transition-all items-center select-none"
    >
      {props.icon}
      <p>{props.title}</p>
      {props.children && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          {props.children}
        </Collapse>
      )}
    </div>
  );
};

Index.defaultProps = defaultProps;

export default Index;
