import Link from "next/link";
import React from "react";

const Letstalk = () => {
  return (
    <section className="section red-bg">
      <div className="container">
        <div className="row g-6 align-items-center">
          <div className="col-lg-6">
            <div className="section__gap-bottom pb-lg-0">
              <span className="d-block h5 lh-1 fw-semibold clr-base mb-5">
                {" "}
                دعونا نعمل معا{" "}
              </span>
              <h2 className="mb-10 clr-dark">
                {" "}
                نحن نحب الاستماع إلى متطلباتك{" "}
              </h2>
              <div className="border t-border-base rounded-4 px-6 py-8 d-inline-flex flex-column gap-6 mb-10">
                <div className="group group-md group-row align-items-center">
                  <div className="user user--xmd user-outline-base flex-shrink-0 rounded-circle">
                    <span className="user__img rounded-circle">
                      <img
                        src="/images/team-2.png"
                        alt="image"
                        className="user__img-is"
                      />
                    </span>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mb-1 clr-dark"> مارفن ماكيني </h5>
                    <p className="sm-text clr-base"> بيفكو المحدودة. </p>
                  </div>
                </div>
                <ul className="list list-row align-items-center flex-wrap">
                  <li>
                    <Link
                      href="#"
                      className="bttn bttn--base-outline bttn-sm bttn-pill gap-2 fw-md flex-shrink-0 align-items-center">
                      {" "}
                      اتصل بنا{" "}
                      <span className="material-symbols-rounded mat-icon size-16 fw-400 bttn__icon-base d-flex align-items-center">
                        {" "}
                        arrow_forward{" "}
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="bttn bttn--base-outline bttn-sm bttn-pill gap-2 fw-md flex-shrink-0 align-items-center">
                      {" "}
                      سكايب بنا{" "}
                      <span className="material-symbols-rounded mat-icon size-16 fw-400 bttn__icon-base d-flex align-items-center">
                        {" "}
                        arrow_forward{" "}
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="bttn bttn--base-outline bttn-sm bttn-pill gap-2 fw-md flex-shrink-0 align-items-center">
                      {" "}
                      راسلنا بالبريد الإلكتروني{" "}
                      <span className="material-symbols-rounded mat-icon size-16 fw-400 bttn__icon-base d-flex align-items-center">
                        {" "}
                        arrow_forward{" "}
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              <h5 className="mb-5 clr-dark"> يمكنك التوقع: </h5>
              <ul className="list list-row flex-wrap list-disc list-disc--base support-list">
                <li>
                  <p className="clr-dark"> مساعدة المكالمات الهاتفية </p>
                </li>
                <li>
                  <p className="clr-dark"> تقدير المشروع </p>
                </li>
                <li>
                  <p className="clr-dark"> استشارة المشروع </p>
                </li>
                <li>
                  <p className="clr-dark"> عرض الحلول </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <form
              action="#"
              className="contact-form-1 bg-base p-2 py-5 py-md-10 px-xxl-10 rounded-4">
              <div className="row g-4">
                <div className="col-12">
                  <h4 className="text-center clr-light"> لنتحدث عن المشروع </h4>
                </div>
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
                  <div className="contact-form-1__select yellow-input rounded-pill">
                    <select className="form-select rounded-pill">
                      <option>حدد الشرط</option>
                      <option value="1">واحد</option>
                      <option value="2">اثنين</option>
                      <option value="3">ثلاثة</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control contact-form-1__input rounded-pill"
                    placeholder="$5,000"
                  />
                </div>
                <div className="col-md-6">
                  <div className="contact-form-1__select rounded-pill">
                    <select className="form-select rounded-pill">
                      <option>الآن</option>
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
                    placeholder="واسمحوا لنا أن نعرف ما تحتاجه"></textarea>
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
                      أرسل رسالة{" "}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Letstalk;
