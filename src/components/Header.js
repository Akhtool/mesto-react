import headerLogo from "../images/header__logo.svg";

function Header() {
  return (
    <header className="header">
      <a href="#" className="header__logo-link">
        <img
          src={headerLogo}
          className="header__logo"
          alt="Логотип сайта Место"
        />
      </a>
    </header>
  );
}

export default Header;
