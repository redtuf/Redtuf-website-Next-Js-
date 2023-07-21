import Navbar from "@/components/Navbar";
import Footer from "@/components/home_4/Footer";
import Link from "next/link";
import { useEffect } from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const leadership_page = () => {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
  }, []);
  return (
    <>
      {/* Navbar Section */}
      <Navbar rtlurl="/rtl/leadership-page" />
      {/* Banner section */}
      <section className="banner-section section--sm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="clr-light mb-3"> Leadership </h3>
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
                    Leadership{" "}
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="#"
                    className="d-inline-block t-link clr-light :clr-accent">
                    {" "}
                    Wade Warren{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Leader Details  --> */}
      <div className="section">
        <div className="container">
          <div className="row justify-content-xl-between">
            <div className="col-md-5 col-xl-4">
              <div className="section__gap-bottom pb-md-0">
                <div className="leader-card">
                  <div className="leader-card__img">
                    <img
                      src="/images/leader-img.png"
                      alt="image"
                      className="leader-card__img-is"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="mb-2"> Wade Warren </h3>
                    <span className="d-block fw-bold clr-base mb-5">
                      {" "}
                      Creative Director{" "}
                    </span>
                    <p className="mb-5">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      dia id elit amet aliquam{" "}
                    </p>
                    <ul className="list list-xs list-row justify-content-center">
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
            <div className="col-md-7">
              <h2 className="mb-4"> About Wade Warren </h2>
              <p className="mb-4">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
              </p>
              <p className="mb-4">
                {" "}
                Sapien faucibus et molestie ac feugiat sed lectus. Lorem sed
                risus ultricies tristique. Suspendisse sed nisi lacus sed
                viverra tellus in hac habitasse. Enim praesent elementum
                facilisis leo. Consectetur a erat nam at lectus urna. Faucibus
                turpis{" "}
              </p>
              <ul className="list list-disc list-disc--dark mb-4">
                <li>
                  <p className="fw-md">
                    {" "}
                    Cras sed felis eget velit aliquet. Morbi quis commodo odio{" "}
                  </p>
                </li>
                <li>
                  <p className="fw-md">
                    {" "}
                    Pharetra vel turpis nunc eget lorem dolor. Quam vulputate{" "}
                  </p>
                </li>
                <li>
                  <p className="fw-md">
                    {" "}
                    Vestibulum rhoncus est pellentesque elit ullamcorper{" "}
                  </p>
                </li>
              </ul>
              <p className="mb-4">
                {" "}
                Cras sed felis eget velit aliquet. Morbi quis commodo odio
                aenean sed adipiscing diam donec adipiscing. Nibh tellus
                molestie nunc non blandit massa enim nec. Ac feugiat sed lectus
                vestibulum mattis ullamcorper velit. Posuere morbi leo urna
                molestie.{" "}
              </p>
              <p className="mb-4">
                {" "}
                Sapien faucibus et molestie ac feugiat sed lectus. Lorem sed
                risus ultricies tristique. Suspendisse sed nisi lacus sed
                viverra tellus in hac habitasse. Enim praesent elementum
                facilisis leo. Consectetur a erat nam at lectus urna. Faucibus
                turpis{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Blog Section  --> */}
      <div className="section bg-neutral-100">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row g-4 align-items-lg-end">
              <div className="col-md-10 col-lg-7">
                <span className="d-block h5 lh-1 fw-semibold clr-base">
                  {" "}
                  Browse Posts by Wade Warren articles & resources{" "}
                </span>
                <h2 className="mt-5 mb-5"> Posts by Wade Warren </h2>
                <p>
                  {" "}
                  Have a look at the most recent articles and resources that we
                  have.{" "}
                </p>
              </div>
              <div className="col-lg-5">
                <div className="text-lg-end">
                  <Link
                    href="blog-page-1"
                    className="bttn bttn--stroke-outline bttn-md bttn-pill fw-md flex-shrink-0 align-items-center">
                    <span className="bttn__arrow"> Browse articles </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="blog-post-1 h-100">
                <Link
                  href="blog-details-1"
                  className="blog-post-1__link flex-shrink-0">
                  <img
                    src="/images/blog-post-3.png"
                    alt="image"
                    className="blog-post-1__img"
                  />
                </Link>
                <div className="blog-post-1__body h-100 d-flex flex-column">
                  <h5 className="mb-2">
                    <Link
                      href="blog-details-1"
                      className="t-link clr-heading :clr-base d-block">
                      {" "}
                      The Most Significant Advances in Technology That We've
                      Seen So Far This Year{" "}
                    </Link>
                  </h5>
                  <p className="mb-5">
                    {" "}
                    Rutrum consequat ultricies leo eu volutpat neque volutpat
                    iaculis dignissim.{" "}
                  </p>
                  <Link
                    href="blog-details-1"
                    className="t-link t-link--base fw-md mt-auto">
                    {" "}
                    Read More{" "}
                    <span className="material-symbols-outlined mat-icon fw-200">
                      {" "}
                      trending_flat{" "}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="blog-post-1 h-100">
                <Link
                  href="blog-details-1"
                  className="blog-post-1__link flex-shrink-0">
                  <img
                    src="/images/blog-post-1.png"
                    alt="image"
                    className="blog-post-1__img"
                  />
                </Link>
                <div className="blog-post-1__body h-100 d-flex flex-column">
                  <h5 className="mb-2">
                    <Link
                      href="blog-details-1"
                      className="t-link clr-heading :clr-base d-block">
                      {" "}
                      Why We Are So Excited About Technology—And Why You Should
                      Be, Too!{" "}
                    </Link>
                  </h5>
                  <p className="mb-5">
                    {" "}
                    Rutrum consequat ultricies leo eu volutpat neque volutpat
                    iaculis dignissim.{" "}
                  </p>
                  <Link
                    href="blog-details-1"
                    className="t-link t-link--base fw-md mt-auto">
                    {" "}
                    Read More{" "}
                    <span className="material-symbols-outlined mat-icon fw-200">
                      {" "}
                      trending_flat{" "}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="blog-post-1 h-100">
                <Link
                  href="blog-details-1"
                  className="blog-post-1__link flex-shrink-0">
                  <img
                    src="/images/blog-post-2.png"
                    alt="image"
                    className="blog-post-1__img"
                  />
                </Link>
                <div className="blog-post-1__body h-100 d-flex flex-column">
                  <h5 className="mb-2">
                    <Link
                      href="blog-details-1"
                      className="t-link clr-heading :clr-base d-block">
                      {" "}
                      The 17 Facts About Technology That Are Almost Always
                      Misunderstood{" "}
                    </Link>
                  </h5>
                  <p className="mb-5">
                    {" "}
                    Rutrum consequat ultricies leo eu volutpat neque volutpat
                    iaculis dignissim.{" "}
                  </p>
                  <Link
                    href="blog-details-1"
                    className="t-link t-link--base fw-md mt-auto">
                    {" "}
                    Read More{" "}
                    <span className="material-symbols-outlined mat-icon fw-200">
                      {" "}
                      trending_flat{" "}
                    </span>
                  </Link>
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

export default leadership_page;
