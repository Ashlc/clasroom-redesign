type Props = {
  gap?: number;
  children?: React.ReactNode;
  align?: 'start' | 'center' | 'end';
  className?: string;
};

const Index = ({ gap = 4, children, align = 'center', className }: Props) => {
  return (
    <div className={`flex flex-row gap-${gap} items-${align} ${className}`}>
      {children}
    </div>
  );
};

export default Index;
