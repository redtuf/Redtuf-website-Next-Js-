import Link from 'next/link';

const Service = () => {
    return (
        <div className="container container-restricted">
        <div className="row">
          <div className="col-12">
            <div className="section bg-base rounded-4 px-md-8 px-lg-10 px-xxl-12">
              <div className="container">
                <div className="row justify-content-xxl-between">
                  <div className="col-xl-6">
                    <div className="section__gap-bottom pb-xl-0 position-sticky top-60">
                      <span className="d-inline-block h5 lh-1 fw-semibold clr-accent overlay-text"> Boost Creativity with Reliable Tech Solutions <span className="overlay-text__content-alt">Services</span>
                      </span>
                      <h2 className="mt-5 mb-10 clr-light"> Use our top-notch service to help your company expand </h2>
                      <Link href="service-1" className="bttn bttn-pill bttn-md bttn--light-accent align-items-center fw-md"> Learn More <span className="material-symbols-rounded mat-icon fw-300 bttn__icon"> chevron_right </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-6 col-xxl-5">
                    <ul className="list gap-0 service-link-list">
                      <li>
                        <Link href="service-details-1" className="t-link service-link service-link--accent clr-light :clr-light">
                          <span className="group group-row align-items-center">
                            <span className="icon-box icon-box--md circle bg-light flex-shrink-0">
                              <img src="/images/icon-24.png" alt="image" />
                            </span>
                            <span className="d-inline-block service-link__title fw-bold"> IT Solution </span>
                          </span>
                          <span className="service-link__icon">
                            <span className="material-symbols-outlined mat-icon"> arrow_forward_ios </span>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="service-details-1" className="t-link service-link service-link--accent clr-light :clr-light">
                          <span className="group group-row align-items-center">
                            <span className="icon-box icon-box--md circle bg-light flex-shrink-0">
                              <img src="/images/icon-35.png" alt="image" />
                            </span>
                            <span className="d-inline-block service-link__title fw-bold"> Web Development </span>
                          </span>
                          <span className="service-link__icon">
                            <span className="material-symbols-outlined mat-icon"> arrow_forward_ios </span>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="service-details-1" className="t-link service-link service-link--accent clr-light :clr-light">
                          <span className="group group-row align-items-center">
                            <span className="icon-box icon-box--md circle bg-light flex-shrink-0">
                              <img src="/images/icon-36.png" alt="image" />
                            </span>
                            <span className="d-inline-block service-link__title fw-bold"> Networking </span>
                          </span>
                          <span className="service-link__icon">
                            <span className="material-symbols-outlined mat-icon"> arrow_forward_ios </span>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="service-details-1" className="t-link service-link service-link--accent clr-light :clr-light">
                          <span className="group group-row align-items-center">
                            <span className="icon-box icon-box--md circle bg-light flex-shrink-0">
                              <img src="/images/icon-24.png" alt="image" />
                            </span>
                            <span className="d-inline-block service-link__title fw-bold"> SEO Optimization </span>
                          </span>
                          <span className="service-link__icon">
                            <span className="material-symbols-outlined mat-icon"> arrow_forward_ios </span>
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="service-details-1" className="t-link service-link service-link--accent clr-light :clr-light">
                          <span className="group group-row align-items-center">
                            <span className="icon-box icon-box--md circle bg-light flex-shrink-0">
                              <img src="/images/icon-37.png" alt="image" />
                            </span>
                            <span className="d-inline-block service-link__title fw-bold"> App Optimization </span>
                          </span>
                          <span className="service-link__icon">
                            <span className="material-symbols-outlined mat-icon"> arrow_forward_ios </span>
                          </span>
                        </Link>
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

export default Service;