import Link from "next/link";

const Service = () => {
  return (
    <div className="section">
    <div className="section__gap-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-xl-8">
            <span className="d-block h5 lh-1 fw-semibold clr-base text-center"> نحن نقدم الخدمات التالية </span>
            <h2 className="mt-5 mb-5 text-center"> من أجل رخائك في المستقبل ، نقدم خدمات تكنولوجيا المعلومات على مستوى عالمي. </h2>
            <p className="text-center mx-auto t-short-para"> نحن نقدم حلول تقنية وخدمات تقنية معلومات موثوقة ومحترفة. دعونا نجعل حلم الأعمال حقيقة واقعة </p>
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
              <h5 className="mb-2">حل تكنولوجيا المعلومات</h5>
              <p className="mb-5"> نحن نقدم حلول تكنولوجيا المعلومات الأكثر استجابة ووظيفية للمؤسسات والشركات جميعًا حول العالم. </p>
              <Link href="service-details-1" className="t-link t-link--base fw-md"> اكتشف الآن <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
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
              <h5 className="mb-2">تطوير الشبكة</h5>
              <p className="mb-5"> نحن نقدم حلول تكنولوجيا المعلومات الأكثر استجابة ووظيفية للمؤسسات والشركات جميعًا حول العالم. </p>
              <Link href="service-details-1" className="t-link t-link--base fw-md"> اكتشف الآن <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
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
              <h5 className="mb-2">خدمات الشبكات</h5>
              <p className="mb-5"> نحن نقدم حلول تكنولوجيا المعلومات الأكثر استجابة ووظيفية للمؤسسات والشركات جميعًا حول العالم. </p>
              <Link href="service-details-1" className="t-link t-link--base fw-md"> اكتشف الآن <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
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
              <h5 className="mb-2">تحسين محركات البحث</h5>
              <p className="mb-5"> نحن نقدم حلول تكنولوجيا المعلومات الأكثر استجابة ووظيفية للمؤسسات والشركات جميعًا حول العالم. </p>
              <Link href="service-details-1" className="t-link t-link--base fw-md"> اكتشف الآن <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
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
              <h5 className="mb-2">تحسين التطبيق</h5>
              <p className="mb-5"> نحن نقدم حلول تكنولوجيا المعلومات الأكثر استجابة ووظيفية للمؤسسات والشركات جميعًا حول العالم. </p>
              <Link href="service-details-1" className="t-link t-link--base fw-md"> اكتشف الآن <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
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
              <h5 className="mb-2">استعادة البيانات</h5>
              <p className="mb-5"> نحن نقدم حلول تكنولوجيا المعلومات الأكثر استجابة ووظيفية للمؤسسات والشركات جميعًا حول العالم. </p>
              <Link href="service-details-1" className="t-link t-link--base fw-md"> اكتشف الآن <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
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
              <Link href="service-1" className="bttn bttn--base bttn-md bttn-pill fw-md flex-shrink-0"> المزيد من الخدمات </Link>
              <Link href="contact-us-1" className="bttn bttn--stroke-outline bttn-md bttn-pill fw-md flex-shrink-0 align-items-center">
                <span className="bttn__arrow"> اتصل بنا </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Service;
