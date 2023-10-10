import { Link, Outlet } from "react-router-dom";
import Navegacion from "./Navegacion";
import logo from "/img/logo.svg";
import Footer from "./Footer";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="contenedor barra">
          <Link to="/">
            <img className="logo" src={logo} alt="Logo" />
          </Link>

          <Navegacion />
        </div>
      </header>

      <Outlet />

      <Footer />
    </>
  );
};

export default Header;
