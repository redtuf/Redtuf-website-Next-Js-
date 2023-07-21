import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <div className="section">
        <div className="container">
          <div className="row g-4">
            <div className="col-sm-6 col-lg-9 col-xl-3">
              <div className="section__gap-bottom pb-sm-0">
                <span className="d-block h5 lh-1 fw-semibold clr-base">
                  {" "}
                  What We Do{" "}
                </span>
                <h2 className="mt-2 mb-4"> Expertise Field </h2>
                <p className="mb-5 max-text-40">
                  {" "}
                  Itechex helps Fintech, Agtech, and Healthtech develop and
                  sustain effective IT solutions.{" "}
                </p>
                <Link href="about-us-1" className="t-link t-link--base fw-md">
                  {" "}
                  Discover Now{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="service-card-3">
                <div className="service-card-3__img">
                  <img
                    src="/images/service-img-5.png"
                    alt="images"
                    className="img-fluid service-card-3__img-is"
                  />
                </div>
                <div className="service-card-3__content">
                  <h5>
                    <Link
                      href="service-details-1"
                      className="service-card-3__link">
                      <span className="h6 service-card-3__subtitle clr-dark">
                        {" "}
                        Data Analytics &{" "}
                      </span>
                      <span className="service-card-3__title">
                        {" "}
                        Data Engineering{" "}
                      </span>
                    </Link>
                  </h5>
                  <Link
                    href="service-details-1"
                    className="t-link service-card-3__btn">
                    <span className="material-symbols-rounded mat-icon fw-100 size-48">
                      {" "}
                      trending_flat{" "}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="service-card-3">
                <div className="service-card-3__img">
                  <img
                    src="/images/service-img-6.png"
                    alt="images"
                    className="img-fluid service-card-3__img-is"
                  />
                </div>
                <div className="service-card-3__content">
                  <h5>
                    <Link
                      href="service-details-1"
                      className="service-card-3__link">
                      <span className="h6 service-card-3__subtitle clr-dark">
                        {" "}
                        Product{" "}
                      </span>
                      <span className="service-card-3__title">
                        {" "}
                        Development{" "}
                      </span>
                    </Link>
                  </h5>
                  <Link
                    href="service-details-1"
                    className="t-link service-card-3__btn">
                    <span className="material-symbols-rounded mat-icon fw-100 size-48">
                      {" "}
                      trending_flat{" "}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="service-card-3">
                <div className="service-card-3__img">
                  <img
                    src="/images/service-img-7.png"
                    alt="images"
                    className="img-fluid service-card-3__img-is"
                  />
                </div>
                <div className="service-card-3__content">
                  <h5>
                    <Link
                      href="service-details-1"
                      className="service-card-3__link">
                      <span className="h6 service-card-3__subtitle clr-dark">
                        {" "}
                        Cloud{" "}
                      </span>
                      <span className="service-card-3__title"> Migration </span>
                    </Link>
                  </h5>
                  <Link
                    href="service-details-1"
                    className="t-link service-card-3__btn">
                    <span className="material-symbols-rounded mat-icon fw-100 size-48">
                      {" "}
                      trending_flat{" "}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;