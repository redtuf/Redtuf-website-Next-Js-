import React from 'react';

const Howitwork = () => {
    return (
        <section className="section">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-xl-7">
                <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
                  {" "}
                  How It Works{" "}
                </span>
                <h2 className="mt-5 mb-5 text-center"> Our Work Processs </h2>
                <p className="text-center mx-auto max-text-60">
                  {" "}
                  We Offer Unique Services Tailored Specifically for Your
                  Company.Innovative Methods to Help Boost Your Company's
                  Profits{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row gy-5 gy-xl-4 g-4 justify-content-center">
            <div className="col-sm-6 col-lg-3">
              <div className="process-card-2 process-card-2--1 text-center">
                <div className="process-card-2__icon">
                  <img
                    src="/images/icon-47.png"
                    alt="image"
                    className="img-fluid"
                  />
                  <span className="process-card-2__notification"> 01 </span>
                </div>
                <h5 className="mt-8 mb-2"> Choose A Service </h5>
                <p>
                  {" "}
                  sit amet consectetuer adipiscing elitenean commodo ligula{" "}
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="process-card-2 process-card-2--2 text-center">
                <div className="process-card-2__icon">
                  <img
                    src="/images/icon-48.png"
                    alt="image"
                    className="img-fluid"
                  />
                  <span className="process-card-2__notification"> 02 </span>
                </div>
                <h5 className="mt-8 mb-2"> Request A Meeting </h5>
                <p>
                  {" "}
                  sit amet consectetuer adipiscing elitenean commodo ligula{" "}
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="process-card-2 process-card-2--1 text-center">
                <div className="process-card-2__icon">
                  <img
                    src="/images/icon-49.png"
                    alt="image"
                    className="img-fluid"
                  />
                  <span className="process-card-2__notification"> 03 </span>
                </div>
                <h5 className="mt-8 mb-2"> Start Planning </h5>
                <p>
                  {" "}
                  sit amet consectetuer adipiscing elitenean commodo ligula{" "}
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="process-card-2 text-center">
                <div className="process-card-2__icon">
                  <img
                    src="/images/icon-50.png"
                    alt="image"
                    className="img-fluid"
                  />
                  <span className="process-card-2__notification"> 04 </span>
                </div>
                <h5 className="mt-8 mb-2"> Execute & install </h5>
                <p>
                  {" "}
                  sit amet consectetuer adipiscing elitenean commodo ligula{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Howitwork;