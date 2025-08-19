
import Link from "next/link";
import { Button } from "@/components/ui/button";
import React from "react";

export default function LoginButton() {
  return (
    <Button 
        className="
            inline-flex items-center justify-center 
            w-35 h-20 px-20 py-35 rounded-[14px]
            bg-black
            text-white font-space text-2xl
        "

        asChild
    >
        <Link href="/login"> Login </Link>
    </Button>
  );
}
