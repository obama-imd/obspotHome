import Header from "@/components/common/header/basicHeader";
import Main from "@/components/landing-page/main/landingPageMain";

export default function Home() {
  return (
    <div className="
      min-h-screen
      bg-background-secondary
    ">
      <header className="
        flex items-start justify-center align-spa
      ">
        <Header/>
      </header>
      <main className="">
        <Main/>
      </main> 
      <footer className="">
      </footer>
    </div>
  );
}
