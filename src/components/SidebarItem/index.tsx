import { Add, ArrowDropDown } from '@mui/icons-material';
import { Collapse } from '@mui/material';
import React from 'react';

type Props = {
  title: string;
  icon?: React.ReactNode;
  path?: string;
  children?: React.ReactNode;
  openByDefault?: boolean;
  createLabel?: string;
};

const Index = ({
  title,
  icon,
  path = '.',
  children,
  openByDefault = false,
  createLabel,
}: Props) => {
  console.log(openByDefault);
  const [open, setOpen] = React.useState(openByDefault);
  const handleClick = () => {
    if (children) {
      setOpen(!open);
    }
  };

  return (
    <div className="flex flex-col relative">
      <div
        className="h-[60px] w-full px-8
      flex flex-row gap-4 hover:bg-secondary
      transition-all items-center select-none cursor-pointer"
        onClick={handleClick}
      >
        {children && (
          <ArrowDropDown
            className={`absolute left-1 ${
              open
                ? 'transform rotate-180'
                : 'transform rotate-0 transition-transform'
            }`}
          />
        )}
        {icon}
        <p>{title}</p>
      </div>
      {children && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          {createLabel && (
            <div className="flex flex-row px-8 gap-4 cursor-pointer items-center hover:bg-primary-hover h-[60px] bg-primary text-text-on-primary">
              <Add fontSize="small" />
              {createLabel}
            </div>
          )}
          {children}
        </Collapse>
      )}
    </div>
  );
};

export default Index;
