import Header from "@/components/common/header/basicHeader";
import Estado from "@/components/potimap/Estado";

export default function Observatorio() {
  return (
    <div>
      <Header />
      <main className="
        text-[length:200px] 
        min-h-screen 
        flex items-center justify-center
      ">
        <Estado />
      </main>
    </div>
  );
}
