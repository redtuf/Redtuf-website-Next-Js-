import Navbar from "@/components/rtl/Navbar";
import Consult from "@/components/rtl/home_2/Consult";
import Link from "next/link";
import { useState, useEffect } from 'react';
import Footer from "@/components/rtl/home_4/Footer";
const faq_1_data = [
  {
    id: 1,
    question: "من أين أبدأ بـ إيتشيكس",
    answer:
      "عادةً ما يتم تصميم تطبيقات لخدمة العديد من العملاء ، والمعروفين باسم المستأجرين ، من مثيل واحد للبرنامج.",
  },
  {
    id: 2,
    question: "ما هي منصة إيتشيكس",
    answer:
      "تم تصميم تطبيقات للتعامل مع عدد كبير من المستخدمين ويمكن توسيع نطاقها لأعلى أو لأسفل حسب الحاجة.",
  },
  {
    id: 3,
    question: "ما هي منصة Itechex؟",
    answer:
      "يمكن الوصول إلى تطبيقات من أي مكان به اتصال بالإنترنت و يمكن استخدامها على أجهزة متعددة.",
  },
  {
    id: 4,
    question: "ما مدى سهولة الإعداد؟",
    answer:
      "تحتوي تطبيقات عادةً على ميزات إدارة مستخدم مضمنة للتعامل مع المستخدم المصادقة والترخيص والتحكم في الوصول.",
  },
  {
    id: 5,
    question: "من يستخدم المنصة؟",
    answer:
      "قد تقدم تطبيقات مستوى معينًا من التخصيص ، مثل القدرة على إضافة علامات تجارية وشعارات وألوان مخصصة.",
  },
  {
    id: 6,
    question: "ما مدى دقة تقنيتك؟",
    answer:
      "عادةً ما تحتوي تطبيقات على إجراءات أمنية لحماية العملاء البيانات ، بما في ذلك التشفير والنسخ الاحتياطي والتعافي من الكوارث.",
  },
];
const faq_2_data = [
  {
    id: 1,
    question: "اتصال جديد متعدد المواقع",
    answer:
      "نحن نستخدم تقنية مطورة حديثًا لربط المواقع القائمة على أنواع مختلفة من الخوادم والشبكات ، اتصال الموقع ، مما يساعد على تقليل سوء تفسير الإشارات وكذلك فقدان البيانات أثناء نقل.",
  },
  {
    id: 2,
    question: "أمن وبرمجيات تكنولوجيا المعلومات",
    answer:
      "تم تصميم تطبيقات للتعامل مع عدد كبير من المستخدمين ويمكنهم ذلك حجم لأعلى أو لأسفل حسب الحاجة.",
  },
  {
    id: 3,
    question: "قدرة استضافة ضعيفة",
    answer:
      "يمكن الوصول إلى تطبيقات من أي مكان متصل بالإنترنت و يمكن استخدامها على أجهزة متعددة.",
  },
  {
    id: 4,
    question: "بناء شبكة داخلية",
    answer:
      "يمكن الوصول إلى تطبيقات من أي مكان متصل بالإنترنت و يمكن استخدامها على أجهزة متعددة.",
  },
]
const faq_1 = () => {
    const [active, setActive] = useState<null | number>(0) 
    const [active1, setActive1] = useState<null | number>(0) 
    const handleOpen = (id:number) => {
       id == active?setActive(0) : setActive(id)
    }  
    const handleOpen1 = (id:number) => {
       id == active1?setActive1(0) : setActive1(id)
    }  
    let closed = {
        maxHeight:0,
        overflow: 'hidden',
        transition: 'max-height 0.5s ease-out'
    }
    let opened = {
        maxHeight: '1000px',
        transition: 'max-height 0.5s ease-in-out'
    }
    useEffect(() => {
      document.documentElement.setAttribute("dir", 'rtl');
    },[])
  return (
    <>
    <Navbar ltrurl="/faq-1"/>
    {/* Banner Section */}
      <section className="banner-section section--sm">
        <div className="container">
          <div className="row">
          <div className="col-12">
            <h3 className="clr-light mb-3"> التعليمات </h3>
            <ul className="list list-row flex-wrap breadcrumb-list">
              <li>
                <Link href="/rtl" className="d-inline-block t-link clr-light :clr-accent"> بيت </Link>
              </li>
              <li className="">
                <Link href="#" className="d-inline-block t-link clr-light :clr-accent"> شركة </Link>
              </li>
              <li className="">
                <Link href="#" className="d-inline-block t-link clr-light :clr-accent"> التعليمات </Link>
              </li>
              <li className="d-none">
                <Link href="#" className="d-inline-block t-link clr-light :clr-accent">
                </Link>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </section>
      {/* <!-- FAQ Section --> */}
      <div className="section">
        <div className="container">
          <div className="row justify-content-lg-between">
            <div className="col-lg-5">
            <div className="section__gap-bottom pb-lg-0 position-sticky top-0">
              <span className="d-block h5 lh-1 fw-semibold clr-base"> أسئلة و أجوبة </span>
              <h2 className="mt-2 mb-4"> أي أسئلة؟ تجد هنا. </h2>
              <p className="t-short-para mb-8"> لا تجد إجابتك هنا؟ فقط أرسل لنا رسالة لأي استفسار. </p>
              <Link href="contact-us-1" className="bttn bttn--base bttn-md gap-2 bttn-pill fw-md"> اتصل بنا <span className="material-symbols-rounded mat-icon size-16 fw-400 bttn__icon-cover d-flex align-items-center"> arrow_forward </span>
              </Link>
            </div>
            </div>
            <div className="col-lg-6">
              <div className="custom-accordion custom-accordion--1">
                {faq_1_data.map(({ id, answer, question }) => (
                  <div key={id} className="custom-accordion__item">
                    <div className="custom-accordion__header" onClick={()=>handleOpen(id)}>
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
                    <div className={`custom-accordion__body`} style={id == active?opened:closed}>
                      <div className="custom-accordion__content">
                        <p> {answer} </p>
                      </div>
                    </div>
                  </div>
                ))}             
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- FAQ Section 2 --> */}
      <div className="section bg-neutral-100">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
            <div className="col-md-10 col-xl-7">
              <span className="d-block h5 lh-1 fw-semibold clr-base text-center"> تحتاج مساعدة؟ اقرأ الأسئلة الشائعة </span>
              <h2 className="my-5 text-center"> أسئلة مكررة </h2>
              <p className="text-center"> تمكن الخبرة العميقة في مجال Itechex العلامات التجارية العالمية من البدء في العمل. </p>
            </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-6 justify-content-between">
            <div className="col-lg-6">
              <div className="section__gap-bottom pb-lg-0 sticky-top top-0">
                <div className="custom-accordion custom-accordion--1">                  
                      {faq_2_data.map(({ id, answer, question }) => (
                        <div key={id} className="custom-accordion__item">
                          <div className="custom-accordion__header" onClick={()=>handleOpen1(id)}>
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
                          <div className={`custom-accordion__body`} style={id == active1?opened:closed}>
                            <div className="custom-accordion__content">
                              <p> {answer} </p>
                            </div>
                          </div>
                        </div>
                      ))}                  
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5">
              <img
                src="/images/faq-img.png"
                alt="image"
                className="img-fluid w-100"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Consult Section  --> */}
      <Consult />
      {/* <!-- Resource Section --> */}
      <div className="section">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
            <div className="col-md-11">
              <span className="d-block h5 lh-1 fw-semibold clr-base text-center"> موارد </span>
              <h2 className="mt-5 text-center"> اريد معرفة المزيد؟ نحن نؤمن بقوة تبادل الخبرات والأفكار والمعرفة. تحقق من مواردنا. </h2>
            </div>
            </div>
          </div>
        </div>
        <div className="container-xl">
        <div className="row g-6">
          <div className="col-md-4">
            <div className="blog-post-1 text-center pt-8 pb-4">
              <Link href="blog-details-1" className="t-link d-inline-block">
                <img src="/images/book-img-1.png" alt="image" className="img-fluid" />
              </Link>
              <div className="blog-post-1__body text-center">
                <h5 className="mb-2">
                  <Link href="blog-details-1" className="t-link d-block clr-heading :clr-base d-block"> كتيب رفرفة </Link>
                </h5>
                <p> كتيب دليل تطوير تطبيق </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="blog-post-1 text-center pt-8 pb-4">
              <Link href="blog-details-1" className="t-link d-inline-block">
                <img src="/images/book-img-2.png" alt="image" className="img-fluid" />
              </Link>
              <div className="blog-post-1__body text-center">
                <h5 className="mb-2">
                  <Link href="blog-details-1" className="t-link d-block clr-heading :clr-base d-block"> كتاب الثقافة 2022 </Link>
                </h5>
                <p> تعال وقابلنا في أي وقت! </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="blog-post-1 text-center pt-8 pb-4">
              <Link href="blog-details-1" className="t-link d-inline-block">
                <img src="/images/book-img-3.png" alt="image" className="img-fluid" />
              </Link>
              <div className="blog-post-1__body text-center">
                <h5 className="mb-2">
                  <Link href="blog-details-1" className="t-link d-block clr-heading :clr-base d-block"> تجربة المستخدم كتاب الاتجاه </Link>
                </h5>
                <p> الاتجاهات التي ستهيمن في عام 2022 </p>
              </div>
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

export default faq_1;
