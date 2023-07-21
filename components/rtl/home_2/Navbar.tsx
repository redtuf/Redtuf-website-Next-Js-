import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Mobilemenu from "../../Mobilemenu";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const inactiveTheme = theme === "light" ? "dark" : "light";
  const openMobileMenu = () => {
    document.body.classList.toggle("mobile-menu--toggle");
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
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
                        {" "}
                        mail{" "}
                      </span>
                    </span>
                    <span className="d-none d-xl-inline-block clr-heading">
                      {" "}
                      @ البريد التجريبي{" "}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="t-link group group-row group-xs align-items-center">
                    <span className="icon-box icon-box--xs circle bg-neutral-300">
                      <span className="material-symbols-rounded mat-icon size-20 fw-300 lh-1 clr-base">
                        {" "}
                        phone_in_talk{" "}
                      </span>
                    </span>
                    <span className="d-none d-xl-inline-block clr-heading">
                      {" "}
                      +۷ (۹۰۳) ۸۸۰-۹۱-۸٥{" "}
                    </span>
                  </Link>
                </li>
                <li className="t-be-md-0">
                  <Link
                    href="#"
                    className="t-link group group-row group-xs align-items-center">
                    <span className="icon-box icon-box--xs circle bg-neutral-300">
                      <span className="material-symbols-rounded mat-icon size-20 fw-300 lh-1 clr-base">
                        {" "}
                        location_pin{" "}
                      </span>
                    </span>
                    <span className="d-none d-xl-inline-block clr-heading">
                      {" "}
                      سانتا آنا ، إلينوي ۸٥٤۸٦{" "}
                    </span>
                  </Link>
                </li>
                <li className="ms-md-auto">
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
                      ۰۸:۰۰ صباحًا - ٦:۰۰ مساءً{" "}
                    </span>
                  </Link>
                </li>
                <li className="d-none d-md-block">
                  <ul className="list list-xs list-row">
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--xs clr-heading :clr-base lg-text">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--xs clr-heading :clr-base lg-text">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--xs clr-heading :clr-base lg-text">
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
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
                        <Link href="/rtl" className="logo">
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
                <Link href="/rtl" className="logo">
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
                      بيت{" "}
                    </Link>
                    <ul className="list sub-menu">
                      <li>
                        <Link href="/rtl" className="sub-menu__link">
                          {" "}
                          بيت ۱{" "}
                        </Link>
                      </li>
                      <li>
                        <Link href="/rtl/home-2" className="sub-menu__link">
                          {" "}
                          بيت ۲{" "}
                        </Link>
                      </li>
                      <li>
                        <Link href="/rtl/home-3" className="sub-menu__link">
                          {" "}
                          بيت ۳{" "}
                        </Link>
                      </li>
                      <li>
                        <Link href="/rtl/home-4" className="sub-menu__link">
                          {" "}
                          بيت ٤{" "}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="#" className="primary-menu__link has-sub">
                      {" "}
                      مدونة{" "}
                    </Link>
                    <ul className="list sub-menu">
                      <li>
                        <Link href="/rtl/blog-page-1" className="sub-menu__link">
                          {" "}
                          صفحة المدونة{" "}
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/rtl/blog-details-1"
                          className="sub-menu__link">
                          {" "}
                          تفاصيل المدونة{" "}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="#" className="primary-menu__link has-sub">
                      {" "}
                      خدمة{" "}
                    </Link>
                    <ul className="list sub-menu">
                      <li>
                        <Link href="/rtl/service-1" className="sub-menu__link">
                          {" "}
                          صفحة الخدمة{" "}
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/rtl/service-details-1"
                          className="sub-menu__link">
                          {" "}
                          تفاصيل الخدمة{" "}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      href="/rtl/contact-us-1"
                      className="primary-menu__link">
                      {" "}
                      اتصل بنا{" "}
                    </Link>
                  </li>
                  <li className="mega-menu--container">
                    <Link href="#" className="primary-menu__link has-megamenu">
                      {" "}
                      الصفحات{" "}
                    </Link>
                    <ul className="list mega-menu">
                      <li>
                        <span className="mega-menu__title">
                          تفاصيل المعلومات
                        </span>
                        <ul className="list mega-menu__list">
                          <li>
                            <Link
                              href="/rtl/about-us-1"
                              className="mega-menu__link">
                              {" "}
                              معلومات عنا{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/rtl/choose-us-1"
                              className="mega-menu__link">
                              {" "}
                              لماذا أخترتنا{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/rtl/case-study-1"
                              className="mega-menu__link">
                              {" "}
                              دراسة الحالة{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/rtl/facts-1"
                              className="mega-menu__link">
                              {" "}
                              التاريخ والحقائق{" "}
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className="mega-menu__title">ساعد لدعم</span>
                        <ul className="list mega-menu__list">
                          <li>
                            <Link href="faq-1" className="mega-menu__link">
                              {" "}
                              التعليمات{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/rtl/help-center"
                              className="mega-menu__link">
                              {" "}
                              مركز المساعدة{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/rtl/getting-started"
                              className="mega-menu__link">
                              {" "}
                              ابدء{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/rtl/help-center-details"
                              className="mega-menu__link">
                              {" "}
                              تفاصيل مركز المساعدة{" "}
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className="mega-menu__title">دعونا نتواصل</span>
                        <ul className="list mega-menu__list">
                          <li>
                            <Link
                              href="/rtl/case-study-details-1"
                              className="mega-menu__link">
                              {" "}
                              تفاصيل دراسة الحالة{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/rtl/leadership"
                              className="mega-menu__link">
                              {" "}
                              صفحة القيادة{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/rtl/leadership-page"
                              className="mega-menu__link">
                              {" "}
                              تفاصيل القيادة{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/rtl/referral"
                              className="mega-menu__link">
                              {" "}
                              الإحالة{" "}
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className="mega-menu__title">صفحات أخرى</span>
                        <ul className="list mega-menu__list">
                          <li>
                            <Link
                              href="/rtl/pricing-plan-1"
                              className="mega-menu__link">
                              {" "}
                              خطة التسعير{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/rtl/error" className="mega-menu__link">
                              {" "}
                              خطأ{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/rtl/coming-soon"
                              className="mega-menu__link">
                              {" "}
                              قريباً{" "}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/rtl/terms-condition"
                              className="mega-menu__link">
                              {" "}
                              الشروط والأحكام{" "}
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="ms-auto">
                    <Link href="/home-2" className="primary-menu__link">
                      {" "}
                      LTR{" "}
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
                      إقتباس حر{" "}
                    </Link>
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
