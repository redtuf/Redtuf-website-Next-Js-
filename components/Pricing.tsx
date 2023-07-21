import Link from 'next/link';
import React, { useState } from 'react';

const Pricing = () => {
  const [checked, SetChecked] = useState(true);
  const handleChange = (e) => {
    SetChecked(e.target.checked)
  }
    return (
        <div className="pricing-section">
        <div className="section">
          <div className="section__gap-bottom">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-9 col-xl-8">
                  <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
                    {" "}
                    Choose your pricing plan with no hidden costs.{" "}
                  </span>
                  <h2 className="mt-5 mb-5 text-center">
                    {" "}
                    The Simple Pricing Plan to Secure Your Data{" "}
                  </h2>
                  <p className="text-center mx-auto max-text-70">
                    {" "}
                    Our team's goal is to help our customers maintain or achieve
                    industry-leading positions.We provide a wide range of
                    information technology services, Which are guaranteed to
                    boost business.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row g-6">
              <div className="col-lg-5 col-xl-4">
                <div className="price-card-1 bg-neutral-100 px-4 py-8 p-md-12 p-lg-8">
                  <div className="price-card-1__head gap-2">
                    <h4 className="text-center"> Common Features </h4>
                    <p className="text-center fw-md clr-base">
                      {" "}
                      All Passes Includes:{" "}
                    </p>
                  </div>
                  <div className="price-card-1__body bg-base rounded-4 px-3 px-xl-4 py-4">
                    <ul className="list list-0 list--check-end check-light bordered-bottom">
                      <li className="align-items-center justify-content-between">
                        <span className="d-block clr-light">
                          {" "}
                          Encrypted Transactions{" "}
                        </span>
                      </li>
                      <li className="align-items-center justify-content-between">
                        <span className="d-block clr-light">
                          {" "}
                          24/7 Support Service{" "}
                        </span>
                      </li>
                      <li className="align-items-center justify-content-between">
                        <span className="d-block clr-light">
                          {" "}
                          Automated Daily Backup{" "}
                        </span>
                      </li>
                      <li className="align-items-center justify-content-between">
                        <span className="d-block clr-light">
                          {" "}
                          Free Hardware Included{" "}
                        </span>
                      </li>
                      <li className="align-items-center justify-content-between">
                        <span className="d-block clr-light">
                          {" "}
                          Scan Every 12 Hours{" "}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="price-card-1__footer text-center">
                    <Link
                      href="#"
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
              <div className="col-lg-7 col-xl-8">
                <div className="price-card-1 bg-neutral-100 px-4 py-8 p-md-12 py-lg-8 px-lg-4 p-xl-8">
                  <div className="price-card-1__head flex-row flex-wrap justify-content-between">
                    <h4> Choose Your Plan </h4>
                    <div className="group group-xs group-row align-items-center justify-content-end">
                      <span className="clr-heading d-inline-block">
                        {" "}
                        Monthly{" "}
                      </span>
                      <label className="checkbox">
                        <input
                          id="input"
                          type="checkbox"
                          className="checkbox__input"
                          checked={checked}
                          onChange={handleChange}
                        />
                      </label>
                      <span className="clr-heading d-inline-block">
                        {" "}
                        Yearly{" "}
                        <span className="xsm-text clr-base">Save 20%</span>
                      </span>
                    </div>
                  </div>
                  <div className="price-card-1__body">
                    <ul className="list">
                      <li>
                        <div className="custom-checkbox">
                          <label className="custom-checkbox__wrapper">
                            <span className="flex-grow-1">
                              <input
                                type="radio"
                                name="select-price"
                                className="custom-checkbox__input"
                              />
                              <span className="custom-checkbox__title">
                                <span className="h5 m-0"> Personal </span>
                              </span>
                            </span>
                            <span className="flex-shrink-0">
                              <span className="custom-checkbox__subtitle d-block flex-shrink-0 h5 m-0">
                                {" "}
                                $499 USD{" "}
                              </span>
                            </span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-checkbox">
                          <label className="custom-checkbox__wrapper">
                            <span className="flex-grow-1">
                              <input
                                type="radio"
                                name="select-price"
                                className="custom-checkbox__input"
                              />
                              <span className="custom-checkbox__title">
                                <span className="h5 m-0"> Startup </span>
                              </span>
                            </span>
                            <span className="flex-shrink-0">
                              <span className="custom-checkbox__subtitle d-block flex-shrink-0 h5 m-0">
                                {" "}
                                $499 USD{" "}
                              </span>
                            </span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-checkbox">
                          <label className="custom-checkbox__wrapper">
                            <span className="flex-grow-1">
                              <input
                                type="radio"
                                name="select-price"
                                className="custom-checkbox__input"
                              />
                              <span className="custom-checkbox__title">
                                <span className="h5 m-0"> Company </span>
                              </span>
                            </span>
                            <span className="flex-shrink-0">
                              <span className="custom-checkbox__subtitle d-block flex-shrink-0 h5 m-0">
                                {" "}
                                $699 USD{" "}
                              </span>
                            </span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-checkbox">
                          <label className="custom-checkbox__wrapper">
                            <span className="flex-grow-1">
                              <input
                                type="radio"
                                name="select-price"
                                className="custom-checkbox__input"
                              />
                              <span className="custom-checkbox__title">
                                <span className="h5 m-0"> Enterprise </span>
                              </span>
                            </span>
                            <span className="flex-shrink-0">
                              <span className="custom-checkbox__subtitle d-block flex-shrink-0 h5 m-0">
                                {" "}
                                $799 USD{" "}
                              </span>
                            </span>
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section__gap-top">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-10 col-xl-7">
                  <p className="mx-auto clr-light max-text-60 mb-8 text-center">
                    {" "}
                    Looking for enterprise plan? We offer discounts for large
                    teams! Everything you need to be everywhere your customers
                    are, wrapped up in one pretty package — at a special price.{" "}
                  </p>
                  <div className="group group-xmd group-row flex-wrap justify-content-center align-items-center">
                    <Link
                      href="contact-us-1"
                      className="bttn bttn-pill bttn-md bttn--light-accent align-items-center fw-md">
                      <img
                        src="/images/icon-11.png"
                        alt="image"
                        className="img-fluid me-1"
                      />{" "}
                      Lets talk{" "}
                    </Link>
                    <Link
                      href="pricing-plan-1"
                      className="bttn bttn--light-outline bttn-md bttn-pill fw-md flex-shrink-0 align-items-center clr-light">
                      {" "}
                      Get a Quote{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="pricing-section__content t-shadow">
                <div className="row g-6">
                  <div className="col-md-6 col-lg-5">
                    <div className="d-flex align-items-center gap-6 mb-8">
                      <img
                        src="/images/icon-60.png"
                        alt="image"
                        className="img-fluid flex-shrink-0"
                      />
                      <div className="d-flex flex-column gap-2">
                        <h3> 30 Days </h3>
                        <h5> Money Back Guarantee </h5>
                      </div>
                    </div>
                    <Link
                      href="pricing-plan-1"
                      className="bttn bttn--base bttn-md bttn-pill fw-md flex-shrink-0">
                      {" "}
                      Get Started Now{" "}
                      <span className="material-symbols-rounded mat-icon fw-100 bttn__icon">
                        {" "}
                        trending_flat{" "}
                      </span>
                    </Link>
                    <span className="d-block fw-md clr-heading mt-6">
                      {" "}
                      * Read our{" "}
                      <Link
                        href="terms-condition"
                        className="t-link d-inline-block clr-base :clr-accent">
                        {" "}
                        Tearms and Conditions{" "}
                      </Link>
                    </span>
                  </div>
                  <div className="col-md-6 col-lg-7">
                    <ul className="list list--check check-base">
                      <li>
                        <span className="d-block clr-heading">
                          {" "}
                          After the 30-day free trial, you have the option to
                          pick your plan and pay monthly{" "}
                        </span>
                      </li>
                      <li>
                        <span className="d-block clr-heading">
                          {" "}
                          All plans come with 256-bit SSL security, and all our
                          key features tasks{" "}
                        </span>
                      </li>
                      <li>
                        <span className="d-block clr-heading">
                          {" "}
                          Pay via credit card or annually via credit card or
                          invoice{" "}
                        </span>
                      </li>
                      <li>
                        <span className="d-block clr-heading">
                          {" "}
                          Upgrade, downgrade, or cancel anytime{" "}
                        </span>
                      </li>
                      <li>
                        <span className="d-block clr-heading">
                          {" "}
                          You have the option to pick your plan{" "}
                        </span>
                      </li>
                    </ul>
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