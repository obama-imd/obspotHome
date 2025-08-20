import Image from "next/image";

interface HeadphoneIllustrationProps {
  width?: number;
  height?: number
}

const HeadphoneIllustration: React.FC<HeadphoneIllustrationProps> = 
({ width, height }) => {
    return (
        <div>
            <Image
                className="
                    w-auto h-auto
                    max-w-sm mx-auto      /* mobile: pequena e centralizada */
                    sm:max-w-md           /* tablet: média */
                    lg:max-w-2xl          /* desktop: grande */t
                "
                alt="Rede STEAM Potiguar"
                src="/images/headphone_illustration.svg"
                width="600"
                height="515"
                priority
            />
        </div>
    );
}

export default HeadphoneIllustration;