import Link from "next/link";

const Training = () => {
  return (
    <div className="section">
      <div className="section__gap-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-xl-8">
              <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
              We provide the bellow trainings.
              </span>
              <h2 className="mt-5 mb-5 text-center">
              We offer top-notch IT trainings for your long-term prosperity.
              </h2>
              <p className="text-center mx-auto t-short-para">
              Our IT trainings are performed by top nautch it-trainers from various leading companies. Let's make your dream become a reality
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-3 g-xxl-4 justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="service-card service-card--1">
              <div className="icon-box icon-box--md circle bg-base flex-shrink-0">
                <img src="/images/icon-1.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2">Lorem, ipsum.</h5>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore quae dicta excepturi rem molestias ut voluptatibus dolorum velit a quia?
                </p>
                <Link
                  href="service-details-1"
                  className="t-link t-link--base fw-md">
                  {" "}
                  Discover Now{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="service-card service-card--1">
              <div className="icon-box icon-box--md circle bg-danger flex-shrink-0">
                <img src="/images/icon-2.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2">Lorem, ipsum.</h5>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut rerum consequatur excepturi sit asperiores! Et possimus voluptas ipsa?
                </p>
                <Link
                  href="service-details-1"
                  className="t-link t-link--base fw-md">
                  {" "}
                  Discover Now{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="service-card service-card--1">
              <div className="icon-box icon-box--md circle bg-success flex-shrink-0">
                <img src="/images/icon-3.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2">Lorem, ipsum.</h5>
                <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni facilis laborum voluptatum nobis numquam.
                </p>
                <Link
                  href="service-details-1"
                  className="t-link t-link--base fw-md">
                  {" "}
                  Discover Now{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="service-card service-card--1">
              <div className="icon-box icon-box--md circle bg-warning flex-shrink-0">
                <img src="/images/icon-4.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2">Lorem, ipsum.</h5>
                <p className="mb-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem placeat, fugiat neque et quod dolorum? Tenetur, suscipit? Iusto, excepturi obcaecati?
                </p>
                <Link
                  href="service-details-1"
                  className="t-link t-link--base fw-md">
                  {" "}
                  Discover Now{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="service-card service-card--1">
              <div className="icon-box icon-box--md circle bg-info flex-shrink-0">
                <img src="/images/icon-5.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2">Lorem, ipsum.</h5>
                <p className="mb-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, omnis. Fugit, hic excepturi? Quibusdam dolorum unde eum voluptas.
                </p>
                <Link
                  href="service-details-1"
                  className="t-link t-link--base fw-md">
                  {" "}
                  Discover Now{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="service-card service-card--1">
              <div className="icon-box icon-box--md circle bg-secondary flex-shrink-0">
                <img src="/images/icon-6.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-2">Lorem, ipsum.</h5>
                <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi suscipit aperiam quis consequuntur recusandae distinctio fugit praesentium officiis!
                </p>
                <Link
                  href="service-details-1"
                  className="t-link t-link--base fw-md">
                  {" "}
                  Discover Now{" "}
                  <span className="material-symbols-outlined mat-icon fw-200">
                    {" "}
                    trending_flat{" "}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section__gap-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-xl-8">
              <div className="group group-row flex-wrap justify-content-center align-items-center">
                <Link
                  href="service-1"
                  className="bttn bttn--base bttn-md bttn-pill fw-md flex-shrink-0">
                  {" "}
                  More Services{" "}
                </Link>
                <Link
                  href="contact-us-1"
                  className="bttn bttn--stroke-outline bttn-md bttn-pill fw-md flex-shrink-0 align-items-center">
                  <span className="bttn__arrow"> Contact Us </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
