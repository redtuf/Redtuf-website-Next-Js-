import Link from 'next/link';
import React from 'react';

const Workprocess = () => {
    return (
        <section className="work-process-1">
        <div className="work-process-1__top section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-11 col-xl-6">
                <span className="d-block h5 lh-1 fw-semibold clr-accent text-center">
                How we do our work
                </span>
                <h2 className="mt-5 mb-5 text-center clr-light">
                What Redtuf can do for your business
                </h2>
                <p className="max-text-60 text-center mx-auto clr-light">
                We provide exclusive services customized for your business. Innovative strategies to increase the earnings of your business.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="work-process-1__bottom section pb-0">
          <div className="container">
            <div className="row g-4">
              <div className="col-md-6 col-xl-3">
                <div className="about-card-1">
                  <div className="icon-box icon-box--md circle icon-box--base-outline clr-heading">
                    <span className="h6 fw-bold d-inline-block m-0">01</span>
                  </div>
                  <h5 className="mt-8 mb-5"> 01. Discussion </h5>
                  <p className="mb-6">
                  We have face-to-face meetings with clients to discuss their particular needs before delivering a proposal.
                  </p>
                  <Link
                    href="service-details-1"
                    className="t-link t-link--base fw-md mt-auto">
                    {" "}
                    Read More{" "}
                    <span className="material-symbols-outlined mat-icon fw-200">
                      {" "}
                      trending_flat{" "}
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="about-card-1">
                  <div className="icon-box icon-box--md circle icon-box--base-outline clr-heading">
                    <span className="h6 fw-bold d-inline-block m-0">02</span>
                  </div>
                  <h5 className="mt-8 mb-5"> 02. Ideas & concepts </h5>
                  <p className="mb-6">
                  To ensure that their selected IT service provider has the best solutions, our experts provide a wide range of concepts and strategies.
                  </p>
                  <Link
                    href="service-details-1"
                    className="t-link t-link--base fw-md mt-auto">
                    {" "}
                    Read More{" "}
                    <span className="material-symbols-outlined mat-icon fw-200">
                      {" "}
                      trending_flat{" "}
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="about-card-1">
                  <div className="icon-box icon-box--md circle icon-box--base-outline clr-heading">
                    <span className="h6 fw-bold d-inline-block m-0">03</span>
                  </div>
                  <h5 className="mt-8 mb-5"> 03. 3.	Test and Try </h5>
                  <p className="mb-6">
                  Ideas and plans will be implemented as intended once everyone has agreed upon them, and feedback on outcomes and changes will be provided.
                  </p>
                  <Link
                    href="service-details-1"
                    className="t-link t-link--base fw-md mt-auto">
                    {" "}
                    Read More{" "}
                    <span className="material-symbols-outlined mat-icon fw-200">
                      {" "}
                      trending_flat{" "}
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="about-card-1">
                  <div className="icon-box icon-box--md circle icon-box--base-outline clr-heading">
                    <span className="h6 fw-bold d-inline-block m-0">04</span>
                  </div>
                  <h5 className="mt-8 mb-5"> 04. 4.	Implementation and installation </h5>
                  <p className="mb-6">
                  After the final plan has been approved, everything will be done in accordance with the written contract.
                  </p>
                  <Link
                    href="service-details-1"
                    className="t-link t-link--base fw-md mt-auto">
                    {" "}
                    Read More{" "}
                    <span className="material-symbols-outlined mat-icon fw-200">
                      {" "}
                      trending_flat{" "}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Workprocess;