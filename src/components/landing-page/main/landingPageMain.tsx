import { JSX } from "react";
import Headline from "./headlineSection/headline";

export default function LandingPageMain(): JSX.Element {
    return (
        <section 
            className="
                flex flex-col items-center justify-center align-spa
            "
        >
            <article className="
                w-full
            ">
                <Headline/>
            </article>
            <article>
                Servicos
            </article>
        </section>
    );
}