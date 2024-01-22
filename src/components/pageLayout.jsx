const PageLayout = ({ children }) => {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="container">{children}</div>
      </div>
    </>
  );
};

export default PageLayout;
