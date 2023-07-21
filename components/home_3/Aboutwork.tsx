import Link from 'next/link';
import React from 'react';

const Aboutwork = () => {
    return (
        <div className="section about-section-1">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-11 col-xl-6">
                <span className="d-block h5 lh-1 fw-semibold clr-base text-center"> The Way We Go About Our Work </span>
                <h2 className="mt-5 mb-5 text-center"> How Itechex Assist Your Business </h2>
                <p className="text-center mx-auto max-text-60"> We Offer Unique Services Tailored Specifically for Your Company.Innovative Methods to Help Boost Your Company's Profits </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xxl">
          <div className="row g-4">
            <div className="col-md-6 col-xl-3">
              <div className="about-card-1">
                <div className="icon-box icon-box--md circle icon-box--base-outline clr-heading">
                  <span className="h6 fw-bold d-inline-block m-0">01</span>
                </div>
                <h5 className="mt-8 mb-5"> 01. Discussion </h5>
                <p className="mb-6"> Before making a proposal, we meet with clients face-to-face to go through their specific requirements. </p>
                <Link href="service-details-1" className="t-link t-link--base fw-md mt-auto"> Read More <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="about-card-1">
                <div className="icon-box icon-box--md circle icon-box--base-outline clr-heading">
                  <span className="h6 fw-bold d-inline-block m-0">02</span>
                </div>
                <h5 className="mt-8 mb-5"> 02. Ideas & concepts </h5>
                <p className="mb-6"> Our experts come up with all kinds of ideas and plans to make sure that the IT services chosen have the best solutions. </p>
                <Link href="service-details-1" className="t-link t-link--base fw-md mt-auto"> Read More <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="about-card-1">
                <div className="icon-box icon-box--md circle icon-box--base-outline clr-heading">
                  <span className="h6 fw-bold d-inline-block m-0">03</span>
                </div>
                <h5 className="mt-8 mb-5"> 03. Testing & Trying </h5>
                <p className="mb-6"> After we all agree on the ideas and plans, we'll carry them out as planned and give feedback on the results and changes. </p>
                <Link href="service-details-1" className="t-link t-link--base fw-md mt-auto"> Read More <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="about-card-1">
                <div className="icon-box icon-box--md circle icon-box--base-outline clr-heading">
                  <span className="h6 fw-bold d-inline-block m-0">04</span>
                </div>
                <h5 className="mt-8 mb-5"> 04. Execute & install </h5>
                <p className="mb-6"> Once the final blueprint has been accepted, everything will be carried out in accordance with the signed contract. </p>
                <Link href="service-details-1" className="t-link t-link--base fw-md mt-auto"> Read More <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Aboutwork;