import React from 'react';

const CoreValue = () => {
    return (
        <div className="section">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-8">
              <div className="text-center">
                <h2 className="mt-5 mb-5"> فريقنا <span className="clr-base">القيم الجوهرية</span>
                </h2>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
            <ul className="list list-row flex-wrap justify-content-between align-items-center core-value-list">
              <li>
                <div className="core-value-card text-center core-value-card--1">
                  <img src="/images/core-img-1.png" alt="images" className="img-fluid mx-auto" />
                  <h6 className="mt-4"> الشفافية </h6>
                </div>
              </li>
              <li>
                <div className="core-value-card text-center core-value-card--2">
                  <img src="/images/core-img-2.png" alt="images" className="img-fluid mx-auto" />
                  <h6 className="mt-4"> إِبداع </h6>
                </div>
              </li>
              <li>
                <div className="core-value-card text-center core-value-card--3">
                  <img src="/images/core-img-3.png" alt="images" className="img-fluid mx-auto" />
                  <h6 className="mt-4"> خلق القيمة </h6>
                </div>
              </li>
              <li>
                <div className="core-value-card text-center core-value-card--4">
                  <img src="/images/core-img-4.png" alt="images" className="img-fluid mx-auto" />
                  <h6 className="mt-4"> القدرة على التكيف </h6>
                </div>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CoreValue;