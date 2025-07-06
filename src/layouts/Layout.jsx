import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <div id="content">
          <div id="inner-content">{children}</div>
        </div>
      </main>
    </>
  );
};

export default Layout;
