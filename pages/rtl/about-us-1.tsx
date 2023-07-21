import Team from "@/components/rtl/home_1/Team";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Feedback_2 from "@/components/rtl/Feedback_2";
import Videosection from "@/components/rtl/Videosection";
import { useEffect } from "react";
import Navbar from "@/components/rtl/Navbar";
import Footer from "@/components/rtl/home_4/Footer";

const about_us_1 = () => {
  const handleMouseOver = (event: any) => {
    const target = event.currentTarget;
    target.classList.add("active");
    const siblings = Array.from(target.parentNode.children).filter(
      (element) => element !== target
    );
    siblings.forEach((element: any) => {
      element.classList.remove("active");
    });
  };
  const valueSliderStep = [
    '<span className="d-inline-block clr-base me-2">01</span> People <span className="value-slider__circle value-slider__circle-1"></span>',
    '<span className="d-inline-block clr-base me-2">02</span> Growth <span className="value-slider__circle value-slider__circle-2"></span>',
    '<span className="d-inline-block clr-base me-2">03</span> Responsibility <span className="value-slider__circle value-slider__circle-3"></span>',
    '<span className="d-inline-block clr-base me-2">04</span> Fullfilment <span className="value-slider__circle value-slider__circle-4"></span>',
    '<span className="d-inline-block clr-base me-2">05</span> Fair Play <span className="value-slider__circle value-slider__circle-5"></span>',
    '<span className="d-inline-block clr-base me-2">06</span> Opennes <span className="value-slider__circle value-slider__circle-6"></span>',
  ];
  useEffect(() => {
    document.documentElement.setAttribute("dir", "rtl");
  }, []);
  return (
    <>
      <Navbar ltrurl="/about-us-1" />
      {/* Banner Section */}
      <section className="banner-section section--sm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="clr-light mb-3"> معلومات عنا </h3>
              <ul className="list list-row flex-wrap breadcrumb-list">
                <li>
                  <Link href="/rtl" className="d-inline-block t-link clr-light :clr-accent"> بيت </Link>
                </li>
                <li className="">
                  <Link href="#" className="d-inline-block t-link clr-light :clr-accent"> من نحن_02 </Link>
                </li>
                <li className="d-none">
                  <Link href="#" className="d-inline-block t-link clr-light :clr-accent">
                  </Link>
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
      {/* <!-- About Section  --> */}
      <div className="section">
        <div className="container">
          <div className="row justify-content-xxl-between">
            <div className="col-lg-6 col-xxl-5">
              <div className="section__gap-bottom pb-lg-0 position-sticky top-0">
                <span className="d-block h5 lh-1 fw-semibold clr-base"> نحن عرافة تكنولوجيا المعلومات </span>
                <h2 className="mt-2 mb-4"> عالم من المواهب في متناول يدك </h2>
                <p className="mb-5"> نقوم بتجميع فرق عالية المستوى ومخصصة من المطورين لمساعدة الشركات الناشئة سريعة النمو و الشركات المبتكرة تقود التأثير وتحقق أهدافها. </p>
                <p className="mb-8"> لقد بدأنا منذ أكثر من 15 عامًا وتطورنا منذ ذلك الحين إلى شركة عالمية حقًا. بينما ينشغل عملاؤنا بالعمل كالمعتاد ، فإننا نعمل في كل ركن من أركان خريطة لإبراز مشروعهم القادم. </p>
                <Link href="contact-us-1" className="bttn bttn--base bttn-md bttn-pill gap-2 fw-md flex-shrink-0"> دعونا نعمل معا <span className="material-symbols-rounded mat-icon size-16 fw-400 bttn__icon-cover d-flex align-items-center"> arrow_forward </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <figure className="about-company-1__img">
                <img src="/images/about-img-1.png" alt="image" className="img-fluid" />
                <figcaption className="about-company-1__img-wrapper">
                  <span className="h2 clr-light m-0 d-block text-start"> 1000 </span>
                  <span className="d-block clr-light text-start"> يستخدم أكثر من 1000 موظف حول العالم رؤيتنا لخدمات الواقع. </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Gallery  --> */}
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-12">
            <Swiper
              dir="rtl"
              slidesPerView="auto"
              centeredSlides={true}
              spaceBetween={24}
              loop={true}
              centeredSlidesBounds={true}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              speed={4000}
              breakpoints={{
                768: {
                  slidesPerView: 1.5,
                  spaceBetween: 16,
                },
                1200: {
                  slidesPerView: 2.5,
                  spaceBetween: 32,
                },
                1920: {
                  slidesPerView: 3.5,
                },
              }}
              modules={[Autoplay]}
              className="gallery-slider-1">
              <SwiperSlide>
                <div className="gallery-slider-1__item">
                  <img
                    src="/images/gallery-slider-1.png"
                    alt="image"
                    className="img-fluid"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="gallery-slider-1__item">
                  <img
                    src="/images/gallery-slider-2.png"
                    alt="image"
                    className="img-fluid"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="gallery-slider-1__item">
                  <img
                    src="/images/gallery-slider-3.png"
                    alt="image"
                    className="img-fluid"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="gallery-slider-1__item">
                  <img
                    src="/images/gallery-slider-4.png"
                    alt="image"
                    className="img-fluid"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="gallery-slider-1__item">
                  <img
                    src="/images/gallery-slider-5.png"
                    alt="image"
                    className="img-fluid"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      {/* <!-- Numbers  --> */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section__gap-bottom pb-lg-0 position-sticky top-0">
                <span className="d-block h5 lh-1 fw-semibold clr-base"> كبار المهندسين كرّسوا نجاحكم </span>
                <h2 className="mt-2 mb-4"> الأرقام تتحدث بصوت أعلى من الكلمات </h2>
                <p> فيما يلي بعض الأرقام التي تتحدث عن قوة ست عشري وسهولة وسرعة. </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-sm-6">
                  <div className="py-4 border-top">
                    <p className="mb-2 clr-heading md-text"> المطورون: </p>
                    <h2 className="fw-normal clr-base"> 3.5k </h2>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="py-4 border-top">
                    <p className="mb-2 clr-heading md-text"> المهندسين رفيعي المستوى: </p>
                    <h2 className="fw-normal clr-base"> 70% </h2>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="py-4 border-top">
                    <p className="mb-2 clr-heading md-text"> العملاء الذين تم خدمتهم حتى الآن: </p>
                    <h2 className="fw-normal clr-base"> 500+ </h2>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="py-4 border-top">
                    <p className="mb-2 clr-heading md-text"> سنوات في الأعمال: </p>
                    <h2 className="fw-normal clr-base"> 20 </h2>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="py-4 border-top">
                    <p className="mb-2 clr-heading md-text"> العملاء عن طريق الإحالة: </p>
                    <h2 className="fw-normal clr-base"> 70% </h2>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="py-4 border-top">
                    <p className="mb-2 clr-heading md-text"> متوسط ​​المشاركة: </p>
                    <h2 className="fw-normal clr-base"> 36 </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Year Review  --> */}
      <div className="section p-xl-0 bg-base-800 position-relative">
        <div className="section__gap-bottom year-review__head">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <h2 className="clr-light text-center"> إيتشيكس على مر السنين </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-12">
              <div className="year-review">
                <div onMouseOver={handleMouseOver} className="year-review__column">
                  <div className="year-review__year"> 2010 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2010</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light"> فزنا بأول عميل لنا وحيد القرن </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light"> ارتفع عدد عملاء الاكتتاب العام لدينا إلى 10 </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light"> يغوص إيتشيكس في مجال إنترنت الأشياء </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light"> نحن نتكاتف مع اتصال CTO </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 1000 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text--xlcenter clr-light">المطورين</p>
                    </div>
                  </div>
                </div>
                <div onMouseOver={handleMouseOver} className="year-review__column">
                  <div className="year-review__year"> 2011 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2011</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light"> فزنا بأول عميل لنا وحيد القرن </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light"> ارتفع عدد عملاء الاكتتاب العام لدينا إلى 10 </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light"> يغوص إيتشيكس في مجال إنترنت الأشياء </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light"> نحن نتكاتف مع اتصال CTO </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 1080 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">المطورين</p>
                    </div>
                  </div>
                </div>
                <div onMouseOver={handleMouseOver} className="year-review__column">
                  <div className="year-review__year"> 2012 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2012</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light"> فزنا بأول عميل لنا وحيد القرن </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light"> ارتفع عدد عملاء الاكتتاب العام لدينا إلى 10 </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light"> يغوص إيتشيكس في مجال إنترنت الأشياء </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light"> نحن نتكاتف مع اتصال CTO </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 1000 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">المطورين</p>
                    </div>
                  </div>
                </div>
                <div onMouseOver={handleMouseOver} className="year-review__column">
                  <div className="year-review__year"> 2013 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2013</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light"> فزنا بأول عميل لنا وحيد القرن </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light"> ارتفع عدد عملاء الاكتتاب العام لدينا إلى 10 </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light"> يغوص إيتشيكس في مجال إنترنت الأشياء </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light"> نحن نتكاتف مع اتصال CTO </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 2100 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">المطورين</p>
                    </div>
                  </div>
                </div>
                <div onMouseOver={handleMouseOver} className="year-review__column">
                  <div className="year-review__year"> 2014 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2014</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light"> فزنا بأول عميل لنا وحيد القرن </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light"> ارتفع عدد عملاء الاكتتاب العام لدينا إلى 10 </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light"> يغوص إيتشيكس في مجال إنترنت الأشياء </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light"> نحن نتكاتف مع اتصال CTO </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 2600 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">المطورين</p>
                    </div>
                  </div>
                </div>
                <div onMouseOver={handleMouseOver} className="year-review__column active">
                  <div className="year-review__year"> 2015 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2015</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light"> فزنا بأول عميل لنا وحيد القرن </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light"> ارتفع عدد عملاء الاكتتاب العام لدينا إلى 10 </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light"> يغوص إيتشيكس في مجال إنترنت الأشياء </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light"> نحن نتكاتف مع اتصال CTO </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 2700 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">المطورين</p>
                    </div>
                  </div>
                </div>
                <div onMouseOver={handleMouseOver} className="year-review__column ">
                  <div className="year-review__year"> 2016 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2016</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light"> فزنا بأول عميل لنا وحيد القرن </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light"> ارتفع عدد عملاء الاكتتاب العام لدينا إلى 10 </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light"> يغوص إيتشيكس في مجال إنترنت الأشياء </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light"> نحن نتكاتف مع اتصال CTO </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 2900 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">المطورين</p>
                    </div>
                  </div>
                </div>
                <div onMouseOver={handleMouseOver} className="year-review__column">
                  <div className="year-review__year"> 2017 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2017</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light"> فزنا بأول عميل لنا وحيد القرن </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light"> ارتفع عدد عملاء الاكتتاب العام لدينا إلى 10 </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light"> يغوص إيتشيكس في مجال إنترنت الأشياء </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light"> نحن نتكاتف مع اتصال CTO </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 3100 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">المطورين</p>
                    </div>
                  </div>
                </div>
                <div onMouseOver={handleMouseOver} className="year-review__column">
                  <div className="year-review__year"> 2018 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2018</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light"> فزنا بأول عميل لنا وحيد القرن </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light"> ارتفع عدد عملاء الاكتتاب العام لدينا إلى 10 </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light"> يغوص إيتشيكس في مجال إنترنت الأشياء </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light"> نحن نتكاتف مع اتصال CTO </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 3300 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">المطورين</p>
                    </div>
                  </div>
                </div>
                <div onMouseOver={handleMouseOver} className="year-review__column">
                  <div className="year-review__year"> 2019 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2019</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light"> فزنا بأول عميل لنا وحيد القرن </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light"> ارتفع عدد عملاء الاكتتاب العام لدينا إلى 10 </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light"> يغوص إيتشيكس في مجال إنترنت الأشياء </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light"> نحن نتكاتف مع اتصال CTO </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 3500 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">المطورين</p>
                    </div>
                  </div>
                </div>
                <div onMouseOver={handleMouseOver} className="year-review__column">
                  <div className="year-review__year"> 2020 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2020</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light"> فزنا بأول عميل لنا وحيد القرن </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light"> ارتفع عدد عملاء الاكتتاب العام لدينا إلى 10 </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light"> يغوص إيتشيكس في مجال إنترنت الأشياء </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light"> نحن نتكاتف مع اتصال CTO </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 3800 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">المطورين</p>
                    </div>
                  </div>
                </div>
                <div onMouseOver={handleMouseOver} className="year-review__column">
                  <div className="year-review__year"> 2021 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2021</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light"> فزنا بأول عميل لنا وحيد القرن </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light"> ارتفع عدد عملاء الاكتتاب العام لدينا إلى 10 </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light"> يغوص إيتشيكس في مجال إنترنت الأشياء </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light"> نحن نتكاتف مع اتصال CTO </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 4050 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">المطورين</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Value Share  --> */}
      <section className="section">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-lg-8 col-xl-6">
                <span className="d-block h5 lh-1 fw-semibold clr-base"> القيم التي نتشاركها </span>
                <h2 className="mt-2 mb-4"> القيم التي تحرك كل ما نقوم به </h2>
                <p className="t-short-para"> القيم القوية التي تجمع الأشخاص العظماء معًا </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="value-slider-container">
                <div className="value-slider__step">
                  <div className="swiper-pagination"></div>
                </div>
                <Swiper
                  dir="rtl"
                  slidesPerView={1}
                  autoplay={false}
                  speed={1000}
                  pagination={{
                    el: ".value-slider-container .swiper-pagination",
                    type:'bullets',
                    clickable: true,
                    renderBullet: function (index, className) {
                      return '<span class="' + className + '"> ' + (valueSliderStep[index]) + "</span>";
                    }
                  }}
                  navigation={{
                    nextEl: ".value-slider-container .swiper-button-next",
                    prevEl: ".value-slider-container .swiper-button-prev"
                  }}
                  effect="fade"
                  fadeEffect={{
                    crossFade: false
                  }}
                  onInit={(swiper) => {
                    const bullets = swiper.pagination.bullets;
                    const valueFraction = document.querySelector('.value-slider__fraction');
                    if (valueFraction) {
                      valueFraction.innerHTML = `1 / ${bullets.length}`;
                    }
                  }}
                  onSlideChange={(swiper) => {
                    const bullets = swiper.pagination.bullets;
                    const activeIndex = document.querySelector('.swiper-pagination-bullet-active .clr-base');
                    const finalIndex = activeIndex ? Number(activeIndex.textContent).toString() : '';
                    const valueFraction = document.querySelector('.value-slider__fraction');
                    if (valueFraction) {
                      valueFraction.innerHTML = `${finalIndex} / ${bullets.length}`;
                    }
                  }}
                  modules={[Navigation, EffectFade, Pagination]}
                  className="value-slider">
                  {/* <!-- Slides --> */}
                  <SwiperSlide>
                    <div className="value-slider__slide section--sm section--bottom">
                      <div className="row g-4 justify-content-xl-between align-items-lg-center">
                        <div className="col-lg-6 col-xl-7">
                          <div className="section__gap-bottom pb-lg-0">
                            <img
                              src="/images/value-slide-1.png"
                              alt="image"
                              className="value-slider__img"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-xl-4">
                          <h3 className="mb-5 clr-light"> الناس </h3>
                          <p className="clr-light"> إنها أعظم الأصول التي تم بناء بيت البرمجيات عليها. نحن العمل معهم ومن أجلهم ، والتأكد من شعورهم بالرضا والتقدير والرضا. </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="value-slider__slide section--sm section--bottom">
                      <div className="row g-4 justify-content-xl-between align-items-lg-center">
                        <div className="col-lg-6 col-xl-7">
                          <div className="section__gap-bottom pb-lg-0">
                            <img
                              src="/images/value-slide-2.png"
                              alt="image"
                              className="value-slider__img"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-xl-4">
                          <h3 className="mb-5 clr-light"> الانفتاح </h3>
                          <p className="clr-light"> نرحب بالأفكار والتحديات الجديدة التي تنتظرنا. الحفاظ على نطاق واسع منظور المستقبل ، نكتشف المشاكل المحتملة والحقيقية في المستقبل ل الوقت الذي نتعامل معه على وجه السرعة. الانفتاح على بعضنا البعض محركات العلاقات مع عملائنا وزملائنا. </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="value-slider__slide section--sm section--bottom">
                      <div className="row g-4 justify-content-xl-between align-items-lg-center">
                        <div className="col-lg-6 col-xl-7">
                          <div className="section__gap-bottom pb-lg-0">
                            <img
                              src="/images/value-slide-3.png"
                              alt="image"
                              className="value-slider__img"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-xl-4">
                          <h3 className="mb-5 clr-light"> اللعب العادل </h3>
                          <p className="clr-light"> نحن نسعى جاهدين لاتخاذ قرارات عادلة لجميع الأطراف. ملكنا موظفين الحصول على الثناء الكافي لجهودهم والتعويضات الخاصة بهم مهارات. وبالمثل ، يرى عملاؤنا أسعارًا مناسبة لعملائنا تورط وجودة العمل. </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="value-slider__slide section--sm section--bottom">
                      <div className="row g-4 justify-content-xl-between align-items-lg-center">
                        <div className="col-lg-6 col-xl-7">
                          <div className="section__gap-bottom pb-lg-0">
                            <img
                              src="/images/value-slide-4.png"
                              alt="image"
                              className="value-slider__img"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-xl-4">
                          <h3 className="mb-5 clr-light"> تحقيق، إنجاز </h3>
                          <p className="clr-light"> إن الوفاء بعملنا يجعلنا نشيطين. نخلق الصف الأول برمجيات سريعة وفعالة وجاهزة للتوسع لأننا نريد ذلك نحن ونفخر بعملائنا لعملائنا. </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="value-slider__slide section--sm section--bottom">
                      <div className="row g-4 justify-content-xl-between align-items-lg-center">
                        <div className="col-lg-6 col-xl-7">
                          <div className="section__gap-bottom pb-lg-0">
                            <img
                              src="/images/value-slide-1.png"
                              alt="image"
                              className="value-slider__img"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-xl-4">
                          <h3 className="mb-5 clr-light"> مسؤولية </h3>
                          <p className="clr-light"> لضمان نجاح عملائنا ، نجلب المعرفة والتكنولوجيا المهارات ، والمشاركة العالية لكل مشروع. اتصالاتنا بقايا مفتوح لجميع الشركاء بغض النظر عن قارتهم أو ثقافتهم أو وقت منطقة. </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="value-slider__slide section--sm section--bottom">
                      <div className="row g-4 justify-content-xl-between align-items-lg-center">
                        <div className="col-lg-6 col-xl-7">
                          <div className="section__gap-bottom pb-lg-0">
                            <img
                              src="/images/value-slide-2.png"
                              alt="image"
                              className="value-slider__img"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-xl-4">
                          <h3 className="mb-5 clr-light"> نمو </h3>
                          <p className="clr-light"> نحن نهدف إلى التعلم دائمًا لفهم كل جديد من عالم التكنولوجيا. نحن ندعم تعلم وممارسة موظفينا لذلك الذي - التي يمكنهم تقديم حلول من الدرجة الأولى في المشاريع الطموحة. </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="value-slider__control">
                  <div className="value-slider__fraction"></div>
                  <div className="value-slider__btn swiper-button-prev"></div>
                  <div className="value-slider__btn swiper-button-next"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Video Section  --> */}
      <Videosection />
      {/* <!-- Team Member  --> */}
      <Team />
      {/* <!-- Feedback Section  --> */}
      <Feedback_2 />
      {/* <!-- Brand Section  --> */}
      <div className="section--sm section--bottom">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7">
                <span className="d-block h5 lh-1 fw-semibold clr-base text-center"> عملائنا </span>
                <h2 className="mt-5 text-center"> حول العالم 6000+ عميل راضٍ </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-6 align-items-center">
            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
              <img
                src="/images/client-1.png"
                alt="image"
                className="img-fluid"
              />
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
              <img
                src="/images/client-2.png"
                alt="image"
                className="img-fluid"
              />
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
              <img
                src="/images/client-3.png"
                alt="image"
                className="img-fluid"
              />
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
              <img
                src="/images/client-4.png"
                alt="image"
                className="img-fluid"
              />
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
              <img
                src="/images/client-5.png"
                alt="image"
                className="img-fluid"
              />
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
              <img
                src="/images/client-6.png"
                alt="image"
                className="img-fluid"
              />
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
              <img
                src="/images/client-7.png"
                alt="image"
                className="img-fluid"
              />
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
              <img
                src="/images/client-8.png"
                alt="image"
                className="img-fluid"
              />
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
              <img
                src="/images/client-9.png"
                alt="image"
                className="img-fluid"
              />
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
              <img
                src="/images/client-10.png"
                alt="image"
                className="img-fluid"
              />
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
              <img
                src="/images/client-11.png"
                alt="image"
                className="img-fluid"
              />
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
              <img
                src="/images/client-12.png"
                alt="image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default about_us_1;
