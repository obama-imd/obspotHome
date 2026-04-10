import { JSX } from "react";
import Headline from "./headlineSection/headline";
import Servicos from "./servicoSection/servicoSection"; 

export default function LandingPageMain(): JSX.Element {
    return (
        <section 
            className="
                flex flex-col gap-70
            "
        >
            <article className="
                w-full
            ">
                <Headline/>
            </article>
            <article
                className="
                    
                "
            >
                <Servicos/>
            </article>
        </section>
    );
}