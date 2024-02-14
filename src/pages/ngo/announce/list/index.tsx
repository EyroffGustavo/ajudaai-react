import React from "react";
import { Button } from "components/button";
import { Input } from "components/input";
import { Combobox } from "components/combobox";
import "./index.scss";


export default function ListNgoPage() {
  return (
    <body>
      <div className="container-list-ngo w-screnn bg-[#E6EBEE] h-screen flex flex-wrap flex-col content-center justify-center">
        <div className="w-5/6 h-5/6 bg-[#F6FFFF] rounded-lg relative pt-12">
          <p className="text-3xl text-center font-bold">Lista de Anuncios</p>
          <div>
            <div className="flex w-full items-center space-x-2 px-8 pt-12">
              <Input type="email" placeholder="Digie para pesquisar..." />
              <Combobox />
              <Combobox />
              <Button type="submit">Filtrar</Button>             
            </div>    
            <div className="flex justify-center self-center pt-12">
            <div className="divider"/>
            </div>
            <div className="flex">
              <div className="w-80 h-80 bg-[#F6FFFF] rounded-2xl mt-28 ml-8 border border-r-4 border-b-4">                
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}