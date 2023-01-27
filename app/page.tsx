import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Header from "@/components/header";
import CTA from "@/components/cta";
import Features from "@/components/features";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="pb-12">
      {" "}
      <Header />
      <CTA />
      <Features/>
      Homepage
    </div>
  );
}
