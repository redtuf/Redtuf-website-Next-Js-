import Feedback_3 from "@/components/Feedback_3";
import Letstalk from "@/components/Letstalk";
import Navbar from "@/components/Navbar";
import Videosection from "@/components/Videosection";
import Link from "next/link";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { useEffect } from 'react';
import Footer from "@/components/home_4/Footer";
const case_study_details_1 = () => {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
  }, []);
  return (
    <>
      <Navbar rtlurl="/rtl/case-study-details-1"/>
      <div className="section bg-base-900">
        <div className="container">
          <div className="row g-6 justify-content-lg-between align-items-center">
            <div className="col-md-6">
              <div className="section__gap-bottom pb-md-0 position-sticky top-0">
                <ul className="list list-row align-items-center">
                  <li>
                    <span className="d-block clr-light"> Blockchain </span>
                  </li>
                  <li className="dash-line-container">
                    <span className="dash-line"></span>
                  </li>
                  <li>
                    <span className="d-block clr-light"> May 2022 </span>
                  </li>
                </ul>
                <h2 className="mt-4 mb-8 clr-light">
                  {" "}
                  How We Built and Secured a Crypto Mining Pool{" "}
                </h2>
                <p className="t-short-para clr-light">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                  dolor urna, ullamcorper feugiat elementum non et tortor.
                  Dignissim eu faucibus et, congue.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 col-xl-4">
              <div className="p-4 p-sm-6 rounded-4 bg-neutral-100">
                <ul className="list list-row justify-content-center list--divider">
                  <li className="flex-1">
                    <div className="d-flex flex-column">
                      <h5 className="mb-3">Services</h5>
                      <ul className="list gap-2">
                        <li> Frontend Development </li>
                        <li> Speed Optimize </li>
                      </ul>
                      <h5 className="mt-5 mb-3">Platforms</h5>
                      <ul className="list gap-2">
                        <li> Web </li>
                        <li> Mobile </li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex-1">
                    <h5 className="mb-3">Results</h5>
                    <h2 className="clr-base"> 88% </h2>
                    <ul className="list gap-2">
                      <li> Improvement </li>
                      <li> Website Speed </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Case study Banner End --> */}
      {/* <!-- Project Category --> */}
      <div className="project-category-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="section__gap-bottom">
                <img
                  src="/images/project-category-img.png"
                  alt="image"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <div className="col-xl-10">
              <ul className="list list-row flex-wrap project-category-list">
                <li>
                  <div className="d-flex flex-column">
                    <span className="d-block mb-1 mb-md-2"> Client </span>
                    <h5 className="clr-base"> Client </h5>
                  </div>
                </li>
                <li>
                  <div className="d-flex flex-column">
                    <span className="d-block mb-1 mb-md-2"> Project </span>
                    <h5 className="clr-base"> It Solution </h5>
                  </div>
                </li>
                <li>
                  <div className="d-flex flex-column">
                    <span className="d-block mb-1 mb-md-2"> Category </span>
                    <h5 className="clr-base"> Frontend Dev </h5>
                  </div>
                </li>
                <li>
                  <div className="d-flex flex-column">
                    <span className="d-block mb-1 mb-md-2"> Date </span>
                    <h5 className="clr-base"> May 10, 2023 </h5>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Project Category End --> */}
      <div className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="row">
                <div className="col-md-5">
                  <div className="section__gap-bottom pb-mb-0 position-sticky top-60">
                    <h3> Project Overview </h3>
                  </div>
                </div>
                <div className="col-md-7">
                  <p className="mb-5">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur. Mauris ac tincidunt
                    integer commodo aliquet sit dolor aliquam adipiscing. Semper
                    arcu viverra posuere luctus. Elit posuere dapibus lacus
                    vitae ac ornare massa. Placerat ullamcorper nibh sit euismod
                    volutpat elit at pretium et. Nulla orci amet gravida magnis
                    lorem risus. Posuere suscipit tincidunt felis a lacus
                    porttitor faucibus vitae fames.{" "}
                  </p>
                  <ul className="list list-disc list-disc--dark mb-8">
                    <li>
                      <p>
                        {" "}
                        Cras sed felis eget velit aliquet. Morbi quis commodo
                        odio{" "}
                      </p>
                    </li>
                    <li>
                      <p>
                        {" "}
                        Pharetra vel turpis nunc eget lorem dolor. Quam
                        vulputate{" "}
                      </p>
                    </li>
                    <li>
                      <p>
                        {" "}
                        Vestibulum rhoncus est pellentesque elit ullamcorper{" "}
                      </p>
                    </li>
                  </ul>
                  <img
                    src="/images/case-study-img-1.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section bg-base-900">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="row">
                <div className="col-md-5">
                  <div className="section__gap-bottom pb-mb-0 position-sticky top-60">
                    <h3 className="clr-light"> Project Overview </h3>
                  </div>
                </div>
                <div className="col-md-7">
                  <p className="mb-5 clr-light">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur. Mauris ac tincidunt
                    integer commodo aliquet sit dolor aliquam adipiscing. Semper
                    arcu viverra posuere luctus. Elit posuere dapibus lacus
                    vitae ac ornare massa. Placerat ullamcorper nibh sit euismod
                    volutpat elit at pretium et. Nulla orci amet gravida magnis
                    lorem risus. Posuere suscipit tincidunt felis a lacus
                    porttitor faucibus vitae fames.{" "}
                  </p>
                  <ul className="list list-disc list-disc--light mb-8">
                    <li>
                      <p className="clr-light">
                        {" "}
                        Cras sed felis eget velit aliquet. Morbi quis commodo
                        odio{" "}
                      </p>
                    </li>
                    <li>
                      <p className="clr-light">
                        {" "}
                        Pharetra vel turpis nunc eget lorem dolor. Quam
                        vulputate{" "}
                      </p>
                    </li>
                    <li>
                      <p className="clr-light">
                        {" "}
                        Vestibulum rhoncus est pellentesque elit ullamcorper{" "}
                      </p>
                    </li>
                  </ul>
                  <img
                    src="/images/case-study-img-2.png"
                    alt="images"
                    className="img-fluid"
                  />
                  <p className="mt-5 clr-light">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur. Mauris ac tincidunt
                    integer commodo aliquet sit dolor aliquam adipiscing. Semper
                    arcu viverra posuere luctus. Elit posuere dapibus lacus
                    vitae ac ornare massa. Placerat ullamcorper nibh sit euismod
                    volutpat elit at pretium et. Nulla orci amet gravida magnis
                    lorem risus. Posuere suscipit tincidunt felis a lacus
                    porttitor faucibus vitae fames.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="row">
                <div className="col-md-5">
                  <div className="section__gap-bottom pb-mb-0 position-sticky top-60">
                    <h3> Project Overview </h3>
                  </div>
                </div>
                <div className="col-md-7">
                  <p className="mb-5">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur. Mauris ac tincidunt
                    integer commodo aliquet sit dolor aliquam adipiscing. Semper
                    arcu viverra posuere luctus. Elit posuere dapibus lacus
                    vitae ac ornare massa. Placerat ullamcorper nibh sit euismod
                    volutpat elit at pretium et. Nulla orci amet gravida magnis
                    lorem risus. Posuere suscipit tincidunt felis a lacus
                    porttitor faucibus vitae fames.{" "}
                  </p>
                  <ul className="list list-disc list-disc--dark mb-8">
                    <li>
                      <p>
                        {" "}
                        Cras sed felis eget velit aliquet. Morbi quis commodo
                        odio{" "}
                      </p>
                    </li>
                    <li>
                      <p>
                        {" "}
                        Pharetra vel turpis nunc eget lorem dolor. Quam
                        vulputate{" "}
                      </p>
                    </li>
                    <li>
                      <p>
                        {" "}
                        Vestibulum rhoncus est pellentesque elit ullamcorper{" "}
                      </p>
                    </li>
                  </ul>
                  <img
                    src="/images/case-study-img-1.png"
                    alt="images"
                    className="img-fluid"
                  />
                  <ul className="list list-xs list-row mt-10">
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                        <FaLinkedinIn />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Video Section  --> */}
      <Videosection />
      {/* <!-- Video Section End --> */}
      {/* <!-- Project --> */}
      <section className="section">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-7">
                <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
                  {" "}
                  Proud projects that make us stand out{" "}
                </span>
                <h2 className="mt-5 mb-5 text-center"> Related Projects </h2>
                <p className="text-center mx-auto max-text-60">
                  {" "}
                  Our best IT specialists have helped scores of organizations in
                  numerous sectors in recent years. To understand how we helped
                  build different digital products and to see what we can
                  achieve for your company, read our case studies.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xl">
          <div className="row g-4 g-xl-6">
            <div className="col-sm-6 col-md-4">
              <div className="case-studies-1">
                <Link
                  href="case-study-details-1"
                  className="case-studies-1__link">
                  <img
                    src="/images/case-img-1.png"
                    alt="image"
                    className="case-studies-1__img"
                  />
                </Link>
                <div className="case-studies-1__content">
                  <div className="group group-xxs flex-grow-1">
                    <h5>
                      <Link
                        href="case-study-details-1"
                        className="t-link clr-heading :clr-base">
                        {" "}
                        UI/UX Strategy{" "}
                      </Link>
                    </h5>
                    <span className="d-block"> IT Consulting </span>
                  </div>
                  <Link
                    href="case-study-details-1"
                    className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                    <span className="material-symbols-rounded mat-icon fw-100">
                      {" "}
                      east{" "}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="case-studies-1">
                <Link
                  href="case-study-details-1"
                  className="case-studies-1__link">
                  <img
                    src="/images/case-img-2.png"
                    alt="image"
                    className="case-studies-1__img"
                  />
                </Link>
                <div className="case-studies-1__content">
                  <div className="group group-xxs flex-grow-1">
                    <h5>
                      <Link
                        href="case-study-details-1"
                        className="t-link clr-heading :clr-base">
                        {" "}
                        UI/UX Strategy{" "}
                      </Link>
                    </h5>
                    <span className="d-block"> IT Consulting </span>
                  </div>
                  <Link
                    href="case-study-details-1"
                    className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                    <span className="material-symbols-rounded mat-icon fw-100">
                      {" "}
                      east{" "}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="case-studies-1">
                <Link
                  href="case-study-details-1"
                  className="case-studies-1__link">
                  <img
                    src="/images/case-img-3.png"
                    alt="image"
                    className="case-studies-1__img"
                  />
                </Link>
                <div className="case-studies-1__content">
                  <div className="group group-xxs flex-grow-1">
                    <h5>
                      <Link
                        href="case-study-details-1"
                        className="t-link clr-heading :clr-base">
                        {" "}
                        UI/UX Strategy{" "}
                      </Link>
                    </h5>
                    <span className="d-block"> IT Consulting </span>
                  </div>
                  <Link
                    href="case-study-details-1"
                    className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                    <span className="material-symbols-rounded mat-icon fw-100">
                      {" "}
                      east{" "}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Project End --> */}
      {/* <!-- Let's Talk --> */}
      <Letstalk />
      {/* <!-- Let's Talk End --> */}
      {/* <!-- Testimonial --> */}
      <Feedback_3 />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default case_study_details_1;
