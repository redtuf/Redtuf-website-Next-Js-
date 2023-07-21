import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Testimonial = () => {
  return (
    <div className="section bg-neutral-100">
      <div className="section__gap-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8 col-xxl-7">
            <div className="text-center">
                <span className="d-inline-block h5 lh-1 fw-semibold clr-base overlay-text overlay-text-x"> آراء عملائنا <span className="overlay-text__content">الشهادات - التوصيات</span>
                </span>
                <h2 className="mt-5 mb-5"> لا تأخذ كلمتنا على محمل الجد. انظر ماذا يقول عملاؤنا </h2>
                <p className="mx-auto t-short-para"> فيما يلي بعض التعليقات التي أدلى بها عملائنا. لا تأخذ ذلك على إيمان قلنا ذلك. تحقق من ما بعض. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-md-0">
        <div className="row g-md-0">
          <div className="col-12">
            <Swiper
            dir="rtl"
            slidesPerView="auto"
            centeredSlides={true}
            spaceBetween={32}
            loop={true}
            centeredSlidesBounds={true}
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
                    slidesPerView: 3.5
                  }
            }}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            modules={[Autoplay,Navigation]}
            >
          
                <SwiperSlide>
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
                                       <p> أفضل فريق عمل حر! بعد تقييم العديد من الخبراء لمدة عامين ، لم أندم على ذلك العثور على حلول النقطة 2 عاجلاً. هذه المجموعة لي ، لذا فأنا متردد في كتابتها. هذا هو عملي فريق! </p>

                    <hr className="hr" />
                    <div className="group group-md group-row align-items-center">
                      <div className="user user--xmd user-outline-base flex-shrink-0 rounded-circle">
                        <span className="user__img rounded-circle">
                          <img
                            src="/images/team-8.png"
                            alt="image"
                            className="user__img-is"
                          />
                        </span>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="mb-1"> توني ستارك </h5>
                        <p className="sm-text"> بيفكو المحدودة. </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
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
                                       <p> أفضل فريق عمل حر! بعد تقييم العديد من الخبراء لمدة عامين ، لم أندم على ذلك العثور على حلول النقطة 2 عاجلاً. هذه المجموعة لي ، لذا فأنا متردد في كتابتها. هذا هو عملي فريق! </p>

                    <hr className="hr" />
                    <div className="group group-md group-row align-items-center">
                      <div className="user user--xmd user-outline-base flex-shrink-0 rounded-circle">
                        <span className="user__img rounded-circle">
                          <img
                            src="/images/team-7.png"
                            alt="image"
                            className="user__img-is"
                          />
                        </span>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="mb-1"> كارين آبيي </h5>
                        <p className="sm-text"> نيفادا. يسافر </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
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
                                       <p> أفضل فريق عمل حر! بعد تقييم العديد من الخبراء لمدة عامين ، لم أندم على ذلك العثور على حلول النقطة 2 عاجلاً. هذه المجموعة لي ، لذا فأنا متردد في كتابتها. هذا هو عملي فريق! </p>

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
                        <h5 className="mb-1"> بيرتوس عافجيس </h5>
                        <p className="sm-text"> بيرتوس عافجيس </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
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
                                       <p> أفضل فريق عمل حر! بعد تقييم العديد من الخبراء لمدة عامين ، لم أندم على ذلك العثور على حلول النقطة 2 عاجلاً. هذه المجموعة لي ، لذا فأنا متردد في كتابتها. هذا هو عملي فريق! </p>

                    <hr className="hr" />
                    <div className="group group-md group-row align-items-center">
                      <div className="user user--xmd user-outline-base flex-shrink-0 rounded-circle">
                        <span className="user__img rounded-circle">
                          <img
                            src="/images/team-6.png"
                            alt="image"
                            className="user__img-is"
                          />
                        </span>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="mb-1"> باتريشيا آخوس </h5>
                        <p className="sm-text"> بيفكو المحدودة. </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
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
                                       <p> أفضل فريق عمل حر! بعد تقييم العديد من الخبراء لمدة عامين ، لم أندم على ذلك العثور على حلول النقطة 2 عاجلاً. هذه المجموعة لي ، لذا فأنا متردد في كتابتها. هذا هو عملي فريق! </p>

                    <hr className="hr" />
                    <div className="group group-md group-row align-items-center">
                      <div className="user user--xmd user-outline-base flex-shrink-0 rounded-circle">
                        <span className="user__img rounded-circle">
                          <img
                            src="/images/team-5.png"
                            alt="image"
                            className="user__img-is"
                          />
                        </span>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="mb-1"> جين آرون </h5>
                        <p className="sm-text"> بيفكو المحدودة. </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
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
                                       <p> أفضل فريق عمل حر! بعد تقييم العديد من الخبراء لمدة عامين ، لم أندم على ذلك العثور على حلول النقطة 2 عاجلاً. هذه المجموعة لي ، لذا فأنا متردد في كتابتها. هذا هو عملي فريق! </p>

                    <hr className="hr" />
                    <div className="group group-md group-row align-items-center">
                      <div className="user user--xmd user-outline-base flex-shrink-0 rounded-circle">
                        <span className="user__img rounded-circle">
                          <img
                            src="/images/team-4.png"
                            alt="image"
                            className="user__img-is"
                          />
                        </span>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="mb-1"> هانز انرود </h5>
                        <p className="sm-text"> بيفكو المحدودة. </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
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
                                       <p> أفضل فريق عمل حر! بعد تقييم العديد من الخبراء لمدة عامين ، لم أندم على ذلك العثور على حلول النقطة 2 عاجلاً. هذه المجموعة لي ، لذا فأنا متردد في كتابتها. هذا هو عملي فريق! </p>

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
                        <h5 className="mb-1"> ديفيد آرون </h5>
                        <p className="sm-text"> بيفكو المحدودة. </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
             
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
