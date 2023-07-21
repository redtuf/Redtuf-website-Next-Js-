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
              dir="ltr"
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
                crossFade:false
              }}
              modules={[Navigation, Autoplay, EffectFade, Pagination]}
              className="hero-slider-2"
              >
              <SwiperSlide>
                <div className="hero-slider-2__item">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-10 col-lg-6">
                        <div className="text-center text-md-start">
                          <span className="d-block h5 lh-1 fw-semibold clr-base">
                            {" "}
                            Move Effortlessly to the Cloud{" "}
                          </span>
                          <h1 className="mt-5 mb-5">
                            {" "}
                            Easy Cloud{" "}
                            <span className="d-inline clr-base">Migration</span>
                          </h1>
                          <p className="mb-8 xl-text max-text-40">
                            {" "}
                            Serverless cloud migration strategies focus on
                            scaling and performance.{" "}
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
                            Create bespoke products{" "}
                          </span>
                          <h1 className="mt-5 mb-5">
                            {" "}
                            Develop custom{" "}
                            <span className="d-inline clr-base">products</span>
                          </h1>
                          <p className="mb-8 xl-text max-text-40">
                            {" "}
                            Develop software with scalable technological
                            infrastructure, fast time to market, clean and
                            efficient code, and quick technology upgrades.{" "}
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
                            Analytics-Based Concluding{" "}
                          </span>
                          <h1 className="mt-5 mb-5">
                            {" "}
                            Data-Driven{" "}
                            <span className="d-inline clr-base">Insights</span>
                          </h1>
                          <p className="mb-8 xl-text max-text-40">
                            {" "}
                            Intelligent data management boosts operational
                            efficiency. Advanced data management strategies
                            yield great insights.{" "}
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
                          <span className="d-block h5 lh-1 fw-semibold clr-base">
                            {" "}
                            Solutions for Efficient Mobility{" "}
                          </span>
                          <h1 className="mt-5 mb-5">
                            {" "}
                            Smart Mobility{" "}
                            <span className="d-inline clr-base">Solutions</span>
                          </h1>
                          <p className="mb-8 xl-text max-text-40">
                            {" "}
                            Thoughtfully built mobility solutions with amazing
                            content, cutting-edge technologies, and multi-device
                            knowledge.{" "}
                          </p>
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
              <span className="hero-slider-2__indicator"> SCROLL DOWN </span>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
