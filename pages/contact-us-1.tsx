import Navbar from "@/components/home_2/Navbar";
import ContactFormModal from "@/components/ContactFormModal";
// import Testimonial_slider_1 from "@/components/Testimonial-slider-1";
import Footer from "@/components/home_2/Footer";
import Link from "next/link";

import { useEffect, useState } from 'react';

const contact_us_1 = () => {
  // state for modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
  }, []);
  return (
    <>
      <Navbar handleShow={handleShow} />
      {/* Banner */}
      <section className="banner-section section--sm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="clr-light mb-3"> Contact Us </h3>
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
                    Contact Us{" "}
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
      {/* <!-- Contact Section  --> */}
      <section className="section">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-8">
                <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
                Is that clear?
                </span>
                <h2 className="mt-5 mb-5 text-center">
                We're here to respond to it!
                </h2>
                <p className="text-center">
                Send us details about your project, please. An official offer is made to you when one of our project managers evaluates your project's needs. We can analyze your project with the help of detailed information.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4 gy-lg-4 align-items-center">
            <div className="col-lg-6">
              <form
                action="#"
                className="contact-form-1 bg-base p-5 py-md-10 rounded-4">
                <div className="row g-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control rounded-pill contact-form-1__input"
                      placeholder="Name*"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="number"
                      className="form-control contact-form-1__input rounded-pill"
                      placeholder="Phone*"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control contact-form-1__input rounded-pill"
                      placeholder="Email*"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control contact-form-1__input rounded-pill"
                      placeholder="Company Name"
                    />
                  </div>
                  <div className="col-12">
                    <div className="contact-form-1__select yellow-input rounded-pill">
                      <select className="form-select rounded-pill">
                        <option>Select Services</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control contact-form-1__input rounded-8"
                      rows={3}
                      placeholder="Let us know"></textarea>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="newsletter-subscribe"
                      />
                      <label
                        className="form-check-label clr-light"
                        htmlFor="newsletter-subscribe">
                        {" "}
                        I would like to be updated on the latest products, event
                        announcements{" "}
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="accept-terms"
                      />
                      <label
                        className="form-check-label clr-light"
                        htmlFor="accept-terms">
                        {" "}
                        I have read and accepted the Terms & Conditions Privacy
                        Policy{" "}
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="text-center mt-6">
                      <button className="bttn bttn--warning bttn-md bttn-pill fw-md">
                        {" "}
                        Submit{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6">
              <ul className="list gap-0 service-link-list">
                <li>
                  <Link
                    href="#"
                    className="t-link service-link clr-heading :clr-light border-bottom">
                    <span className="group gap-1">
                      <span className="d-inline-block service-link__title fw-bold">
                      Contact To
                      </span>
                      <span className="d-block">
                      our engagement specialist to schedule a demonstration.
                      </span>
                    </span>
                    <span className="service-link__icon clr-light bg-base">
                      <span className="material-symbols-outlined mat-icon">
                        {" "}
                        arrow_forward_ios{" "}
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="t-link service-link clr-heading :clr-light border-bottom">
                    <span className="group gap-1">
                      <span className="d-inline-block service-link__title fw-bold">
                      Send Your Resume,
                      </span>
                      <span className="d-block">
                      If you're interested in working with us.
                      </span>
                    </span>
                    <span className="service-link__icon clr-light bg-base">
                      <span className="material-symbols-outlined mat-icon">
                        {" "}
                        arrow_forward_ios{" "}
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="t-link service-link clr-heading :clr-light">
                    <span className="group gap-1">
                      <span className="d-inline-block service-link__title fw-bold">
                        {" "}
                        Reach Us via Email{" "}
                      </span>
                      <span className="d-block"> info@redtuf.com </span>
                    </span>
                    <span className="service-link__icon clr-light bg-base">
                      <span className="material-symbols-outlined mat-icon">
                        {" "}
                        arrow_forward_ios{" "}
                      </span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Meet Us Section  --> */}
      {/* <div className="section bg-neutral-100">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-8">
                <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
                Visit us at the workplace
                </span>
                <h2 className="mt-5 mb-5 text-center">
                Visit us anywhere in the globe; our company is worldwide.</h2>
                <p className="text-center">
                We provide unmatched solutions and experiences that help our clients gain a competitive edge.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="text-center">
                  <Link
                    href="contact-us-1"
                    className="bttn bttn--base bttn-md bttn-pill gap-2 fw-md flex-shrink-0">
                    {" "}
                    Let’s Schedule a Call{" "}
                    <span className="material-symbols-rounded mat-icon size-16 fw-400 bttn__icon-cover d-flex align-items-center">
                      {" "}
                      headphones{" "}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xl">
          <div className="row g-6 gy-10">
            <div className="col-md-4">
              <div className="location-card">
                <img
                  src="/images/location-card-1.png"
                  alt="image"
                  className="img-fluid w-100 rounded-4"
                />
                <div className="group group-row align-items-center justify-content-between mt-8">
                  <div className="flex-grow-1">
                    <h4 className="mb-1"> San Francisco </h4>
                    <span className="sm-text d-block mb-1">
                      {" "}
                      demo@mail.com{" "}
                    </span>
                    <span className="d-block accent-text-clr fw-md">
                      {" "}
                      (415) 931 - 1616{" "}
                    </span>
                  </div>
                  <div className="flex-shrink-0">
                    <button className="bttn bttn--base bttn--sqr rounded">
                      <span className="material-symbols-rounded">
                        {" "}
                        arrow_forward_ios{" "}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="location-card">
                <img
                  src="/images/location-card-2.png"
                  alt="image"
                  className="img-fluid w-100 rounded-4"
                />
                <div className="group group-row align-items-center justify-content-between mt-8">
                  <div className="flex-grow-1">
                    <h4 className="mb-1"> London </h4>
                    <span className="sm-text d-block mb-1">
                      {" "}
                      demo@mail.com{" "}
                    </span>
                    <span className="d-block accent-text-clr fw-md">
                      {" "}
                      (415) 931 - 1616{" "}
                    </span>
                  </div>
                  <div className="flex-shrink-0">
                    <button className="bttn bttn--base bttn--sqr rounded">
                      <span className="material-symbols-rounded">
                        {" "}
                        arrow_forward_ios{" "}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="location-card">
                <img
                  src="/images/location-card-3.png"
                  alt="image"
                  className="img-fluid w-100 rounded-4"
                />
                <div className="group group-row align-items-center justify-content-between mt-8">
                  <div className="flex-grow-1">
                    <h4 className="mb-1"> New York </h4>
                    <span className="sm-text d-block mb-1">
                      {" "}
                      demo@mail.com{" "}
                    </span>
                    <span className="d-block accent-text-clr fw-md">
                      {" "}
                      (415) 931 - 1616{" "}
                    </span>
                  </div>
                  <div className="flex-shrink-0">
                    <button className="bttn bttn--base bttn--sqr rounded">
                      <span className="material-symbols-rounded">
                        {" "}
                        arrow_forward_ios{" "}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Testimonail */}
      {/* <Testimonial_slider_1 /> */}
      {/* Footer */}
      <Footer />

      {/*  Contact Form Modal --> */}
      <ContactFormModal show={show}  handleClose={handleClose} />
    </>
  );
};

export default contact_us_1;
