import Header from "@/components/common/header/basicHeader";
import Potimap from "@/components/potimap/Potimap";

export default function Observatorio() {
  return (
    <div>
      <Header />
      <main className="
        text-[length:200px] 
        min-h-screen 
        flex items-center justify-center
      ">
        <Potimap />
      </main>
    </div>
  );
}
