import Link from 'next/link';
import React from 'react';

const Review = () => {
    return (
      <section className="review-section section bg-neutral-100">
      <div className="container">
        <div className="row justify-content-xl-between">
          <div className="col-lg-7">
            <div className="section__gap-bottom pb-lg-0">
              <span className="d-block h5 lh-1 fw-semibold clr-base"> 4.9/5.0 </span>
              <ul className="list list-row list-xxs align-items-center lh-1">
                <li>
                  <span className="material-symbols-outlined mat-icon solid text-warning size-48"> star </span>
                </li>
                <li>
                  <span className="material-symbols-outlined mat-icon solid text-warning size-48"> star </span>
                </li>
                <li>
                  <span className="material-symbols-outlined mat-icon solid text-warning size-48"> star </span>
                </li>
                <li>
                  <span className="material-symbols-outlined mat-icon solid text-warning size-48"> star </span>
                </li>
                <li>
                  <span className="material-symbols-outlined mat-icon solid text-warning size-48"> star </span>
                </li>
              </ul>
              <h2 className="mb-5 mt-3"> احصل على استشارة مجانية حول مشروعك القادم! </h2>
              <p className="max-text-50"> إذا كان لديك مشروع أو فكرة ، فاتصل أو حدد موعدًا. مندوبنا سوف يستجيب قريبا </p>
              <div className="section--sm">
                <ul className="list list-row flex-wrap">
                  <li>
                    <div className="group group-row group-xmd border rounded-4 align-items-center p-3 bg-base-100">
                      <div className="flex-shrink-0">
                        <img src="/images/icon-53.png" alt="image" className="img-fluid" />
                      </div>
                      <div className="flex-grow-1">
                        <span className="d-block sm-text clr-dark"> اعطينا اتصال: </span>
                        <span className="d-block h5 m-0 lh-1 fw-bold mt-2 clr-dark"> (414) 587 - 9017 </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="group group-row group-xmd border rounded-4 align-items-center p-3 bg-base-100">
                      <div className="flex-shrink-0">
                        <img src="/images/icon-54.png" alt="image" className="img-fluid" />
                      </div>
                      <div className="flex-grow-1">
                        <span className="d-block sm-text clr-dark"> مراسلتنا على البريد الاليكتروني: </span>
                        <span className="d-block h5 m-0 lh-1 fw-bold mt-2 clr-dark"> demo@mail.com </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <Link href="faq-1" className="bttn bttn--base bttn-md bttn-pill gap-2 fw-md flex-shrink-0"> أسئلة مكررة <span className="material-symbols-rounded mat-icon size-16 fw-400 bttn__icon-cover"> arrow_forward </span>
              </Link>
            </div>
          </div>
          <div className="col-lg-5 col-xxl-4">
            <form action="#">
              <div className="booking-form px-lg-4">
                <div className="booking-form__head">
                  <h4 className="text-center mb-2"> احصل على عرض أسعار مجاني </h4>
                  <p className="text-center"> إنه لمن دواعي سرورنا أن تتاح لنا الفرصة للتعاون. </p>
                </div>
                <div className="row g-4">
                  <div className="col-12">
                    <input type="text" className="form-control booking-form__input" placeholder="اسم*" />
                  </div>
                  <div className="col-12">
                    <input type="number" className="form-control booking-form__input" placeholder="هاتف*" />
                  </div>
                  <div className="col-12">
                    <input type="email" className="form-control booking-form__input" placeholder="بريد إلكتروني*" />
                  </div>
                  <div className="col-12">
                    <div className="booking-form__select">
                      <select className="form-select">
                        <option>حدد الخدمة</option>
                        <option value="1">واحد</option>
                        <option value="2">اثنين</option>
                        <option value="3">ثلاثة</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12">
                    <textarea rows={3} className="form-control booking-form__input placeholder-clr" placeholder="واسمحوا لنا أن نعرف ما تحتاجه"></textarea>
                  </div>
                </div>
                <div className="booking-form__footer text-center">
                  <button className="bttn bttn--base bttn-md bttn-pill fw-md"> ارسل لنا </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Review;