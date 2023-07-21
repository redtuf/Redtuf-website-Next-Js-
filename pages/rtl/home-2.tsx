import About from "@/components/rtl/home_2/About";
import AboutCompany from "@/components/rtl/home_2/AboutCompany";
import Brand from "@/components/rtl/home_2/Brand";
import Consult from "@/components/rtl/home_2/Consult";
import Features from "@/components/rtl/home_2/Features";
import Footer from "@/components/rtl/home_2/Footer";
import Hero from "@/components/rtl/home_2/Hero";
import Navbar from "@/components/rtl/home_2/Navbar";
import Pricing from "@/components/rtl/home_2/Pricing";
import Service from "@/components/rtl/home_2/Service";
import ServiceTab from "@/components/rtl/home_2/ServiceTab";
import Team from "@/components/rtl/home_2/Team";
import Testimonail from "@/components/rtl/home_2/Testimonail";
import Workprocess from "@/components/rtl/home_2/Workprocess";
import Head from "next/head";
import { useEffect, useState } from "react";

const home_2 = () => {
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
      {/* Navbar Section */}
      <Navbar />
      {/* Hero Section */}
      <Hero />
      {/* Brand Section */}
      <Brand />
      {/* Service section */}
      <Service />
      {/* About Section */}
      <About />
      {/* <!-- About Company 3 --> */}
      <AboutCompany />
      {/* <!-- Consult Section  --> */}
      <Consult />
      {/* <!-- Features section --> */}
      <Features />
      {/*  Work Process Section  --> */}
      <Workprocess />
      {/* <!-- Service Section  --> */}
      <ServiceTab />
      {/* <!-- Pricing Section  --> */}
      <Pricing />
      {/*  Team Section  --> */}
      <Team />
      {/*  Testimonial Section  --> */}
      <Testimonail />
      {/*  Footer --> */}
      <Footer />
    </>
  );
};

export default home_2;
home_2.getLayout = function getLayout(page) {
  return <>{page}</>;
};
