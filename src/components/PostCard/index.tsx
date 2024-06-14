type Props = {
  origin: string;
  author: string;
  date: Date;
  children: React.ReactNode;
};

const Index = ({ origin, author, date, children }: Props) => {
  return (
    <div className="flex flex-col gap-4 p-4 border border-gray-100 rounded-md">
      <div className="flex flex-row text-sm gap-4">
        <p>{origin}</p>
        <p>{author}</p>
        <p>{date.toDateString()}</p>
      </div>
      {children}
    </div>
  );
};

export default Index;
