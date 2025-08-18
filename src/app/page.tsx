import Image from "next/image";
import Header from "@/components/common/header/header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page + "bg-background-secondary"}>
      <div className="
        flex items-start justify-center align-spa min-h-screen
      ">
        <Header/>
      </div>
        <main className={styles.main}>
        </main> 
        <footer className={styles.footer}>
      </footer>
    </div>
  );
}
