import { useTheme } from "next-themes";
import Link from "next/link";
import { useState} from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaDribbble
} from "react-icons/fa";

const Mobilemenu = () => {
    const openMobileMenu = () => {
      document.body.classList.toggle("mobile-menu--toggle")
    }
  
    const [activeMenu, setActiveMenu] = useState("")
  
  
    const clickHandler = (e:any)=> {
      if(activeMenu === e.target.innerHTML){
        setActiveMenu("")
      }else{
        setActiveMenu(e.target.innerHTML)
      }
    }
    return (
        <nav className="mobile-menu">
        <div className="mobile-menu__head">
          <Link href="/" className="mobile-menu__logo">
            <img
              src="/images/redtuf-new-logo-aug.png"
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
                  <span className="mobile-menu__info-text">
                    {" "}
                    +880 12345678{" "}
                  </span>
                </li>
                <li>
                  <span className="mobile-menu__info-text">
                    {" "}
                    demo@mail.com{" "}
                  </span>
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
              <li className={`${activeMenu =='Home' &&'is-active'}`}>
                <Link href="/" className="mobile-menu__link"
                onClick={clickHandler}
                >
                  Home
                </Link>
                {/* <ul className={`list mobile-menu__sub ${activeMenu == 'Home' && 'd-block'}`}>
                  <li>
                    <Link href="/" className="mobile-menu__sub-link" onClick={openMobileMenu}>
                      {" "}
                      Home 1{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="/home-2" className="mobile-menu__sub-link" onClick={openMobileMenu}>
                      {" "}
                      Home 2{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="/home-3" className="mobile-menu__sub-link" onClick={openMobileMenu}>
                      {" "}
                      Home 3{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="/home-4" className="mobile-menu__sub-link" onClick={openMobileMenu}>
                      {" "}
                      Home 4{" "}
                    </Link>
                  </li>
                </ul> */}
              </li>
              <li className={`${activeMenu =='Blog' &&'is-active'}`}>
                <Link href="/" onClick={clickHandler} className="mobile-menu__link ">
                  Blog
                </Link>
                {/* <ul className={`list mobile-menu__sub ${activeMenu == 'Blog' && 'd-block'}`}>
                  <li>
                    <Link
                      href="blog-page-1"
                      className="mobile-menu__sub-link" onClick={openMobileMenu}>
                      {" "}
                      Blog Page{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="blog-details-1"
                      className="mobile-menu__sub-link" onClick={openMobileMenu}>
                      {" "}
                      Blog Details{" "}
                    </Link>
                  </li>
                </ul> */}
              </li>
              <li className={`${activeMenu =='Service' &&'is-active'}`}>
                <Link href="#" onClick={clickHandler} className="mobile-menu__link ">
                  Service
                </Link>
                {/* <ul className={`list mobile-menu__sub ${activeMenu == 'Service' && 'd-block'}`}>
                  <li>
                    <Link href="service-1" className="mobile-menu__sub-link" onClick={openMobileMenu}>
                      {" "}
                      Service Page{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="service-details-1"
                      className="mobile-menu__sub-link" onClick={openMobileMenu}>
                      {" "}
                      Service Details{" "}
                    </Link>
                  </li>
                </ul> */}
              </li>
              <li>
                <Link href="contact-us-1" className="mobile-menu__link">
                  {" "}
                  Contact Us{" "}
                </Link>
              </li>
              <li className={`${activeMenu =='Technology' &&'is-active'}`}>
                <Link href="#" onClick={clickHandler} className="mobile-menu__link has-sub">
                  Technology
                </Link>
                <ul className={`list mobile-menu__sub ${activeMenu == 'Technology' && 'd-block'}`}>
                  <li>
                    <Link
                      href="#"
                      className="mobile-menu__deep-link" onClick={openMobileMenu}>
                      {" "}
                      Web Design{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="mobile-menu__deep-link" onClick={openMobileMenu}>
                      {" "}
                      UI/UX Design{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="mobile-menu__deep-link" onClick={openMobileMenu}>
                      {" "}
                      Web Application Development{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="mobile-menu__deep-link" onClick={openMobileMenu}>
                      {" "}
                      Social Media Marketing{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="mobile-menu__deep-link" onClick={openMobileMenu}>
                      {" "}
                      SEO{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="mobile-menu__deep-link" onClick={openMobileMenu}>
                      {" "}
                      Google Ads{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="mobile-menu__deep-link" onClick={openMobileMenu}>
                      {" "}
                      Email Service{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="mobile-menu__deep-link" onClick={openMobileMenu}>
                      {" "}
                      Sas Development{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="mobile-menu__deep-link" onClick={openMobileMenu}>
                      {" "}
                      Cloud Migration{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="mobile-menu__deep-link" onClick={openMobileMenu}>
                      {" "}
                     Cloud Managed Service{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="mobile-menu__deep-link" onClick={openMobileMenu}>
                      {" "}
                      iPaas and RPA{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="mobile-menu__deep-link" onClick={openMobileMenu}>
                      {" "}
                      App Development{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="mobile-menu__deep-link" onClick={openMobileMenu}>
                      {" "}
                      Training & Project Management{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="mobile-menu__deep-link" onClick={openMobileMenu}>
                      {" "}
                      Consulting{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="mobile-menu__deep-link" onClick={openMobileMenu}>
                      {" "}
                      Resource Outsourcing{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="error"
                      className="mobile-menu__deep-link" onClick={openMobileMenu}>
                      {" "}
                      404{" "}
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
                      New Message Received{" "}
                    </span>
                    <span className="mobile-notification__subtitle">
                      {" "}
                      We talked about a project on message{" "}
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
                      Install updates{" "}
                    </span>
                    <span className="mobile-notification__subtitle">
                      {" "}
                      New version released, install now!{" "}
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
                      New theme released{" "}
                    </span>
                    <span className="mobile-notification__subtitle">
                      {" "}
                      New theme style released, install now!{" "}
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
                      Payment received{" "}
                    </span>
                    <span className="mobile-notification__subtitle">
                      {" "}
                      $500 payment received{" "}
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
                  <span className="social-menu__text">facebook</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="social-menu social-menu--light">
                  <span className="social-menu__icon">
                    <FaTwitter />
                  </span>
                  <span className="social-menu__text">twitter</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="social-menu social-menu--light">
                  <span className="social-menu__icon">
                    <FaInstagram />
                  </span>
                  <span className="social-menu__text">instagram</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="social-menu social-menu--light">
                  <span className="social-menu__icon">
                    <FaLinkedinIn />
                  </span>
                  <span className="social-menu__text">linkedin</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="social-menu social-menu--light">
                  <span className="social-menu__icon">
                    <FaDribbble />
                  </span>
                  <span className="social-menu__text">dribbble</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Mobilemenu;