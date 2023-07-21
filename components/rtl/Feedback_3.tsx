import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Feedback_3 = () => {
  return (
    <div className="section bg-neutral-100 feedback-section-3">
      <div className="feedback-section-3__element feedback-section-3__element-1">
        <img src="/images/element-9.png" alt="image" className="img-fluid" />
      </div>
      <div className="feedback-section-3__element feedback-section-3__element-2">
        <img src="/images/element-10.png" alt="image" className="img-fluid" />
      </div>
      <div className="feedback-section-3__element feedback-section-3__element-3">
        <img src="/images/element-11.png" alt="image" className="img-fluid" />
      </div>
      <div className="feedback-section-3__element feedback-section-3__element-4">
        <img src="/images/element-12.png" alt="image" className="img-fluid" />
      </div>
      <div className="feedback-section-3__element feedback-section-3__element-5">
        <img src="/images/element-9.png" alt="image" className="img-fluid" />
      </div>
      <div className="feedback-section-3__element feedback-section-3__element-6">
        <img src="/images/element-10.png" alt="image" className="img-fluid" />
      </div>
      <div className="feedback-section-3__element feedback-section-3__element-7">
        <img src="/images/element-11.png" alt="image" className="img-fluid" />
      </div>
      <div className="feedback-section-3__element feedback-section-3__element-8">
        <img src="/images/element-12.png" alt="image" className="img-fluid" />
      </div>
      <div className="feedback-section-3__element feedback-section-3__element-9">
        <img src="/images/element-13.png" alt="image" className="img-fluid" />
      </div>
      <div className="feedback-section-3__element feedback-section-3__element-10">
        <img src="/images/element-14.png" alt="image" className="img-fluid" />
      </div>
      <div className="feedback-section-3__element feedback-section-3__element-11">
        <img src="/images/element-15.png" alt="image" className="img-fluid" />
      </div>
      <div className="feedback-section-3__element feedback-section-3__element-12">
        <img src="/images/element-16.png" alt="image" className="img-fluid" />
      </div>
      <div className="feedback-section-3__element feedback-section-3__element-8">
        <img src="/images/element-12.png" alt="image" className="img-fluid" />
      </div>
      <div className="section__gap-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-xl-7">
              <div className="text-center">
                <span className="d-inline-block h5 lh-1 fw-semibold clr-base">
                  {" "}
                  موثوق به من قبل المبتكرين الصناعيين{" "}
                </span>
                <h2 className="mt-5 mb-5">
                  {" "}
                  لا تأخذ كلمتنا على محمل الجد. انظر ماذا يقول عملاؤنا{" "}
                </h2>
                <p className="mx-auto max-text-60">
                  {" "}
                  فيما يلي بعض التعليقات التي أدلى بها عملائنا. لا تأخذ ذلك على
                  إيمان قلنا ذلك. تحقق مما قاله بعض عملائنا السابقين.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-xl-8">
            <Swiper
              dir="rtl"
              className="testimonial-slider-2"
              slidesPerView={1}
              loop={true}
              speed={1000}
              spaceBetween={32}
              navigation={{
                nextEl: ".testimonial-slider-2 .testimonial-slider-2__btn-next",
                prevEl: ".testimonial-slider-2 .testimonial-slider-2__btn-prev",
              }}
              modules={[Navigation]}>
              <SwiperSlide>
                <div className="testimonial-slider-2__item p-5 p-sm-8 p-md-12 p-xxl-15">
                  <div className="user user--xmd user-outline-base flex-shrink-0 rounded-circle mx-auto mb-8">
                    <span className="user__img rounded-circle">
                      <img
                        src="/images/team-3.png"
                        alt="image"
                        className="user__img-is"
                      />
                    </span>
                  </div>
                  <div className="testimonial-slider-2__text mb-8">
                    <p className="text-center max-text-50 mx-auto">
                      {" "}
                      نحن مرتاحون لاتخاذ القرار الصحيح في اختيار الويب الإبداعي
                      مصمم لبناء متجرنا على الإنترنت ، لأن هذه هي أفضل ما
                      اكتسبناه من معرفة من خبرة العمل الفعلية.{" "}
                    </p>
                  </div>
                  <div className="text-center">
                    <ul className="list list-row list-xxs justify-content-center align-items-center lh-1">
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
                    <h5 className="mt-1"> مارفن ماكيني </h5>
                    <span className="d-block sm-text mt-1">
                      {" "}
                      مشاريع بيفكو المحدودة.{" "}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial-slider-2__item p-5 p-sm-8 p-md-12 p-xxl-15">
                  <div className="user user--xmd user-outline-base flex-shrink-0 rounded-circle mx-auto mb-8">
                    <span className="user__img rounded-circle">
                      <img
                        src="/images/team-2.png"
                        alt="image"
                        className="user__img-is"
                      />
                    </span>
                  </div>
                  <div className="testimonial-slider-2__text mb-8">
                    <p className="text-center max-text-50 mx-auto">
                      {" "}
                      نحن مرتاحون لاتخاذ القرار الصحيح في اختيار الويب الإبداعي
                      مصمم لبناء متجرنا على الإنترنت ، لأن هذه هي أفضل ما
                      اكتسبناه من معرفة من خبرة العمل الفعلية.{" "}
                    </p>
                  </div>
                  <div className="text-center">
                    <ul className="list list-row list-xxs justify-content-center align-items-center lh-1">
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

                    <h5 className="mt-1"> مارفن ماكيني </h5>
                    <span className="d-block sm-text mt-1">
                      {" "}
                      مشاريع بيفكو المحدودة.{" "}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial-slider-2__item p-5 p-sm-8 p-md-12 p-xxl-15">
                  <div className="user user--xmd user-outline-base flex-shrink-0 rounded-circle mx-auto mb-8">
                    <span className="user__img rounded-circle">
                      <img
                        src="/images/team-1.png"
                        alt="image"
                        className="user__img-is"
                      />
                    </span>
                  </div>
                  <div className="testimonial-slider-2__text mb-8">
                    <p className="text-center max-text-50 mx-auto">
                      {" "}
                      نحن مرتاحون لاتخاذ القرار الصحيح في اختيار الويب الإبداعي
                      مصمم لبناء متجرنا على الإنترنت ، لأن هذه هي أفضل ما
                      اكتسبناه من معرفة من خبرة العمل الفعلية.{" "}
                    </p>
                  </div>
                  <div className="text-center">
                    <ul className="list list-row list-xxs justify-content-center align-items-center lh-1">
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
                    <h5 className="mt-1"> مارفن ماكيني </h5>
                    <span className="d-block sm-text mt-1">
                      {" "}
                      مشاريع بيفكو المحدودة.{" "}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <div className="testimonial-slider-2__btn testimonial-slider-2__btn-prev">
                <div className="testimonial-slider-2__btn-is swiper-button-prev"></div>
              </div>
              <div className="testimonial-slider-2__btn testimonial-slider-2__btn-next">
                <div className="testimonial-slider-2__btn-is swiper-button-next"></div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback_3;
