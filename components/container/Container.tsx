interface IContainer {
  children: React.ReactNode;
}

const Container = ({ children }: IContainer) => {
  return <div className="container mx-auto">{children}</div>;
};

export default Container;
