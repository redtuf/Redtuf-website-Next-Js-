import React from 'react';

const Consult = () => {
    return (
      <section className="consult-section">
      <div className="consult-section__top section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-11 col-xxl-10">
              <span className="d-block h5 lh-1 fw-semibold clr-accent text-center"> نحن نقدم مجموعة واسعة من الخدمات لتلبية احتياجاتك. </span>
              <h2 className="mt-5 mb-5 text-center clr-light"> احصل على استشارة مجانية حول مشروعك القادم هنا! </h2>
              <p className="text-center clr-light"> إذا كان لديك مشروع أو فكرة ، فاتصل أو حدد موعدًا. مندوبنا سوف يستجيب قريبا </p>
            </div>
          </div>
        </div>
      </div>
      <div className="consult-section__bottom section--top">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="consult-section__content" style={{backgroundImage: 'url(/images/consulting-form-bg.png)'}}>
                <div className="row justify-content-md-end">
                  <div className="col-lg-6">
                    <form action="#">
                      <div className="booking-form">
                        <div className="booking-form__head">
                          <h3 className="text-center mb-2"> ابدأ اليوم </h3>
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
                            <textarea rows={3} className="form-control booking-form__input" placeholder="واسمحوا لنا أن نعرف ما تحتاجه"></textarea>
                          </div>
                        </div>
                        <div className="booking-form__footer text-center">
                          <button className="bttn bttn--base bttn-md bttn-pill fw-md" type="button"> يُقدِّم </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Consult;