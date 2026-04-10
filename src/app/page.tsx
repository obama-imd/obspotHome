import Header from "@/components/common/header/basicHeader";
import Main from "@/components/landing-page/main/landingPageMain";

export default function Home() {
  return (
    <div className="
      min-h-600
      flex flex-col gap-30  
      bg-background-secondary
    ">
      <header className="
        flex items-start justify-center align-spa
      ">
        <Header/>
      </header>
      <main className="
        h-400
      ">
        <Main/>
      </main> 
      <footer className="">
      </footer>
    </div>
  );
}
