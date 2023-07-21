import Head from "next/head";
import Navbar from "@/components/rtl/home_1/Navbar";
import Hero from "@/components/rtl/home_1/Hero";
import Service from "@/components/rtl/home_1/Service";
import About from "@/components/rtl/home_1/About";
import Tools from "@/components/rtl/home_1/Tools";
import Counter from "@/components/rtl/home_1/Counter";
import Team from "@/components/rtl/home_1/Team";
import Cta from "@/components/rtl/home_1/Cta";
import Latestwork from "@/components/rtl/home_1/Latestwork";
import Customer from "@/components/rtl/home_1/Customer";
import Blog from "@/components/rtl/home_1/Blog";
import Footer from "@/components/rtl/home_1/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
 
  useEffect(() => {
    document.documentElement.setAttribute("dir", 'rtl');
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
        <title>Itechex - IT Solution & Services HTML Template</title>
        <meta name="description" content=" IT Solution & Services HTML Template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
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
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page) {  return <>{page}</>;};
