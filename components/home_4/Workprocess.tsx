import React from 'react';

const Workprocess = () => {
    return (
        <section className="business-process-section section--sm section--top">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-7">
                <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
                  {" "}
                  Industries We Serve{" "}
                </span>
                <h2 className="mt-5 mb-5 text-center"> Business Processes </h2>
                <p className="text-center mx-auto max-text-60">
                  {" "}
                  Our services assist select industries automate, develop, and
                  gain insights from fast rising data assets. Fintech,
                  Healthtech, and Agtech clients.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4">
            <div className="col-sm-6 col-xl-3">
              <div className="process-card-1">
                <div className="process-card-1__img">
                  <img
                    src="/images/process-img-1.png"
                    alt="image"
                    className="process-card-1__img-is"
                  />
                  <span className="process-card-1__icon">
                    <img
                      src="/images/process-icon-1.png"
                      alt="image"
                      className="process-card-1__icon-is"
                    />
                  </span>
                </div>
                <div className="process-card-1__body">
                  <h4 className="process-card-1__title text-center"> Cloud </h4>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="process-card-1">
                <div className="process-card-1__img">
                  <img
                    src="/images/process-img-2.png"
                    alt="image"
                    className="process-card-1__img-is"
                  />
                  <span className="process-card-1__icon">
                    <img
                      src="/images/process-icon-2.png"
                      alt="image"
                      className="process-card-1__icon-is"
                    />
                  </span>
                </div>
                <div className="process-card-1__body">
                  <h4 className="process-card-1__title text-center">
                    {" "}
                    Fintech{" "}
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="process-card-1">
                <div className="process-card-1__img">
                  <img
                    src="/images/process-img-3.png"
                    alt="image"
                    className="process-card-1__img-is"
                  />
                  <span className="process-card-1__icon">
                    <img
                      src="/images/process-icon-3.png"
                      alt="image"
                      className="process-card-1__icon-is"
                    />
                  </span>
                </div>
                <div className="process-card-1__body">
                  <h4 className="process-card-1__title text-center">
                    {" "}
                    Healthcare{" "}
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="process-card-1">
                <div className="process-card-1__img">
                  <img
                    src="/images/process-img-4.png"
                    alt="image"
                    className="process-card-1__img-is"
                  />
                  <span className="process-card-1__icon">
                    <img
                      src="/images/process-icon-4.png"
                      alt="image"
                      className="process-card-1__icon-is"
                    />
                  </span>
                </div>
                <div className="process-card-1__body">
                  <h4 className="process-card-1__title text-center">
                    {" "}
                    Agtech{" "}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Workprocess;