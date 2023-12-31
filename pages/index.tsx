import About from "@/components/home_2/About";
import AboutCompany from "@/components/home_2/AboutCompany";
// import Brand from "@/components/home_2/Brand";
import Consult from "@/components/home_2/Consult";
import Features from "@/components/home_2/Features";
import Footer from "@/components/home_2/Footer";
import Hero from "@/components/home_2/Hero";
import Navbar from "@/components/home_2/Navbar";
// import Pricing from "@/components/home_2/Pricing";
import Service from "@/components/home_2/Service";
import ServiceTab from "@/components/home_2/ServiceTab";
// import Team from "@/components/home_2/Team";
// import Testimonail from "@/components/home_2/Testimonail";
import Workprocess from "@/components/home_2/Workprocess";
import ContactFormModal from "@/components/ContactFormModal";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

const home_2 = () => {
  const [scrolled, setScrolled] = useState(false);

  // state for modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        <title>Home || Redtuf - IT Solution & Services</title>
        <meta name="description" content=" IT Solution & Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon-rf.png" />
      </Head>
      {/* whats app integration */}
      <div className={`whats-app-icon ${scrolled ? "d-block" : "d-none"}`}> 
      <Link href="https://wa.me/+919078500888?text=I%27d%20like%20to%20chat%20with%20you" rel="nofollow noopener" target="_blank">
        <img src="/images/wp-icon.svg" className="whats-app-icon_pic" alt="" />
      </Link>
      </div>
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
      <Navbar handleShow={handleShow} />
      {/* Hero Section */}
      <Hero />
      {/* Brand Section */}

      {/* <Brand /> */}

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

      {/*Hide this sec <Pricing /> */}

      {/*  Team Section  --> */}

      {/* <Team /> */}

      {/*  Testimonial Section  --> */}

      {/* <Testimonail /> */}

      {/*  Footer --> */}
      <Footer />

      {/*  Contact Form Modal --> */}
      <ContactFormModal show={show}  handleClose={handleClose} />
      {/* <!-- Start of HubSpot Embed Code --> */}
      <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/43827676.js"></script>
    </>
  );
};

export default home_2;
home_2.getLayout = function getLayout(page) {
  return <>{page}</>;
};
