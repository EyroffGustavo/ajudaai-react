
import "./index.scss";
import { Logo } from "assets/shared";
import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-screen">
      <header id="header-hp">
        <div className="w-full h-1/6 flex items-center justify-between">
          <Link to="/">
            <div className="header-logo flex p-6 lg:p-8 ml-1 lg:ml-10">
              <Logo />
              <h1 className="brand-name text-4xl mt-1">
                <span className="brand-l">Ajuda</span>
                <span className="brand-r">Aí</span>
              </h1>
            </div>
          </Link>
          <nav className="flex items-center justify-between">
            <div className="container mx-auto mt-2">
              <div className="flex header-menu-items space-x-6 hidden lg:flex">
                <Link to="#about-us">Quem Somos</Link>
                <div className="dropdown">
                  <Link to="" className="dropbtn flex">
                    Voluntariado

                  </Link>
                  <ul className="header-menu-dropdown-list">
                    <li>
                      <Link to="#about-platform">Conheça a Plataforma</Link>
                    </li>
                    <li>
                      <Link to="/ngo/list">ONGs</Link>
                    </li>
                    <li>
                      <Link to="/announce/list">Oportunidades</Link>
                    </li>
                  </ul>
                </div>
                <Link to="#footer-right">Contato</Link>
              </div>
            </div>
          </nav>
          <nav className="flex items-center justify-between">
            
              <div className="header-menu-mobile lg:hidden">
                <Link to="" className="dropbtn-mobile">
                  <img
                    id="icone-menu"
                    className="w-[30px] h-[30px] opacity-80 mb-[10px]"
                    src="./Linkssets/images/menu-mobile.png"
                    alt="Ícone do menu."
                  />
                </Link>
                <div className="dropdown-menu-mobile">
                  <ul className="menu-mobile-dropdown-list right-2 top-[60px]">
                    <li>
                      <Link to="#about-us">Quem somos</Link>
                    </li>
                    <li>
                      <Link to="#about-platform">Conheça a plataforma</Link>
                    </li>
                    <li>
                      <Link to="ongs-lista.html">ONGs</Link>
                    </li>
                    <li>
                      <Link to="anuncios-lista.html">Oportunidades</Link>
                    </li>
                    <li>
                      <Link to="#footer-right">Contato</Link>
                    </li>
                    <li>
                      <Link to="login.html">Entrar</Link>
                    </li>
                  </ul>
                </div>
              </div>
            
            <div className="flex header-menu-login space-x-2 hidden lg:flex">
              <div className="criardown">

                <button className="criarbtn" id="sign-up">Criar Conta</button>
                <div className="criardown-content">
                  <Link to="/loginCadastro" id="VoluntarioButton">Voluntario</Link>
                  <Link to="/registerngo" id="OngButton" >ONG</Link>
                </div>
                <Link to="/login" className="login">
                  Entrar
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
