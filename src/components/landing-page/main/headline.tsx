import Illustration from "./headphoneIllustration";
import WelcomeHeadline from "./welcomeHeadline";

export default function Headline() {
    return (
        <div className="
            flex items-center justify-around
            w-full
            px-100
        ">
            <WelcomeHeadline/>
            <Illustration/>
        </div>
    );
}