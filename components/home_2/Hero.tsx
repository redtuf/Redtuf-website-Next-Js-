import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import Link from "next/link";

const Hero = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Swiper
      dir="ltr"
      loop={true}
      pagination={{
        el: ".hero-slider-1 .swiper-pagination",
        type: "bullets",
        clickable: true,
      }}
      slidesPerView={1}
      autoplay={{
        delay: 8000,
        pauseOnMouseEnter: true,
      }}
      speed={1500}
      autoHeight={false}
      modules={[Pagination, Autoplay]}
      className="hero-slider-1"
      >
      {/* <!-- Additional required wrapper --> */}
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="UmHMVU6dceA"
        onClose={() => setOpen(false)}
      />

      {/* <!-- Slides --> */}
      <SwiperSlide>
        <div
          className="swiper-slide hero-slider-1__slide hero-slider-1__slide-1"
          style={{ backgroundImage: "url(/images/bg-1.png)" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-xl-7 col-xxl-8">
                <div className="hero-slider-1__item">
                  <span className="d-block h4 fw-semibold clr-accent mb-5">
                    {" "}
                    Great IT field experience{" "}
                  </span>
                  <h1 className="clr-light mb-5">
                    {" "}
                    Innovative IT solutions to help your business{" "}
                  </h1>
                  <p className="t-short-para clr-light xl-text mb-10">
                    {" "}
                    Our Number One Goal Is to Become the Most Reputable
                    Worldwide Provider of IT Solutions{" "}
                  </p>
                  <div className="group group-sm-row align-items-start align-items-sm-center">
                    <Link
                      href="contact-us-1"
                      className="bttn bttn-pill bttn-md bttn--light-outline align-items-center gap-2 fw-md clr-light">
                      {" "}
                      Let’s Talk Now{" "}
                      <span className="material-symbols-rounded mat-icon size-16 fw-400 bttn__icon-cover d-flex align-items-center">
                        {" "}
                        headphones{" "}
                      </span>
                    </Link>
                    <div className="list list-row align-items-center flex-shrink-0">
                      <Link
                        onClick={() => setOpen(true)}
                        href="#"                  
                        className="bttn bttn--circle bttn--sqr bttn--sqr-md bttn--light-accent video-button">
                        <span className="material-symbols-rounded mat-icon size-40 solid">
                          {" "}
                          play_arrow{" "}
                        </span>
                      </Link>
                      <p className="clr-neutral">How we work</p>
                    </div>
                  </div>
                  <img
                    src="/images/hero-img-1.png"
                    alt="image"
                    className="img-fluid hero-slider-1__img"
                    style={{'top':"-80px"}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="swiper-slide hero-slider-1__slide hero-slider-1__slide-2"
          style={{ backgroundImage: "url(/images/hero-slider-1-bg-2.png)" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-xl-7 col-xxl-8">
                <div className="hero-slider-1__item">
                  <span className="d-block h4 fw-semibold clr-accent mb-5">
                    {" "}
                    Simple Integration.{" "}
                  </span>
                  <h1 className="clr-light mb-5">
                    {" "}
                    Best IT support for business success.{" "}
                  </h1>
                  <p className="t-short-para clr-light xl-text mb-10">
                    {" "}
                    Our Number One Goal Is to Become the Most Reputable
                    Worldwide Provider of IT Solutions{" "}
                  </p>
                  <div className="group group-sm-row align-items-start align-items-sm-center">
                    <Link
                      href="contact-us-1"
                      className="bttn bttn-pill bttn-md bttn--light-outline align-items-center gap-2 fw-md clr-light">
                      {" "}
                      Let’s Talk Now{" "}
                      <span className="material-symbols-rounded mat-icon size-16 fw-400 bttn__icon-cover d-flex align-items-center">
                        {" "}
                        headphones{" "}
                      </span>
                    </Link>
                    <div className="list list-row align-items-center flex-shrink-0">
                      <Link
                        onClick={() => setOpen(true)}
                        href="#"
                        className="bttn bttn--circle bttn--sqr bttn--sqr-md bttn--light-accent video-button">
                        <span className="material-symbols-rounded mat-icon size-40 solid">
                          {" "}
                          play_arrow{" "}
                        </span>
                      </Link>
                      <p className="clr-neutral">How we work</p>
                    </div>
                  </div>
                  <img
                    src="/images/hero-2-img-2.png"
                    alt="image"
                    className="img-fluid hero-slider-1__img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="swiper-slide hero-slider-1__slide hero-slider-1__slide-3"
          style={{ backgroundImage: "url(/images/hero-slider-1-bg-3.png)" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-xl-7 col-xxl-8">
                <div className="hero-slider-1__item">
                  <span className="d-block h4 fw-semibold clr-accent mb-5">
                    {" "}
                    Technology & It Services{" "}
                  </span>
                  <h1 className="clr-light mb-5">
                    {" "}
                    Best IT support for business success.{" "}
                  </h1>
                  <p className="t-short-para clr-light xl-text mb-10">
                    {" "}
                    Our Number One Goal Is to Become the Most Reputable
                    Worldwide Provider of IT Solutions{" "}
                  </p>
                  <div className="group group-sm-row align-items-start align-items-sm-center">
                    <Link
                      href="contact-us-1"
                      className="bttn bttn-pill bttn-md bttn--light-outline align-items-center gap-2 fw-md clr-light">
                      {" "}
                      Let’s Talk Now{" "}
                      <span className="material-symbols-rounded mat-icon size-16 fw-400 bttn__icon-cover d-flex align-items-center">
                        {" "}
                        headphones{" "}
                      </span>
                    </Link>
                    <div className="list list-row align-items-center flex-shrink-0">
                      <Link
                        onClick={() => setOpen(true)}
                        href="#"
                        className="bttn bttn--circle bttn--sqr bttn--sqr-md bttn--light-accent video-button">
                        <span className="material-symbols-rounded mat-icon size-40 solid">
                          {" "}
                          play_arrow{" "}
                        </span>
                      </Link>
                      <p className="clr-neutral">How we work</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* <!-- If we need pagination --> */}
      <div className="swiper-pagination"></div>
    </Swiper>
  );
};

export default Hero;
