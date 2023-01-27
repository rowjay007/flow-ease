import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <div className="pb-12"> <Header />
    Homepage</div>;
}
