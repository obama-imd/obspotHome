import SignInButton from "./signInButton";
import { Card, CardContent } from "@/components/ui/card";
import React, { JSX } from "react";

export default function WelcomeHeadline(): JSX.Element {
  return (
    <div className="
      flex flex-col items-center justify-between gap-15
      max-w-210 min-h-full
      rounded-[10px] px-100
    "> 
      <h1 className="
        font-space text-8xl text-center
      ">
        Colaborando pela educação potiguar
      </h1>

      <p className="
        w-full max-w-175
        font-space text-3xl text-justify
      ">
        Nosso objetivo é desenvolver a abordagem STEAM no Rio Grande do Norte,
        compartilhando dados e insights sobre o nosso contexto atual e
        impulsionando novas conexões por meio da Rede STEAM Potiguar.
      </p>

      <SignInButton/>
    </div>
  );
}
