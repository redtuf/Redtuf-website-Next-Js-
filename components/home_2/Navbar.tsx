import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Mobilemenu from "../Mobilemenu";
import { useTheme } from "next-themes";
import Link from "next/link";
import {useState, useEffect} from 'react';
import { useRouter } from "next/router";
import Button from 'react-bootstrap/Button';

const Navbar = ({handleShow}) => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme();
    const inactiveTheme = theme === "light" ? "dark" : "light";
    const openMobileMenu = () => {
      document.body.classList.toggle("mobile-menu--toggle")
    }
    const {asPath} = useRouter()
   
    useEffect(() => {
      setMounted(true)
    }, [])
    
    if (!mounted) {
      return null
    }
  return (
    <>
      <Mobilemenu />
      <div className="header-top-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="list list-row flex-wrap list--divider align-items-center justify-content-center justify-content-lg-start">
                <li>
                  <Link
                    href="#"
                    className="t-link group group-row group-xs align-items-center">
                    <span className="icon-box icon-box--xs circle bg-neutral-300">
                      <span className="material-symbols-rounded mat-icon size-20 fw-300 lh-1 clr-base">
                        mail
                      </span>
                    </span>
                    <span className="d-none d-xl-inline-block clr-heading">
                      info@redtuf.com
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="t-link group group-row group-xs align-items-center">
                    <span className="icon-box icon-box--xs circle bg-neutral-300">
                      <span className="material-symbols-rounded mat-icon size-20 fw-300 lh-1 clr-base">
                        phone_in_talk
                      </span>
                    </span>
                    <span className="d-none d-xl-inline-block clr-heading">
                      +91 9078500888
                    </span>
                  </Link>
                </li>
                <li className="t-be-md-0">
                  <Link
                    href="#"
                    className="t-link group group-row group-xs align-items-center">
                    <span className="icon-box icon-box--xs circle bg-neutral-300">
                      <span className="material-symbols-rounded mat-icon size-20 fw-300 lh-1 clr-base">
                        location_pin
                      </span>
                    </span>
                    <span className="d-none d-xl-inline-block clr-heading">
                    Bengaluru, KA 
                    </span>
                  </Link>
                </li>
                {/* <li className="ms-md-auto">
                  <Link
                    href="#"
                    className="t-link group group-row group-xs align-items-center">
                    <span className="icon-box icon-box--xs circle bg-neutral-300">
                      <span className="material-symbols-rounded mat-icon size-20 fw-300 lh-1 clr-base">
                        {" "}
                        alarm{" "}
                      </span>
                    </span>
                    <span className="d-none d-xl-inline-block clr-heading">
                      {" "}
                      08:00am-6:00pm{" "}
                    </span>
                  </Link>
                </li> */}
                <li className="d-none d-md-block ms-md-auto">
                  <ul className="list list-xs list-row">
                    <li>
                      <Link
                        href="https://m.facebook.com/redtuftechnologies?eav=AfZPt4AwJ7rzNJ0qQlqqZGn-jdZ2Tat7nReR6AO4VApj5i1ChBVzx5W7n5ItVuANck0&paipv=0" target="_blank"
                        className="t-link social-icon social-icon--xs clr-heading :clr-base lg-text">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#" target="_blank"
                        className="t-link social-icon social-icon--xs clr-heading :clr-base lg-text">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.instagram.com/redtuf_technologies" target="_blank"
                        className="t-link social-icon social-icon--xs clr-heading :clr-base lg-text">
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.linkedin.com/company/redtuf-technologies/" target="_blank"
                        className="t-link social-icon social-icon--xs clr-heading :clr-base lg-text">
                        <FaLinkedinIn />
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header Top End --> */}
      {/* <!-- Header  --> */}
      <header className="header header--2">
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
                            src="/images/redtuf-new-logo-aug.png"
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
                        <button onClick={openMobileMenu} className="bttn bttn--sqr bttn--sqr-sm bttn--light bttn--rounded mobile-menu__toggler">
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
                    src="/images/redtuf-new-logo-aug.png"
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
                    <Link href="/" className="primary-menu__link">
                      Home
                    </Link>
                    {/* <ul className="list sub-menu">
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
                    </ul> */}
                  </li>
                  {/* Service  menu*/}
                  <li>
                    <Link href="service-1" className="primary-menu__link">
                      {" "}
                      Service{" "}
                    </Link>
                    {/* <ul className="list sub-menu">
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
                    </ul> */}
                  </li>
                  {/* <li>
                    <Link href="service-1" className="primary-menu__link has-sub">
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
                  </li> */}

                  {/* Technology Menu */}
                  <li className="mega-menu--container">
                    <Link href="/technology" className="primary-menu__link has-megamenu">
                      Technology
                    </Link>
                    <ul className="list mega-menu">
                      <li>
                        <span className="mega-menu__title">
                        Web Design & Development
                        </span>
                        <ul className="list mega-menu__list">
                          <li>
                            <Link
                              href="/web-design"
                              className="mega-menu__link">
                              {" "}
                              Web Design{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/ui-ux"
                              className="mega-menu__link">
                              {" "}
                              UI/UX Design{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/web-app"
                              className="mega-menu__link">
                              {" "}
                              Web Application Developement{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/app-mentence" className="mega-menu__link">
                              {" "}
                              Application Mentence{" "}
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className="mega-menu__title">Digital Marketing</span>
                        <ul className="list mega-menu__list">
                          <li>
                            <Link href="/social-media-marketing" className="mega-menu__link">
                              {" "}
                              Social Media Marketing{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/seo"
                              className="mega-menu__link">
                              {" "}
                              SEO{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/google-ads"
                              className="mega-menu__link">
                              {" "}
                              Google Ads{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/email"
                              className="mega-menu__link">
                              {" "}
                              E-Mail Service{" "}
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className="mega-menu__title">Cloud Developement</span>
                        <ul className="list mega-menu__list">
                          <li>
                            <Link
                              href="/saas-development"
                              className="mega-menu__link">
                              {" "}
                              SaaS Development{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/cloud-migration"
                              className="mega-menu__link">
                              {" "}
                              Cloud Migration{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/cloud-managed-service"
                              className="mega-menu__link">
                              {" "}
                              Cloud Managed Service{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/ipaas-rpa" className="mega-menu__link">
                              {" "}
                              iPaas and RPA{" "}
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className="mega-menu__title">Other Services</span>
                        <ul className="list mega-menu__list">
                          <li>
                            <Link
                              href="/app-development"
                              className="mega-menu__link">
                              {" "}
                              App Development{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/training-project-management" className="mega-menu__link">
                              {" "}
                              Training & Project Management{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/consulting"
                              className="mega-menu__link">
                              {" "}
                              Consulting{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/resource-outsourcing"
                              className="mega-menu__link">
                              {" "}
                              Resource Outsourcing{" "}
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/training-project-management" className="primary-menu__link">
                      Training
                    </Link>
                  </li>
                  
                  <li>
                    <Link href="contact-us-1" className="primary-menu__link">
                      {" "}
                      Contact Us{" "}
                    </Link>
                  </li>

                  {/* Blog menu */}
                  <li>
                    <Link href="blog-page-1" className="primary-menu__link">
                      Blog
                    </Link>
                    {/* <ul className="list sub-menu">
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
                    </ul> */}
                  </li>
                  
                  {/* <li className="ms-auto">
                    <Link href={`/rtl/home-2`} className="primary-menu__link">
                      {" "}
                      RTL{" "}
                    </Link>
                  </li> */}
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
                  <Button  className="bttn bttn--base bttn-sm bttn-pill fw-md flex-shrink-0" onClick={handleShow}>
                  Get Quote
                  </Button>
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
