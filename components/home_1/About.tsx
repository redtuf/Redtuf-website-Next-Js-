import Link from "next/link";

const About = () => {
    return (
        <div className="section about-company-1 bg-neutral-100">
        <div className="container">
          <div className="row justify-content-xxl-between">
            <div className="col-lg-6 col-xxl-5">
              <div className="section__gap-bottom pb-lg-0 position-sticky top-0">
                <span className="d-block h5 lh-1 fw-semibold clr-base">
                  {" "}
                  Discover Our Company{" "}
                </span>
                <h2 className="mt-2 mb-4">
                  {" "}
                  We love providing superior IT services to businesses.{" "}
                </h2>
                <p className="mb-8 t-short-para">
                  {" "}
                  Itechex offers a diverse variety of information
                  technology-related goods and services, such as web
                  development, digital marketing services, and mobile app
                  development.{" "}
                </p>
                <ul className="list">
                  <li>
                    <div className="group group-row group-sm justify-content-between align-items-center mb-1">
                      <span className="d-inline-block clr-heading flex-shrink-0">
                        {" "}
                        IT Consulting{" "}
                      </span>
                      <span className="d-inline-block clr-heading flex-shrink-0">
                        {" "}
                        25%{" "}
                      </span>
                    </div>
                    <div className="progress progress--secondary">
                      <div className="progress-bar rounded-pill w-25"></div>
                    </div>
                  </li>
                  <li>
                    <div className="group group-row group-sm justify-content-between align-items-center mb-1">
                      <span className="d-inline-block clr-heading flex-shrink-0">
                        {" "}
                        Virtual Workstation{" "}
                      </span>
                      <span className="d-inline-block clr-heading flex-shrink-0">
                        {" "}
                        50%{" "}
                      </span>
                    </div>
                    <div className="progress progress--secondary">
                      <div className="progress-bar rounded-pill w-50"></div>
                    </div>
                  </li>
                  <li>
                    <div className="group group-row group-sm justify-content-between align-items-center mb-1">
                      <span className="d-inline-block clr-heading flex-shrink-0">
                        {" "}
                        Managed IT Service{" "}
                      </span>
                      <span className="d-inline-block clr-heading flex-shrink-0">
                        {" "}
                        75%{" "}
                      </span>
                    </div>
                    <div className="progress progress--secondary">
                      <div className="progress-bar rounded-pill w-75"></div>
                    </div>
                  </li>
                </ul>
                <div className="group group-md group-row flex-wrap mt-12">
                  <Link
                    href="about-us-1"
                    className="bttn bttn--base bttn-md bttn-pill fw-md flex-shrink-0">
                    {" "}
                    Learn More{" "}
                    <span className="material-symbols-rounded mat-icon fw-100 bttn__icon">
                      {" "}
                      trending_flat{" "}
                    </span>
                  </Link>
                  <div className="group group-row align-items-center flex-shrink-0">
                    <div className="icon-box icon-box--sm icon-box--light-outline circle bg-neutral clr-base">
                      <span className="material-symbols-rounded mat-icon size-32 solid">
                        {" "}
                        alarm{" "}
                      </span>
                    </div>
                    <div className="group group-0">
                      <p className="clr-heading sm-text">
                        Opening & Close Time
                      </p>
                      <p className="clr-heading fw-md">8:00AM - 6:00PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <figure className="about-company-1__img" data-cues="fadeIn">
                <img
                  src="/images/about-img-1.png"
                  alt="image"
                  className="img-fluid"
                />
                <figcaption className="about-company-1__img-wrapper">
                  <span className="about-company-1__img-title"> 21 </span>
                  <span className="about-company-1__img-subtitle">
                    {" "}
                    Years Of Experience{" "}
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;