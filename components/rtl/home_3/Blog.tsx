import Link from 'next/link';
import React from 'react';

const Blog = () => {
    return (
      <div className="section">
      <div className="section__gap-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="text-center">
                <span className="d-inline-block h5 lh-1 fw-semibold clr-base overlay-text overlay-text-x"> تصفح مقالاتنا ومواردنا <span className="overlay-text__content">المدونات</span>
                </span>
                <h2 className="mt-5 mb-5"> ألق نظرة على أحدث مقالاتنا ومواردنا </h2>
                <p className="mx-auto t-short-para"> فيما يلي بعض التعليقات التي أدلى بها عملائنا. لا تأخذ ذلك على إيمان قلنا ذلك. تحقق من ما بعض </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="blog-post-1 blog-post-1--xl">
              <Link href="blog-details-1" className="blog-post-1__link">
                <img src="/images/blog-post-4.png" alt="image" className="blog-post-1__img" />
              </Link>
              <div className="blog-post-1__body">
                <ul className="list list-row list--divider">
                  <li>
                    <Link href="blog-details-1" className="t-link d-inline-block clr-base :clr-base fw-md"> تطوير </Link>
                  </li>
                  <li>
                    <div className="group group-xs group-row align-items-center">
                      <span className="material-symbols-rounded mat-icon solid flex-shrink-0 d-none d-sm-block"> alarm </span>
                      <span className="d-inline-block"> 22 مايو 2023 </span>
                    </div>
                  </li>
                </ul>
                <h4 className="mt-5 mb-5">
                  <Link href="blog-details-1" className="t-link d-block clr-heading :clr-base"> أهم التطورات في التكنولوجيا التي شهدناها حتى الآن هذا العام </Link>
                </h4>
                <p> العميل مهم جدا ، العميل سيتبعه. لكن هذا شيء يريده إنه مكروه ما لم يكن إنها مليئة بالمرح ، دعنا نعلن عنها. </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="list list-md">
              <li>
                <div className="blog-post-2">
                  <Link href="blog-details-1" className="blog-post-2__link">
                    <img src="/images/blog-post-5.png" alt="image" className="blog-post-2__img" />
                  </Link>
                  <div className="blog-post-2__content">
                    <ul className="list list-row list--divider">
                      <li>
                        <Link href="blog-details-1" className="t-link d-inline-block clr-base :clr-base fw-md"> تطوير </Link>
                      </li>
                      <li>
                        <div className="group group-xs group-row align-items-center">
                          <span className="material-symbols-rounded mat-icon solid flex-shrink-0"> alarm </span>
                          <span className="d-inline-block"> 22 مايو 2023 </span>
                        </div>
                      </li>
                    </ul>
                    <h5 className="mt-3">
                      <Link href="blog-details-1" className="t-link d-block clr-heading :clr-base"> لماذا نحب التكنولوجيا - ويجب عليك أيضًا! </Link>
                    </h5>
                  </div>
                </div>
              </li>
              <li>
                <div className="blog-post-2">
                  <Link href="blog-details-1" className="blog-post-2__link">
                    <img src="/images/blog-post-6.png" alt="image" className="blog-post-2__img" />
                  </Link>
                  <div className="blog-post-2__content">
                    <ul className="list list-row list--divider">
                      <li>
                        <Link href="blog-details-1" className="t-link d-inline-block clr-base :clr-base fw-md"> تطوير </Link>
                      </li>
                      <li>
                        <div className="group group-xs group-row align-items-center">
                          <span className="material-symbols-rounded mat-icon solid flex-shrink-0"> alarm </span>
                          <span className="d-inline-block"> 22 مايو 2023 </span>
                        </div>
                      </li>
                    </ul>
                    <h5 className="mt-3">
                      <Link href="blog-details-1" className="t-link d-block clr-heading :clr-base"> غالبًا ما يكون هناك 17 مفهومًا خاطئًا حول التكنولوجيا. </Link>
                    </h5>
                  </div>
                </div>
              </li>
              <li>
                <div className="blog-post-2">
                  <Link href="blog-details-1" className="blog-post-2__link">
                    <img src="/images/blog-post-7.png" alt="image" className="blog-post-2__img" />
                  </Link>
                  <div className="blog-post-2__content">
                    <ul className="list list-row list--divider">
                      <li>
                        <Link href="blog-details-1" className="t-link d-inline-block clr-base :clr-base fw-md"> تطوير </Link>
                      </li>
                      <li>
                        <div className="group group-xs group-row align-items-center">
                          <span className="material-symbols-rounded mat-icon solid flex-shrink-0"> alarm </span>
                          <span className="d-inline-block"> 22 مايو 2023 </span>
                        </div>
                      </li>
                    </ul>
                    <h5 className="mt-3">
                      <Link href="blog-details-1" className="t-link d-block clr-heading :clr-base"> اجعل شركتك أفضل مع حلول خدمات الويب </Link>
                    </h5>
                  </div>
                </div>
              </li>
              <li>
                <div className="blog-post-2">
                  <Link href="blog-details-1" className="blog-post-2__link">
                    <img src="/images/blog-post-8.png" alt="image" className="blog-post-2__img" />
                  </Link>
                  <div className="blog-post-2__content">
                    <ul className="list list-row list--divider">
                      <li>
                        <Link href="blog-details-1" className="t-link d-inline-block clr-base :clr-base fw-md"> تطوير </Link>
                      </li>
                      <li>
                        <div className="group group-xs group-row align-items-center">
                          <span className="material-symbols-rounded mat-icon solid flex-shrink-0"> alarm </span>
                          <span className="d-inline-block"> 22 مايو 2023 </span>
                        </div>
                      </li>
                    </ul>
                    <h5 className="mt-3">
                      <Link href="blog-details-1" className="t-link d-block clr-heading :clr-base"> نظرة على تأثير التكنولوجيا اللاسلكية على المؤسسات </Link>
                    </h5>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Blog;