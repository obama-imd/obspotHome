import Image from 'next/image';
import React, { JSX } from 'react';

interface ObspotLogoProps {
  href?: string;
}

const ObspotLogo: React.FC<ObspotLogoProps> = ({ href }) => {
  return (
    <div className="
      flex items-center justify-center w-[402px] h-[217px]
    ">
      <a href={href || "/"}>
        <Image
          className="
            w-auto h-auto
            max-w-sm mx-auto      /* mobile: pequena e centralizada */
            sm:max-w-md           /* tablet: média */
            lg:max-w-2xl          /* desktop: grande */t
          "
          alt="Rede STEAM Potiguar"
          src="/images/logo_obspot.svg"
          width={402}
          height={217}
          priority
        />
      </a>
    </div>
  );
}

export default ObspotLogo;