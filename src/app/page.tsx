import Header from "@/components/common/header/basicHeader";
import Main from "@/components/landing-page/main/landingPageMain";
import Footer from "@/components/common/footer/footer";

export default function Home() {
  return (
    <div 
      className="
        flex flex-col gap-y-25  
        bg-background-secondary
      "
    >
      
      <header 
        className="
          flex items-start justify-center align-spa
        "
      >
        <Header/>
      </header>
      
      <main>
        <Main/>
      </main> 
      
      <footer 
        className="
          w-full h-auto
        "
      >
        <Footer/>
      </footer>

    </div>
  );
}
