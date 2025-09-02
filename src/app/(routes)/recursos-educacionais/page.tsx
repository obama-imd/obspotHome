"use client"

import Header from "@/components/common/header/basicHeader";
import { useState } from "react";
import "./educationalResources.css";
import { ExpandIcon, FilterIcon, PDFIcon, SearchIcon } from "../../../components/common/icons/mainIcons";
import Footer from "@/components/common/footer/footer";

const searchBarText = "Busque por artigos, manuais, materiais didáticos..."

export default function RecursosEducacionais() {
  const [searchText, setSearchText] = useState<string>(searchBarText);

  function SearchBar() {
    return (
      <div className="inputBox dFlex">
        <input
          type="text"
          onChange={(e) => { setSearchText(e.target.value) }}
          value={searchText}
          className="searchBar"
        />
        <div className="searchIcons dFlex">
          <a href="">
            <FilterIcon />
          </a>
          <a href="">
            <SearchIcon />
          </a>
        </div>
      </div>
    )
  }

  function PublicationCard() {
    const mockPublication = {
      content: [
        {
          title: "Reutilizando compostos orgânicos",
          type: "Artigo",
          event: "FEBRACE"
        },
        {
          title: "Reutilizando compostos orgânicos",
          type: "Artigo",
          event: "FEBRACE"
        },
        {
          title: "Reutilizando compostos orgânicos",
          type: "Artigo",
          event: "FEBRACE"
        },
        {
          title: "Reutilizando compostos orgânicos",
          type: "Artigo",
          event: "FEBRACE"
        },
        {
          title: "Reutilizando compostos orgânicos",
          type: "Artigo",
          event: "FEBRACE"
        },
        {
          title: "Reutilizando compostos orgânicos",
          type: "Artigo",
          event: "FEBRACE"
        },
        {
          title: "Reutilizando compostos orgânicos",
          type: "Artigo",
          event: "FEBRACE"
        },
        {
          title: "Reutilizando compostos orgânicos",
          type: "Artigo",
          event: "FEBRACE"
        },
        {
          title: "Reutilizando compostos orgânicos",
          type: "Artigo",
          event: "FEBRACE"
        },
        {
          title: "Reutilizando compostos orgânicos",
          type: "Artigo",
          event: "FEBRACE"
        },
        {
          title: "Reutilizando compostos orgânicos",
          type: "Artigo",
          event: "FEBRACE"
        },
        {
          title: "Reutilizando compostos orgânicos",
          type: "Artigo",
          event: "FEBRACE"
        },
        {
          title: "Reutilizando compostos orgânicos",
          type: "Artigo",
          event: "FEBRACE"
        },
        {
          title: "Reutilizando compostos orgânicos",
          type: "Artigo",
          event: "FEBRACE"
        },
        {
          title: "Reutilizando compostos orgânicos",
          type: "Artigo",
          event: "FEBRACE"
        },
        {
          title: "Reutilizando compostos orgânicos",
          type: "Artigo",
          event: "FEBRACE"
        },
        {
          title: "Reutilizando compostos orgânicos",
          type: "Artigo",
          event: "FEBRACE"
        },
        {
          title: "Reutilizando compostos orgânicos",
          type: "Artigo",
          event: "FEBRACE"
        },
      ]
    }

    return (
      <div className="grid">
        {mockPublication.content.map((publication, index) => (
          <div className="card" key={index}>
            <div className="card-header">
              <div className="card-title">Título: {publication.title}</div>
            </div>
            <div className="card-body dFlex">
              <div className="card-main">
                <div>Tipo: {publication.type}</div>
                <div>Evento: {publication.event}</div>
              </div>
              <div className="card-actions dFlex">
                <a href="">
                  <PDFIcon />
                </a>
                <a href="">
                  <ExpandIcon />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main className="
        text-[length:200px] 
        min-h-screen 
        flex items-center
        column
        main-color
      "
      >
        <SearchBar />
        <PublicationCard />
      </main>
      <Footer />
    </div>
  );
}
