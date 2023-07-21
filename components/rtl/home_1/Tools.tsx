import Link from "next/link";


const Tools = () => {
    return (
      <div className="section bg--white">
      <div className="section__gap-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-xl-6">
              <h2 className="text-center"> التقنيات التي نستخدمها </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-4">
          <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
            <div className="toolset">
              <div className="toolset__icon">
                <img src="/images/brand-icon-1.png" alt="images" className="img-fluid" />
              </div>
              <div className="toolset__content">
                <p className="fw-md lg-text clr-heading"> ذكري المظهر </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
            <div className="toolset">
              <div className="toolset__icon">
                <img src="/images/brand-icon-2.png" alt="images" className="img-fluid" />
              </div>
              <div className="toolset__content">
                <p className="fw-md lg-text clr-heading"> كودانيتر </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
            <div className="toolset">
              <div className="toolset__icon">
                <img src="/images/brand-icon-3.png" alt="images" className="img-fluid" />
              </div>
              <div className="toolset__content">
                <p className="fw-md lg-text clr-heading"> رفرفة </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
            <div className="toolset">
              <div className="toolset__icon">
                <img src="/images/brand-icon-4.png" alt="images" className="img-fluid" />
              </div>
              <div className="toolset__content">
                <p className="fw-md lg-text clr-heading"> عقدة شبيبة </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
            <div className="toolset">
              <div className="toolset__icon">
                <img src="/images/brand-icon-5.png" alt="images" className="img-fluid" />
              </div>
              <div className="toolset__content">
                <p className="fw-md lg-text clr-heading"> بايثون </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
            <div className="toolset">
              <div className="toolset__icon">
                <img src="/images/brand-icon-6.png" alt="images" className="img-fluid" />
              </div>
              <div className="toolset__content">
                <p className="fw-md lg-text clr-heading"> رد الفعل الأصلي </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
            <div className="toolset">
              <div className="toolset__icon">
                <img src="/images/brand-icon-7.png" alt="images" className="img-fluid" />
              </div>
              <div className="toolset__content">
                <p className="fw-md lg-text clr-heading"> سويفت </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
            <div className="toolset">
              <div className="toolset__icon">
                <img src="/images/brand-icon-8.png" alt="images" className="img-fluid" />
              </div>
              <div className="toolset__content">
                <p className="fw-md lg-text clr-heading"> الزاوي </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
            <div className="toolset">
              <div className="toolset__icon">
                <img src="/images/brand-icon-9.png" alt="images" className="img-fluid" />
              </div>
              <div className="toolset__content">
                <p className="fw-md lg-text clr-heading"> ج شارب </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
            <div className="toolset">
              <div className="toolset__icon">
                <img src="/images/brand-icon-10.png" alt="images" className="img-fluid" />
              </div>
              <div className="toolset__content">
                <p className="fw-md lg-text clr-heading"> جافا </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
            <div className="toolset">
              <div className="toolset__icon">
                <img src="/images/brand-icon-11.png" alt="images" className="img-fluid" />
              </div>
              <div className="toolset__content">
                <p className="fw-md lg-text clr-heading"> شبابيك </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
            <div className="toolset">
              <div className="toolset__icon">
                <img src="/images/brand-icon-12.png" alt="images" className="img-fluid" />
              </div>
              <div className="toolset__content">
                <p className="fw-md lg-text clr-heading"> ارافيل </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section__gap-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-xl-8">
              <div className="group group-row justify-content-center">
                <Link href="about-us-1" className="bttn bttn--stroke-outline bttn-md bttn-pill fw-md flex-shrink-0 align-items-center">
                  <span className="bttn__arrow"> المزيد عنا </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Tools;