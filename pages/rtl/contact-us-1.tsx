import Footer from "@/components/rtl/home_4/Footer";
import Navbar from "@/components/rtl/Navbar";
import Testimonial_slider_1 from "@/components/rtl/Testimonial-slider-1";
import Link from "next/link";

import { useEffect } from "react";

const contact_us_1 = () => {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "rtl");
  }, []);
  return (
    <>
      <Navbar ltrurl="/contact-us-1" />
      {/* Banner */}
      <section className="banner-section section--sm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="clr-light mb-3"> اتصل بنا </h3>
              <ul className="list list-row flex-wrap breadcrumb-list">
                <li>
                  <Link
                    href="/rtl"
                    className="d-inline-block t-link clr-light :clr-accent">
                    {" "}
                    بيت{" "}
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="#"
                    className="d-inline-block t-link clr-light :clr-accent">
                    {" "}
                    اتصل بنا{" "}
                  </Link>
                </li>
                <li className="d-none">
                  <Link
                    href="#"
                    className="d-inline-block t-link clr-light :clr-accent"></Link>
                </li>
                <li className="d-none">
                  <Link
                    href="#"
                    className="d-inline-block t-link clr-light :clr-accent"></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Banner End --> */}
      {/* <!-- Contact Section  --> */}
      <section className="section">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-8">
                <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
                  {" "}
                  حصلت على السؤال؟{" "}
                </span>
                <h2 className="mt-5 mb-5 text-center"> نحن هنا للرد عليه! </h2>
                <p className="text-center">
                  {" "}
                  من فضلك أرسل لنا معلومات عن مشروعك. يقوم أحد مديري المشاريع
                  لدينا بتقييم متطلبات مشروعك وتعطيك عرضًا رسميًا. سوف تساعدنا
                  المعلومات التفصيلية تقييم مشروعك{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4 gy-lg-4 align-items-center">
            <div className="col-lg-6">
              <form
                action="#"
                className="contact-form-1 bg-base p-5 py-md-10 rounded-4">
                <div className="row g-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control rounded-pill contact-form-1__input"
                      placeholder="اسم*"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="number"
                      className="form-control contact-form-1__input rounded-pill"
                      placeholder="هاتف*"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control contact-form-1__input rounded-pill"
                      placeholder="بريد إلكتروني*"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control contact-form-1__input rounded-pill"
                      placeholder="اسم الشركة"
                    />
                  </div>
                  <div className="col-12">
                    <div className="contact-form-1__select yellow-input rounded-pill">
                      <select className="form-select rounded-pill">
                        <option>حدد الخدمات</option>
                        <option value="1">واحد</option>
                        <option value="2">اثنين</option>
                        <option value="3">ثلاثة</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control contact-form-1__input rounded-8"
                      rows={3}
                      placeholder="دعنا نعرف"></textarea>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="newsletter-subscribe"
                      />
                      <label
                        className="form-check-label clr-light"
                        htmlFor="newsletter-subscribe">
                        {" "}
                        أود أن أطلع على أحدث المنتجات وإعلانات الأحداث{" "}
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="accept-terms"
                      />
                      <label
                        className="form-check-label clr-light"
                        htmlFor="accept-terms">
                        {" "}
                        لقد قرأت وقبلت شروط وأحكام سياسة الخصوصية{" "}
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="text-center mt-6">
                      <button className="bttn bttn--warning bttn-md bttn-pill fw-md">
                        {" "}
                        يُقدِّم{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6">
              <ul className="list gap-0 service-link-list">
                <li>
                  <Link
                    href="#"
                    className="t-link service-link clr-heading :clr-light border-bottom">
                    <span className="group gap-1">
                      <span className="d-inline-block service-link__title fw-bold">
                        {" "}
                        احجز عرضًا تجريبيًا{" "}
                      </span>
                      <span className="d-block">
                        {" "}
                        مع أخصائي المشاركة لدينا{" "}
                      </span>
                    </span>
                    <span className="service-link__icon clr-light bg-base">
                      <span className="material-symbols-outlined mat-icon">
                        {" "}
                        arrow_forward_ios{" "}
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="t-link service-link clr-heading :clr-light border-bottom">
                    <span className="group gap-1">
                      <span className="d-inline-block service-link__title fw-bold">
                        {" "}
                        أرسل سيرتك الذاتية{" "}
                      </span>
                      <span className="d-block">
                        {" "}
                        إذا كنت ترغب في الانضمام إلى فريقنا{" "}
                      </span>
                    </span>
                    <span className="service-link__icon clr-light bg-base">
                      <span className="material-symbols-outlined mat-icon">
                        {" "}
                        arrow_forward_ios{" "}
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="t-link service-link clr-heading :clr-light">
                    <span className="group gap-1">
                      <span className="d-inline-block service-link__title fw-bold">
                        {" "}
                        تواصل معنا عبر البريد الإلكتروني{" "}
                      </span>
                      <span className="d-block"> demo@mail.com </span>
                    </span>
                    <span className="service-link__icon clr-light bg-base">
                      <span className="material-symbols-outlined mat-icon">
                        {" "}
                        arrow_forward_ios{" "}
                      </span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Contact Section End --> */}
      {/* <!-- Meet Us Section  --> */}
      <div className="section bg-neutral-100">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-8">
                <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
                  {" "}
                  قابلنا في مكاتبنا{" "}
                </span>
                <h2 className="mt-5 mb-5 text-center">
                  {" "}
                  شركتنا في جميع أنحاء العالم ، تعال وقم بزيارتنا{" "}
                </h2>
                <p className="text-center">
                  {" "}
                  نقدم تجارب وحلول لا مثيل لها تؤدي إلى مزايا تنافسية.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="text-center">
                  <Link
                    href="contact-us-1"
                    className="bttn bttn--base bttn-md bttn-pill gap-2 fw-md flex-shrink-0">
                    {" "}
                    دعونا نحدد موعد مكالمة{" "}
                    <span className="material-symbols-rounded mat-icon size-16 fw-400 bttn__icon-cover d-flex align-items-center">
                      {" "}
                      headphones{" "}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xl">
          <div className="row g-6 gy-10">
            <div className="col-md-4">
              <div className="location-card">
                <img
                  src="/images/location-card-1.png"
                  alt="image"
                  className="img-fluid w-100 rounded-4"
                />
                <div className="group group-row align-items-center justify-content-between mt-8">
                  <div className="flex-grow-1">
                    <h4 className="mb-1"> سان فرانسيسكو </h4>
                    <span className="sm-text d-block mb-1">
                      {" "}
                      demo@mail.com{" "}
                    </span>
                    <span className="d-block accent-text-clr fw-md">
                      {" "}
                      (415) 931 - 1616{" "}
                    </span>
                  </div>
                  <div className="flex-shrink-0">
                    <button className="bttn bttn--base bttn--sqr rounded">
                      <span className="material-symbols-rounded">
                        {" "}
                        arrow_forward_ios{" "}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="location-card">
                <img
                  src="/images/location-card-2.png"
                  alt="image"
                  className="img-fluid w-100 rounded-4"
                />
                <div className="group group-row align-items-center justify-content-between mt-8">
                  <div className="flex-grow-1">
                    <h4 className="mb-1"> لندن </h4>
                    <span className="sm-text d-block mb-1">
                      {" "}
                      demo@mail.com{" "}
                    </span>
                    <span className="d-block accent-text-clr fw-md">
                      {" "}
                      (415) 931 - 1616{" "}
                    </span>
                  </div>
                  <div className="flex-shrink-0">
                    <button className="bttn bttn--base bttn--sqr rounded">
                      <span className="material-symbols-rounded">
                        {" "}
                        arrow_forward_ios{" "}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="location-card">
                <img
                  src="/images/location-card-3.png"
                  alt="image"
                  className="img-fluid w-100 rounded-4"
                />
                <div className="group group-row align-items-center justify-content-between mt-8">
                  <div className="flex-grow-1">
                    <h4 className="mb-1"> نيويورك </h4>
                    <span className="sm-text d-block mb-1">
                      {" "}
                      demo@mail.com{" "}
                    </span>
                    <span className="d-block accent-text-clr fw-md">
                      {" "}
                      (415) 931 - 1616{" "}
                    </span>
                  </div>
                  <div className="flex-shrink-0">
                    <button className="bttn bttn--base bttn--sqr rounded">
                      <span className="material-symbols-rounded">
                        {" "}
                        arrow_forward_ios{" "}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonail */}
      <Testimonial_slider_1 />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default contact_us_1;
