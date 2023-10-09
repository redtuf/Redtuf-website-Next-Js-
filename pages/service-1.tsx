import Link from "next/link";
// import Testimonial_slider_1 from "@/components/Testimonial-slider-1";
// import Pricing from "@/components/Pricing";
import Technologies from "@/components/Technologies";
import Service from "@/components/home_1/Service";
import Navbar from "@/components/home_2/Navbar";
import { useEffect,useState } from 'react';
import Footer from "@/components/home_2/Footer";
import ContactFormModal from "@/components/ContactFormModal";

const service_1 = () => {

  const [scrolled, setScrolled] = useState(false);
    // state for modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
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
      {/* Banner section */}
      <section className="banner-section section--sm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="clr-light mb-3"> Services </h3>
              <ul className="list list-row flex-wrap breadcrumb-list">
                <li>
                  <Link
                    href="/"
                    className="d-inline-block t-link clr-light :clr-accent">
                    {" "}
                    Home{" "}
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="#"
                    className="d-inline-block t-link clr-light :clr-accent">
                    {" "}
                    Services{" "}
                  </Link>
                </li>
                <li className="d-none">
                  <Link
                    href="#"
                    className="d-inline-block t-link clr-light :clr-accent"></Link>
                </li>
                <li className="d-none">
                  <Link
                    href="#"
                    className="d-inline-block t-link clr-light :clr-accent"></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Service Section  --> */}
      <Service />
      {/* <!-- Support Section  --> */}
      <Technologies />
      {/* hide section <!-- Pricing Section --> */}
      {/* <Pricing /> */}
      {/* <!-- Testimonials  --> */}

      {/* <Testimonial_slider_1 /> */}
      
      {/* Footer */}
      <Footer />
      
      {/*  Contact Form Modal --> */}
      <ContactFormModal show={show}  handleClose={handleClose} />
    </>
  );
};

export default service_1;
