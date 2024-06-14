import { Icon } from '@mui/material';
import React from 'react';

type Props = {
  title: string;
  icon: React.ReactNode;
  path?: string;
  nested?: boolean;
  children?: React.ReactNode;
};

const defaultProps: Props = {
  title: 'Title',
  icon: <Icon />,
  path: '.',
  nested: false,
};

const Index = (props: Props) => {
  return (
    <div className="h-[60px] w-full px-4
    flex flex-row gap-4 hover:bg-secondary
    transition-all items-center select-none">
      {props.icon}
      <p>{props.title}</p>
    </div>
  );
};

Index.defaultProps = defaultProps;

export default Index;
