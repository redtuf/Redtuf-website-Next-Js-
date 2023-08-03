import Link from "next/link";
// import Testimonial_slider_1 from "@/components/Testimonial-slider-1";
// import Pricing from "@/components/Pricing";
import Technologies from "@/components/Technologies";
import Service from "@/components/home_1/Service";
import Navbar from "@/components/home_2/Navbar";
import { useEffect } from 'react';
import Footer from "@/components/home_2/Footer";

const service_1 = () => {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
  }, []);
  return (
    <>
      {/* Navbar Section */}
      <Navbar  />
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
    </>
  );
};

export default service_1;
