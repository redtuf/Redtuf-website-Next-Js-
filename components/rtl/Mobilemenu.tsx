import Link from "next/link";
import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaDribbble,
} from "react-icons/fa";

const Mobilemenu = () => {
  const openMobileMenu = () => {
    document.body.classList.toggle("mobile-menu--toggle");
  };

  const [activeMenu, setActiveMenu] = useState("");

  const clickHandler = (e: any) => {
    if (activeMenu === e.target.innerHTML) {
      setActiveMenu("");
    } else {
      setActiveMenu(e.target.innerHTML);
    }
  };
  return (
    <nav className="mobile-menu">
      <div className="mobile-menu__head">
        <Link href="/rtl" className="mobile-menu__logo">
          <img
            src="/images/logo-light.png"
            alt="image"
            className="mobile-menu__logo-img"
          />
        </Link>
        <button className="mobile-menu__close" onClick={openMobileMenu}>
          <span className="material-symbols-rounded mat-icon fw-300">
            {" "}
            close{" "}
          </span>
        </button>
      </div>
      <div className="mobile-menu__body">
        <div className="mobile-menu__start">
          <div className="mobile-menu__info mt-auto">
            <h4 className="clr-neutral mb-2">Get in touch</h4>
            <ul className="list mobile-menu__info-list">
              <li>
                <span className="mobile-menu__info-text"> +880 12345678 </span>
              </li>
              <li>
                <span className="mobile-menu__info-text"> demo@mail.com </span>
              </li>
              <li>
                <span className="mobile-menu__info-text">
                  {" "}
                  62 Wakehurst Street Bakersfield{" "}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mobile-menu__center">
          <ul className="list mobile-menu__list">
            <li className={`${activeMenu == "بيت" && "is-active"}`}>
              <Link
                href="#"
                className="mobile-menu__link has-sub"
                onClick={clickHandler}>
                بيت
              </Link>
              <ul
                className={`list mobile-menu__sub ${
                  activeMenu == "بيت" && "d-block"
                }`}>
                <li>
                  <Link
                    href="/rtl"
                    className="mobile-menu__sub-link"
                    onClick={openMobileMenu}>
                    {" "}
                    بيت 1{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rtl/home-2"
                    className="mobile-menu__sub-link"
                    onClick={openMobileMenu}>
                    {" "}
                    بيت 2{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rtl/home-3"
                    className="mobile-menu__sub-link"
                    onClick={openMobileMenu}>
                    {" "}
                    بيت 3{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rtl/home-4"
                    className="mobile-menu__sub-link"
                    onClick={openMobileMenu}>
                    {" "}
                    بيت 4{" "}
                  </Link>
                </li>
              </ul>
            </li>
            <li className={`${activeMenu == "مدونة" && "is-active"}`}>
              <Link
                href="#"
                onClick={clickHandler}
                className="mobile-menu__link has-sub">
                مدونة
              </Link>
              <ul
                className={`list mobile-menu__sub ${
                  activeMenu == "مدونة" && "d-block"
                }`}>
                <li>
                  <Link
                    onClick={openMobileMenu}
                    href="/rtl/blog-page-1"
                    className="mobile-menu__sub-link">
                    {" "}
                    صفحة المدونة{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={openMobileMenu}
                    href="/rtl/blog-details-1"
                    className="mobile-menu__sub-link">
                    {" "}
                    تفاصيل المدونة{" "}
                  </Link>
                </li>
              </ul>
            </li>
            <li className={`${activeMenu == "خدمة" && "is-active"}`}>
              <Link
                href="#"
                onClick={clickHandler}
                className="mobile-menu__link has-sub">
                خدمة
              </Link>
              <ul
                className={`list mobile-menu__sub ${
                  activeMenu == "خدمة" && "d-block"
                }`}>
                <li>
                  <Link
                    onClick={openMobileMenu}
                    href="/rtl/service-1"
                    className="mobile-menu__sub-link">
                    {" "}
                    صفحة الخدمة{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={openMobileMenu}
                    href="/rtl/service-details-1"
                    className="mobile-menu__sub-link">
                    {" "}
                    تفاصيل الخدمة{" "}
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                onClick={openMobileMenu}
                href="/rtl/contact-us-1"
                className="mobile-menu__link">
                {" "}
                اتصل بنا{" "}
              </Link>
            </li>
            <li className={`${activeMenu == "الصفحات" && "is-active"}`}>
              <Link
                href="#"
                onClick={clickHandler}
                className="mobile-menu__link has-sub">
                الصفحات
              </Link>
              <ul
                className={`list mobile-menu__sub ${
                  activeMenu == "الصفحات" && "d-block"
                }`}>
                <li>
                  <Link
                    onClick={openMobileMenu}
                    href="/rtl/about-us-1"
                    className="mobile-menu__deep-link">
                    {" "}
                    معلومات عنا{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={openMobileMenu}
                    href="/rtl/choose-us-1"
                    className="mobile-menu__deep-link">
                    {" "}
                    لماذا أخترتنا{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={openMobileMenu}
                    href="/rtl/case-study-1"
                    className="mobile-menu__deep-link">
                    {" "}
                    دراسة الحالة{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={openMobileMenu}
                    href="/rtl/facts-1"
                    className="mobile-menu__deep-link">
                    {" "}
                    التاريخ والحقائق{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={openMobileMenu}
                    href="/rtl/faq-1"
                    className="mobile-menu__deep-link">
                    {" "}
                    التعليمات{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={openMobileMenu}
                    href="/rtl/help-center"
                    className="mobile-menu__deep-link">
                    {" "}
                    مركز المساعدة{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={openMobileMenu}
                    href="/rtl/getting-started"
                    className="mobile-menu__deep-link">
                    {" "}
                    ابدء{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={openMobileMenu}
                    href="/rtl/help-center-details"
                    className="mobile-menu__deep-link">
                    {" "}
                    تفاصيل مركز المساعدة{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={openMobileMenu}
                    href="/rtl/case-study-details-1"
                    className="mobile-menu__deep-link">
                    {" "}
                    تفاصيل دراسة الحالة{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={openMobileMenu}
                    href="/rtl/leadership"
                    className="mobile-menu__deep-link">
                    {" "}
                    صفحة القيادة{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={openMobileMenu}
                    href="/rtl/leadership-page"
                    className="mobile-menu__deep-link">
                    {" "}
                    تفاصيل القيادة{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={openMobileMenu}
                    href="/rtl/referral"
                    className="mobile-menu__deep-link">
                    {" "}
                    الإحالة{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={openMobileMenu}
                    href="/rtl/pricing-plan-1"
                    className="mobile-menu__deep-link">
                    {" "}
                    خطة التسعير{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={openMobileMenu}
                    href="/rtl/error"
                    className="mobile-menu__deep-link">
                    {" "}
                    خطأ{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={openMobileMenu}
                    href="/rtl/coming-soon"
                    className="mobile-menu__deep-link">
                    {" "}
                    قريباً{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={openMobileMenu}
                    href="/rtl/terms-condition"
                    className="mobile-menu__deep-link">
                    {" "}
                    الشروط والأحكام{" "}
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="mobile-menu__end">
          <div className="search-bar pill">
            <input
              type="text"
              className="search-bar__input"
              placeholder="Search keyword"
            />
            <button className="search-bar__btn">
              <span className="material-symbols-rounded mat-icon fw-200">
                {" "}
                search{" "}
              </span>
            </button>
          </div>
          <ul className="list mt-6">
            <li>
              <Link href="#" className="mobile-notification">
                <span className="mobile-notification__icon mobile-notification__icon-primary">
                  <span className="material-symbols-rounded mat-icon">
                    {" "}
                    mark_email_unread{" "}
                  </span>
                </span>
                <span className="mobile-notification__content">
                  <span className="mobile-notification__title">
                    {" "}
                    تم استلام رسالة جديدة{" "}
                  </span>
                  <span className="mobile-notification__subtitle">
                    {" "}
                    تحدثنا عن مشروع في الرسالة{" "}
                  </span>
                </span>
              </Link>
            </li>
            <li>
              <Link href="#" className="mobile-notification">
                <span className="mobile-notification__icon mobile-notification__icon-secondary">
                  <span className="material-symbols-rounded mat-icon">
                    {" "}
                    tips_and_updates{" "}
                  </span>
                </span>
                <span className="mobile-notification__content">
                  <span className="mobile-notification__title">
                    {" "}
                    تثبيت التحديثات{" "}
                  </span>
                  <span className="mobile-notification__subtitle">
                    {" "}
                    تم إصدار إصدار جديد ، قم بالتثبيت الآن!{" "}
                  </span>
                </span>
              </Link>
            </li>
            <li>
              <Link href="#" className="mobile-notification">
                <span className="mobile-notification__icon mobile-notification__icon-success">
                  <span className="material-symbols-rounded mat-icon">
                    {" "}
                    add_photo_alternate{" "}
                  </span>
                </span>
                <span className="mobile-notification__content">
                  <span className="mobile-notification__title">
                    {" "}
                    تم إصدار موضوع جديد{" "}
                  </span>
                  <span className="mobile-notification__subtitle">
                    {" "}
                    تم إصدار نمط موضوع جديد ، قم بالتثبيت الآن!{" "}
                  </span>
                </span>
              </Link>
            </li>
            <li>
              <Link href="#" className="mobile-notification">
                <span className="mobile-notification__icon mobile-notification__icon-warning">
                  <span className="material-symbols-rounded mat-icon">
                    {" "}
                    account_balance_wallet{" "}
                  </span>
                </span>
                <span className="mobile-notification__content">
                  <span className="mobile-notification__title">
                    {" "}
                    تم استلام الدفعة{" "}
                  </span>
                  <span className="mobile-notification__subtitle">
                    {" "}
                    $٥۰۰ تم استلام الدفعة{" "}
                  </span>
                </span>
              </Link>
            </li>
          </ul>
          <ul className="list list--sm mt-auto">
            <li>
              <Link href="#" className="social-menu social-menu--light">
                <span className="social-menu__icon">
                  <FaFacebookF />
                </span>
                <span className="social-menu__text">فيسبوك</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="social-menu social-menu--light">
                <span className="social-menu__icon">
                  <FaTwitter />
                </span>
                <span className="social-menu__text">تويتر</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="social-menu social-menu--light">
                <span className="social-menu__icon">
                  <FaInstagram />
                </span>
                <span className="social-menu__text">الانستغرام</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="social-menu social-menu--light">
                <span className="social-menu__icon">
                  <FaLinkedinIn />
                </span>
                <span className="social-menu__text">ينكدين</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="social-menu social-menu--light">
                <span className="social-menu__icon">
                  <FaDribbble />
                </span>
                <span className="social-menu__text">لعابه</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Mobilemenu;
