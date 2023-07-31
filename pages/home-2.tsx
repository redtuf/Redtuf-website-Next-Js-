import Head from "next/head";
import Navbar from "@/components/home_1/Navbar";
import Hero from "@/components/home_1/Hero";
import Service from "@/components/home_1/Service";
import About from "@/components/home_1/About";
import Tools from "@/components/home_1/Tools";
import Counter from "@/components/home_1/Counter";
import Team from "@/components/home_1/Team";
import Cta from "@/components/home_1/Cta";
import Latestwork from "@/components/home_1/Latestwork";
import Customer from "@/components/home_1/Customer";
import Blog from "@/components/home_1/Blog";
import Footer from "@/components/home_1/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);
  const backtoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Head>
        <title>Redtuf - IT Solution & Services</title>
        <meta name="description" content="Redtuf - IT Solution & Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-rf.ico" />
      </Head>
      <>
        <div
          onClick={backtoTop}
          className={`back-to-top ${scrolled ? "d-block" : "d-none"}`}>
          <span className="back-top">
            <span className="material-symbols-outlined mat-icon fw-300 d-grid">
              {" "}
              keyboard_double_arrow_up{" "}
            </span>
          </span>
        </div>

        <Navbar />
        <Hero />
        <Service />
        <About />
        <Tools />
        <Counter />
        <Team />
        <Cta />
        <Latestwork />
        <Customer />
        <Blog />
        <Footer />
      </>
    </>
  );
}

Home.getLayout = function getLayout(page: React.ComponentType<any>) { return <>{page}</>; };
