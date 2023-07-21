import Link from 'next/link';
import React from 'react';

const AboutCompany = () => {
    return (
        <section className="section">
        <div className="container">
          <div className="row justify-content-xl-around">
            <div className="col-lg-6">
              <div className="about-company-1__img about-company-1__img-start section__gap-bottom h-100 pb-lg-0">
                <div className="row g-4 h-100">
                  <div className="col-md-6 align-self-lg-end">
                    <div className="row g-4">
                      <div className="col-sm-6 col-md-12">
                        <div className="d-flex flex-column align-items-center p-10 rounded-4 bg-secondary h-100">
                          <div className="icon-box icon-box--md bg-neutral circle">
                            <img src="/images/icon-24.png" alt="image" />
                          </div>
                          <h5 className="text-center clr-light mt-6">
                            {" "}
                            Experts Problem Solvers{" "}
                          </h5>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-12">
                        <div className="d-flex flex-column align-items-center p-10 rounded-4 bg-success h-100">
                          <div className="icon-box icon-box--md bg-neutral circle">
                            <img src="/images/icon-25.png" alt="image" />
                          </div>
                          <h5 className="text-center clr-light mt-6">
                            {" "}
                            Analysis of Creative Product and Services{" "}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row g-4">
                      <div className="col-sm-6 col-md-12">
                        <div className="d-flex flex-column align-items-center p-10 rounded-4 bg-danger h-100">
                          <div className="icon-box icon-box--md bg-neutral circle">
                            <img src="/images/icon-26.png" alt="image" />
                          </div>
                          <h5 className="text-center clr-light mt-6">
                            {" "}
                            Regular Updates & Bug fixes{" "}
                          </h5>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-12">
                        <div className="d-flex flex-column align-items-center p-10 rounded-4 bg-warning h-100">
                          <div className="icon-box icon-box--md bg-neutral circle">
                            <img src="/images/icon-27.png" alt="image" />
                          </div>
                          <h5 className="text-center clr-light mt-6">
                            {" "}
                            Top-Notch, Real time Customer Service{" "}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5">
              <span className="d-block h5 lh-1 fw-semibold clr-base">
              What sets Redtuf apart
              </span>
              <h2 className="mt-5 mb-5">
              Global providers of IT solutions and services, as well as digital technologies
              </h2>
              <p className="mb-8 max-text-60">
              To ensure proactive dot control, present mutually advantageous survival strategies to the table. A new normal will eventually have emerged, moving forward.
              </p>
              <ul className="list">
                <li>
                  <div className="group group-row group-sm justify-content-between align-items-center mb-1">
                    <span className="d-inline-block clr-heading flex-shrink-0">
                      {" "}
                      Analytics{" "}
                    </span>
                    <span className="d-inline-block clr-heading flex-shrink-0">
                      {" "}
                      95%{" "}
                    </span>
                  </div>
                  <div className="progress progress--danger">
                    <div className="progress-bar rounded-pill w-95"></div>
                  </div>
                </li>
                <li>
                  <div className="group group-row group-sm justify-content-between align-items-center mb-1">
                    <span className="d-inline-block clr-heading flex-shrink-0">
                      {" "}
                      Development{" "}
                    </span>
                    <span className="d-inline-block clr-heading flex-shrink-0">
                      {" "}
                      80%{" "}
                    </span>
                  </div>
                  <div className="progress progress--secondary">
                    <div className="progress-bar rounded-pill w-80"></div>
                  </div>
                </li>
                <li>
                  <div className="group group-row group-sm justify-content-between align-items-center mb-1">
                    <span className="d-inline-block clr-heading flex-shrink-0">
                      {" "}
                      Solutions{" "}
                    </span>
                    <span className="d-inline-block clr-heading flex-shrink-0">
                      {" "}
                      85%{" "}
                    </span>
                  </div>
                  <div className="progress progress--primary">
                    <div className="progress-bar rounded-pill w-85"></div>
                  </div>
                </li>
              </ul>
              <div className="group group-md group-row flex-wrap mt-12">
                <Link
                  href="about-us-1"
                  className="bttn bttn--base bttn-md bttn-pill fw-md flex-shrink-0">
                  {" "}
                  Learn More{" "}
                  <span className="material-symbols-rounded mat-icon fw-100 bttn__icon">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
                <div className="group group-row align-items-center flex-shrink-0">
                  <div className="icon-box icon-box--sm icon-box--light-outline circle bg-neutral clr-base">
                    <span className="material-symbols-rounded mat-icon fw-300 size-32 solid">
                      {" "}
                      phone_in_talk{" "}
                    </span>
                  </div>
                  <div className="group group-0">
                    <p className="clr-heading sm-text">Call for Help</p>
                    <p className="clr-heading fw-md">+7 (903) 880-91-85</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default AboutCompany;