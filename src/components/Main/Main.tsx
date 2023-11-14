type MainProps = {
  children: React.ReactNode;
};

const Main = ({ children }: MainProps) => (
  <div>
    <div>{children}</div>
  </div>
);

export default Main;
