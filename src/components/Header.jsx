import "../styles/header.css";

const Header = () => {
  return (
    <div className="nav-wrapper">
      <nav>
        <details className="hamburger-menu">
          <summary>
            <span className="hamburger-menu--line"></span>
            <span className="hamburger-menu--line"></span>
            <span className="hamburger-menu--line"></span>
          </summary>
        </details>
        <a href="/" id="nav-home">
          MisterB Dynasty
        </a>
        <div className="nav-links">
          <a href="">Teams</a>
          <a href="">Rules</a>
          <a href="">How to Join</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
