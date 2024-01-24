const PageLayout = ({ children }) => {
  return (
    <>
      <div className="w-full flex justify-center" id="pageLayout">
        <div className="container" id="pageLayoutContainer">
          {children}
        </div>
      </div>
    </>
  );
};

export default PageLayout;
