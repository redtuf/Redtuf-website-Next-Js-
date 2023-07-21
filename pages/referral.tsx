import Navbar from "@/components/Navbar";
import Testimonial_slider_1 from "@/components/Testimonial-slider-1";
import Footer from "@/components/home_4/Footer";
import Link from "next/link";
import { useState, useEffect } from 'react';
const referral_data = [
  {
    id: 1,
    question: "Whеn Wіll I Receive Mу Reward?",
    answer:
      "SaaS applications are typically designed to serve multiple customers, known as tenants, from a single instance of the software.",
  },
  {
    id: 2,
    question: "Iѕ Thеrе A Limit Tо Thе Numbеr Оf Friends I Саn Refer?",
    answer:
      "SaaS applications are designed to handle a large number of users and can scale up or down as needed.",
  },
  {
    id: 3,
    question: "How Much Do We Get Paid For Leads?",
    answer:
      "SaaS applications are accessible from anywhere with an internet connection and can be used on multiple devices.",
  },
  {
    id: 4,
    question: "Why Team Up With itechex?",
    answer:
      "SaaS applications usually have built-in user management features to handle user authentication, authorization, and access control.",
  },
  {
    id: 5,
    question: "How to get paid?",
    answer:
      "SaaS applications may offer some level of customization, such as the ability to add custom branding, logos, and colors.",
  },
  {
    id: 6,
    question: "What is Data Security:?",
    answer:
      "SaaS applications typically have security measures in place to protect customer data, including encryption, backup, and disaster recovery.",
  },
];
const referral = () => {
  const [active, setActive] = useState<null | number>(0);

  const handleOpen = (id: number) => {
    id == active ? setActive(0) : setActive(id);
  };
  let closed = {
    maxHeight: 0,
    overflow: "hidden",
    transition: "max-height 0.5s ease-out",
  };
  let opened = {
    maxHeight: "1000px",
    transition: "max-height 0.5s ease-in-out",
  };
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
  }, []);
  return (
    <>
      {/* Navbar Section */}
      <Navbar rtlurl="/rtl/referral" />
      {/* Banner section */}
      <section className="banner-section section--sm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="clr-light mb-3"> Refer & Earn </h3>
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
                    Refer & Earn{" "}
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
      {/* <!-- Banner End --> */}
      <div className="section">
        <div className="container">
          <div className="row g-6 align-items-center">
            <div className="col-lg-6">
              <div className="section__gap-bottom pb-lg-0">
                <h2 className="mb-5"> Spread the Word </h2>
                <p className="mb-5">
                  {" "}
                  We are Offering upto 30% bonus for Refer and Earn{" "}
                </p>
                <ul className="list list-row gap-2 gap-sm-0 flex-wrap align-items-center tab-list mb-5">
                  <li>
                    <button type="button" className="tab-list__btn">
                      {" "}
                      Bring Business{" "}
                    </button>
                  </li>
                  <li>
                    <button type="button" className="tab-list__btn">
                      {" "}
                      Get Business{" "}
                    </button>
                  </li>
                  <li>
                    <button type="button" className="tab-list__btn">
                      {" "}
                      That’s the Deal{" "}
                    </button>
                  </li>
                </ul>
                <p className="mb-5 max-text-60">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur. Potenti potenti vitae
                  condimentum dolor. Vel nibh non urna justo sit consectetur
                  egestas netus penatibus. Malesuada ac duis felis donec
                  ultricies nec in.{" "}
                </p>
                <Link
                  href="#"
                  className="bttn bttn--base bttn-md bttn-pill gap-2 fw-md flex-shrink-0">
                  {" "}
                  Refer Now{" "}
                  <span className="material-symbols-rounded mat-icon size-16 fw-400 bttn__icon-cover d-flex align-items-center">
                    {" "}
                    arrow_forward{" "}
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image-move-end">
                <img
                  src="/images/refer-img.png"
                  alt="image"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section bg-base">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-7">
                <span className="d-block h5 lh-1 fw-semibold clr-accent text-center">
                  {" "}
                  4 Easy Steps{" "}
                </span>
                <h2 className="mt-5 mb-5 text-center clr-light">
                  {" "}
                  How Refer & Earn Works{" "}
                </h2>
                <p className="max-text-60 text-center mx-auto clr-light">
                  {" "}
                  We Offer Unique Services Tailored Specifically for Your
                  Company.Innovative Methods to Help Boost Your Company's
                  Profits{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-6">
            <div className="col-md-6 col-xl-3">
              <div className="border rounded-4 p-5 text-center">
                <img
                  src="/images/icon-68.png"
                  alt="image"
                  className="img-fluid"
                />
                <div className="text-center mt-8 pb-2">
                  <h5 className="clr-light mb-2"> Invite Your Friends </h5>
                  <p className="clr-light">
                    {" "}
                    Find people you know who want to work on a project. Describe
                    US!{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="border rounded-4 p-5 text-center">
                <img
                  src="/images/icon-69.png"
                  alt="image"
                  className="img-fluid"
                />
                <div className="text-center mt-8 pb-2">
                  <h5 className="clr-light mb-2"> Post Your Project Needs </h5>
                  <p className="clr-light">
                    {" "}
                    Find people you know who want to work on a project. Describe
                    US!{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="border rounded-4 p-5 text-center">
                <img
                  src="/images/icon-70.png"
                  alt="image"
                  className="img-fluid"
                />
                <div className="text-center mt-8 pb-2">
                  <h5 className="clr-light mb-2"> Profile Registration </h5>
                  <p className="clr-light">
                    {" "}
                    Find people you know who want to work on a project. Describe
                    US!{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="border rounded-4 p-5 text-center">
                <img
                  src="/images/icon-71.png"
                  alt="image"
                  className="img-fluid"
                />
                <div className="text-center mt-8 pb-2">
                  <h5 className="clr-light mb-2"> We Work You Get Paid </h5>
                  <p className="clr-light">
                    {" "}
                    Find people you know who want to work on a project. Describe
                    US!{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Testimonials  --> */}
      <Testimonial_slider_1 />
      {/* <!-- Testimonials End --> */}
      {/* <!-- Contact Section --> */}
      <div className="section--sm section--top contact-section">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-7">
                <div className="text-center">
                  <span className="d-inline-block h5 lh-1 fw-semibold clr-base">
                    {" "}
                    Contact Us{" "}
                  </span>
                  <h2 className="mt-5 mb-5"> Let us contact you </h2>
                  <p className="mx-auto t-short-para">
                    {" "}
                    Fill out the form below and we’ll get in touch within 24
                    hours{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <form
                action="#"
                className="contact-form-1 bg-base p-5 p-md-12 rounded-4">
                <div className="row g-4">
                  <div className="col-12">
                    <h5 className="text-center clr-light">
                      {" "}
                      Referral Details{" "}
                    </h5>
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control rounded-pill contact-form-1__input"
                      placeholder="Referral Name*"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="number"
                      className="form-control contact-form-1__input rounded-pill"
                      placeholder="Referral Phone*"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control contact-form-1__input rounded-pill"
                      placeholder="Referral Email*"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control contact-form-1__input rounded-pill"
                      placeholder="Services Needed*"
                    />
                  </div>
                  <div className="col-12">
                    <div className="contact-form-1__select rounded-pill">
                      <select className="form-select rounded-pill">
                        <option>Select Services</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12">
                    <h5 className="text-center clr-light mt-8">
                      {" "}
                      Your Details{" "}
                    </h5>
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control rounded-pill contact-form-1__input"
                      placeholder="Referral Name*"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="number"
                      className="form-control contact-form-1__input rounded-pill"
                      placeholder="Referral Phone*"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control contact-form-1__input rounded-pill"
                      placeholder="Referral Email*"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control contact-form-1__input rounded-pill"
                      rows={3}
                      placeholder="Let us know"></textarea>
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
                        I have read and accepted the Terms &amp; Conditions
                        Privacy Policy{" "}
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="text-center mt-6">
                      <button className="bttn bttn--warning bttn-md bttn-pill fw-md">
                        {" "}
                        Send Referral{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact Section End --> */}
      {/* <!-- Q & A section --> */}
      <div className="section--sm section--bottom">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-7">
                <div className="text-center">
                  <span className="d-inline-block h5 lh-1 fw-semibold clr-base">
                    {" "}
                    Questions & Answers{" "}
                  </span>
                  <h2 className="mt-5 mb-5"> Referral FAQ </h2>
                  <p className="mx-auto t-short-para">
                    {" "}
                    Got questions? We’ve got you covered. See the answers to the
                    most popular questions about Referral FAQ{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-xl-8">
              <div className="custom-accordion custom-accordion--1">
                {referral_data.map(({ answer, id, question }) => (
                  <div key={id} className="custom-accordion__item">
                    <div
                      className="custom-accordion__header"
                      onClick={() => handleOpen(id)}>
                      <div className="d-flex gap-4 align-items-center flex-grow-1">
                        <img
                          src="/images/icon-59.png"
                          alt="image"
                          className="img-fluid flex-shrink-0"
                        />
                        <h6>{question}</h6>
                      </div>
                      <div className="icon-box icon-box--xs circle bg-base flex-shrink-0">
                        <span className="material-symbols-outlined mat-icon clr-light">
                          {" "}
                          arrow_forward_ios{" "}
                        </span>
                      </div>
                    </div>
                    <div
                      className="custom-accordion__body"
                      style={id == active ? opened : closed}>
                      <div className="custom-accordion__content">
                        <p> {answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
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

export default referral;
