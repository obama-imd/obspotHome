import React, { JSX } from 'react';
import ServicoCard from './servicoCard';
import servicos, { Servico } from './servicos';

export default function servicoSection() {
    return (
        <div
            className="
                flex flex-col items-center justify-around
                w-full h-200
            "
        >
            <div
                className="
                    flex items-center justify-start gap-10
                    w-full !ml-60
                "
            >
                <span
                    className="
                        flex text-4xl font-bold
                        bg-green-600 !p-2 rounded-md
                    "
                >
                    Serviços
                </span>  
                <span
                    className="
                        w-2/5 text-2xl
                    "
                >
                    Enquanto plataforma open-source para desenvolvimento e incentivo á abordagem STEAM no RN, nós disponibilizamos dos seguintes serviços: 
                </span>
            </div>

            <div
                className="
                    flex items-center justify-around
                    w-4/6
                "
            >
                    {servicos.map((servico, id) => <ServicoCard key={id} {...servico} />)}
            </div>

        </div>
    );
}