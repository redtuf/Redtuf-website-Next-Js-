import React from 'react';

const Consult = () => {
    return (
        <section className="consult-section">
        <div className="consult-section__top section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-11 col-xxl-10">
                <span className="d-block h5 lh-1 fw-semibold clr-accent text-center">
                To fulfil your demands, we provide a comprehensive range of services.
                </span>
                <h2 className="mt-5 mb-5 text-center clr-light">
                For a free consultation on your upcoming project here.
                </h2>
                <p className="text-center clr-light">
                Make a call or set up an appointment if you have a project or idea. Soon, a representative will get back to you.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="consult-section__bottom section--top">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div
                  className="consult-section__content"
                  style={{
                    backgroundImage: "url(/images/consulting-form-bg-1.png)",
                  }}>
                  <div className="row justify-content-md-end">
                    <div className="col-lg-6">
                      <form action="#">
                        <div className="booking-form">
                          <div className="booking-form__head">
                            <h3 className="text-center mb-2">
                            Start today
                            </h3>
                            <p className="text-center">
                            We are delighted to have the chance to work together.
                            </p>
                          </div>
                          <div className="row g-4">
                            <div className="col-12">
                              <input
                                type="text"
                                className="form-control booking-form__input"
                                placeholder="Name"
                              />
                            </div>
                            <div className="col-12">
                              <input
                                type="text"
                                className="form-control booking-form__input"
                                placeholder="Phone"
                              />
                            </div>
                            <div className="col-12">
                              <input
                                type="email"
                                className="form-control booking-form__input"
                                placeholder="Email"
                              />
                            </div>
                            <div className="col-12">
                              <div className="booking-form__select">
                                <select className="form-select">
                                  <option>Select Service</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-12">
                              <textarea
                                rows={3}
                                className="form-control booking-form__input"
                                placeholder="Let us know what you need"></textarea>
                            </div>
                          </div>
                          <div className="booking-form__footer text-center">
                            <button
                              className="bttn bttn--base bttn-md bttn-pill fw-md"
                              type="button">
                              {" "}
                              Submit{" "}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Consult;