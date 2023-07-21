const Features = ({ overlay }) => {
  return (
    <div className="section">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <div className="image-move-start">
              <img
                src="/images/features-img.png"
                alt="image"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section__gap-top pt-lg-0">
              <span className="d-inline-block h5 lh-1 fw-semibold clr-base overlay-text">
                {" "}
                Why Choose Us{" "}
                {overlay ? (
                  <span className="overlay-text__content">Features</span>
                ) : null}
              </span>
              <h2 className="mt-5 mb-12">
                {" "}
                Our first priority is serving your IT requirements.{" "}
              </h2>
              <ul className="list list-lg">
                <li>
                  <div className="group group-row">
                    <div className="flex-shrink-0">
                      <img
                        src="/images/icon-38.png"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                    <div className="flex-grouw-1">
                      <h5 className="mb-2"> Award Winning Companies </h5>
                      <p className="max-text-50">
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna{" "}
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="group group-row">
                    <div className="flex-shrink-0">
                      <img
                        src="/images/icon-39.png"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                    <div className="flex-grouw-1">
                      <h5 className="mb-2"> Lower Costs Services </h5>
                      <p className="max-text-50">
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna{" "}
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="group group-row">
                    <div className="flex-shrink-0">
                      <img
                        src="/images/icon-40.png"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                    <div className="flex-grouw-1">
                      <h5 className="mb-2"> Real Time Support </h5>
                      <p className="max-text-50">
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna{" "}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
