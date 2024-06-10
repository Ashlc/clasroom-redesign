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
    <div className="h-[40px] border border-red-500 w-full flex flex-row gap-4 items-center">
      {props.icon}
      <p className="text-primary">{props.title}</p>
    </div>
  );
};

Index.defaultProps = defaultProps;

export default Index;
