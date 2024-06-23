import Image from "next/image";
import styles from "./page.module.css";
import Snake from "../Snake";

export default function Home() {
  return (
    <main className={styles.main}>
      <Snake />
    </main>
  );
}
