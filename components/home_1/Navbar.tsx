import { useTheme } from "next-themes";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Mobilemenu from "../Mobilemenu";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false)
  const inactiveTheme = theme === "light" ? "dark" : "light";
  const openMobileMenu = () => {
    document.body.classList.toggle("mobile-menu--toggle");
  };
  // const toggleRTL = () => {
  //   setIsRTL(!isRTL);
  //   document.documentElement.setAttribute("dir", isRTL ? "ltr" : "rtl");
  // };
  useEffect(() => {
    setMounted(true)
    document.documentElement.setAttribute("dir", 'ltr');
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <Mobilemenu />
      {/* <!-- Mobile Menu End --> */}

      {/* <!-- Header Style One --> */}
      <header className="header header--1">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* <!-- Header Top Style One --> */}
              <div className="header__top">
                {/* <!-- Logo --> */}
                <Link href="/" className="logo">
                  <img
                    src="/images/logo.png"
                    alt="image"
                    className="logo__img logo__dark"
                  />
                  <img
                    src="/images/logo-light.png"
                    alt="image"
                    className="logo__img logo__light"
                  />
                </Link>
                {/* <!-- Logo End --> */}
                {/* <!-- Info List --> */}
                <ul className="list info-divider d-none d-xl-flex">
                  <li>
                    <div className="group group-xs group-row align-items-center">
                      <div className="icon-box circle icon-box--sm bg-neutral-200 flex-shrink-0">
                        <span className="material-symbols-rounded mat-icon fw-300 clr-base">
                          {" "}
                          phone_in_talk{" "}
                        </span>
                      </div>
                      <Link href="#" className="info-divider__content t-link">
                        <span className="info-divider__content-title mb-1">
                          {" "}
                          +7 (903) 880-91-85{" "}
                        </span>
                        <span className="info-divider__content-text">
                          {" "}
                          demo@example.com{" "}
                        </span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="group group-xs group-row align-items-center">
                      <div className="icon-box circle icon-box--sm bg-neutral-200 flex-shrink-0">
                        <span className="material-symbols-rounded mat-icon fw-300 clr-base">
                          {" "}
                          schedule{" "}
                        </span>
                      </div>
                      <Link href="#" className="info-divider__content t-link">
                        <span className="info-divider__content-title mb-1">
                          {" "}
                          8:00AM - 6:00PM{" "}
                        </span>
                        <span className="info-divider__content-text">
                          {" "}
                          Monday to Saturday{" "}
                        </span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="group group-xs group-row align-items-center">
                      <div className="icon-box circle icon-box--sm bg-neutral-200 flex-shrink-0">
                        <span className="material-symbols-rounded mat-icon fw-300 clr-base">
                          {" "}
                          location_on{" "}
                        </span>
                      </div>
                      <Link href="#" className="info-divider__content t-link">
                        <span className="info-divider__content-title mb-1">
                          {" "}
                          2972 Westheimer Rd.{" "}
                        </span>
                        <span className="info-divider__content-text">
                          {" "}
                          Santa Ana, Illinois 85486{" "}
                        </span>
                      </Link>
                    </div>
                  </li>
                </ul>
                {/* <!-- Info List End --> */}
                {/* <!-- Social Icon  --> */}
                <ul className="list list-xs list-row d-none d-xl-flex">
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
                {/* <!-- Social Icon End --> */}
                {/* <!-- Mobile Menu Toggle  --> */}
                <button
                  onClick={openMobileMenu}
                  className="bttn bttn--sqr bttn--sqr-sm bttn--light bttn--rounded d-xl-none mobile-menu__toggler">
                  <span className="material-symbols-rounded mat-icon fw-300">
                    {" "}
                    menu{" "}
                  </span>
                </button>
                {/* <!-- Mobile Menu Toggle End --> */}
              </div>
              {/* <!-- Header Top Style One End --> */}
              {/* <!-- Primary Menu  --> */}
              <nav className="primary-menu">
                <ul className="list primary-menu__list">
                  <li>
                    <Link href="#" className="primary-menu__link has-sub">
                      {" "}
                      Home{" "}
                    </Link>
                    <ul className="list sub-menu">
                      <li>
                        <Link href="/" className="sub-menu__link">
                          {" "}
                          Home 1{" "}
                        </Link>
                      </li>
                      <li>
                        <Link href="/home-2" className="sub-menu__link">
                          {" "}
                          Home 2{" "}
                        </Link>
                      </li>
                      <li>
                        <Link href="/home-3" className="sub-menu__link">
                          {" "}
                          Home 3{" "}
                        </Link>
                      </li>
                      <li>
                        <Link href="/home-4" className="sub-menu__link">
                          {" "}
                          Home 4{" "}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="#" className="primary-menu__link has-sub">
                      {" "}
                      Blog{" "}
                    </Link>
                    <ul className="list sub-menu">
                      <li>
                        <Link href="blog-page-1" className="sub-menu__link">
                          {" "}
                          Blog Page{" "}
                        </Link>
                      </li>
                      <li>
                        <Link href="blog-details-1" className="sub-menu__link">
                          {" "}
                          Blog Details{" "}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="#" className="primary-menu__link has-sub">
                      {" "}
                      Service{" "}
                    </Link>
                    <ul className="list sub-menu">
                      <li>
                        <Link href="service-1" className="sub-menu__link">
                          {" "}
                          Service Page{" "}
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="service-details-1"
                          className="sub-menu__link">
                          {" "}
                          Service details{" "}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="contact-us-1" className="primary-menu__link">
                      {" "}
                      Contact Us{" "}
                    </Link>
                  </li>
                  <li className="mega-menu--container">
                    <Link href="#" className="primary-menu__link has-megamenu">
                      {" "}
                      Pages{" "}
                    </Link>
                    <ul className="list mega-menu">
                      <li>
                        <span className="mega-menu__title">
                          Information Details
                        </span>
                        <ul className="list mega-menu__list">
                          <li>
                            <Link href="about-us-1" className="mega-menu__link">
                              {" "}
                              About Us{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="choose-us-1"
                              className="mega-menu__link">
                              {" "}
                              Why Choose Us{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="case-study-1"
                              className="mega-menu__link">
                              {" "}
                              Case Study{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="facts-1" className="mega-menu__link">
                              {" "}
                              History & Facts{" "}
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className="mega-menu__title">Help & Support</span>
                        <ul className="list mega-menu__list">
                          <li>
                            <Link href="faq-1" className="mega-menu__link">
                              {" "}
                              FAQ{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="help-center"
                              className="mega-menu__link">
                              {" "}
                              Help Center{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="getting-started"
                              className="mega-menu__link">
                              {" "}
                              Getting Started{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="help-center-details"
                              className="mega-menu__link">
                              {" "}
                              Help Center Details{" "}
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className="mega-menu__title">Let's Connect</span>
                        <ul className="list mega-menu__list">
                          <li>
                            <Link
                              href="case-study-details-1"
                              className="mega-menu__link">
                              {" "}
                              Case Study Details{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="leadership" className="mega-menu__link">
                              {" "}
                              Leadership Page{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="leadership-page"
                              className="mega-menu__link">
                              {" "}
                              Leadership Details{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="referral" className="mega-menu__link">
                              {" "}
                              Refferral{" "}
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className="mega-menu__title">Other Pages</span>
                        <ul className="list mega-menu__list">
                          <li>
                            <Link
                              href="pricing-plan-1"
                              className="mega-menu__link">
                              {" "}
                              Pricing Plan{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="error" className="mega-menu__link">
                              {" "}
                              404{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="coming-soon"
                              className="mega-menu__link">
                              {" "}
                              Coming Soon{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="terms-condition"
                              className="mega-menu__link">
                              {" "}
                              Terms & Condition{" "}
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="ms-auto border-end border-light-subtle">
                    <Link                  
                      href="/rtl"
                      className="primary-menu__link py-0 px-3">
                      {" "}
                      RTL
                    </Link>
                  </li>
                  <li>
                    <button
                      className="dark-mode-toggle"
                      onClick={() => setTheme(inactiveTheme)}>
                      {theme === "light" ? (
                        <span className="dark-mode-toggle__icon">
                          <span className="material-symbols-rounded mat-icon">
                            {" "}
                            dark_mode{" "}
                          </span>
                        </span>
                      ) : (
                        <span className="dark-mode-toggle__icon">
                          <span className="material-symbols-rounded mat-icon">
                            {" "}
                            light_mode{" "}
                          </span>
                        </span>
                      )}
                    </button>
                  </li>
                  <li>
                    <form action="#">
                      <div className="search-bar rounded search-bar--base-600">
                        <input
                          type="text"
                          className="search-bar__input"
                          placeholder="Search keyword"
                        />
                        <button className="search-bar__btn">
                          <span className="material-symbols-rounded mat-icon fw-300">
                            {" "}
                            search{" "}
                          </span>
                        </button>
                      </div>
                    </form>
                  </li>
                </ul>
              </nav>
              {/* <!-- Primary Menu End --> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
