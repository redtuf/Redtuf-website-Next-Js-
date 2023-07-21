import Counter from "@/components/home_1/Counter";
import About from "@/components/home_4/About";
import Blog from "@/components/home_4/Blog";
import Footer from "@/components/home_4/Footer";
import Hero from "@/components/home_4/Hero";
import Howitwork from "@/components/home_4/Howitwork";
import Latestproject from "@/components/home_4/Latestproject";
import Navbar from "@/components/home_4/Navbar";
import Review from "@/components/home_4/Review";
import Team from "@/components/home_4/Team";
import Tools from "@/components/home_4/Tools";
import Whychoose from "@/components/home_4/Whychoose";
import Workprocess from "@/components/home_4/Workprocess";
import Head from "next/head";
import { useEffect, useState } from "react";

const home_4 = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("dir", 'ltr');
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
      <Navbar />
      {/* <!-- Hero 4 --> */}
      <Hero />
      {/* <!-- About  --> */}
      <About />
      {/* <!-- Work Process  --> */}
      <Workprocess />
      {/* <!-- Technological Tools  --> */}
      <Tools />
      {/* <!-- Why Choose Us  --> */}
      <Whychoose />
      {/* <!-- Work Process Section  --> */}
      <Howitwork />
      {/* <!-- Latest Projects --> */}
      <Latestproject />
      {/* <!-- Team Member  --> */}
      <Team />
      {/* <!-- Counter Section  --> */}
      <Counter />
      {/* <!-- Blog Section --> */}
      <Blog />
      {/* <!-- Review Section  --> */}
      <Review />
      {/* <!-- Footer --> */}
      <Footer />
    </>
  );
};

export default home_4;
home_4.getLayout = function getLayout(page) {
  return <>{page}</>;
};
