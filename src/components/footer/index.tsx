import { Logo } from "assets/shared";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div className="w-full h-[500px] flex flex-col pl-16 xl:flex-row xl:items-center xl:justify-stretch">
        <div
          id="footer-left"
          className="pt-10 mb-8 xl:ml-[250px] xl:pt-10 xl:pr-[200px] xl:pb-5 xl:border-r xl:border-solid xl:border-r-[#3F4C33]"
        >
          <a href="#header-hp">
            <div id="footer-logo" className="flex mb-6">
             <Logo />
              <h1 className="brand-name text-4xl mt-1">
                <span className="brand-l">Ajuda</span>
                <span className="brand-r">Aí</span>
              </h1>
            </div>
          </a>
          <div className="flex">
            <ul id="footer-menu-list" className="leading-10">
              <li>
                <a href="#about-us">Quem Somos</a>
              </li>
              <li>
                <a href="#about-platform">Conheça a plataforma</a>
              </li>
              <li>
                <a href="ongs-lista.html">ONGs</a>
              </li>
              <li>
                <a href="anuncios-lista.html">Oportunidades</a>
              </li>
            </ul>
          </div>
        </div>

        <div
          id="footer-right"
          className="w-fit pt-10 xl:mb-40 xl:ml-20 border-t border-solid border-t-[#3F4C33] xl:border-none"
        >
          <div>
            <h1 id="contact-title" className="pb-[15px] xl:ml-[5px]">
              Contato
            </h1>
            <div className="flex">
              <Mail />
              <h2 id="contact-info" className="pl-2.5 pt-2.5">
                contato@ajudaai.com.br
              </h2>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
