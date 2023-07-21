import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Testimonail = () => {
  return (
    <div className="section">
      <div className="section__gap-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8 col-xxl-7">
              <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
                {" "}
                الآراء التي عبر عنها عملاؤنا الحاليون{" "}
              </span>
              <h2 className="mt-5 mb-5 text-center">
                {" "}
                لا تأخذ كلمتنا على محمل الجد. انظر ماذا يقول عملاؤنا{" "}
              </h2>
              <p className="text-center mx-auto max-text-60">
                {" "}
                فيما يلي عدد قليل من ملاحظات عملائنا. لا تثق في ما نقوله. يملك
                نظرة على ما قاله بعض عملائنا السابقين عنا.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="feedback-slider-2">
              <Swiper
                dir="rtl"
                slidesPerView="auto"
                loop={true}
                navigation={{
                  nextEl: ".feedback-slider-2__btn.swiper-button-next",
                  prevEl: ".feedback-slider-2__btn.swiper-button-prev",
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  992: {
                    slidesPerView: 2,
                  },
                }}
                autoplay={true}
                modules={[Autoplay, Navigation]}>
                <SwiperSlide>
                  <div className=" px-3 px-md-4">
                    <div className="feedback-card-1">
                      <ul className="list list-row list-xxs align-items-center lh-1">
                        <li>
                          <span className="material-symbols-outlined mat-icon solid text-warning size-32">
                            {" "}
                            star{" "}
                          </span>
                        </li>
                        <li>
                          <span className="material-symbols-outlined mat-icon solid text-warning size-32">
                            {" "}
                            star{" "}
                          </span>
                        </li>
                        <li>
                          <span className="material-symbols-outlined mat-icon solid text-warning size-32">
                            {" "}
                            star{" "}
                          </span>
                        </li>
                        <li>
                          <span className="material-symbols-outlined mat-icon solid text-warning size-32">
                            {" "}
                            star{" "}
                          </span>
                        </li>
                        <li>
                          <span className="material-symbols-outlined mat-icon solid text-warning size-32">
                            {" "}
                            star{" "}
                          </span>
                        </li>
                      </ul>
                      <p>
                        {" "}
                        أفضل فريق عمل حر! بعد تقييم العديد من الخبراء لمدة عامين
                        ، يؤسفني ذلك لا تجد حلول النقطة 2 عاجلاً. هذه المجموعة
                        لي ، لذا فأنا متردد في كتابتها. هذا هو عملي فريق!{" "}
                      </p>

                      <hr className="hr" />
                      <div className="group group-md group-row align-items-center">
                        <div className="user user--xmd user-outline-base flex-shrink-0 rounded-circle">
                          <span className="user__img rounded-circle">
                            <img
                              src="/images/team-1.png"
                              alt="image"
                              className="user__img-is"
                            />
                          </span>
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="mb-1">بيتر كوبر</h5>
                          <p className="sm-text"> بارون ذ م م. </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" px-3 px-md-4">
                    <div className="feedback-card-1">
                      <ul className="list list-row list-xxs align-items-center lh-1">
                        <li>
                          <span className="material-symbols-outlined mat-icon solid text-warning size-32">
                            {" "}
                            star{" "}
                          </span>
                        </li>
                        <li>
                          <span className="material-symbols-outlined mat-icon solid text-warning size-32">
                            {" "}
                            star{" "}
                          </span>
                        </li>
                        <li>
                          <span className="material-symbols-outlined mat-icon solid text-warning size-32">
                            {" "}
                            star{" "}
                          </span>
                        </li>
                        <li>
                          <span className="material-symbols-outlined mat-icon solid text-warning size-32">
                            {" "}
                            star{" "}
                          </span>
                        </li>
                        <li>
                          <span className="material-symbols-outlined mat-icon solid text-warning size-32">
                            {" "}
                            star{" "}
                          </span>
                        </li>
                      </ul>
                      <p>
                        {" "}
                        أفضل فريق عمل حر! بعد تقييم العديد من الخبراء لمدة عامين
                        ، يؤسفني ذلك لا تجد حلول النقطة 2 عاجلاً. هذه المجموعة
                        لي ، لذا فأنا متردد في كتابتها. هذا هو عملي فريق!{" "}
                      </p>

                      <hr className="hr" />
                      <div className="group group-md group-row align-items-center">
                        <div className="user user--xmd user-outline-base flex-shrink-0 rounded-circle">
                          <span className="user__img rounded-circle">
                            <img
                              src="/images/team-2.png"
                              alt="image"
                              className="user__img-is"
                            />
                          </span>
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="mb-1"> مارفن ماكيني </h5>
                          <p className="sm-text"> بيفكو المحدودة. </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className=" px-3 px-md-4">
                    <div className="feedback-card-1">
                      <ul className="list list-row list-xxs align-items-center lh-1">
                        <li>
                          <span className="material-symbols-outlined mat-icon solid text-warning size-32">
                            {" "}
                            star{" "}
                          </span>
                        </li>
                        <li>
                          <span className="material-symbols-outlined mat-icon solid text-warning size-32">
                            {" "}
                            star{" "}
                          </span>
                        </li>
                        <li>
                          <span className="material-symbols-outlined mat-icon solid text-warning size-32">
                            {" "}
                            star{" "}
                          </span>
                        </li>
                        <li>
                          <span className="material-symbols-outlined mat-icon solid text-warning size-32">
                            {" "}
                            star{" "}
                          </span>
                        </li>
                        <li>
                          <span className="material-symbols-outlined mat-icon solid text-warning size-32">
                            {" "}
                            star{" "}
                          </span>
                        </li>
                      </ul>
                      <p>
                        {" "}
                        أفضل فريق عمل حر! بعد تقييم العديد من الخبراء لمدة عامين
                        ، يؤسفني ذلك لا تجد حلول النقطة 2 عاجلاً. هذه المجموعة
                        لي ، لذا فأنا متردد في كتابتها. هذا هو عملي فريق!{" "}
                      </p>

                      <hr className="hr" />
                      <div className="group group-md group-row align-items-center">
                        <div className="user user--xmd user-outline-base flex-shrink-0 rounded-circle">
                          <span className="user__img rounded-circle">
                            <img
                              src="/images/team-3.png"
                              alt="image"
                              className="user__img-is"
                            />
                          </span>
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="mb-1"> بيتر باركر </h5>
                          <p className="sm-text"> شركة ستارك. </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="feedback-slider-2__btn swiper-button-prev"></div>
              <div className="feedback-slider-2__btn swiper-button-next"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonail;
