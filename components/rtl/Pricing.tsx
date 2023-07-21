import Link from 'next/link';
import React, { useState } from 'react';

const Pricing = () => {
  const [checked, SetChecked] = useState(true);
  const handleChange = (e) => {
    SetChecked(e.target.checked)
  }
    return (
      <div className="pricing-section">
      <div className="section">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7">
                <span className="d-block h5 lh-1 fw-semibold clr-base text-center"> اختر خطة التسعير الخاصة بك دون أي تكاليف خفية. </span>
                <h2 className="mt-5 mb-5 text-center"> خطة التسعير البسيطة لتأمين بياناتك </h2>
                <p className="text-center mx-auto max-text-70"> هدف فريقنا هو مساعدة عملائنا في الحفاظ على الريادة في الصناعة أو تحقيقها وظائف: نحن نقدم مجموعة واسعة من خدمات تكنولوجيا المعلومات ، وهي مضمون </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-6">
            <div className="col-lg-5 col-xl-4">
              <div className="price-card-1 bg-neutral-100 px-4 py-8 p-md-12 p-lg-8">
                <div className="price-card-1__head gap-2">
                  <h4 className="text-center"> السمات المشتركة </h4>
                  <p className="text-center fw-md clr-base"> جميع التصاريح تشمل: </p>
                </div>
                <div className="price-card-1__body bg-base rounded-4 px-3 px-xl-4 py-4">
                  <ul className="list list-0 list--check-end check-light bordered-bottom">
                    <li className="align-items-center justify-content-between">
                      <span className="d-block clr-light"> المعاملات المشفرة </span>
                    </li>
                    <li className="align-items-center justify-content-between">
                      <span className="d-block clr-light"> خدمة دعم 24/7 </span>
                    </li>
                    <li className="align-items-center justify-content-between">
                      <span className="d-block clr-light"> النسخ الاحتياطي اليومي الآلي </span>
                    </li>
                    <li className="align-items-center justify-content-between">
                      <span className="d-block clr-light"> وشملت الأجهزة المجانية </span>
                    </li>
                    <li className="align-items-center justify-content-between">
                      <span className="d-block clr-light"> مسح كل 12 ساعة </span>
                    </li>
                  </ul>
                </div>
                <div className="price-card-1__footer text-center">
                  <Link href="#" className="bttn bttn--base bttn-md bttn-pill fw-md flex-shrink-0"> البدء <span className="material-symbols-rounded mat-icon fw-100 bttn__icon"> trending_flat </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-xl-8">
              <div className="price-card-1 bg-neutral-100 px-4 py-8 p-md-12 py-lg-8 px-lg-4 p-xl-8">
                <div className="price-card-1__head flex-row flex-wrap justify-content-between">
                  <h4> اختر خطتك </h4>
                  <div className="group group-xs group-row align-items-center justify-content-end">
                    <span className="clr-heading d-inline-block"> شهريا </span>
                    <label className="checkbox">
                      <input id="input" type="checkbox" className="checkbox__input" onChange={handleChange} checked={checked} />
                    </label>
                    <span className="clr-heading d-inline-block"> سنوي <span className="xsm-text clr-base">يحفظ 20%</span>
                    </span>
                  </div>
                </div>
                <div className="price-card-1__body">
                  <ul className="list">
                    <li>
                      <div className="custom-checkbox">
                        <label className="custom-checkbox__wrapper">
                          <span className="flex-grow-1">
                            <input type="radio" name="select-price" className="custom-checkbox__input" />
                            <span className="custom-checkbox__title">
                              <span className="h5 m-0"> شخصي </span>
                            </span>
                          </span>
                          <span className="flex-shrink-0">
                            <span className="custom-checkbox__subtitle d-block flex-shrink-0 h5 m-0"> 499 دولارًا أمريكيًا </span>
                          </span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="custom-checkbox">
                        <label className="custom-checkbox__wrapper">
                          <span className="flex-grow-1">
                            <input type="radio" name="select-price" className="custom-checkbox__input" />
                            <span className="custom-checkbox__title">
                              <span className="h5 m-0"> بدء </span>
                            </span>
                          </span>
                          <span className="flex-shrink-0">
                            <span className="custom-checkbox__subtitle d-block flex-shrink-0 h5 m-0"> 499 دولارًا أمريكيًا </span>
                          </span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="custom-checkbox">
                        <label className="custom-checkbox__wrapper">
                          <span className="flex-grow-1">
                            <input type="radio" name="select-price" className="custom-checkbox__input" />
                            <span className="custom-checkbox__title">
                              <span className="h5 m-0"> شركة </span>
                            </span>
                          </span>
                          <span className="flex-shrink-0">
                            <span className="custom-checkbox__subtitle d-block flex-shrink-0 h5 m-0"> 699 دولارًا أمريكيًا </span>
                          </span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="custom-checkbox">
                        <label className="custom-checkbox__wrapper">
                          <span className="flex-grow-1">
                            <input type="radio" name="select-price" className="custom-checkbox__input" />
                            <span className="custom-checkbox__title">
                              <span className="h5 m-0"> مَشرُوع </span>
                            </span>
                          </span>
                          <span className="flex-shrink-0">
                            <span className="custom-checkbox__subtitle d-block flex-shrink-0 h5 m-0"> 799 دولارًا أمريكيًا </span>
                          </span>
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section__gap-top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-7">
                <p className="mx-auto clr-light max-text-60 mb-8 text-center"> تبحث عن خطة المشروع؟ نحن نقدم خصومات للفرق الكبيرة! كل ما تحتاجه كن في كل مكان يتواجد فيه عملاؤك ، في حزمة واحدة جميلة - بسعر خاص. </p>
                <div className="group group-xmd group-row flex-wrap justify-content-center align-items-center">
                  <Link href="contact-us-1" className="bttn bttn-pill bttn-md bttn--light-accent align-items-center fw-md">
                    <img src="/images/icon-11.png" alt="image" className="img-fluid me-1" /> Lets talk </Link>
                  <Link href="about-us-1" className="bttn bttn--light-outline bttn-md bttn-pill fw-md flex-shrink-0 align-items-center clr-light"> المزيد عنا </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="pricing-section__content t-shadow">
              <div className="row g-6">
                <div className="col-md-6 col-lg-5">
                  <div className="d-flex align-items-center gap-6 mb-8">
                    <img src="/images/icon-60.png" alt="image" className="img-fluid flex-shrink-0" />
                    <div className="d-flex flex-column gap-2">
                      <h3> 30 يوما </h3>
                      <h5> ضمان استعادة الاموال </h5>
                    </div>
                  </div>
                  <Link href="contact-us-1" className="bttn bttn--base bttn-md bttn-pill fw-md flex-shrink-0"> البدء الآن <span className="material-symbols-rounded mat-icon fw-100 bttn__icon"> trending_flat </span>
                  </Link>
                  <span className="d-block fw-md clr-heading mt-6"> * اقرأ <Link href="terms-condition" className="t-link d-inline-block clr-base :clr-accent"> الدموع والشروط </Link>
                  </span>
                </div>
                <div className="col-md-6 col-lg-7">
                  <ul className="list list--check check-base">
                    <li>
                      <span className="d-block clr-heading max-text-40"> بعد الإصدار التجريبي المجاني لمدة 30 يومًا ، لديك خيار اختيار خطتك والدفع شهريا </span>
                    </li>
                    <li>
                      <span className="d-block clr-heading max-text-40"> تأتي جميع الخطط مع أمان SSL 256 بت ، وجميع مهام الميزات الرئيسية لدينا </span>
                    </li>
                    <li>
                      <span className="d-block clr-heading max-text-40"> الدفع ببطاقة الائتمان أو سنويًا عن طريق بطاقة الائتمان أو الفاتورة </span>
                    </li>
                    <li>
                      <span className="d-block clr-heading max-text-40"> قم بالترقية أو الرجوع إلى إصدار أقدم أو الإلغاء في أي وقت </span>
                    </li>
                    <li>
                      <span className="d-block clr-heading max-text-40"> لديك الخيار لاختيار خطتك </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Pricing;