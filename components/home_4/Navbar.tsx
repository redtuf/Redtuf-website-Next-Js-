import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Mobilemenu from "../Mobilemenu";

const Navbar = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme();
  const inactiveTheme = theme === "light" ? "dark" : "light";

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        document.body.classList.add("header-fixed");
      } else {
        document.body.classList.remove("header-fixed");
      }
    });
  }, []);
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  const openMobileMenu = () => {
    document.body.classList.toggle("mobile-menu--toggle");
  };
  return (
    <header className={`header header--fixed header--4`}>
      <Mobilemenu />
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* <!-- Mobile Header  --> */}
            <div className="mobile-header">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="mobile-header__content">
                      {/* <!-- Logo  --> */}
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
                      {/* <!-- Logo end --> */}
                      {/* <!-- Mobile Menu Toggle  --> */}
                      <button
                        onClick={openMobileMenu}
                        className="bttn bttn--sqr bttn--sqr-sm bttn--light bttn--rounded mobile-menu__toggler">
                        <span className="material-symbols-rounded mat-icon fw-300">
                          {" "}
                          menu{" "}
                        </span>
                      </button>
                      {/* <!-- Mobile Menu Toggle End --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Mobile Header End --> */}
            {/* <!-- Primary Menu  --> */}
            <nav className="primary-menu align-items-center">
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
                      <Link href="home-2" className="sub-menu__link">
                        {" "}
                        Home 2{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="home-3" className="sub-menu__link">
                        {" "}
                        Home 3{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="home-4" className="sub-menu__link">
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
                      <Link
                        href="blog-details-1"
                        className="sub-menu__link">
                        {" "}
                        Blog details{" "}
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
                          <Link
                            href="about-us-1"
                            className="mega-menu__link">
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
                          <Link
                            href="leadership"
                            className="mega-menu__link">
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
                          <Link
                            href="referral"
                            className="mega-menu__link">
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
                    href="/rtl/home-4"
                    className="primary-menu__link py-0 px-3">
                    {" "}
                    RTL{" "}
                  </Link>
                </li>
                <li>
                  <button
                    className="dark-mode-toggle"
                    onClick={() => setTheme(inactiveTheme)}>
                    {theme != "light" ? (
                      <span className="dark-mode-toggle__light">
                        <span className="material-symbols-rounded mat-icon">
                          {" "}
                          light_mode{" "}
                        </span>
                      </span>
                    ) : (
                      <span className="dark-mode-toggle__dark">
                        <span className="material-symbols-rounded mat-icon">
                          {" "}
                          dark_mode{" "}
                        </span>
                      </span>
                    )}
                  </button>
                </li>
                <li>
                  <Link
                    href="pricing-plan-1"
                    className="bttn bttn--base bttn-sm bttn-pill fw-md flex-shrink-0">
                    {" "}
                    Free Quote{" "}
                  </Link>
                </li>
              </ul>
            </nav>
            {/* <!-- Primary Menu End --> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
