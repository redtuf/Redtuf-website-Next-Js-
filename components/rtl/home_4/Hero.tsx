import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Hero = () => {
  return (
    <section className="hero-4">
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-12">
            <Swiper
              dir="rtl"
              slidesPerView={1}
              spaceBetween={30}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 8000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
              pagination={{
                el: ".hero-slider-2 .swiper-pagination",
                type: "fraction",
              }}
              navigation={{
                nextEl: ".hero-slider-2 .swiper-button-next",
                prevEl: ".hero-slider-2 .swiper-button-prev",
              }}
              effect="fade"
              fadeEffect={{
                crossFade: false,
              }}
              modules={[Navigation, Autoplay, EffectFade, Pagination]}
              className="hero-slider-2">
              <SwiperSlide>
                <div className="hero-slider-2__item">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-10 col-lg-6">
                        <div className="text-center text-md-start">
                          <span className="d-block h5 lh-1 fw-semibold clr-base">
                            {" "}
                            انتقل بسهولة إلى السحابة{" "}
                          </span>
                          <h1 className="mt-5 mb-5">
                            {" "}
                            سحابة سهلة{" "}
                            <span className="d-inline clr-base">الهجرة</span>
                          </h1>
                          <p className="mb-8 xl-text max-text-40">
                            {" "}
                            تركز إستراتيجيات الترحيل السحابي بدون خادم على
                            التوسع و أداء.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="hero-slider-2__bg"
                    style={{
                      backgroundImage: "url(/images/slider-2-img-1.png)",
                    }}></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero-slider-2__item">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-10 col-lg-6">
                        <div className="text-center text-md-start">
                          <span className="d-block h5 lh-1 fw-semibold clr-base">
                            {" "}
                            الاستنتاج القائم على التحليلات{" "}
                          </span>
                          <h1 className="mt-5 mb-5">
                            {" "}
                            تعتمد على البيانات{" "}
                            <span className="d-inline clr-base">أفكار</span>
                          </h1>
                          <p className="mb-8 xl-text max-text-40">
                            {" "}
                            تعزز الإدارة الذكية للبيانات الكفاءة التشغيلية. تقدم
                            استراتيجيات إدارة البيانات المتقدمة رؤى عظيمة.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="hero-slider-2__bg"
                    style={{
                      backgroundImage: "url(/images/slider-2-img-2.png)",
                    }}></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero-slider-2__item">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-10 col-lg-6">
                        <div className="text-center text-md-start">
                          <span className="d-block h5 lh-1 fw-semibold clr-base">
                            {" "}
                            حلول للتنقل الفعال{" "}
                          </span>
                          <h1 className="mt-5 mb-5">
                            {" "}
                            التنقل الذكي{" "}
                            <span className="d-inline clr-base">حلول</span>
                          </h1>
                          <p className="mb-8 xl-text max-text-40">
                            {" "}
                            حلول تنقل مبنية بعناية مع محتوى مذهل ، أحدث التقنيات
                            والمعرفة متعددة الأجهزة.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="hero-slider-2__bg"
                    style={{
                      backgroundImage: "url(/images/slider-2-img-3.png)",
                    }}></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero-slider-2__item">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-10 col-lg-6">
                      <div className="text-center text-md-start">
                            <span className="d-block h5 lh-1 fw-semibold clr-base"> حلول للتنقل الفعال </span>
                            <h1 className="mt-5 mb-5"> التنقل الذكي <span className="d-inline clr-base">حلول</span>
                            </h1>
                            <p className="mb-8 xl-text max-text-40"> حلول تنقل مبنية بعناية مع محتوى مذهل ، أحدث التقنيات والمعرفة متعددة الأجهزة. </p>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="hero-slider-2__bg"
                    style={{
                      backgroundImage: "url(/images/slider-2-img-4.png)",
                    }}></div>
                </div>
              </SwiperSlide>

              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-xl-3">
                    <div className="position-relative">
                      <div className="swiper-button swiper-button-next"></div>
                      <div className="swiper-button swiper-button-prev"></div>
                      <div className="swiper-pagination"></div>
                    </div>
                  </div>
                </div>
              </div>
              <span className="hero-slider-2__indicator"> حرك الفأرة لأسفل </span>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
