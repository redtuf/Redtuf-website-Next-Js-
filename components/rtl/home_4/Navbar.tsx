import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Mobilemenu from "../../Mobilemenu";

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
                      <Link href="/rtl" className="logo">
                        <img src="/images/logo.png" alt="image" className="logo__img logo__dark" />
                        <img src="/images/logo-light.png" alt="image" className="logo__img logo__light" />
                      </Link>
                      {/* <!-- Logo end --> */}
                      {/* <!-- Mobile Menu Toggle  --> */}
                      <button onClick={openMobileMenu} className="bttn bttn--sqr bttn--sqr-sm bttn--light bttn--rounded mobile-menu__toggler">
                        <span className="material-symbols-rounded mat-icon fw-300"> menu </span>
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
                <img src="/images/logo.png" alt="image" className="logo__img logo__dark" />
                <img src="/images/logo-light.png" alt="image" className="logo__img logo__light" />
              </Link>
              {/* <!-- Logo End --> */}
              <ul className="list primary-menu__list">
                <li>
                  <Link href="#" className="primary-menu__link has-sub"> بيت </Link>
                  <ul className="list sub-menu">
                    <li>
                      <Link href="/rtl" className="sub-menu__link"> بيت 1 </Link>
                    </li>
                    <li>
                      <Link href="/rtl/home-2" className="sub-menu__link"> بيت 2 </Link>
                    </li>
                    <li>
                      <Link href="/rtl/home-3" className="sub-menu__link"> بيت 3 </Link>
                    </li>
                    <li>
                      <Link href="/rtl/home-4" className="sub-menu__link"> بيت 4 </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="#" className="primary-menu__link has-sub"> مدونة </Link>
                  <ul className="list sub-menu">
                    <li>
                      <Link href="/rtl/blog-page-1" className="sub-menu__link"> صفحة المدونة </Link>
                    </li>
                    <li>
                      <Link href="/rtl/blog-details-1" className="sub-menu__link"> تفاصيل المدونة </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="#" className="primary-menu__link has-sub"> خدمة </Link>
                  <ul className="list sub-menu">
                    <li>
                      <Link href="/rtl/service-1" className="sub-menu__link"> صفحة الخدمة </Link>
                    </li>
                    <li>
                      <Link href="/rtl/service-details-1" className="sub-menu__link"> تفاصيل الخدمة </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="contact-us-1" className="primary-menu__link"> اتصل بنا </Link>
                </li>
                <li className="mega-menu--container">
                  <Link href="#" className="primary-menu__link has-megamenu"> الصفحات </Link>
                  <ul className="list mega-menu">
                    <li>
                      <span className="mega-menu__title">تفاصيل المعلومات</span>
                      <ul className="list mega-menu__list">
                        <li>
                          <Link href="/rtl/about-us-1" className="mega-menu__link"> معلومات عنا </Link>
                        </li>
                        <li>
                          <Link href="/rtl/choose-us-1" className="mega-menu__link"> لماذا أخترتنا </Link>
                        </li>
                        <li>
                          <Link href="/rtl/case-study-1" className="mega-menu__link"> دراسة الحالة </Link>
                        </li>
                        <li>
                          <Link href="/rtl/facts-1" className="mega-menu__link"> التاريخ والحقائق </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span className="mega-menu__title">ساعد لدعم</span>
                      <ul className="list mega-menu__list">
                        <li>
                          <Link href="/rtl/faq-1" className="mega-menu__link"> التعليمات </Link>
                        </li>
                        <li>
                          <Link href="/rtl/help-center" className="mega-menu__link"> مركز المساعدة </Link>
                        </li>
                        <li>
                          <Link href="/rtl/getting-started" className="mega-menu__link"> ابدء </Link>
                        </li>
                        <li>
                          <Link href="/rtl/help-center-details" className="mega-menu__link"> تفاصيل مركز المساعدة </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span className="mega-menu__title">دعونا نتواصل</span>
                      <ul className="list mega-menu__list">
                        <li>
                          <Link href="/rtl/case-study-details-1" className="mega-menu__link"> تفاصيل دراسة الحالة </Link>
                        </li>
                        <li>
                          <Link href="/rtl/leadership" className="mega-menu__link"> صفحة القيادة </Link>
                        </li>
                        <li>
                          <Link href="/rtl/leadership-page" className="mega-menu__link"> تفاصيل القيادة </Link>
                        </li>
                        <li>
                          <Link href="/rtl/referral" className="mega-menu__link"> الإحالة </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span className="mega-menu__title">صفحات أخرى</span>
                      <ul className="list mega-menu__list">
                        <li>
                          <Link href="/rtl/pricing-plan-1" className="mega-menu__link"> خطة التسعير </Link>
                        </li>
                        <li>
                          <Link href="/rtl/error" className="mega-menu__link"> 404 </Link>
                        </li>
                        <li>
                          <Link href="/rtl/coming-soon" className="mega-menu__link"> قريباً </Link>
                        </li>
                        <li>
                          <Link href="/rtl/terms-condition" className="mega-menu__link"> الشروط والأحكام </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="ms-auto border-end border-light-subtle">
                  <Link href="/home-4" className="primary-menu__link py-0 px-3"> LTR </Link>
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
                  <Link href="pricing-plan-1" className="bttn bttn--base bttn-sm bttn-pill fw-md flex-shrink-0"> إقتباس حر </Link>
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
