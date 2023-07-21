import Link from 'next/link';
import React from 'react';

const Whychoose = () => {
    return (
        <section className="choose-section bg-neutral-100 section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-6">
              <div className="section__gap-bottom">
                <span className="d-block h5 lh-1 fw-semibold clr-base">
                  {" "}
                  Why Chose Us?{" "}
                </span>
                <h2 className="mt-2 mb-4">
                  {" "}
                  Our company's primary goal is to serve your company's IT
                  needs.{" "}
                </h2>
                <p className="max-text-50">
                  {" "}
                  Proactive IT services and secure solutions that reduce risk
                  and enable growth and achieve better business outcomes. We
                  Provide You With the Finest Information Technology and
                  Computer Service{" "}
                </p>
              </div>
              <ul className="list list-xmd">
                <li>
                  <div className="border rounded-3 p-5 group d-inline-flex group-xmd group-row align-items-center">
                    <div className="flex-shrink-0 d-inline-block">
                      <img
                        src="/images/icon-43.png"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="mb-2"> Our Experience </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted.{" "}
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="border rounded-3 p-5 group d-inline-flex group-xmd group-row align-items-center">
                    <div className="flex-shrink-0 d-inline-block">
                      <img
                        src="/images/icon-44.png"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="mb-2"> Certified Company </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted.{" "}
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="border rounded-3 p-5 group d-inline-flex group-xmd group-row align-items-center">
                    <div className="flex-shrink-0 d-inline-block">
                      <img
                        src="/images/icon-45.png"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="mb-2"> Lifetime Update </h5>
                      <p>
                        {" "}
                        It is a long established fact that a reader will be
                        distracted.{" "}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="group group-xmd group-row flex-wrap justify-content-center justify-content-sm-start align-items-center mt-12">
                <Link
                  href="contact-us-1"
                  className="bttn bttn-pill bttn-md bttn--base-accent align-items-center fw-md">
                  <img
                    src="/images/icon-46.png"
                    alt="image"
                    className="img-fluid me-2"
                  />{" "}
                  Lets talk{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Whychoose;