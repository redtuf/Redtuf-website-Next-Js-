import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Star from "../Star";
const reviewData = [
  {
    id: 1,
    name: "Peter Cooper",
    img: "/images/team-1.png",
    company: "Barone LLC.",
    review:
      "Best Freelancer Team! After assessing numerous experts for 2 years, I regret not finding point2solutions sooner. This group is mine, thus I'm hesitant to write it. This is mygo-to team!",
  },
  {
    id: 2,
    name: "Marvin McKey",
    img: "/images/team-2.png",
    company: "Biffco Ltd.",
    review:
      "Best Freelancer Team! After assessing numerous experts for 2 years, I regret not finding point2solutions sooner. This group is mine, thus I'm hesitant to write it. This is mygo-to team!",
  },
  {
    id: 3,
    name: "Wade Warren",
    img: "/images/team-3.png",
    company: "Big Kahuna Ltd.",
    review:
      "Best Freelancer Team! After assessing numerous experts for 2 years, I regret not finding point2solutions sooner. This group is mine, thus I'm hesitant to write it. This is mygo-to team!",
  },
];

const Customer = () => {
  return (
    <div className="section--sm section--top feedback-section-1">
      <div className="section__gap-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-xl-7">
              <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
                {" "}
                The Opinions of Our Customers{" "}
              </span>
              <h2 className="mt-5 mb-5 text-center">
                {" "}
                Don’t take our word for it. See what our clients say{" "}
              </h2>
              <p className="text-center mx-auto max-text-60">
                {" "}
                What follows are some of the comments made by our clients. Don't
                take it on faith that we said it. Check out what some of our
                previous customers had to say.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-12">
            <div className="feedback-slider-1-container">
              <Swiper
                dir="ltr"
                slidesPerView="auto"
                loop={true}
                spaceBetween={8}
                navigation={{
                  nextEl: ".feedback-slider-1__btn.swiper-button-next",
                  prevEl: ".feedback-slider-1__btn.swiper-button-prev",
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                  },
                  1400: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                }}
                modules={[Navigation]}>
                {reviewData.map(({id,name,company,review,img}) => (
                  <SwiperSlide key={id}>
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
                ))}
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
