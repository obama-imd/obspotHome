import SignInButton from "./signInButton";
import { Card, CardContent } from "@/components/ui/card";
import React, { JSX } from "react";

export default function WelcomeHeadline(): JSX.Element {
  return (
    <div className="
      flex flex-col items-center justify-between gap-15
      min-h-full
      rounded-[10px] px-100
    "> 
      <h1 className="
        w-[558px] 
        font-h-1v font-space text-7xl text-center text-center
      ">
        Colaborando pela educação potiguar
      </h1>

      <p className="
        w-[498px] 
        font-space text-2xl text-justify
      ">
        Nosso objetivo é desenvolver a abordagem STEAM no Rio Grande do Norte,
        compartilhando dados e insights sobre o nosso contexto atual e
        impulsionando novas conexões por meio da Rede STEAM Potiguar
      </p>

      <SignInButton/>
    </div>
  );
}
