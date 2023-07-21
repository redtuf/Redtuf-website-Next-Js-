import Link from 'next/link';
import React from 'react';

const Service = () => {
    return (
        <section className="section">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-11 col-xxl-10">
                <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
                For your organization, get expert IT services.
                </span>
                <h2 className="mt-5 mb-5 text-center">
                To ensure the success of your business, we provide a broad range of IT services.
                </h2>
                <p className="text-center mx-auto t-short-para">
                We are dedicated to provide scalable, effective enterprise-wide IT services to small and medium-sized organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="service-card service-card--1">
                <div className="icon-box icon-box--md circle bg-base flex-shrink-0">
                  <img src="/images/icon-1.png" alt="image" />
                </div>
                <div className="flex-grow-1">
                  <h5 className="mb-2">Software Development</h5>
                  <p className="mb-5">
                  Software development is creating specialised software solutions to satisfy distinct corporate requirements and objectives.
                  </p>
                  <Link
                    href="service-1"
                    className="t-link t-link--base fw-md">
                    {" "}
                    Discover Now{" "}
                    <span className="material-symbols-outlined mat-icon fw-200">
                      {" "}
                      trending_flat{" "}
                    </span>
                  </Link>
                  <div className="service-card__number mt-5">
                    <span className="service-card__number-is h5"> 01 </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card service-card--1 h-100">
                <div className="icon-box icon-box--md circle bg-danger flex-shrink-0">
                  <img src="/images/icon-2.png" alt="image" />
                </div>
                <div className="flex-grow-1">
                  <h5 className="mb-2">Web Development</h5>
                  <p className="mb-5">
                    With Professional Website Development, Your Ideas Can Become a Captivating Digital Experience.
                  </p>
                  <Link
                    href="service-1"
                    className="t-link t-link--base fw-md">
                    {" "}
                    Discover Now{" "}
                    <span className="material-symbols-outlined mat-icon fw-200">
                      {" "}
                      trending_flat{" "}
                    </span>
                  </Link>
                  <div className="service-card__number mt-5">
                    <span className="service-card__number-is h5"> 02 </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-card service-card--1">
                <div className="icon-box icon-box--md circle bg-success flex-shrink-0">
                  <img src="/images/icon-3.png" alt="image" />
                </div>
                <div className="flex-grow-1">
                  <h5 className="mb-2">UI/UX Development</h5>
                  <p className="mb-5">
                  To enhance the user experience, UI/UX Development defines intuitive interactions and transitions to make best and creative design.
                  </p>
                  <Link
                    href="service-1"
                    className="t-link t-link--base fw-md">
                    {" "}
                    Discover Now{" "}
                    <span className="material-symbols-outlined mat-icon fw-200">
                      {" "}
                      trending_flat{" "}
                    </span>
                  </Link>
                  <div className="service-card__number mt-5">
                    <span className="service-card__number-is h5"> 03 </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card service-card--1">
                <div className="icon-box icon-box--md circle bg-base flex-shrink-0">
                  <img src="/images/icon-4.png" alt="image" />
                </div>
                <div className="flex-grow-1">
                  <h5 className="mb-2">Digital Marketing</h5>
                  <p className="mb-5">
                  Digital marketing is the use of digital platforms and channels to advertise goods, services, or brands to a specific audience.
                  </p>
                  <Link
                    href="service-1"
                    className="t-link t-link--base fw-md">
                    {" "}
                    Discover Now{" "}
                    <span className="material-symbols-outlined mat-icon fw-200">
                      {" "}
                      trending_flat{" "}
                    </span>
                  </Link>
                  <div className="service-card__number mt-5">
                    <span className="service-card__number-is h5"> 04 </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card service-card--1">
                <div className="icon-box icon-box--md circle bg-base flex-shrink-0">
                  <img src="/images/icon-5.png" alt="image" />
                </div>
                <div className="flex-grow-1">
                  <h5 className="mb-2">App Development</h5>
                  <p className="mb-5">
                    {" "}
                    We provide the most responsive and functional IT solution to
                    enterprises and businesses all around the globe.{" "}
                  </p>
                  <Link
                    href="service-1"
                    className="t-link t-link--base fw-md">
                    {" "}
                    Discover Now{" "}
                    <span className="material-symbols-outlined mat-icon fw-200">
                      {" "}
                      trending_flat{" "}
                    </span>
                  </Link>
                  <div className="service-card__number mt-5">
                    <span className="service-card__number-is h5"> 05 </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-card service-card--1">
                <div className="icon-box icon-box--md circle bg-success flex-shrink-0">
                  <img src="/images/icon-6.png" alt="image" />
                </div>
                <div className="flex-grow-1">
                  <h5 className="mb-2">Cloud Development</h5>
                  <p className="mb-5">
                  Application and service development in a cloud computing environment is referred to as cloud development.
                  </p>
                  <Link
                    href="service-1"
                    className="t-link t-link--base fw-md">
                    {" "}
                    Discover Now{" "}
                    <span className="material-symbols-outlined mat-icon fw-200">
                      {" "}
                      trending_flat{" "}
                    </span>
                  </Link>
                  <div className="service-card__number mt-5">
                    <span className="service-card__number-is h5"> 06 </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section__gap-top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-8">
                <div className="group group-row flex-wrap justify-content-center align-items-center">
                  <Link
                    href="service-1"
                    className="bttn bttn--base bttn-md bttn-pill fw-md flex-shrink-0">
                    {" "}
                    More Service{" "}
                  </Link>
                  <Link
                    href="contact-us-1"
                    className="bttn bttn--stroke-outline bttn-md bttn-pill fw-md flex-shrink-0 align-items-center">
                    <span className="bttn__arrow"> Contact Us Now </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Service;