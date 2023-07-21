import Link from 'next/link';
import React from 'react';

const Blog = () => {
    return (
      <div className="blog-section-1">
      <div className="section--sm section--bottom">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row g-4 justify-content-xxl-between align-items-md-end">
              <div className="col-md-8 col-xxl-7">
                <span className="d-block h5 lh-1 fw-semibold clr-base"> تصفح مقالاتنا ومواردنا </span>
                <h2 className="mt-5 mb-5"> ألق نظرة على أحدث مقالاتنا ومواردنا </h2>
                <p className="max-text-60"> ألق نظرة على أحدث المقالات والموارد التي حصلنا عليها من عملائنا. </p>
              </div>
              <div className="col-md-4">
                <div className="text-md-end">
                  <Link href="blog-page-1" className="bttn bttn--stroke-outline bttn-md bttn-pill fw-md flex-shrink-0 align-items-center">
                    <span className="bttn__arrow"> تصفح المقالات </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="blog-post-1 h-100">
                <Link href="blog-details-1" className="blog-post-1__link flex-shrink-0">
                  <img src="/images/blog-post-3.png" alt="image" className="blog-post-1__img" />
                </Link>
                <div className="blog-post-1__body h-100 d-flex flex-column">
                  <h5 className="mb-2">
                    <Link href="blog-details-1" className="t-link clr-heading :clr-base d-block"> أهم التطورات في التكنولوجيا التي شهدناها حتى الآن هذا العام </Link>
                  </h5>
                  <p className="mb-5"> الآن يمكن معالجة الصور بنصوص عربية وفك تشفير اللغة العربية. ما عليك سوى التقاط صورة لأي نص عربي ووضع علامة عليه </p>
                  <Link href="blog-details-1" className="t-link t-link--base fw-md mt-auto"> اقرأ أكثر <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="blog-post-1 h-100">
                <Link href="blog-details-1" className="blog-post-1__link flex-shrink-0">
                  <img src="/images/blog-post-1.png" alt="image" className="blog-post-1__img" />
                </Link>
                <div className="blog-post-1__body h-100 d-flex flex-column">
                  <h5 className="mb-2">
                    <Link href="blog-details-1" className="t-link clr-heading :clr-base d-block"> لماذا نحن متحمسون جدًا للتكنولوجيا - ولماذا يجب أن تكون كذلك! </Link>
                  </h5>
                  <p className="mb-5"> الآن يمكن معالجة الصور بنصوص عربية وفك تشفير اللغة العربية. ما عليك سوى التقاط صورة لأي نص عربي ووضع علامة عليه </p>
                  <Link href="blog-details-1" className="t-link t-link--base fw-md mt-auto"> اقرأ أكثر <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="blog-post-1 h-100">
                <Link href="blog-details-1" className="blog-post-1__link flex-shrink-0">
                  <img src="/images/blog-post-2.png" alt="image" className="blog-post-1__img" />
                </Link>
                <div className="blog-post-1__body h-100 d-flex flex-column">
                  <h5 className="mb-2">
                    <Link href="blog-details-1" className="t-link clr-heading :clr-base d-block"> الحقائق الـ 17 حول التكنولوجيا التي يُساء فهمها دائمًا تقريبًا </Link>
                  </h5>
                  <p className="mb-5"> الآن يمكن معالجة الصور بنصوص عربية وفك تشفير اللغة العربية. ما عليك سوى التقاط صورة لأي نص عربي ووضع علامة عليه </p>
                  <Link href="blog-details-1" className="t-link t-link--base fw-md mt-auto"> اقرأ أكثر <span className="material-symbols-outlined mat-icon fw-200"> trending_flat </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Blog;