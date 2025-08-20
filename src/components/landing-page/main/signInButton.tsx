import Link from "next/link";
import { Button } from "@/components/ui/button";
import React from "react";
import { text } from "stream/consumers";

interface LoginButtonProps {
  text?: string;
}

const defaultText = "Seja um membro da Rede STEAM Potiguar";

const SignInButton: React.FC<LoginButtonProps> = ({ text }) => {
  return (
    <Button 
        className="
            inline-flex items-center justify-center 
            w-full h-20 px-20 py-35 rounded-[14px]
            bg-black
            text-white font-space text-2xl font-normal text-center
            hover:bg-gray-800
        "

        asChild
    >
        <Link href="/sign-in"> {text || defaultText} </Link>
    </Button>
  );
}

export default SignInButton;