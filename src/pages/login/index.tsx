import { Logo } from "assets/shared";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function LoginPage() {
//  const navigate = useNavigate();

//   useEffect(() => {
//     navigate("/", {replace: true});
//   }, []);

  return (
    <section className="w-screen h-screen" id="sign-up-form-ngo">
      <div className="container-login w-full  flex">
        <div className="box-form w-full h-auto lg:w-[680px] lg:h-[60vh] mx-auto lg:rounded-xl lg:my-6">
          <div id="box-form-header">
            <Link to="/">
              <div className="header-logo flex justify-center pt-8 lg:pt-14">
                <Logo />
                <h1 className="brand-name text-4xl mt-1">
                  <span className="brand-l">Ajuda</span>
                  <span className="brand-r">Aí</span>
                </h1>
              </div>
            </Link>
          </div>
          <div className="flex justify-center pt-6">
            <span id="box-form-subtitle">Faça seu Login</span>
          </div>
          <div className="form-list">
            <form className="flex flex-col justify-center h-auto px-10 lg:px-32">
              <div className="form-input-box mt-6 lg:mt-8">
                <input
                  type="text"
                  id="Voluntario-email"
                  placeholder="Digite seu email..."
                  className="pl-2 py-1"
                />
              </div>
              <div className="form-input-box mt-4 lg:mt-3.5">
                <input
                  type="text"
                  id="Voluntario-password"
                  placeholder="Ditie sua senha..."
                  className="pl-2 py-1"
                />
              </div>

              <div className="mt-6 mb-6 lg:mt-10">
                <button type="button" className="btn" id="btn-sign-in">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
