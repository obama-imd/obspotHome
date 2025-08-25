import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Servico } from "./servicos";

const CardArtigos: React.FC<Servico> = (
  servico: Servico
) => {
  return (
    <Card 
      className="
        flex flex-col w-[339px] h-[603px] items-center justify-between 
        p-[50px] bg-off-white rounded-[45px] 
        overflow-hidden border border-solid border-dark
      "
    >
      <CardContent 
        className="
          flex flex-col items-center justify-around 
          w-full h-full p-0 gap-8
        "
      >
        <Badge
            className="
              inline-flex flex-col items-center gap-2.5 
              w-4/5
              px-[7px] py-0 bg-green 
            "
          >
            <div
              className="
                text-xl text-center
                !p-1 rounded-[7px]
                bg-green-600
              "
            > 
              {servico.title} 
            </div>
        </Badge>

        <div className="relative w-[210px] h-[170px]">
          <Image
            className="absolute w-[233px] h-[185px] -top-3.5 -left-3"
            width={80}
            height={80}
            alt={servico?.title}
            src={servico?.illustrationPath || ""}
          />
        </div>

        <div className="inline-flex items-center gap-[15px]">
          <Button className="w-[41px] h-[41px] bg-dark rounded-[20.5px] hover:bg-dark/90 p-0">
            <Image
              width={41}
              height={41} 
              src={""}
              alt={""}
            />
          </Button>

          <Button asChild>
            <Link href={servico.href ?? "#"}>Saiba Mais</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardArtigos;
