import Nav from "./Nav";

const Header = () => {
  return (
    <header className="header grid grey">
      <img src="Logo.svg" alt="Logo" className="logo" />
      <Nav></Nav>
    </header>
  );
};

export default Header;
