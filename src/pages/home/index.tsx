import { AboutUs, FeedbackImg, ForNgo, ForVolunteers, Main } from "assets/home";
import "./index.scss";

export default function HomePage() {
  return (
    <div className="container-home">
      <section id="banner">
        <div className="w-full h-auto flex flex-col min-[1120px]:flex-row min-[1120px]:pt-36 justify-between min-[1120px]:px-40">
          <div
            id="banner-lettering"
            className="items-center mx-auto leading-[2.5rem] pt-16 xl:leading-[4.5rem]">
            <span id="lettering1" className="text-[32px] xl:text-[64px]">
              Venha ajudar causas
            </span>
            <br />
            <span id="lettering2" className="text-[19px] xl:text-[38px]">
              e fazer parte da
            </span>
            <span id="lettering3" className="text-[52px] xl:text-[105px]">
              {" "}
              FORÇA
            </span>
            <br />
            <span id="lettering4" className="text-[51px] xl:text-[103px]">
              da mudança!
            </span>
          </div>
          <div id="banner-image" className="flex items-center">
            <Main />
          </div>
        </div>
      </section>
      <section id="about-us" className="pt-32">
        <div className="w-full lg:h-[300px] flex flex-row-reverse">
          <h1 className="leading-[2.5rem] lg:leading-[4.5rem] self-end text-right mr-8 lg:mr-28">
            <div id="about-us-title1" className="text-[48px] lg:text-[96px]">
              Quem
            </div>
            <div id="about-us-title2" className="text-[75px] lg:text-[150px]">
              SOMOS
            </div>
          </h1>
        </div>
        <div className="w-full h-auto pb-20 pt-10 px-4 lg:px-28 flex flex-row items-center justify-center lg:space-x-28">
          <div
            id="about-us-image-container"
            className="hidden min-[1603px]:flex">
            <AboutUs />
          </div>
          <div id="about-us-text" className="max-w-full mx-4">
            <p
              id="about-us-description"
              className="text-[20px] lg:text-[30px] <br />eak-words">
              <strong>
                Seja bem-vindo(a) à AjudaAí! <br />
                A plataforma que conecta pessoas interessadas à ONGs
                qualificadas, com dinamismo e praticidade. A vontade de inovar
                moveu cinco alunos do programa Entra21 a desenvolverem uma
                plataforma que não só facilita a conexão com vagas de
                voluntariado, mas também promove visibilidade para que o
                trabalho voluntário chegue ainda mais longe.
                <br />
                <br />
                Junte-se a nós e gere impactos positivos na vida daqueles que
                mais precisam!
              </strong>
            </p>
          </div>
        </div>
      </section>


      <section id="about-platform">
    <div className="w-full h-auto py-14 px-4 gap-y-4 shadow flex flex-col min-[1340px]:hidden">
      <div className="flex flex-col bg-[#8FC5E7] rounded-lg shadow-lg items-center justify-between p-6">
        <h1 id="title-mobile-blue" className="font-['Jomhuria'] text-7xl text-white">Para Voluntários</h1>
        <img className="icon-mobile" src="./assets/images/signup.png" alt="Ícone de um papel sendo preenchido por uma mão."/>
        <h2 className="topic-mobile">Cadastre-se na plataforma, informando seus
          interesses e aptidões.</h2>
        <img className="icon-mobile" src="./assets/images/handshake.png"
          alt="Ícone de um aperto de mãos formando um coração."/>
        <h2 className="topic-mobile">Conecte-se com oportunidades de voluntariado e
          faça a diferença.</h2>
        <img className="icon-mobile" src="./assets/images/medal.png" alt="Ícone de medalha."/>
        <h2 className="topic-mobile">Conclua desafios, receba medalhas e compartilhe
          em suas redes sociais.</h2>
        <img className="icon-mobile" src="./assets/images/feedback.png" alt="Ícone de um balão com uma estrela dentro."/>
        <h2 className="topic-mobile">Forneça feedback da sua experiência após
          finalizar o trabalho.</h2>
      </div>
      <div className="flex flex-col bg-[#687C57] rounded-lg shadow-lg items-center justify-between p-6">
        <h1 id="title-mobile-blue" className="font-['Jomhuria'] text-7xl text-white">Para ONGs</h1>
        <img className="icon-mobile" src="./assets/images/signup.png" alt="Ícone de um papel sendo preenchido por uma mão."/>
        <h2 className="topic-mobile">Cadastre sua ONG, informando as áreas de atuação.</h2>
        <img className="icon-mobile" src="./assets/images/advertisement.png"
          alt="Ícone de um aperto de mãos formando um coração."/>
        <h2 className="topic-mobile">Crie anúncios de vagas de voluntariado.</h2>
        <img className="icon-mobile" src="./assets/images/training.png" alt="Ícone de medalha."/>
        <h2 className="topic-mobile">Informe e prepare o voluntário sobre sua função.</h2>
        <img className="icon-mobile" src="./assets/images/feedback.png" alt="Ícone de um balão com uma estrela dentro."/>
        <h2 className="topic-mobile">Forneça feedback sobre os voluntários após finalizado o anúncio.</h2>
      </div>
    </div>
    <div className="hidden w-full h-[1080px] min-[1340px]:flex items-center justify-center">
      <div className="w-[1320px] h-[800px]">
       <ForVolunteers/>
        <ForNgo/>
        <h1 id="folder-title-blue">Para Voluntários</h1>
        <img id="sign-up-icon-volunteer" src="./assets/images/signup.png" alt="Ícone de um papel sendo preenchido por uma mão."/>
        <h2 className="folder-topic-volunteer relative bottom-[1625px] left-[220px]">Cadastre-se na plataforma, informando seus
          interesses e aptidões.</h2>
        <img id="handshake-icon-volunteer" src="./assets/images/handshake.png"
          alt="Ícone de um aperto de mãos formando um coração."/>
        <h2 className="folder-topic-volunteer relative bottom-[1655px] left-[220px]">Conecte-se com oportunidades de voluntariado e
          faça a diferença.</h2>
        <img id="medal-icon-volunteer" src="./assets/images/medal.png" alt="Ícone de medalha."/>
        <h2 className="folder-topic-volunteer relative bottom-[1710px] left-[220px]">Conclua desafios, receba medalhas e compartilhe
          em suas redes sociais.</h2>
          <img src={FeedbackImg} alt="Imagem de feedback" />;
        <h2 className="folder-topic-volunteer relative bottom-[1752px] left-[220px]">Forneça feedback da sua experiência após
          finalizar o trabalho.</h2>
        <h1 id="folder-title-green">Para ONGs</h1>
        <img id="sign-up-icon-ngo" src="./assets/images/signup.png" alt="Ícone de um papel sendo preenchido por uma mão."/>
        <h2 className="folder-topic-ngo relative bottom-[2480px] left-[220px]">Cadastre sua ONG, informando as áreas de atuação.</h2>
        <img id="advertisement-icon-ngo" src="./assets/images/advertisement.png"
          alt="Ícone de um aperto de mãos formando um coração."/>
        <h2 className="folder-topic-ngo relative bottom-[2510px] left-[220px]">Crie anúncios de vagas de voluntariado.</h2>
        <img id="training-icon-ngo" src="./assets/images/training.png" alt="Ícone de medalha."/>
        <h2 className="folder-topic-ngo relative bottom-[2545px] left-[220px]">Informe e prepare o voluntário sobre sua função.</h2>
        <img id="feedback-icon-ngo" src="./assets/images/feedback.png" alt="Ícone de um balão com uma estrela dentro."/>
        <h2 className="folder-topic-ngo relative bottom-[2588px] left-[220px]">Forneça feedback sobre os voluntários após finalizado o anúncio.</h2>
      </div>
    </div>
  </section>

      
    </div>
  );
}
