import { JSX } from "react";
import Headline from "./headline";

export default function LandingPageMain(): JSX.Element {
    return (
        <section 
            className="
                flex flex-col items-center justify-center align-spa
                min-h-screen
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