import Link from 'next/link';
import React from 'react';

const Support = () => {
    return (
      <div className="support-section-1">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="consult-section__content" style={{backgroundImage: 'url(/images/consulting-form-bg-2.png)'}}>
              <div className="row justify-content-md-start">
                <div className="col-lg-7 col-xl-6 col-xxl-5">
                  <form action="#">
                    <div className="booking-form">
                      <div className="booking-form__head">
                        <h4 className="text-center mb-2"> طلب استدعاء </h4>
                        <p className="text-center"> إنه لمن دواعي سرورنا أن تتاح لنا الفرصة يتعاون. </p>
                      </div>
                      <div className="row g-4">
                        <div className="col-12">
                          <input type="text" className="form-control booking-form__input" placeholder="اسم" />
                        </div>
                        <div className="col-12">
                          <input type="text" className="form-control booking-form__input" placeholder="هاتف" />
                        </div>
                        <div className="col-12">
                          <input type="email" className="form-control booking-form__input" placeholder="بريد إلكتروني" />
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
                        <button className="bttn bttn--base bttn-md bttn-pill fw-md"> يُقدِّم </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-6">
                <h2 className="text-center clr-light"> التقنيات التي نستخدمها </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4">
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img src="/images/brand-icon-1.png" alt="images" className="img-fluid" /> 
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> ذكري المظهر </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img src="/images/brand-icon-2.png" alt="images" className="img-fluid" /> 
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> كودانيتر </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img src="/images/brand-icon-3.png" alt="images" className="img-fluid" /> 
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> رفرفة </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img src="/images/brand-icon-4.png" alt="images" className="img-fluid" /> 
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> عقدة شبيبة </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img src="/images/brand-icon-5.png" alt="images" className="img-fluid" /> 
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> بايثون </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img src="/images/brand-icon-6.png" alt="images" className="img-fluid" /> 
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> رد الفعل الأصلي </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img src="/images/brand-icon-7.png" alt="images" className="img-fluid" /> 
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> سويفت </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img src="/images/brand-icon-8.png" alt="images" className="img-fluid" /> 
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> الزاوي </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img src="/images/brand-icon-9.png" alt="images" className="img-fluid" /> 
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> ج شارب </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img src="/images/brand-icon-10.png" alt="images" className="img-fluid" /> 
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> جافا </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img src="/images/brand-icon-11.png" alt="images" className="img-fluid" /> 
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> شبابيك </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img src="/images/brand-icon-12.png" alt="images" className="img-fluid" /> 
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> ارافيل </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section__gap-top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-8">
                <div className="group group-row justify-content-center">
                  <Link href="about-us-1" className="bttn bttn-pill bttn-md bttn--light-accent align-items-center fw-md"> المزيد عنا <span className="material-symbols-rounded mat-icon fw-300 bttn__icon"> chevron_right </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Support;