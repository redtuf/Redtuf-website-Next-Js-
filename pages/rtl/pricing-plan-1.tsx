import Feedback_3 from "@/components/rtl/Feedback_3";
import Navbar from "@/components/rtl/Navbar";
import Pricing from "@/components/rtl/Pricing";
import Technologies from "@/components/rtl/Technologies";
import Features from "@/components/rtl/home_3/Features";
import Link from "next/link";

import { useEffect } from 'react';
import Footer from "@/components/rtl/home_4/Footer";

const pricing_plan_1 = () => {
  useEffect(() => {
    document.documentElement.setAttribute("dir", 'rtl');
  }, [])
  return (
    <>
      {/* Navbar Section */}
      <Navbar ltrurl="/pricing-plan-1" />
      {/* Banner section */}
      <section className="banner-section section--sm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="clr-light mb-3"> خطة التسعير </h3>
              <ul className="list list-row flex-wrap breadcrumb-list">
                <li>
                  <Link href="/rtl" className="d-inline-block t-link clr-light :clr-accent"> بيت </Link>
                </li>
                <li className="">
                  <Link href="#" className="d-inline-block t-link clr-light :clr-accent"> شركة </Link>
                </li>
                <li className="">
                  <Link href="#" className="d-inline-block t-link clr-light :clr-accent"> خطة التسعير </Link>
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
      <Pricing />
      <Features overlay={false} />
      <Technologies />
      <Feedback_3 />
      <Footer />
    </>
  );
};

export default pricing_plan_1;
