import Navbar from "@/components/Navbar";
import Consult from "@/components/home_2/Consult";
import Footer from "@/components/home_4/Footer";
import Link from "next/link";
import { useState, useEffect } from "react";
const faq_1_data = [
  {
    id: 1,
    question: "Where do I start with Itechex?",
    answer:
      "SaaS applications are typically designed to serve multiple customers, known as tenants, from a single instance of the software.",
  },
  {
    id: 2,
    question: "What is the platform by Itechex?",
    answer:
      "SaaS applications are designed to handle a large number of users and can scale up or down as needed.",
  },
  {
    id: 3,
    question: "What is the platform by Itechex?",
    answer:
      "SaaS applications are accessible from anywhere with an internet connection and can be used on multiple devices.",
  },
  {
    id: 4,
    question: "How easy is the onboarding?",
    answer:
      "SaaS applications usually have built-in user management features to handle user authentication, authorization, and access control.",
  },
  {
    id: 5,
    question: "Who uses the platform?",
    answer:
      "SaaS applications may offer some level of customization, such as the ability to add custom branding, logos, and colors.",
  },
  {
    id: 6,
    question: "How accurate is your technology?",
    answer:
      "SaaS applications typically have security measures in place to protect customer data, including encryption, backup, and disaster recovery.",
  },
];
const faq_2_data = [
  {
    id: 1,
    question: "New multiple site connectivity",
    answer:
      "We use a newly developed technology to connect sites that are based on different types of servers and networks, SiteConnect, which helps to reduce the misinterpretation of signals as well as the loss of data during transfering.",
  },
  {
    id: 2,
    question: "IT security & software",
    answer:
      "SaaS applications are designed to handle a large number of users and can scale up or down as needed.",
  },
  {
    id: 3,
    question: "Weak hosted capability",
    answer:
      "SaaS applications are accessible from anywhere with an internet connection and can be used on multiple devices.",
  },
  {
    id: 4,
    question: "Build internal network",
    answer:
      "SaaS applications usually have built-in user management features to handle user authentication, authorization, and access control.",
  },
];
const faq_1 = () => {
  const [active, setActive] = useState<null | number>(0);
  const [active1, setActive1] = useState<null | number>(0);
  const handleOpen = (id: number) => {
    id == active ? setActive(0) : setActive(id);
  };
  const handleOpen1 = (id: number) => {
    id == active1 ? setActive1(0) : setActive1(id);
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
      <Navbar rtlurl="/rtl/faq-1" />
      {/* Banner Section */}
      <section className="banner-section section--sm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="clr-light mb-3"> FAQ </h3>
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
                    FAQ{" "}
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
      {/* <!-- FAQ Section --> */}
      <div className="section">
        <div className="container">
          <div className="row justify-content-lg-between">
            <div className="col-lg-5">
              <div className="section__gap-bottom pb-lg-0 position-sticky top-0">
                <span className="d-block h5 lh-1 fw-semibold clr-base">
                  {" "}
                  Questions & Answers{" "}
                </span>
                <h2 className="mt-2 mb-4"> Any Questions? Find here. </h2>
                <p className="t-short-para mb-8">
                  {" "}
                  Don’t find your answer here? just send us a message for any
                  query.{" "}
                </p>
                <Link
                  href="contact-us-1"
                  className="bttn bttn--base bttn-md gap-2 bttn-pill fw-md">
                  {" "}
                  Contact Us{" "}
                  <span className="material-symbols-rounded mat-icon size-16 fw-400 bttn__icon-cover d-flex align-items-center">
                    {" "}
                    arrow_forward{" "}
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="custom-accordion custom-accordion--1">
                {faq_1_data.map(({ id, answer, question }) => (
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
                      className={`custom-accordion__body`}
                      style={id == active ? opened : closed}>
                      <div className="custom-accordion__content">
                        <p> {answer} </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- FAQ Section 2 --> */}
      <div className="section bg-neutral-100">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-7">
                <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
                  {" "}
                  Need Help? Read Popular Questions{" "}
                </span>
                <h2 className="my-5 text-center">
                  {" "}
                  Frequently Asked Questions{" "}
                </h2>
                <p className="text-center">
                  {" "}
                  Itechex deep industry expertise enables global brands to hit
                  the ground running.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-6 justify-content-between">
            <div className="col-lg-6">
              <div className="section__gap-bottom pb-lg-0 sticky-top top-0">
                <div className="custom-accordion custom-accordion--1">
                  {faq_2_data.map(({ id, answer, question }) => (
                    <div key={id} className="custom-accordion__item">
                      <div
                        className="custom-accordion__header"
                        onClick={() => handleOpen1(id)}>
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
                        className={`custom-accordion__body`}
                        style={id == active1 ? opened : closed}>
                        <div className="custom-accordion__content">
                          <p> {answer} </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5">
              <img
                src="/images/faq-img.png"
                alt="image"
                className="img-fluid w-100"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Consult Section  --> */}
      <Consult />
      {/* <!-- Resource Section --> */}
      <div className="section">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-11">
                <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
                  {" "}
                  Resources{" "}
                </span>
                <h2 className="mt-5 text-center">
                  {" "}
                  Want to know more? We believe in the power of sharing
                  experiences, insights and knowledge. Check out our resources.{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xl">
          <div className="row g-6">
            <div className="col-md-4">
              <div className="blog-post-1 text-center pt-8 pb-4">
                <Link href="blog-details-1" className="t-link d-inline-block">
                  <img
                    src="/images/book-img-1.png"
                    alt="image"
                    className="img-fluid"
                  />
                </Link>
                <div className="blog-post-1__body text-center">
                  <h5 className="mb-2">
                    <Link
                      href="blog-details-1"
                      className="t-link d-block clr-heading :clr-base d-block">
                      {" "}
                      Flutter Handbook{" "}
                    </Link>
                  </h5>
                  <p> Flutter app development guide! </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog-post-1 text-center pt-8 pb-4">
                <Link href="blog-details-1" className="t-link d-inline-block">
                  <img
                    src="/images/book-img-2.png"
                    alt="image"
                    className="img-fluid"
                  />
                </Link>
                <div className="blog-post-1__body text-center">
                  <h5 className="mb-2">
                    <Link
                      href="blog-details-1"
                      className="t-link d-block clr-heading :clr-base d-block">
                      {" "}
                      Culture Book 2022{" "}
                    </Link>
                  </h5>
                  <p> Come and meet us any time! </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog-post-1 text-center pt-8 pb-4">
                <Link href="blog-details-1" className="t-link d-inline-block">
                  <img
                    src="/images/book-img-3.png"
                    alt="image"
                    className="img-fluid"
                  />
                </Link>
                <div className="blog-post-1__body text-center">
                  <h5 className="mb-2">
                    <Link
                      href="blog-details-1"
                      className="t-link d-block clr-heading :clr-base d-block">
                      {" "}
                      UX Trend Book{" "}
                    </Link>
                  </h5>
                  <p> Trends that will dominate in 2022 </p>
                </div>
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

export default faq_1;
