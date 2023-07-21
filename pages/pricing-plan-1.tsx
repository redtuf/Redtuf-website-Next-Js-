import Feedback_3 from "@/components/Feedback_3";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Technologies from "@/components/Technologies";
import Features from "@/components/home_3/Features";
import Footer from "@/components/home_4/Footer";
import Link from "next/link";

import { useEffect } from 'react';

const pricing_plan_1 = () => {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
  }, []);
  return (
    <>
      {/* Navbar Section */}
      <Navbar rtlurl="/rtl/pricing-plan-1" />
      {/* Banner section */}
      <section className="banner-section section--sm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="clr-light mb-3"> Pricing Plan </h3>
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
                    Pricing Plan{" "}
                  </Link>
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
      <Pricing />
      <Features overlay={false} />
      <Technologies />
      <Feedback_3 />
      <Footer />
    </>
  );
};

export default pricing_plan_1;
