import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation} from 'swiper';
import "swiper/css";
import "swiper/css/navigation";

const Customer = () => {
  return (
    <div className="section--sm section--top feedback-section-1">
      <div className="section__gap-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-xl-7">
            <span className="d-block h5 lh-1 fw-semibold clr-base text-center"> آراء عملائنا </span>
              <h2 className="mt-5 mb-5 text-center"> لا تأخذ كلمتنا على محمل الجد. انظر ماذا يقول عملاؤنا </h2>
              <p className="text-center mx-auto max-text-60"> فيما يلي بعض التعليقات التي أدلى بها عملائنا. لا تأخذ الأمر على أساس الإيمان بأننا قلها. تحقق مما قاله بعض عملائنا السابقين. </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-12">
            <div className="feedback-slider-1-container">
              <Swiper
              dir="rtl"
              slidesPerView="auto"
              loop={true}              
              spaceBetween={8}
              navigation= {
                {
                  nextEl: '.feedback-slider-1__btn.swiper-button-next',
                  prevEl: '.feedback-slider-1__btn.swiper-button-prev',
                }
              }
              breakpoints= {{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 16,
                },
                1400: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                }
              }}
              modules={[Navigation]}
              >
                <SwiperSlide>
                  <div className="feedback-card-1">
                    <ul className="list list-row list-xxs align-items-center lh-1">
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning">
                          {" "}
                          star{" "}
                        </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning">
                          {" "}
                          star{" "}
                        </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning">
                          {" "}
                          star{" "}
                        </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning">
                          {" "}
                          star{" "}
                        </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning">
                          {" "}
                          star{" "}
                        </span>
                      </li>
                    </ul>
                    <p>
                      أفضل فريق عمل حر! بعد تقييم العديد من الخبراء لمدة عامين ، لم أندم على ذلك العثور على حلول النقطة 2 عاجلاً. هذه المجموعة لي ، لذا فأنا متردد في كتابتها. هذا هو لي اذهب إلى فري 
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="feedback-card-1">
                    <ul className="list list-row list-xxs align-items-center lh-1">
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning">
                          {" "}
                          star{" "}
                        </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning">
                          {" "}
                          star{" "}
                        </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning">
                          {" "}
                          star{" "}
                        </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning">
                          {" "}
                          star{" "}
                        </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning">
                          {" "}
                          star{" "}
                        </span>
                      </li>
                    </ul>
                    <p> أفضل فريق عمل حر! بعد تقييم العديد من الخبراء لمدة عامين ، لم أندم على ذلك العثور على حلول النقطة 2 عاجلاً. هذه المجموعة لي ، لذا فأنا متردد في كتابتها. هذا هو لي اذهب إلى فري 
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
                          <h5 className="mb-1"> مارفن ماككي </h5>
                          <p className="sm-text"> بيفكو المحدودة. </p>
                        </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="feedback-card-1">
                    <ul className="list list-row list-xxs align-items-center lh-1">
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning">
                          {" "}
                          star{" "}
                        </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning">
                          {" "}
                          star{" "}
                        </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning">
                          {" "}
                          star{" "}
                        </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning">
                          {" "}
                          star{" "}
                        </span>
                      </li>
                      <li>
                        <span className="material-symbols-outlined mat-icon solid text-warning">
                          {" "}
                          star{" "}
                        </span>
                      </li>
                    </ul>
                    <p>                 
                      أفضل فريق عمل حر! بعد تقييم العديد من الخبراء لمدة عامين ، لم أندم على ذلك العثور على حلول النقطة 2 عاجلاً. هذه المجموعة لي ، لذا فأنا متردد في كتابتها. هذا هو لي اذهب إلى فري 
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
                          <h5 className="mb-1"> واد وارين </h5>
                          <p className="sm-text"> بيغ كاهونا المحدودة. </p>
                        </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="feedback-slider-1__btn swiper-button-prev"></div>
              <div className="feedback-slider-1__btn swiper-button-next"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
