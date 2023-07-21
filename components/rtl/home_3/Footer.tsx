import Link from 'next/link';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
  } from "react-icons/fa";

const Footer = () => {
    return (
      <footer className="footer-3 bg-neutral-100">
      <div className="section">
        <div className="container">
          <div className="row g-4">
            <div className="col-xl-4">
              <Link href="/rtl/home-3" className="logo mb-6">
                <img src="/images/logo.png" alt="image" className="logo__img" />
              </Link>
              <p className="mb-6 t-short-para"> نحن نتعامل مع خدمات تكنولوجيا المعلومات الاحترافية من Aspects. نزيد من نجاح الأعمال مع التكنولوجيا ، جعل تكنولوجيا المعلومات جزءًا من عملك ، خدمات تكنولوجيا المعلومات الممتازة لنجاحك. </p>
              <p>
                <span className="fw-md">العنوان:</span> 27 شارع التقسيم ، نيويورك ، نيويورك 10002 ، الولايات المتحدة الأمريكية
              </p>
              <p>
                <span className="fw-md">بريد إلكتروني:</span> demo@mail.com
              </p>
              <p>
                <span className="fw-md">هاتف:</span> +8 91230 456 789
              </p>
            </div>
            <div className="col-md-3 col-xl-2">
              <h5 className="mb-10"> خدمات تكنولوجيا المعلومات </h5>
              <ul className="list list-xsm">
                <li>
                  <Link href="about-us-1" className="t-link clr-heading :clr-base"> معلومات عنا </Link>
                </li>
                <li>
                  <Link href="service-1" className="t-link clr-heading :clr-base"> خدمة </Link>
                </li>
                <li>
                  <Link href="case-study-1" className="t-link clr-heading :clr-base"> دراسة الحالة </Link>
                </li>
                <li>
                  <Link href="pricing-plan-1" className="t-link clr-heading :clr-base"> خطة التسعير </Link>
                </li>
                <li>
                  <Link href="choose-us-1" className="t-link clr-heading :clr-base"> لماذا أخترتنا </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-xl-2">
              <h5 className="mb-10"> رابط سريع </h5>
              <ul className="list list-xs">
                <li>
                  <Link href="referral" className="t-link clr-heading :clr-base"> الإحالة </Link>
                </li>
                <li>
                  <Link href="coming-soon" className="t-link clr-heading :clr-base"> قريباً </Link>
                </li>
                <li>
                  <Link href="terms-condition" className="t-link clr-heading :clr-base"> الشروط والأحكام </Link>
                </li>
                <li>
                  <Link href="blog-page-1" className="t-link clr-heading :clr-base"> النشرة الإخبارية </Link>
                </li>
                <li>
                  <Link href="error" className="t-link clr-heading :clr-base"> 404 </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-xl-2">
              <h5 className="mb-10"> يدعم </h5>
              <ul className="list list-xs">
                <li>
                  <Link href="contact-us-1" className="t-link clr-heading :clr-base"> اتصل بنا </Link>
                </li>
                <li>
                  <Link href="leadership" className="t-link clr-heading :clr-base"> صفحة القيادة </Link>
                </li>
                <li>
                  <Link href="facts-1" className="t-link clr-heading :clr-base"> حقائق </Link>
                </li>
                <li>
                  <Link href="faq-1" className="t-link clr-heading :clr-base"> التعليمات </Link>
                </li>
                <li>
                  <Link href="help-center" className="t-link clr-heading :clr-base"> مركز المساعدة </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-xl-2">
              <h5 className="mb-10"> تعلم الحقيقة </h5>
              <ul className="list list-xsm">
                <li>
                  <Link href="leadership-page" className="t-link clr-heading :clr-base"> تفاصيل القيادة </Link>
                </li>
                <li>
                  <Link href="getting-started" className="t-link clr-heading :clr-base"> ابدء </Link>
                </li>
                <li>
                  <Link href="blog-details-1" className="t-link clr-heading :clr-base"> تفاصيل المدونة </Link>
                </li>
                <li>
                  <Link href="service-details-1" className="t-link clr-heading :clr-base"> تفاصيل الخدمة </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cta-section-3">
              <div className="row g-4 align-items-lg-center justify-content-xxl-between">
                <div className="col-lg-6">
                  <div className="group group-sm group-sm-row align-items-center">
                    <div className="flex-shrink-0">
                      <img src="/images/icon-42.png" alt="image" />
                    </div>
                    <div className="flex-grow-1">
                      <h4 className="mb-3 text-center text-sm-start"> اشترك في نشرتنا الإخبارية </h4>
                      <p className="max-text-40 text-center mx-auto text-sm-start ms-sm-0"> تحتاج المزيد من المعلومات؟ اشترك في النشرة الإخبارية واحصل على التحديثات والأخبار </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-xxl-5">
                  <div className="newsletter-2">
                    <input type="text" className="newsletter-2__input placeholder-clr clr-heading" placeholder="أدخل بريدك الإلكتروني" />
                    <button className="bttn bttn--base bttn-md fw-md flex-shrink-0 rounded-1 newsletter-2__btn"> يشترك </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 pb-8">
        <div className="container">
          <div className="row g-4 align-items-md-center">
            <div className="col-md-6">
              <p className="text-center text-md-start"> حقوق الطبع والنشر 2023 Itechex جميع الحقوق محفوظة. </p>
            </div>
            <div className="col-md-6">
              <ul className="list list-xs list-row justify-content-center justify-content-md-end">
                <li>
                  <Link href="#" className="t-link social-icon social-icon--xs social-icon--base-outline social-icon--circle">
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="t-link social-icon social-icon--xs social-icon--base-outline social-icon--circle">
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="t-link social-icon social-icon--xs social-icon--base-outline social-icon--circle">
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="t-link social-icon social-icon--xs social-icon--base-outline social-icon--circle">
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