"use client"
import Estado from "./Estado";
import EscopoButton from "./EscopoButton";
import { use, useState } from "react";

const Potimap = () => {
    
    const [displayMunicipios, setDisplayMunicipios] = useState(true);
    const [displayMicrorregioes, setDisplayMicrorregioes] = useState(true);
    const [displayMesorregioes, setDisplayMesorregioes] = useState(true);



    return (
        <div>
            <span
                className="
                    flex items-center justify-start gap-4 
                    mb-8
                "
            >
                    <EscopoButton getter={displayMunicipios} setter={setDisplayMunicipios}  scope="Municípios" />
                
                    <EscopoButton getter={displayMicrorregioes} setter={setDisplayMicrorregioes} scope="Microrregiões" />

                    <EscopoButton getter={displayMesorregioes} setter={setDisplayMesorregioes} scope="Mesorregiões" />
            </span>
        
            <div className="
                border border-border rounded-lg
            ">
                <Estado displayMunicipios={displayMunicipios} displayMicrorregioes={displayMicrorregioes} displayMesorregioes={displayMesorregioes}/>
            </div>
        </div>
    );
}

export default Potimap;