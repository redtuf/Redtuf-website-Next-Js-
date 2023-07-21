import Link from "next/link";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
  } from "react-icons/fa";

const Footer = () => {
    return (
      <footer className="footer-2">
      <div className="footer-2__top section--sm">
        <div className="container">
          <div className="row g-4 justify-content-xl-between">
            <div className="col-md-6 col-xl-5">
              <Link href="/rtl" className="logo mb-6">
                <img src="/images/logo-color.png" alt="image" className="logo__img" />
              </Link>
              <p className="clr-light t-short-para"> نحن نتعامل مع العوامل تكنولوجيا المعلومات والاستشارات تعزز نجاح الأعمال. نحن نقدم مجموعة واسعة للخدمات التكنولوجية. </p>
            </div>
            <div className="col-md-6 col-xl-5">
              <h5 className="clr-light mb-5"> اشترك في نشرتنا الإخبارية </h5>
              <div className="newsletter-1 flex-sm-row flex-md-column flex-lg-row align-items-start align-items-sm-center align-items-md-start align-items-lg-center">
                <input type="text" className="newsletter-1__input" placeholder="Enter your email address" />
                <button className="bttn bttn-pill bttn-md bttn--light-accent align-items-center fw-md gap-2 flex-shrink-0">
                  <span className="d-inline-block"> يشترك </span>
                  <span className="material-symbols-rounded mat-icon fw-300"> arrow_right_alt </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-2__content section--sm">
              <div className="row g-4">
                <div className="col-sm-6 col-md-3 col-xl-2">
                  <h5 className="clr-light mb-5"> خدمات تكنولوجيا المعلومات </h5>
                  <ul className="list list-xsm">
                    <li>
                      <Link href="about-us-1" className="t-link clr-light :clr-accent"> معلومات عنا </Link>
                    </li>
                    <li>
                      <Link href="service-1" className="t-link clr-light :clr-accent"> خدمة </Link>
                    </li>
                    <li>
                      <Link href="case-study-1" className="t-link clr-light :clr-accent"> دراسة الحالة </Link>
                    </li>
                    <li>
                      <Link href="pricing-plan-1" className="t-link clr-light :clr-accent"> خطة التسعير </Link>
                    </li>
                    <li>
                      <Link href="choose-us-1" className="t-link clr-light :clr-accent"> لماذا أخترتنا </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 col-md-3 col-xl-2">
                  <h5 className="clr-light mb-5"> رابط سريع </h5>
                  <ul className="list list-xs">
                    <li>
                      <Link href="referral" className="t-link clr-light :clr-accent"> الإحالة </Link>
                    </li>
                    <li>
                      <Link href="coming-soon" className="t-link clr-light :clr-accent"> قريباً </Link>
                    </li>
                    <li>
                      <Link href="terms-condition" className="t-link clr-light :clr-accent"> الشروط والأحكام </Link>
                    </li>
                    <li>
                      <Link href="blog-page-1" className="t-link clr-light :clr-accent"> النشرة الإخبارية </Link>
                    </li>
                    <li>
                      <Link href="error" className="t-link clr-light :clr-accent"> 404 </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 col-md-3 col-xl-2">
                  <h5 className="clr-light mb-5"> يدعم </h5>
                  <ul className="list list-xs">
                    <li>
                      <Link href="contact-us-1" className="t-link clr-light :clr-accent"> اتصل بنا </Link>
                    </li>
                    <li>
                      <Link href="leadership" className="t-link clr-light :clr-accent"> صفحة القيادة </Link>
                    </li>
                    <li>
                      <Link href="facts-1" className="t-link clr-light :clr-accent"> حقائق </Link>
                    </li>
                    <li>
                      <Link href="faq-1" className="t-link clr-light :clr-accent"> التعليمات </Link>
                    </li>
                    <li>
                      <Link href="help-center" className="t-link clr-light :clr-accent"> مركز المساعدة </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 col-md-3 col-xl-2">
                  <h5 className="clr-light mb-5"> تعلم الحقيقة </h5>
                  <ul className="list list-xsm">
                    <li>
                      <Link href="leadership-page" className="t-link clr-light :clr-accent"> تفاصيل القيادة </Link>
                    </li>
                    <li>
                      <Link href="getting-started" className="t-link clr-light :clr-accent"> ابدء </Link>
                    </li>
                    <li>
                      <Link href="blog-details-1" className="t-link clr-light :clr-accent"> تفاصيل المدونة </Link>
                    </li>
                    <li>
                      <Link href="service-details-1" className="t-link clr-light :clr-accent"> تفاصيل الخدمة </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 col-md-4 col-xxl-2">
                  <h5 className="clr-light mb-5"> اتصل بنا </h5>
                  <ul className="list list-xsm">
                    <li>
                      <div className="mobile-notification">
                        <span className="mobile-notification__icon bg-danger">
                          <span className="material-symbols-rounded mat-icon clr-light size-32"> phone_in_talk </span>
                        </span>
                        <span className="mobile-notification__content">
                          <span className="sm-text d-block clr-light"> هاتف </span>
                          <Link href="#" className="t-link mobile-notification__title :clr-accent"> (482) 504 - 3207 </Link>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="mobile-notification">
                        <span className="mobile-notification__icon bg-success">
                          <span className="material-symbols-rounded mat-icon clr-light size-32"> local_post_office </span>
                        </span>
                        <span className="mobile-notification__content">
                          <span className="sm-text d-block clr-light"> بريد إلكتروني </span>
                          <Link href="#" className="t-link mobile-notification__title :clr-accent"> demo@mail.com </Link>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="mobile-notification">
                        <span className="mobile-notification__icon bg-warning">
                          <span className="material-symbols-rounded mat-icon clr-light size-32"> pin_drop </span>
                        </span>
                        <span className="mobile-notification__content">
                          <span className="sm-text d-block clr-light"> موقع </span>
                          <span className="mobile-notification__title"> سانتا آنا ، إيل ، أوسا </span>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 col-md-4 col-xl-3 col-xxl-2">
                  <h5 className="clr-light mb-5"> صالة عرض </h5>
                  <ul className="list list-row flex-wrap list-xsm">
                    <li>
                      <Link href="#" className="t-link">
                        <img src="/images/gallery-1.png" alt="image" className="img-fluid" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="t-link">
                        <img src="/images/gallery-2.png" alt="image" className="img-fluid" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="t-link">
                        <img src="/images/gallery-3.png" alt="image" className="img-fluid" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="t-link">
                        <img src="/images/gallery-4.png" alt="image" className="img-fluid" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-2__bottom">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6">
              <p className="clr-light text-center text-md-start"> حقوق الطبع والنشر 2023 إيتشيكس-+ جميع الحقوق محفوظة. </p>
            </div>
            <div className="col-md-6">
              <ul className="list list-xs list-row justify-content-center justify-content-md-end">
                <li>
                  <Link href="#" className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle">
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle">
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle">
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle">
                  <FaLinkedinIn />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;