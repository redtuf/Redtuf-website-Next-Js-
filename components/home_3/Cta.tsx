import Link from "next/link";


const Cta = () => {
  return (
    <div className="section--sm cta-section-2">
      <div className="container">
        <div className="row g-4 align-items-center justify-content-xxl-between">
          <div className="col-lg-8 col-xl-7 col-xxl-6">
            <div className="group group-sm group-sm-row align-items-center">
              <div className="flex-shrink-0">
                <img src="/images/icon-41.png" alt="image" />
              </div>
              <div className="flex-grow-1">
                <h4 className="clr-light mb-3">
                  {" "}
                  Looking for the Best IT Business Solutions?{" "}
                </h4>
                <p className="clr-light max-text-50">
                  {" "}
                  We offer many different IT services that guarantee your
                  success. What follows are some of the comments{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-xl-5">
            <div className="group group-xmd group-row flex-wrap justify-content-center justify-content-lg-end  align-items-center">
              <Link
                href="contact-us-1"
                className="bttn bttn-pill bttn-md bttn--light-accent align-items-center fw-md">
                <img
                  src="/images/icon-11.png"
                  alt="image"
                  className="img-fluid me-1"
                />
                Lets talk{" "}
              </Link>
              <Link
                href="about-us-1"
                className="bttn bttn--light-outline bttn-md bttn-pill fw-md flex-shrink-0 align-items-center clr-light">
                {" "}
                Get info{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
