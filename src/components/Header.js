import Nav from "./Nav";

const Header = () => {
  return (
    <header className="grid-system grey">
      <img src="Logo.svg" alt="little lemon logo" className="logo" />
      <Nav></Nav>
    </header>
  );
};

export default Header;
