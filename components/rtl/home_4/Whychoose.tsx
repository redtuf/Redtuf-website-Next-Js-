import Link from 'next/link';

const Whychoose = () => {
    return (
<section className="choose-section bg-neutral-100 section">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-6">
            <div className="section__gap-bottom">
              <span className="d-block h5 lh-1 fw-semibold clr-base"> لماذا أخترتنا؟ </span>
              <h2 className="mt-2 mb-4"> الهدف الأساسي لشركتنا هو خدمة احتياجات تكنولوجيا المعلومات لشركتك. </h2>
              <p className="max-text-50"> خدمات تكنولوجيا المعلومات الاستباقية والحلول الآمنة التي تقلل من المخاطر وتمكن من النمو وتحقيق نتائج أعمال أفضل. نقدم لكم أفضل تقنيات المعلومات والحاسوب خدمة </p>
            </div>
            <ul className="list list-xmd">
              <li>
                <div className="border rounded-3 p-5 group d-inline-flex group-xmd group-row align-items-center">
                  <div className="flex-shrink-0 d-inline-block">
                    <img src="/images/icon-43.png" alt="image" className="img-fluid" />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mb-2"> تجربتنا </h5>
                    <p> هناك حقيقة مثبتة منذ زمن طويل وهي أن القارئ سوف يشتت انتباهه. </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="border rounded-3 p-5 group d-inline-flex group-xmd group-row align-items-center">
                  <div className="flex-shrink-0 d-inline-block">
                    <img src="/images/icon-44.png" alt="image" className="img-fluid" />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mb-2"> شركة معتمدة </h5>
                    <p> هناك حقيقة مثبتة منذ زمن طويل وهي أن القارئ سوف يشتت انتباهه. </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="border rounded-3 p-5 group d-inline-flex group-xmd group-row align-items-center">
                  <div className="flex-shrink-0 d-inline-block">
                    <img src="/images/icon-45.png" alt="image" className="img-fluid" />
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mb-2"> تحديث مدى الحياة </h5>
                    <p> هناك حقيقة مثبتة منذ زمن طويل وهي أن القارئ سوف يشتت انتباهه. </p>
                  </div>
                </div>
              </li>
            </ul>
            <div className="group group-xmd group-row flex-wrap justify-content-center justify-content-sm-start align-items-center mt-12">
              <Link href="contact-us-1" className="bttn bttn-pill bttn-md bttn--base-accent align-items-center fw-md">
                <img src="/images/icon-46.png" alt="image" className="img-fluid me-2" /> لنتحدث </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Whychoose;