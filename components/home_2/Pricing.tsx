import Link from 'next/link';
import React from 'react';

const Pricing = () => {
    return (
        <div className="pricing-section-1">
        <div className="section--sm section--top">
          <div className="section__gap-bottom">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-10 col-xl-8">
                  <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
                    {" "}
                    Choose your pricing plan with no hidden costs.{" "}
                  </span>
                  <h2 className="mt-5 mb-5 text-center">
                    {" "}
                    One monthly payment covers the cost of all IT services.{" "}
                  </h2>
                  <p className="text-center mx-auto max-text-70">
                    {" "}
                    Our team's goal is to help our customers maintain or achieve
                    top positions.We provide a wide range of information
                    technology services, all of which are guaranteed to boost
                    your business.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row g-4 justify-content-center">
              <div className="col-md-6 col-lg-4 order-md-2 order-lg-1">
                <div className="price-card-1">
                  <div className="price-card-1__head">
                    <img
                      src="/images/icon-32.png"
                      alt="image"
                      className="img-fluid"
                    />
                    <div className="group group-0 align-items-center">
                      <span className="display-block h6 text-center clr-heading">
                        Starter Plan
                      </span>
                      <span className="display-block h4 text-center clr-base m-0">
                        $300
                      </span>
                    </div>
                    <p className="text-center">
                      {" "}
                      We design solutions that reduce obstacles{" "}
                    </p>
                  </div>
                  <div className="price-card-1__body">
                    <h6 className="mb-5">What’s included</h6>
                    <ul className="list list-0 list--check check-base bordered-bottom">
                      <li className="align-items-center">
                        <span className="d-block clr-heading">
                          {" "}
                          Support at $25/hour{" "}
                        </span>
                      </li>
                      <li className="align-items-center">
                        <span className="d-block clr-heading">
                          {" "}
                          Product Engineering{" "}
                        </span>
                      </li>
                      <li className="align-items-center">
                        <span className="d-block clr-heading">
                          {" "}
                          It Consulting{" "}
                        </span>
                      </li>
                      <li className="align-items-center">
                        <span className="d-block clr-heading">
                          {" "}
                          Free Fixes & Update{" "}
                        </span>
                      </li>
                      <li className="align-items-center">
                        <span className="d-block clr-heading">
                          {" "}
                          Digital Solutions{" "}
                        </span>
                      </li>
                      <li className="align-items-center">
                        <span className="d-block clr-heading">
                          {" "}
                          24/7 system monitoring{" "}
                        </span>
                      </li>
                      <li className="align-items-center">
                        <span className="d-block clr-heading">
                          {" "}
                          Remote support{" "}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="price-card-1__footer text-center">
                    <Link
                      href="pricing-plan-1"
                      className="bttn bttn--base bttn-md bttn-pill fw-md flex-shrink-0">
                      {" "}
                      Get Started{" "}
                      <span className="material-symbols-rounded mat-icon fw-100 bttn__icon">
                        {" "}
                        trending_flat{" "}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 order-md-1 order-lg-2">
                <div className="price-card-1 popular">
                  <span className="popular__label">
                    <span className="popular__label-text">
                      {" "}
                      Popular Choice{" "}
                    </span>
                  </span>
                  <div className="price-card-1__head">
                    <img
                      src="/images/icon-33.png"
                      alt="image"
                      className="img-fluid"
                    />
                    <div className="group group-0 align-items-center">
                      <span className="display-block h6 text-center clr-light">
                        Standard Plan
                      </span>
                      <span className="display-block h4 text-center clr-accent m-0">
                        $300
                      </span>
                    </div>
                    <p className="text-center clr-light">
                      {" "}
                      We design solutions that reduce obstacles{" "}
                    </p>
                  </div>
                  <div className="price-card-1__body">
                    <h6 className="mb-5 clr-light">What’s included</h6>
                    <ul className="list list-0 list--check check-accent bordered-bottom">
                      <li className="align-items-center">
                        <span className="d-block clr-light">
                          {" "}
                          Support at $25/hour{" "}
                        </span>
                      </li>
                      <li className="align-items-center">
                        <span className="d-block clr-light">
                          {" "}
                          Product Engineering{" "}
                        </span>
                      </li>
                      <li className="align-items-center">
                        <span className="d-block clr-light">
                          {" "}
                          It Consulting{" "}
                        </span>
                      </li>
                      <li className="align-items-center">
                        <span className="d-block clr-light">
                          {" "}
                          Free Fixes & Update{" "}
                        </span>
                      </li>
                      <li className="align-items-center">
                        <span className="d-block clr-light">
                          {" "}
                          Digital Solutions{" "}
                        </span>
                      </li>
                      <li className="align-items-center">
                        <span className="d-block clr-light">
                          {" "}
                          24/7 system monitoring{" "}
                        </span>
                      </li>
                      <li className="align-items-center">
                        <span className="d-block clr-light">
                          {" "}
                          Remote support{" "}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="price-card-1__footer text-center">
                    <Link
                      href="pricing-plan-1"
                      className="bttn bttn-pill bttn-md bttn--light-accent align-items-center fw-md">
                      {" "}
                      Get Started{" "}
                      <span className="material-symbols-rounded mat-icon fw-300 bttn__icon">
                        {" "}
                        trending_flat{" "}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 order-md-3">
                <div className="price-card-1">
                  <div className="price-card-1__head">
                    <img
                      src="/images/icon-34.png"
                      alt="image"
                      className="img-fluid"
                    />
                    <div className="group group-0 align-items-center">
                      <span className="display-block h6 text-center clr-heading">
                        Enterprise Plan
                      </span>
                      <span className="display-block h4 text-center clr-base m-0">
                        $300
                      </span>
                    </div>
                    <p className="text-center">
                      {" "}
                      We design solutions that reduce obstacles{" "}
                    </p>
                  </div>
                  <div className="price-card-1__body">
                    <h6 className="mb-5">What’s included</h6>
                    <ul className="list list-0 list--check check-base bordered-bottom">
                      <li className="align-items-center">
                        <span className="d-block clr-heading">
                          {" "}
                          Support at $25/hour{" "}
                        </span>
                      </li>
                      <li className="align-items-center">
                        <span className="d-block clr-heading">
                          {" "}
                          Product Engineering{" "}
                        </span>
                      </li>
                      <li className="align-items-center">
                        <span className="d-block clr-heading">
                          {" "}
                          It Consulting{" "}
                        </span>
                      </li>
                      <li className="align-items-center">
                        <span className="d-block clr-heading">
                          {" "}
                          Free Fixes & Update{" "}
                        </span>
                      </li>
                      <li className="align-items-center">
                        <span className="d-block clr-heading">
                          {" "}
                          Digital Solutions{" "}
                        </span>
                      </li>
                      <li className="align-items-center">
                        <span className="d-block clr-heading">
                          {" "}
                          24/7 system monitoring{" "}
                        </span>
                      </li>
                      <li className="align-items-center">
                        <span className="d-block clr-heading">
                          {" "}
                          Remote support{" "}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="price-card-1__footer text-center">
                    <Link
                      href="pricing-plan-1"
                      className="bttn bttn--base bttn-md bttn-pill fw-md flex-shrink-0">
                      {" "}
                      Get Started{" "}
                      <span className="material-symbols-rounded mat-icon fw-100 bttn__icon">
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
      </div>
    );
};

export default Pricing;