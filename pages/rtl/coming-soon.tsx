import Navbar from "@/components/rtl/Navbar";
import Footer from "@/components/rtl/home_4/Footer";
import Link from "next/link";
import { useEffect } from "react";

const coming_soon = () => {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "rtl");
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar ltrurl="/coming-soon" />
      {/* Banner Section */}
      <section className="banner-section section--sm">
        <div className="container">
          <div className="row">
          <div className="col-12">
            <h3 className="clr-light mb-3"> قريباً </h3>
            <ul className="list list-row flex-wrap breadcrumb-list">
              <li>
                <Link href="/rtl" className="d-inline-block t-link clr-light :clr-accent"> بيت </Link>
              </li>
              <li className="">
                <Link href="#" className="d-inline-block t-link clr-light :clr-accent"> شركة </Link>
              </li>
              <li className="">
                <Link href="#" className="d-inline-block t-link clr-light :clr-accent"> قريباً </Link>
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
      {/* <!-- Banner End --> */}
      <div className="section">
        <div className="container">
          <div className="row g-6 align-items-center">
            <div className="col-md-6">
            <div className="section__gap-bottom pb-md-0">
              <h2 className="mb-5"> قريباً ... اشترك لتظل على اطلاع </h2>
              <p className="mb-8 max-text-50"> Itechex قريبا. املأ بريدك الإلكتروني لتلقي إشعار بالبريد الإلكتروني (وخاص الترويجي) عندما نطلق. </p>
              <div className="newsletter-2 bg-light max-text-50 rounded-pill">
                <input type="text" className="newsletter-2__input px-3" placeholder="Enter your email address" />
                <button className="bttn bttn--base bttn-md fw-md flex-shrink-0 rounded-1 newsletter-2__btn rounded-pill"> يشترك </button>
              </div>
            </div>
            </div>
            <div className="col-md-6 col-xxl-5">
              <div className="text-center text-xxl-end">
                <img
                  src="/images/coming-soon-img.png"
                  alt="image"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default coming_soon;
