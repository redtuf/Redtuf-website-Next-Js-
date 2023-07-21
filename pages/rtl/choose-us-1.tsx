import Companies from "@/components/rtl/Companies";
import Navbar from "@/components/rtl/Navbar";
import About from "@/components/rtl/home_1/About";
import Consult from "@/components/rtl/home_2/Consult";
import Howitwork from "@/components/rtl/home_4/Howitwork";
import Link from "next/link";
import { useEffect } from 'react';
import Footer from "@/components/rtl/home_4/Footer";

const choose_us_1 = () => {
  useEffect(() => {
    document.documentElement.setAttribute("dir", 'rtl');
  },[])
  
  return (
    <>
    {/* Navbar section */}
    <Navbar ltrurl="/choose-us-1"/>
    {/* Banner */}
      <section className="banner-section section--sm">
        <div className="container">
          <div className="row">
          <div className="col-12">
            <h3 className="clr-light mb-3"> لماذا أخترتنا </h3>
            <ul className="list list-row flex-wrap breadcrumb-list">
              <li>
                <Link href="/rtl" className="d-inline-block t-link clr-light :clr-accent"> بيت </Link>
              </li>
              <li className="">
                <Link href="#" className="d-inline-block t-link clr-light :clr-accent"> شركة </Link>
              </li>
              <li className="">
                <Link href="#" className="d-inline-block t-link clr-light :clr-accent"> لماذا أخترتنا </Link>
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
      {/* <!-- About Company Section  --> */}
      <About />
      {/* <!-- Technologies  --> */}
      <div className="section bg-base">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
            <div className="col-md-10 col-xl-7">
              <span className="d-block h5 mb-5 lh-1 fw-semibold clr-accent text-center"> التقنيات التي نعمل عليها </span>
              <h2 className="text-center clr-light mb-5 clr-light"> لدينا خبرة في التقنيات التالية </h2>
              <p className="text-center mx-auto max-text-60 clr-light"> نحن نقدم خدمات فريدة مصممة خصيصًا لشركتك. طرق مبتكرة للمساعدة عزز أرباح شركتك </p>
            </div>
            </div>
          </div>
        </div>
        <div className="container">
        <div className="row g-4">
          <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
            <div className="toolset">
              <div className="toolset__icon">
                <img src="/images/brand-icon-1.png" alt="images" className="img-fluid" />
              </div>
              <div className="toolset__content">
                <p className="fw-md lg-text clr-heading"> ذكري المظهر </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
            <div className="toolset">
              <div className="toolset__icon">
                <img src="/images/brand-icon-2.png" alt="images" className="img-fluid" />
              </div>
              <div className="toolset__content">
                <p className="fw-md lg-text clr-heading"> كودانيتر </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
            <div className="toolset">
              <div className="toolset__icon">
                <img src="/images/brand-icon-3.png" alt="images" className="img-fluid" />
              </div>
              <div className="toolset__content">
                <p className="fw-md lg-text clr-heading"> رفرفة </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
            <div className="toolset">
              <div className="toolset__icon">
                <img src="/images/brand-icon-4.png" alt="images" className="img-fluid" />
              </div>
              <div className="toolset__content">
                <p className="fw-md lg-text clr-heading"> عقدة شبيبة </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
            <div className="toolset">
              <div className="toolset__icon">
                <img src="/images/brand-icon-5.png" alt="images" className="img-fluid" />
              </div>
              <div className="toolset__content">
                <p className="fw-md lg-text clr-heading"> بايثون </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
            <div className="toolset">
              <div className="toolset__icon">
                <img src="/images/brand-icon-6.png" alt="images" className="img-fluid" />
              </div>
              <div className="toolset__content">
                <p className="fw-md lg-text clr-heading"> رد الفعل الأصلي </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
            <div className="toolset">
              <div className="toolset__icon">
                <img src="/images/brand-icon-7.png" alt="images" className="img-fluid" />
              </div>
              <div className="toolset__content">
                <p className="fw-md lg-text clr-heading"> سويفت </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
            <div className="toolset">
              <div className="toolset__icon">
                <img src="/images/brand-icon-8.png" alt="images" className="img-fluid" />
              </div>
              <div className="toolset__content">
                <p className="fw-md lg-text clr-heading"> الزاوي </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
            <div className="toolset">
              <div className="toolset__icon">
                <img src="/images/brand-icon-9.png" alt="images" className="img-fluid" />
              </div>
              <div className="toolset__content">
                <p className="fw-md lg-text clr-heading"> ج شارب </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
            <div className="toolset">
              <div className="toolset__icon">
                <img src="/images/brand-icon-10.png" alt="images" className="img-fluid" />
              </div>
              <div className="toolset__content">
                <p className="fw-md lg-text clr-heading"> جافا </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
            <div className="toolset">
              <div className="toolset__icon">
                <img src="/images/brand-icon-11.png" alt="images" className="img-fluid" />
              </div>
              <div className="toolset__content">
                <p className="fw-md lg-text clr-heading"> شبابيك </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
            <div className="toolset">
              <div className="toolset__icon">
                <img src="/images/brand-icon-12.png" alt="images" className="img-fluid" />
              </div>
              <div className="toolset__content">
                <p className="fw-md lg-text clr-heading"> ارافيل </p>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="section__gap-top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-8">
              <div className="group group-row justify-content-center">
                <Link href="about-us-1" className="bttn bttn-pill bttn-md bttn--light-accent align-items-center gap-2 fw-md"> المزيد عنا <span className="material-symbols-rounded mat-icon size-16 fw-400 bttn__icon-base d-flex align-items-center"> arrow_forward </span>
                </Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Work Process Section  --> */}
      <Howitwork />
      {/* <!-- Consult Section  --> */}
      <Consult />
      {/* <!-- Brand Section  --> */}
      <Companies />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default choose_us_1;
