import Link from 'next/link';
import React from 'react';

const Features = () => {
    return (
      <section className="section features-section-1">
      <div className="section__gap-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-xxl-7">
              <span className="d-block h5 lh-1 fw-semibold clr-base"> مرحلة جديدة مثيرة في تطوير حلول تكنولوجيا المعلومات </span>
              <h2 className="mt-5 mb-5"> دعنا نعمل معًا لتحويل عملك المثالي إلى واقع مربح. </h2>
              <p className="max-text-60"> نحن نرى أفكارنا من البداية إلى النهاية ، ونقدم الحلول مع الهدف من إقامة اتصالات جديرة بالثقة الإنجازات تقدم أفضل حلول تكنولوجيا المعلومات </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6 col-xl-3">
            <div className="feature-card-1">
              <div className="icon-box icon-box--md bg-secondary circle">
                <img src="/images/icon-28.png" alt="image" />
              </div>
              <h5 className="mt-8 mb-2">أعلى درجات المرونة</h5>
              <p className="mb-5"> نحن نقدم حلول تكنولوجيا المعلومات الأكثر استجابة ووظيفية للمؤسسات والشركات جميعًا حول العالم. </p>
              <Link href="service-1" className="t-link t-link--base fw-md"> اقرأ أكثر <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="feature-card-1">
              <div className="icon-box icon-box--md bg-danger circle">
                <img src="/images/icon-29.png" alt="image" />
              </div>
              <h5 className="mt-8 mb-2">توفير الوقت</h5>
              <p className="mb-5"> نحن نقدم حلول تكنولوجيا المعلومات الأكثر استجابة ووظيفية للمؤسسات والشركات جميعًا حول العالم. </p>
              <Link href="service-1" className="t-link t-link--base fw-md"> اقرأ أكثر <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="feature-card-1">
              <div className="icon-box icon-box--md bg-success circle">
                <img src="/images/icon-30.png" alt="image" />
              </div>
              <h5 className="mt-8 mb-2">إدارة</h5>
              <p className="mb-5"> نحن نقدم حلول تكنولوجيا المعلومات الأكثر استجابة ووظيفية للمؤسسات والشركات جميعًا حول العالم. </p>
              <Link href="service-1" className="t-link t-link--base fw-md"> اقرأ أكثر <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="feature-card-1">
              <div className="icon-box icon-box--md bg-warning circle">
                <img src="/images/icon-31.png" alt="image" />
              </div>
              <h5 className="mt-8 mb-2">التعاونيه</h5>
              <p className="mb-5"> نحن نقدم حلول تكنولوجيا المعلومات الأكثر استجابة ووظيفية للمؤسسات والشركات جميعًا حول العالم. </p>
              <Link href="service-1" className="t-link t-link--base fw-md"> اقرأ أكثر <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Features;