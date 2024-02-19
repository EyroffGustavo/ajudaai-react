import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import "./index.scss";


export default function RegisterNgoPage() {
  
    $(() => {
      $("#btn-sign-up").click(() => {
          let tagCause = document.getElementById("ngo-causes") as HTMLSelectElement;
          let idCause = tagCause.options[tagCause.selectedIndex].value;
  
          let tagState = document.getElementById("ngo-state") as HTMLSelectElement;
          let idState = tagState.options[tagState.selectedIndex].value;
  
          let tagCity = document.getElementById("ngo-city") as HTMLSelectElement;
          let idCity = tagCity.options[tagCity.selectedIndex].value;
  
          const values: {
              ngoName: string,
              description: string,
              site: string,
              headPerson: string,
              telephone: string,
              email: string,
              password: string,
              role: string,
              causesId: string,
              cityId: string,
              cityStateId: string,
          } = {
            ngoName: $("#ngo-name").val() as string,
            description: "",
            site: $("#ngo-social").val() as string,
            headPerson: $("#ngo-head-name").val() as string,
            telephone: $("#ngo-phone").val() as string,
            email: $("#ngo-email").val() as string,
            password: $("#ngo-password").val() as string,
            role: "admin",
            causesId: idCause,
            cityId: idCity,
            cityStateId: idState,
            
          };
  
          console.log(values);
  
          if (!values.ngoName) {
              alert("Favor informar o nome da ONG!");
              $("#ngo-name").addClass("invalid");
              return;
          }
          $("#ngo-name").removeClass("invalid");
  
          if (idState === "Estado") {
              alert("Favor informar o estado!");
              $("#ngo-state").addClass("invalid");
              return;
          }
          $("#ngo-state").removeClass("invalid");
  
          if (idCity === "Cidade") {
              alert("Favor informar a cidade!");
              $("#ngo-city").addClass("invalid");
              return;
          }
          $("#ngo-city").removeClass("invalid");
  
          if (!values.site) {
              alert("Favor informar o site ou rede social!");
              $("#ngo-social").addClass("invalid");
              return;
          }
          $("#ngo-social").removeClass("invalid");
  
          if (!values.headPerson) {
              alert("Favor informar o nome do responsável!");
              $("#ngo-head-name").addClass("invalid");
              return;
          }
          $("#ngo-head-name").removeClass("invalid");
  
          if (!values.telephone) {
              alert("Favor informar o telefone!");
              $("#ngo-phone").addClass("invalid");
              return;
          }
          $("#ngo-phone").removeClass("invalid");
  
          if (values.causesId === "Causas") {
              alert("Favor informar a área de atuação!");
              $("#ngo-causes").addClass("invalid");
              return;
          }
          $("#ngo-causes").removeClass("invalid");
  
          if (!values.email) {
              alert("Favor informar o E-mail!");
              $("#ngo-email").addClass("invalid");
              return;
          }
          $("#ngo-email").removeClass("invalid");
  
          if (!values.password) {
              alert("Favor informar a senha!");
              $("#ngo-password").addClass("invalid");
              return;
          }
          $("#ngo-password").removeClass("invalid");
  
          console.log(values);
          sendDataBase(values);
      });
  });
  
  function loadStates(item: any[]) {
      console.log(item);
      item.forEach((linha: any) => {
          const stateOption = `<option value="${linha.id}">${linha.name}</option>`;
          $(`#ngo-state`).append($(stateOption));
      });
  }
  
  function sendDataBase(values: any) {
    $.ajax({
        type: "POST",
        url: "https://localhost:7070/ngo",
        data: JSON.stringify(values),
        contentType: "application/json",
        dataType: "json",
      });
  }
  
  function loadCity(event: Event) {
    event.preventDefault();
    const stateElement = document.getElementById("ngo-state") as HTMLSelectElement | null;
    const id = stateElement ? stateElement.value : "";
      $.ajax({
          type: "GET",
          url: `https://localhost:7070/City/${id}`,
          success: loadCityHtml,
          contentType: "application/json",
          dataType: "json",
      });
  }
  
  function loadCityHtml(item: any[]) {
      const limpa = document.getElementById("ngo-city") as HTMLSelectElement;
      limpa.innerText = "";
      item.forEach((linha: any) => {
          const cityOption = `<option value="${linha.id}">${linha.name}</option>`;
          $(`#ngo-city`).append($(cityOption));
      });
  }
  
  function loadCauses(item: any[]) {
      item.forEach((linha: any) => {
          const options = `<option value="${linha.id}">${linha.name}</option>`;
          $(`#ngo-causes`).append($(options));
      });
  }
  
  return (
    <div className="w-full h-auto flex">
      <div className="box-form w-full h-auto lg:w-[680px] lg:h-[700px] mx-auto lg:rounded-xl lg:my-6">
        <div id="box-form-header">
          <a href="homepage.html">
            <div className="header-logo flex justify-center pt-6 lg:pt-8">
              <svg
                id="logo"
                xmlns="http://www.w3.org/2000/svg"
                width="63"
                height="53"
                viewBox="0 0 63 53"
                fill="none"
              >
                <path
                  d="M1 11.45L16.2 1V20.475L1 31.4V11.45Z"
                  fill="#687C57"
                  stroke="#324424"
                  stroke-width="0.285"
                />
                <path
                d="M31.4002 31.4L46.6002 20.475L61.8002 31.4L46.6003 42.325L31.4002 31.4Z"
                 fill="#D9D9D9"
                />
                <path
                  d="M1 31.4L16.2 20.475L31.4002 31.4L16.2002 42.325L1 31.4Z"
                  fill="#D9D9D9"
                />
                <path
                  d="M16.2002 42.325L31.4002 31.4L46.6003 42.325L31.4002 52.775L16.2002 42.325Z"
                  fill="#D9D9D9"
                />
                <path
                  d="M31.4002 31.4L46.6002 20.475L61.8002 31.4L46.6003 42.325M31.4002 31.4L46.6003 42.325M31.4002 31.4L16.2 20.475L1 31.4L16.2002 42.325M31.4002 31.4L16.2002 42.325M46.6003 42.325L31.4002 52.775L16.2002 42.325"
                  stroke="#324424"
                  stroke-width="0.285"
                />
                <path
                  d="M31.3999 11.45L46.5999 1V20.475L31.3999 31.4V11.45Z"
                  fill="#687C57"
                  stroke="#324424"
                  stroke-width="0.285"
                />
                <path
                  d="M31.3999 11.45L16.1999 1V20.475L31.3999 31.4V11.45Z"
                  fill="#8FC5E7"
                  stroke="#324424"
                  stroke-width="0.285"
                />
                <path
                  d="M61.7998 11.45L46.5998 1V20.475L61.7998 31.4V11.45Z"
                  fill="#8FC5E7"
                  stroke="#324424"
                  stroke-width="0.285"
                />
              </svg>
              <h1 className="brand-name text-4xl mt-1">
                <span className="brand-l">Ajuda</span>
                <span className="brand-r">Aí</span>
              </h1>
            </div>
          </a>
        </div>
        <div className="flex justify-center pt-2 lg:pt-5">
          <span id="box-form-subtitle">Cadastre sua ONG na AjudaAí</span>
        </div>
        <div className="form-list">
          <form className="flex flex-col justify-center h-auto px-10 lg:px-32">
            <div className="form-input-box mt-4 lg:mt-8">
              <input
                type="text"
                id="ngo-name"
                placeholder="Nome da ONG"
                className="pl-2 py-1"
              />
            </div>
            <div className="form-input-box mt-4 lg:mt-3.5">
              <select
                id="ngo-state"
                name="ngo-state"
                className="pl-2 py-1"
              
              >
                <option disabled selected>
                  Estado
                </option>
              </select>
            </div>
            <div className="form-input-box mt-4 lg:mt-3.5">
              <select id="ngo-city" name="ngo-city" className="pl-2 py-1">
                <option disabled selected>
                  Cidade
                </option>
              </select>
            </div>
            <div className="form-input-box mt-4 lg:mt-3.5">
              <input
                type="text"
                id="ngo-social"
                placeholder="Site / Rede Social da ONG"
                className="pl-2 py-1"
              />
            </div>
            <div className="form-input-box mt-4 lg:mt-3.5">
              <input
                type="text"
                id="ngo-head-name"
                placeholder="Nome do responsável"
                className="pl-2 py-1"
              />
            </div>
            <div className="form-input-box mt-4 lg:mt-3.5">
              <input
                type="tel"
                id="ngo-phone"
                placeholder="Telefone"
                pattern="[0-9]{(2)}-[0-9]{5}-[0-9]{4}"
                className="pl-2 py-1"
              />
            </div>
            <div className="form-input-box mt-4 lg:mt-3.5">
              <select id="ngo-causes" name="ngo-causes" className="pl-2 py-1">
                <option disabled selected>
                  Causas
                </option>
              </select>
            </div>
            <div className="form-input-box mt-4 lg:mt-3.5">
              <input
                type="email"
                id="ngo-email"
                placeholder="E-mail"
                className="pl-2 py-1"
              />
            </div>
            <div className="form-input-box mt-4 lg:mt-3.5">
              <input
                type="password"
                id="ngo-password"
                placeholder="Senha"
                className="pl-2 py-1"
              />
            </div>
            <div className="mt-6 mb-6 lg:mt-10">
              <button type="button" className="btn" id="btn-sign-up">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}