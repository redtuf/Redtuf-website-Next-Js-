import Link from 'next/link';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
  } from "react-icons/fa";
const Team = () => {
    return (
        <div className="section">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-xl-7 col-xxl-6">
                <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
                  {" "}
                  Large No of Expert Team Member{" "}
                </span>
                <h2 className="mt-5 mb-5 text-center">
                  {" "}
                  The Amazing Team Behind Our Company{" "}
                </h2>
                <p className="text-center mx-auto t-short-para">
                  {" "}
                  Our team strives to assist our clients retain or acquire
                  best-in-class positions in their respective sectors.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-md">
          <div className="row g-3 g-xl-4">
            <div className="col-sm-6 col-lg-3">
              <div className="team-member-1">
                <div className="team-member-1__img-container">
                  <Link
                    href="leadership-page"
                    className="team-member-1__img-link">
                    <img
                      src="/images/team-1.png"
                      alt="image"
                      className="team-member-1__img"
                    />
                  </Link>
                  <ul className="list list-xs">
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
                <div className="team-member-1__body">
                  <h5 className="mb-1">
                    <Link
                      href="leadership-page"
                      className="t-link d-block text-center clr-heading :clr-base">
                      {" "}
                      Peter Parker{" "}
                    </Link>
                  </h5>
                  <p className="text-center"> IT Manager </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="team-member-1">
                <div className="team-member-1__img-container">
                  <Link
                    href="leadership-page"
                    className="team-member-1__img-link">
                    <img
                      src="/images/team-2.png"
                      alt="image"
                      className="team-member-1__img"
                    />
                  </Link>
                  <ul className="list list-xs">
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
                <div className="team-member-1__body">
                  <h5 className="mb-1">
                    <Link
                      href="leadership-page"
                      className="t-link d-block text-center clr-heading :clr-base">
                      {" "}
                      Cody Fisher{" "}
                    </Link>
                  </h5>
                  <p className="text-center"> Service Manager </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="team-member-1">
                <div className="team-member-1__img-container">
                  <Link
                    href="leadership-page"
                    className="team-member-1__img-link">
                    <img
                      src="/images/team-3.png"
                      alt="image"
                      className="team-member-1__img"
                    />
                  </Link>
                  <ul className="list list-xs">
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
                <div className="team-member-1__body">
                  <h5 className="mb-1">
                    <Link
                      href="leadership-page"
                      className="t-link d-block text-center clr-heading :clr-base">
                      {" "}
                      Stuart Lang{" "}
                    </Link>
                  </h5>
                  <p className="text-center"> Managing Director </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="team-member-1">
                <div className="team-member-1__img-container">
                  <Link
                    href="leadership-page"
                    className="team-member-1__img-link">
                    <img
                      src="/images/team-4.png"
                      alt="image"
                      className="team-member-1__img"
                    />
                  </Link>
                  <ul className="list list-xs">
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
                <div className="team-member-1__body">
                  <h5 className="mb-1">
                    <Link
                      href="leadership-page"
                      className="t-link d-block text-center clr-heading :clr-base">
                      {" "}
                      Devon Lane{" "}
                    </Link>
                  </h5>
                  <p className="text-center"> Executive Assistant </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section__gap-top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-8">
                <div className="group group-row flex-wrap justify-content-center align-items-center">
                  <Link
                    href="contact-us-1"
                    className="bttn bttn--base bttn-md bttn-pill fw-md flex-shrink-0">
                    {" "}
                    Join Us Now{" "}
                  </Link>
                  <Link
                    href="leadership"
                    className="bttn bttn--stroke-outline bttn-md bttn-pill fw-md flex-shrink-0 align-items-center">
                    <span className="bttn__arrow"> View All Team </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Team;