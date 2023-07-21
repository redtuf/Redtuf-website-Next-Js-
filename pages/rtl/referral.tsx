import Footer from "@/components/rtl/home_4/Footer";
import Navbar from "@/components/rtl/Navbar";
import Testimonial_slider_1 from "@/components/rtl/Testimonial-slider-1";
import Link from "next/link";
import { useState, useEffect } from "react";
const referral_data = [
  {
    id: 1,
    question: "متى سأحصل على جائزتي؟",
    answer:
      "عادةً ما يتم تصميم تطبيقات لخدمة العديد من العملاء المعروفين كمستأجرين ، من مثيل واحد للبرنامج.",
  },
  {
    id: 2,
    question: "هل هناك حد لعدد الأصدقاء الذين يمكنني الرجوع إليهم؟",
    answer:
      "تم تصميم تطبيقات للتعامل مع عدد كبير من المستخدمين ويمكنهم ذلك توسيع نطاق العمل أو خفضه حسب الحاجة.",
  },
  {
    id: 3,
    question: "كم تدفع لنا مقابل العملاء المتوقعين؟",
    answer:
      "يمكن الوصول إلى تطبيقات من أي مكان متصل بالإنترنت ويمكن استخدامه على أجهزة متعددة.",
  },
  {
    id: 4,
    question: "لماذا تتعاون مع itechex؟",
    answer:
      "عادةً ما تحتوي تطبيقات على ميزات إدارة مستخدم مضمنة للتعامل معها مصادقة المستخدم والترخيص والتحكم في الوصول.",
  },
  {
    id: 5,
    question: "كيف يتم الدفع؟",
    answer:
      "قد تقدم تطبيقات مستوى معينًا من التخصيص ، مثل القدرة لإضافة علامات تجارية وشعارات وألوان مخصصة.",
  },
  {
    id: 6,
    question: "ما هو أمن البيانات؟",
    answer:
      "عادةً ما تحتوي تطبيقات على إجراءات أمنية للحماية بيانات العميل ، بما في ذلك التشفير والنسخ الاحتياطي والتعافي من الكوارث.",
  },
];
const referral = () => {
  const [active, setActive] = useState<null | number>(0);

  const handleOpen = (id: number) => {
    id == active ? setActive(0) : setActive(id);
  };
  let closed = {
    maxHeight: 0,
    overflow: "hidden",
    transition: "max-height 0.5s ease-out",
  };
  let opened = {
    maxHeight: "1000px",
    transition: "max-height 0.5s ease-in-out",
  };
  useEffect(() => {
    document.documentElement.setAttribute("dir", "rtl");
  }, []);
  return (
    <>
      {/* Navbar Section */}
      <Navbar ltrurl="/referral" />
      {/* Banner section */}
      <section className="banner-section section--sm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="clr-light mb-3"> الإحالة وكسب </h3>
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
                    شركة{" "}
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="#"
                    className="d-inline-block t-link clr-light :clr-accent">
                    {" "}
                    الإحالة وكسب{" "}
                  </Link>
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
      <div className="section">
        <div className="container">
          <div className="row g-6 align-items-center">
            <div className="col-lg-6">
              <div className="section__gap-bottom pb-lg-0">
                <h2 className="mb-5"> انشر الكلمة </h2>
                <p className="mb-5">
                  {" "}
                  نحن نقدم مكافأة تصل إلى 30٪ للإحالة وكسب{" "}
                </p>
                <ul className="list list-row gap-2 gap-sm-0 flex-wrap align-items-center tab-list mb-5">
                  <li>
                    <button type="button" className="tab-list__btn">
                      {" "}
                      جلب الأعمال{" "}
                    </button>
                  </li>
                  <li>
                    <button type="button" className="tab-list__btn">
                      {" "}
                      احصل على عمل{" "}
                    </button>
                  </li>
                  <li>
                    <button type="button" className="tab-list__btn">
                      {" "}
                      هذا هو الاتفاق{" "}
                    </button>
                  </li>
                </ul>
                <p className="mb-5 max-text-60">
                  {" "}
                  يجب اتباع الألم نفسه. نكهة الحياة القوية والقوية. أو الميزانية
                  لا ينبغي أن تتبع الجرة بعدل بضرورة وضع الشباك. واثنين من القطط
                  حتى ولا في{" "}
                </p>
                <Link
                  href="#"
                  className="bttn bttn--base bttn-md bttn-pill gap-2 fw-md flex-shrink-0">
                  {" "}
                  الرجوع الآن{" "}
                  <span className="material-symbols-rounded mat-icon size-16 fw-400 bttn__icon-cover d-flex align-items-center">
                    {" "}
                    arrow_forward{" "}
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image-move-end">
                <img
                  src="/images/refer-img.png"
                  alt="image"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section bg-base">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-7">
                <span className="d-block h5 lh-1 fw-semibold clr-accent text-center">
                  {" "}
                  4 خطوات سهلة{" "}
                </span>
                <h2 className="mt-5 mb-5 text-center clr-light">
                  {" "}
                  كيف تعمل الإحالة واكسب{" "}
                </h2>
                <p className="max-text-60 text-center mx-auto clr-light">
                  {" "}
                  نحن نقدم خدمات فريدة مصممة خصيصا خصيصًا لشركتك. طرق مبتكرة
                  للمساعدة في زيادة أرباح شركتك{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-6">
            <div className="col-md-6 col-xl-3">
              <div className="border rounded-4 p-5 text-center">
                <img
                  src="/images/icon-68.png"
                  alt="image"
                  className="img-fluid"
                />
                <div className="text-center mt-8 pb-2">
                  <h5 className="clr-light mb-2"> اعزم أصحابك </h5>
                  <p className="clr-light">
                    {" "}
                    ابحث عن الأشخاص الذين تعرفهم والذين يرغبون في العمل في
                    مشروع. صفنا!{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="border rounded-4 p-5 text-center">
                <img
                  src="/images/icon-69.png"
                  alt="image"
                  className="img-fluid"
                />
                <div className="text-center mt-8 pb-2">
                  <h5 className="clr-light mb-2"> انشر احتياجات مشروعك </h5>
                  <p className="clr-light">
                    {" "}
                    ابحث عن الأشخاص الذين تعرفهم والذين يرغبون في العمل في
                    مشروع. صفنا!{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="border rounded-4 p-5 text-center">
                <img
                  src="/images/icon-70.png"
                  alt="image"
                  className="img-fluid"
                />
                <div className="text-center mt-8 pb-2">
                  <h5 className="clr-light mb-2"> تسجيل الملف الشخصي </h5>
                  <p className="clr-light">
                    {" "}
                    ابحث عن الأشخاص الذين تعرفهم والذين يرغبون في العمل في
                    مشروع. صفنا!{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="border rounded-4 p-5 text-center">
                <img
                  src="/images/icon-71.png"
                  alt="image"
                  className="img-fluid"
                />
                <div className="text-center mt-8 pb-2">
                  <h5 className="clr-light mb-2">
                    {" "}
                    نحن نعمل تحصل على رواتبهم{" "}
                  </h5>
                  <p className="clr-light">
                    {" "}
                    ابحث عن الأشخاص الذين تعرفهم والذين يرغبون في العمل في
                    مشروع. صفنا!{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Testimonials  --> */}
      <Testimonial_slider_1 />
      {/* <!-- Testimonials End --> */}
      {/* <!-- Contact Section --> */}
      <div className="section--sm section--top contact-section">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-7">
                <div className="text-center">
                  <span className="d-inline-block h5 lh-1 fw-semibold clr-base">
                    {" "}
                    اتصل بنا{" "}
                  </span>
                  <h2 className="mt-5 mb-5"> دعنا نتصل بك </h2>
                  <p className="mx-auto t-short-para">
                    {" "}
                    املأ النموذج أدناه وسنتواصل معك في غضون 24 ساعة{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <form
                action="#"
                className="contact-form-1 bg-base p-5 p-md-12 rounded-4">
                <div className="row g-4">
                  <div className="col-12">
                    <h5 className="text-center clr-light"> تفاصيل الإحالة </h5>
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control rounded-pill contact-form-1__input"
                      placeholder="اسم المرجعية*"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="number"
                      className="form-control contact-form-1__input rounded-pill"
                      placeholder="هاتف الإحالة*"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control contact-form-1__input rounded-pill"
                      placeholder="البريد الإلكتروني للإحالة*"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control contact-form-1__input rounded-pill"
                      placeholder="الخدمات المطلوبة*"
                    />
                  </div>
                  <div className="col-12">
                    <div className="contact-form-1__select rounded-pill">
                      <select className="form-select rounded-pill">
                        <option>حدد الخدمات</option>
                        <option value="1">واحد</option>
                        <option value="2">اثنين</option>
                        <option value="3">ثلاثة</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12">
                    <h5 className="text-center clr-light mt-8"> تفاصيلك </h5>
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control rounded-pill contact-form-1__input"
                      placeholder="اسم المرجعية*"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="number"
                      className="form-control contact-form-1__input rounded-pill"
                      placeholder="هاتف الإحالة*"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control contact-form-1__input rounded-pill"
                      placeholder="البريد الإلكتروني للإحالة*"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control contact-form-1__input rounded-pill"
                      rows={3}
                      placeholder="دعنا نعرف"></textarea>
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
                        أرسل الإحالة{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact Section End --> */}
      {/* <!-- Q & A section --> */}
      <div className="section--sm section--bottom">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-7">
                <div className="text-center">
                  <span className="d-inline-block h5 lh-1 fw-semibold clr-base">
                    {" "}
                    أسئلة و أجوبة{" "}
                  </span>
                  <h2 className="mt-5 mb-5"> الأسئلة الشائعة حول الإحالة </h2>
                  <p className="mx-auto t-short-para">
                    {" "}
                    هل حصلت على الاسئلة؟ لقد حصلت على تغطيتها. اطلع على إجابات
                    الأسئلة الأكثر شيوعًا حول أسئلة وأجوبة الإحالة{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-xl-8">
              <div className="custom-accordion custom-accordion--1">
                {referral_data.map(({ answer, id, question }) => (
                  <div key={id} className="custom-accordion__item">
                    <div
                      className="custom-accordion__header"
                      onClick={() => handleOpen(id)}>
                      <div className="d-flex gap-4 align-items-center flex-grow-1">
                        <img
                          src="/images/icon-59.png"
                          alt="image"
                          className="img-fluid flex-shrink-0"
                        />
                        <h6>{question}</h6>
                      </div>
                      <div className="icon-box icon-box--xs circle bg-base flex-shrink-0">
                        <span className="material-symbols-outlined mat-icon clr-light">
                          {" "}
                          arrow_forward_ios{" "}
                        </span>
                      </div>
                    </div>
                    <div
                      className="custom-accordion__body"
                      style={id == active ? opened : closed}>
                      <div className="custom-accordion__content">
                        <p> {answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default referral;
