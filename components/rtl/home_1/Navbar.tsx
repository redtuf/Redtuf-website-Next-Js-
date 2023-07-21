import { useTheme } from "next-themes";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Mobilemenu from "../../Mobilemenu";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false)
  const inactiveTheme = theme === "light" ? "dark" : "light";
  const openMobileMenu = () => {
    document.body.classList.toggle("mobile-menu--toggle");
  };
 
  useEffect(() => {
    setMounted(true)
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
              <Link href="/rtl" className="logo">
                <img src="/images/logo.png" alt="image" className="logo__img logo__dark" />
                <img src="/images/logo-light.png" alt="image" className="logo__img logo__light" />
              </Link>
              {/* <!-- Logo End --> */}
              {/* <!-- Info List --> */}
              <ul className="list info-divider d-none d-xl-flex">
                <li>
                  <div className="group group-xs group-row align-items-center">
                    <div className="icon-box circle icon-box--sm bg-neutral-200 flex-shrink-0">
                      <span className="material-symbols-rounded mat-icon fw-300 clr-base"> phone_in_talk </span>
                    </div>
                    <Link href="#" className="info-divider__content t-link">
                      <span className="info-divider__content-title mb-1"> +۷ (۹۰۳) ۸۸۰-۹۱-۸٥ </span>
                      <span className="info-divider__content-text"> demo@example.com </span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="group group-xs group-row align-items-center">
                    <div className="icon-box circle icon-box--sm bg-neutral-200 flex-shrink-0">
                      <span className="material-symbols-rounded mat-icon fw-300 clr-base"> schedule </span>
                    </div>
                    <Link href="#" className="info-divider__content t-link">
                      <span className="info-divider__content-title mb-1"> 8:00AM - 6:00PM </span>
                      <span className="info-divider__content-text"> الاثنين الى السبت </span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="group group-xs group-row align-items-center">
                    <div className="icon-box circle icon-box--sm bg-neutral-200 flex-shrink-0">
                      <span className="material-symbols-rounded mat-icon fw-300 clr-base"> location_on </span>
                    </div>
                    <Link href="#" className="info-divider__content t-link">
                      <span className="info-divider__content-title mb-1"> ۲۹۷۲ طريق ويستهايمر. </span>
                      <span className="info-divider__content-text"> سانتا آنا ، إلينوي ۸٥٤۸٦ </span>
                    </Link>
                  </div>
                </li>
              </ul>
              {/* <!-- Info List End --> */}
              {/* <!-- Social Icon  --> */}
              <ul className="list list-xs list-row d-none d-xl-flex">
                <li>
                  <Link href="#" className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                    <FaLinkedinIn />
                  </Link>
                </li>
              </ul>
              {/* <!-- Social Icon End --> */}
              {/* <!-- Mobile Menu Toggle  --> */}
              <button onClick={openMobileMenu} className="bttn bttn--sqr bttn--sqr-sm bttn--light bttn--rounded d-xl-none mobile-menu__toggler">
                <span className="material-symbols-rounded mat-icon fw-300"> menu </span>
              </button>
              {/* <!-- Mobile Menu Toggle End --> */}
            </div>
            {/* <!-- Header Top Style One End --> */}
            {/* <!-- Primary Menu  --> */}
            <nav className="primary-menu">
              <ul className="list primary-menu__list">
                <li>
                  <Link href="#" className="primary-menu__link has-sub"> بيت </Link>
                  <ul className="list sub-menu">
                    <li>
                      <Link href="/rtl" className="sub-menu__link"> المنزل 1 </Link>
                    </li>
                    <li>
                      <Link href="/rtl/home-2" className="sub-menu__link"> المنزل 2 </Link>
                    </li>
                    <li>
                      <Link href="/rtl/home-3" className="sub-menu__link"> المنزل 3 </Link>
                    </li>
                    <li>
                      <Link href="/rtl/home-4" className="sub-menu__link"> المنزل 4 </Link>
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
                      <span className="mega-menu__title">دعنا نتواصل</span>
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
                          <Link href="/rtl/error" className="mega-menu__link"> خطأ </Link>
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
                  <Link href="/" className="primary-menu__link py-0 px-3"> LTR </Link>
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
                      <input type="text" className="search-bar__input" placeholder="كلمة البحث" />
                      <button className="search-bar__btn">
                        <span className="material-symbols-rounded mat-icon fw-300"> search </span>
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
