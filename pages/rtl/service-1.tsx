import Link from "next/link";
import Testimonial_slider_1 from "@/components/rtl/Testimonial-slider-1";
import Pricing from "@/components/rtl/Pricing";
import Technologies from "@/components/rtl/Technologies";
import Service from "@/components/rtl/home_1/Service";
import Navbar from "@/components/rtl/Navbar";
import { useEffect } from "react";
import Footer from "@/components/rtl/home_4/Footer";

const service_1 = () => {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "rtl");
  }, []);
  return (
    <>
      {/* Navbar Section */}
      <Navbar ltrurl="/service-1" />
      {/* Banner section */}
      <section className="banner-section section--sm">
        <div className="container">
          <div className="row">
          <div className="col-12">
            <h3 className="clr-light mb-3"> الخدمات - 01 </h3>
            <ul className="list list-row flex-wrap breadcrumb-list">
              <li>
                <Link href="/rtl" className="d-inline-block t-link clr-light :clr-accent"> بيت </Link>
              </li>
              <li className="">
                <Link href="#" className="d-inline-block t-link clr-light :clr-accent"> الخدمات - 01 </Link>
              </li>
              <li className="d-none">
                <Link href="#" className="d-inline-block t-link clr-light :clr-accent">
                </Link>
              </li>
              <li className="d-none">
                <Link href="#" className="d-inline-block t-link clr-light :clr-accent">
                </Link>
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
      {/* <!-- Pricing Section --> */}
      <Pricing />
      {/* <!-- Testimonials  --> */}
      <Testimonial_slider_1 />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default service_1;
