import Link from "next/link";


const Cta = () => {
  return (
    <div className="cta-section-1">
      <div className="cta-section-1__content section">
        <div className="container">
          <div className="row justify-content-center justify-content-xl-end">
            <div className="col-md-10 col-lg-9 col-xl-7">
              <h3 className="clr-light mb-10 text-center text-xl-start">
                {" "}
                We offer many different IT services that guarantee your{" "}
                <span className="clr-accent">success</span>.{" "}
              </h3>
              <div className="group group-xmd group-row flex-wrap justify-content-center justify-content-xl-start align-items-center">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
