import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Star from "../Star";
const feedbackData = [
  {
    id: 1,
    img: '/images/team-1.png',
    name: 'Peter Cooper',
    review: "Best Freelancer Team! After assessing numerous experts for 2 years, I regret not finding point2solutions sooner. This group is mine, thus I'm hesitant to write it. This is my go-to team!",
    company: "Barone LLC."
  },
  {
    id: 2,
    img: '/images/team-2.png',
    name: 'Wade Warren',
    review: "Best Freelancer Team! After assessing numerous experts for 2 years, I regret not finding point2solutions sooner. This group is mine, thus I'm hesitant to write it. This is my go-to team!",
    company: "Big Kahuna Ltd."
  },
  {
    id: 3,
    img: '/images/team-3.png',
    name: 'Marvin McKey',
    review: "Best Freelancer Team! After assessing numerous experts for 2 years, I regret not finding point2solutions sooner. This group is mine, thus I'm hesitant to write it. This is my go-to team!",
    company: "Biffco Ltd."
  },
  {
    id: 4,
    img: '/images/team-4.png',
    name: 'Tony Stark',
    review: "Best Freelancer Team! After assessing numerous experts for 2 years, I regret not finding point2solutions sooner. This group is mine, thus I'm hesitant to write it. This is my go-to team!",
    company: "Biffco Ltd."
  },
  {
    id: 5,
    img: '/images/team-5.png',
    name: 'Karen Aabey',
    review: "Best Freelancer Team! After assessing numerous experts for 2 years, I regret not finding point2solutions sooner. This group is mine, thus I'm hesitant to write it. This is my go-to team!",
    company: "Biffco Ltd."
  },
  {
    id: 6,
    img: '/images/team-6.png',
    name: 'Marvin McKey',
    review: "Best Freelancer Team! After assessing numerous experts for 2 years, I regret not finding point2solutions sooner. This group is mine, thus I'm hesitant to write it. This is my go-to team!",
    company: "Biffco Ltd."
  },
  {
    id: 7,
    img: '/images/team-7.png',
    name: 'Bertus Aafjes',
    review: "Best Freelancer Team! After assessing numerous experts for 2 years, I regret not finding point2solutions sooner. This group is mine, thus I'm hesitant to write it. This is my go-to team!",
    company: "Biffco Ltd."
  },
]

const Testimonial = () => {
  return (
    <div className="section bg-neutral-100">
      <div className="section__gap-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8 col-xxl-7">
              <div className="text-center">
                <span className="d-inline-block h5 lh-1 fw-semibold clr-base overlay-text overlay-text-x">
                  {" "}
                  The Opinions of Our Customers{" "}
                  <span className="overlay-text__content">Testimonials</span>
                </span>
                <h2 className="mt-5 mb-5">
                  {" "}
                  Don’t take our word for it. See what our clients say{" "}
                </h2>
                <p className="mx-auto t-short-para">
                  {" "}
                  What follows are some of the comments made by our clients.
                  Don't take it on faith that we said it. Check out what some
                  of.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-md-0">
        <div className="row g-md-0">
          <div className="col-12">
            <Swiper
              dir="ltr"
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
                  slidesPerView: 3.5,
                },
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Autoplay, Navigation]}>
              {
                feedbackData.map(({ id, name, review, company, img }) => (
                  <SwiperSlide>
                    <div className="feedback-card-1">
                      <Star />
                      <p>{review}</p>
                      <hr className="hr" />
                      <div className="group group-md group-row align-items-center">
                        <div className="user user--xmd user-outline-base flex-shrink-0 rounded-circle">
                          <span className="user__img rounded-circle">
                            <img
                              src={img}
                              alt="image"
                              className="user__img-is"
                            />
                          </span>
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="mb-1">{name}</h5>
                          <p className="sm-text"> {company}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
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
