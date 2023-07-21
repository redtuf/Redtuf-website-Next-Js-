import Navbar from "@/components/rtl/Navbar";
import Footer from "@/components/rtl/home_4/Footer";
import Link from "next/link";

import { useEffect } from 'react';

const blog_1 = () => {

  useEffect(() => {
    document.documentElement.setAttribute("dir", 'rtl');
  },[])
  return (
    <>
    {/* Navbar */}
      <Navbar ltrurl="/blog-page-1" />
      <section className="banner-section section--sm">
        <div className="container">
          <div className="row">
          <div className="col-12">
            <h3 className="clr-light mb-3"> صفحة المدونة - 01 </h3>
            <ul className="list list-row flex-wrap breadcrumb-list">
              <li>
                <Link href="/ltr" className="d-inline-block t-link clr-light :clr-accent"> بيت </Link>
              </li>
              <li className="">
                <Link href="#" className="d-inline-block t-link clr-light :clr-accent"> صفحة المدونة - 01 </Link>
              </li>
              <li className="d-none">
                <Link href="#" className="d-inline-block t-link clr-light :clr-accent">
                </Link>
              </li>
              <li className="d-none">
                <Link href="#" className="d-inline-block t-link clr-light :clr-accent">
                </Link>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </section>
      {/* <!-- Banner End --> */}
      {/* <!-- Blog Section --> */}
      <div className="section">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-8 col-xl-7">
              <div className="text-center">
                <span className="d-inline-block h5 lh-1 fw-semibold clr-base"> تصفح مقالاتنا ومواردنا </span>
                <h2 className="mt-3 mb-3"> ألق نظرة على أحدث مقالاتنا ومواردنا </h2>
                <p className="mx-auto text-center"> ألق نظرة على أحدث المقالات والموارد المتوفرة لدينا. </p>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-6">
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
                      <span className="d-inline-block"> يمكن 22, 2023 </span>
                    </div>
                  </li>
                </ul>
                <h4 className="mt-5 mb-5">
                  <Link href="blog-details-1" className="t-link d-block clr-heading :clr-base"> أهم التطورات في التكنولوجيا التي شهدناها حتى الآن هذا العام </Link>
                </h4>
                <p> العميل مهم جدا ، العميل سيتبعه. لكن هذا نوع من الكراهية يستثني إنها مليئة بالمرح ، دعنا نعلن عنها. </p>
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
                        <Link href="blog-details-1" className="t-link d-inline-block clr-base :clr-base fw-md"> ذكاء اصطناعي </Link>
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
                        <Link href="blog-details-1" className="t-link d-inline-block clr-base :clr-base fw-md"> تصميم المواقع </Link>
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
                        <Link href="blog-details-1" className="t-link d-inline-block clr-base :clr-base fw-md"> تصميم التطبيق </Link>
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
      {/* <!-- Blog Section End --> */}
      {/* <!-- Help Category --> */}
      <div className="section bg-neutral-100">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
              <div className="group group-row flex-wrap gap-5 justify-content-between align-items-center">
                <h2 className="flex-grow-1"> فئات المدونة </h2>
                <Link href="blog-page-1" className="bttn bttn--base-outline bttn-md bttn-pill gap-2 fw-md flex-shrink-0 align-items-center"> جميع المقالات <span className="material-symbols-rounded mat-icon size-16 fw-400 bttn__icon-base"> arrow_forward </span>
                </Link>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
        <div className="row g-6">
          <div className="col-md-6 col-lg-4">
            <div className="help-card text-center">
              <img src="/images/icon-75.png" alt="image" className="img-fluid" />
              <h5 className="mt-8 mb-5"> مقالات التصميم </h5>
              <p> دع لاعبي كرة السلة يطيرون. كل الجسد له ابتسامة وابتسامة. </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="help-card text-center">
              <img src="/images/icon-76.png" alt="image" className="img-fluid" />
              <h5 className="mt-8 mb-5"> مقالات التنمية </h5>
              <p> دع لاعبي كرة السلة يطيرون. كل الجسد له ابتسامة وابتسامة. </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="help-card text-center">
              <img src="/images/icon-77.png" alt="image" className="img-fluid" />
              <h5 className="mt-8 mb-5"> مقالات تسويقية </h5>
              <p> دع لاعبي كرة السلة يطيرون. كل الجسد له ابتسامة وابتسامة. </p>
            </div>
          </div>
        </div>
        </div>
      </div>
      {/* <!-- Help Category End --> */}
      {/* <!-- Latest Post --> */}
      <div className="section">
        <div className="section__gap-bottom">
          <div className="container-xl">
          <div className="row g-4 align-items-lg-end">
            <div className="col-lg-5">
              <h2> آخر المشاركات </h2>
            </div>
            <div className="col-lg-7">
              <ul className="list list-row flex-wrap justify-content-lg-end list--divider list-group">
                <li>
                  <Link className="tab-button active" href="#all-post" data-bs-toggle="list"> الجميع </Link>
                </li>
                <li>
                  <Link className="tab-button" href="#design-post" data-bs-toggle="list"> تصميم </Link>
                </li>
                <li>
                  <Link className="tab-button" href="#development-post" data-bs-toggle="list"> تطوير </Link>
                </li>
                <li>
                  <Link className="tab-button" href="#marketing-post" data-bs-toggle="list"> تسويق </Link>
                </li>
              </ul>
            </div>
          </div>
          </div>
        </div>
        <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tab-content">
              <div className="tab-pane fade show active" id="all-post">
                <div className="row g-6">
                  <div className="col-md-6 col-lg-4">
                    <div className="blog-post-1">
                      <Link href="blog-details-1" className="blog-post-1__link">
                        <img src="/images/blog-post-9.png" alt="image" className="blog-post-1__img" />
                      </Link>
                      <div className="blog-post-1__body">
                        <ul className="list list-row list--divider">
                          <li>
                            <Link href="blog-details-1" className="t-link d-inline-block clr-base :clr-base fw-md"> تطوير الشبكة </Link>
                          </li>
                          <li>
                            <div className="group group-xs group-row align-items-center">
                              <span className="material-symbols-rounded mat-icon solid flex-shrink-0 clr-base"> alarm </span>
                              <span className="d-inline-block"> 22 مايو 2023</span>
                            </div>
                          </li>
                        </ul>
                        <h5 className="mt-5 mb-5">
                          <Link href="blog-details-1" className="t-link clr-heading :clr-base d-block"> خارطة الطريق لتصبح مطور الواجهة الأمامية في عام 2023 </Link>
                        </h5>
                        <p className="mb-5"> ما إذا كانت نتيجة حياة المرأة ليست هدف مسيرة كرة القدم أصل </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="blog-post-1">
                      <Link href="blog-details-1" className="blog-post-1__link">
                        <img src="/images/blog-post-10.png" alt="image" className="blog-post-1__img" />
                      </Link>
                      <div className="blog-post-1__body">
                        <ul className="list list-row list--divider">
                          <li>
                            <Link href="blog-details-1" className="t-link d-inline-block clr-base :clr-base fw-md"> الرعاىة الصحية </Link>
                          </li>
                          <li>
                            <div className="group group-xs group-row align-items-center">
                              <span className="material-symbols-rounded mat-icon solid flex-shrink-0 clr-base"> alarm </span>
                              <span className="d-inline-block"> 22 مايو 2023 </span>
                            </div>
                          </li>
                        </ul>
                        <h5 className="mt-5 mb-5">
                          <Link href="blog-details-1" className="t-link clr-heading :clr-base d-block"> ما أنواع برامج الرعاية الصحية التي يجب أن تعرفها؟ </Link>
                        </h5>
                        <p className="mb-5"> ما إذا كانت نتيجة حياة المرأة ليست هدف مسيرة كرة القدم أصل </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="blog-post-1">
                      <Link href="blog-details-1" className="blog-post-1__link">
                        <img src="/images/blog-post-11.png" alt="image" className="blog-post-1__img" />
                      </Link>
                      <div className="blog-post-1__body">
                        <ul className="list list-row list--divider">
                          <li>
                            <Link href="blog-details-1" className="t-link d-inline-block clr-base :clr-base fw-md"> الناس </Link>
                          </li>
                          <li>
                            <div className="group group-xs group-row align-items-center">
                              <span className="material-symbols-rounded mat-icon solid flex-shrink-0 clr-base"> alarm </span>
                              <span className="d-inline-block"> 22 مايو 2023 </span>
                            </div>
                          </li>
                        </ul>
                        <h5 className="mt-5 mb-5">
                          <Link href="blog-details-1" className="t-link clr-heading :clr-base d-block"> ما أنواع برامج الرعاية الصحية التي يجب أن تعرفها؟ </Link>
                        </h5>
                        <p className="mb-5"> ما إذا كانت نتيجة حياة المرأة ليست هدف مسيرة كرة القدم أصل </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="blog-post-1">
                      <Link href="blog-details-1" className="blog-post-1__link">
                        <img src="/images/blog-post-12.png" alt="image" className="blog-post-1__img" />
                      </Link>
                      <div className="blog-post-1__body">
                        <ul className="list list-row list--divider">
                          <li>
                            <Link href="blog-details-1" className="t-link d-inline-block clr-base :clr-base fw-md"> هيلثتك </Link>
                          </li>
                          <li>
                            <div className="group group-xs group-row align-items-center">
                              <span className="material-symbols-rounded mat-icon solid flex-shrink-0 clr-base"> alarm </span>
                              <span className="d-inline-block"> 22 مايو 2023 </span>
                            </div>
                          </li>
                        </ul>
                        <h5 className="mt-5 mb-5">
                          <Link href="blog-details-1" className="t-link clr-heading :clr-base d-block"> تأثير التعلم الآلي على صناعة التكنولوجيا الصحية </Link>
                        </h5>
                        <p className="mb-5"> كانت النتيجة ثلاثة أضعاف هدف مسيرة كرة القدم أصل </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="blog-post-1">
                      <Link href="blog-details-1" className="blog-post-1__link">
                        <img src="/images/blog-post-13.png" alt="image" className="blog-post-1__img" />
                      </Link>
                      <div className="blog-post-1__body">
                        <ul className="list list-row list--divider">
                          <li>
                            <Link href="blog-details-1" className="t-link d-inline-block clr-base :clr-base fw-md"> هيلثتك </Link>
                          </li>
                          <li>
                            <div className="group group-xs group-row align-items-center">
                              <span className="material-symbols-rounded mat-icon solid flex-shrink-0 clr-base"> alarm </span>
                              <span className="d-inline-block"> 22 مايو 2023 </span>
                            </div>
                          </li>
                        </ul>
                        <h5 className="mt-5 mb-5">
                          <Link href="blog-details-1" className="t-link clr-heading :clr-base d-block"> تأثير التعلم الآلي على صناعة التكنولوجيا الصحية </Link>
                        </h5>
                        <p className="mb-5"> كانت النتيجة ثلاثة أضعاف هدف مسيرة كرة القدم أصل </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="blog-post-1">
                      <Link href="blog-details-1" className="blog-post-1__link">
                        <img src="/images/blog-post-14.png" alt="image" className="blog-post-1__img" />
                      </Link>
                      <div className="blog-post-1__body">
                        <ul className="list list-row list--divider">
                          <li>
                            <Link href="blog-details-1" className="t-link d-inline-block clr-base :clr-base fw-md"> تصميم المنتج </Link>
                          </li>
                          <li>
                            <div className="group group-xs group-row align-items-center">
                              <span className="material-symbols-rounded mat-icon solid flex-shrink-0 clr-base"> alarm </span>
                              <span className="d-inline-block"> 22 مايو 2023 </span>
                            </div>
                          </li>
                        </ul>
                        <h5 className="mt-5 mb-5">
                          <Link href="blog-details-1" className="t-link clr-heading :clr-base d-block"> كيف يمكن زيادة ثقة المنتج في عملية التصميم؟ </Link>
                        </h5>
                        <p className="mb-5"> كانت النتيجة ثلاثة أضعاف هدف مسيرة كرة القدم أصل </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="design-post">
                <div className="row g-6">
                  <div className="col-md-6 col-lg-4">
                    <div className="blog-post-1">
                      <Link href="blog-details-1" className="blog-post-1__link">
                        <img src="/images/blog-post-9.png" alt="image" className="blog-post-1__img" />
                      </Link>
                      <div className="blog-post-1__body">
                        <ul className="list list-row list--divider">
                          <li>
                            <Link href="blog-details-1" className="t-link d-inline-block clr-base :clr-base fw-md"> تطوير الشبكة </Link>
                          </li>
                          <li>
                            <div className="group group-xs group-row align-items-center">
                              <span className="material-symbols-rounded mat-icon solid flex-shrink-0 clr-base"> alarm </span>
                              <span className="d-inline-block"> 22 مايو 2023 </span>
                            </div>
                          </li>
                        </ul>
                        <h5 className="mt-5 mb-5">
                          <Link href="blog-details-1" className="t-link clr-heading :clr-base d-block"> خارطة الطريق لتصبح مطور الواجهة الأمامية في عام 2023 </Link>
                        </h5>
                        <p className="mb-5"> كانت النتيجة ثلاثة أضعاف هدف مسيرة كرة القدم أصل </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="blog-post-1">
                      <Link href="blog-details-1" className="blog-post-1__link">
                        <img src="/images/blog-post-10.png" alt="image" className="blog-post-1__img" />
                      </Link>
                      <div className="blog-post-1__body">
                        <ul className="list list-row list--divider">
                          <li>
                            <Link href="blog-details-1" className="t-link d-inline-block clr-base :clr-base fw-md"> الرعاىة الصحية </Link>
                          </li>
                          <li>
                            <div className="group group-xs group-row align-items-center">
                              <span className="material-symbols-rounded mat-icon solid flex-shrink-0 clr-base"> alarm </span>
                              <span className="d-inline-block"> 22 مايو 2023 </span>
                            </div>
                          </li>
                        </ul>
                        <h5 className="mt-5 mb-5">
                          <Link href="blog-details-1" className="t-link clr-heading :clr-base d-block"> ما أنواع برامج الرعاية الصحية التي يجب أن تعرفها؟ </Link>
                        </h5>
                        <p className="mb-5"> كانت النتيجة ثلاثة أضعاف هدف مسيرة كرة القدم أصل </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="blog-post-1">
                      <Link href="blog-details-1" className="blog-post-1__link">
                        <img src="/images/blog-post-11.png" alt="image" className="blog-post-1__img" />
                      </Link>
                      <div className="blog-post-1__body">
                        <ul className="list list-row list--divider">
                          <li>
                            <Link href="blog-details-1" className="t-link d-inline-block clr-base :clr-base fw-md"> People </Link>
                          </li>
                          <li>
                            <div className="group group-xs group-row align-items-center">
                              <span className="material-symbols-rounded mat-icon solid flex-shrink-0 clr-base"> alarm </span>
                              <span className="d-inline-block"> 22 مايو 2023 </span>
                            </div>
                          </li>
                        </ul>
                        <h5 className="mt-5 mb-5">
                          <Link href="blog-details-1" className="t-link clr-heading :clr-base d-block"> كانت النتيجة ثلاثة أضعاف هدف مسيرة كرة القدم </Link>
                        </h5>
                        <p className="mb-5"> كانت النتيجة ثلاثة أضعاف هدف مسيرة كرة القدم أصل </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="blog-post-1">
                      <Link href="blog-details-1" className="blog-post-1__link">
                        <img src="/images/blog-post-12.png" alt="image" className="blog-post-1__img" />
                      </Link>
                      <div className="blog-post-1__body">
                        <ul className="list list-row list--divider">
                          <li>
                            <Link href="blog-details-1" className="t-link d-inline-block clr-base :clr-base fw-md"> الرعاىة الصحية </Link>
                          </li>
                          <li>
                            <div className="group group-xs group-row align-items-center">
                              <span className="material-symbols-rounded mat-icon solid flex-shrink-0 clr-base"> alarm </span>
                              <span className="d-inline-block"> 22 مايو 2023 </span>
                            </div>
                          </li>
                        </ul>
                        <h5 className="mt-5 mb-5">
                          <Link href="blog-details-1" className="t-link clr-heading :clr-base d-block"> تأثير التعلم الآلي على صناعة الرعاية الصحية </Link>
                        </h5>
                        <p className="mb-5"> كانت النتيجة ثلاثة أضعاف هدف مسيرة كرة القدم أصل </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="blog-post-1">
                      <Link href="blog-details-1" className="blog-post-1__link">
                        <img src="/images/blog-post-13.png" alt="image" className="blog-post-1__img" />
                      </Link>
                      <div className="blog-post-1__body">
                        <ul className="list list-row list--divider">
                          <li>
                            <Link href="blog-details-1" className="t-link d-inline-block clr-base :clr-base fw-md"> الرعاىة الصحية </Link>
                          </li>
                          <li>
                            <div className="group group-xs group-row align-items-center">
                              <span className="material-symbols-rounded mat-icon solid flex-shrink-0 clr-base"> alarm </span>
                              <span className="d-inline-block"> 22 مايو 2023 </span>
                            </div>
                          </li>
                        </ul>
                        <h5 className="mt-5 mb-5">
                          <Link href="blog-details-1" className="t-link clr-heading :clr-base d-block"> تأثير التعلم الآلي على صناعة الرعاية الصحية </Link>
                        </h5>
                        <p className="mb-5"> كانت النتيجة ثلاثة أضعاف هدف مسيرة كرة القدم أصل </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="blog-post-1">
                      <Link href="blog-details-1" className="blog-post-1__link">
                        <img src="/images/blog-post-14.png" alt="image" className="blog-post-1__img" />
                      </Link>
                      <div className="blog-post-1__body">
                        <ul className="list list-row list--divider">
                          <li>
                            <Link href="blog-details-1" className="t-link d-inline-block clr-base :clr-base fw-md"> تصميم المنتج </Link>
                          </li>
                          <li>
                            <div className="group group-xs group-row align-items-center">
                              <span className="material-symbols-rounded mat-icon solid flex-shrink-0 clr-base"> alarm </span>
                              <span className="d-inline-block"> 22 مايو 2023 </span>
                            </div>
                          </li>
                        </ul>
                        <h5 className="mt-5 mb-5">
                          <Link href="blog-details-1" className="t-link clr-heading :clr-base d-block"> كيف يمكن زيادة ثقة المنتج في عملية التصميم؟ </Link>
                        </h5>
                        <p className="mb-5"> كانت النتيجة ثلاثة أضعاف هدف مسيرة كرة القدم أصل </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="development-post">
                <div className="row g-6">
                  <div className="col-md-6 col-lg-4">
                    <div className="blog-post-1">
                      <Link href="blog-details-1" className="blog-post-1__link">
                        <img src="/images/blog-post-9.png" alt="image" className="blog-post-1__img" />
                      </Link>
                      <div className="blog-post-1__body">
                        <ul className="list list-row list--divider">
                          <li>
                            <Link href="blog-details-1" className="t-link d-inline-block clr-base :clr-base fw-md"> تطوير الشبكة </Link>
                          </li>
                          <li>
                            <div className="group group-xs group-row align-items-center">
                              <span className="material-symbols-rounded mat-icon solid flex-shrink-0 clr-base"> alarm </span>
                              <span className="d-inline-block"> 22 مايو 2023 </span>
                            </div>
                          </li>
                        </ul>
                        <h5 className="mt-5 mb-5">
                          <Link href="blog-details-1" className="t-link clr-heading :clr-base d-block"> خارطة الطريق لتصبح مطور الواجهة الأمامية في عام 2023 </Link>
                        </h5>
                        <p className="mb-5"> كانت النتيجة ثلاثة أضعاف هدف مسيرة كرة القدم أصل </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="blog-post-1">
                      <Link href="blog-details-1" className="blog-post-1__link">
                        <img src="/images/blog-post-10.png" alt="image" className="blog-post-1__img" />
                      </Link>
                      <div className="blog-post-1__body">
                        <ul className="list list-row list--divider">
                          <li>
                            <Link href="blog-details-1" className="t-link d-inline-block clr-base :clr-base fw-md"> الرعاىة الصحية </Link>
                          </li>
                          <li>
                            <div className="group group-xs group-row align-items-center">
                              <span className="material-symbols-rounded mat-icon solid flex-shrink-0 clr-base"> alarm </span>
                              <span className="d-inline-block"> 22 مايو 2023 </span>
                            </div>
                          </li>
                        </ul>
                        <h5 className="mt-5 mb-5">
                          <Link href="blog-details-1" className="t-link clr-heading :clr-base d-block"> ما أنواع برامج الرعاية الصحية التي يجب أن تعرفها؟ </Link>
                        </h5>
                        <p className="mb-5"> كانت النتيجة ثلاثة أضعاف هدف مسيرة كرة القدم أصل </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="blog-post-1">
                      <Link href="blog-details-1" className="blog-post-1__link">
                        <img src="/images/blog-post-11.png" alt="image" className="blog-post-1__img" />
                      </Link>
                      <div className="blog-post-1__body">
                        <ul className="list list-row list--divider">
                          <li>
                            <Link href="blog-details-1" className="t-link d-inline-block clr-base :clr-base fw-md"> People </Link>
                          </li>
                          <li>
                            <div className="group group-xs group-row align-items-center">
                              <span className="material-symbols-rounded mat-icon solid flex-shrink-0 clr-base"> alarm </span>
                              <span className="d-inline-block"> 22 مايو 2023 </span>
                            </div>
                          </li>
                        </ul>
                        <h5 className="mt-5 mb-5">
                          <Link href="blog-details-1" className="t-link clr-heading :clr-base d-block"> كانت النتيجة ثلاثة أضعاف هدف مسيرة كرة القدم أصل </Link>
                        </h5>
                        <p className="mb-5"> كانت النتيجة ثلاثة أضعاف هدف مسيرة كرة القدم أصل </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="blog-post-1">
                      <Link href="blog-details-1" className="blog-post-1__link">
                        <img src="/images/blog-post-12.png" alt="image" className="blog-post-1__img" />
                      </Link>
                      <div className="blog-post-1__body">
                        <ul className="list list-row list--divider">
                          <li>
                            <Link href="blog-details-1" className="t-link d-inline-block clr-base :clr-base fw-md"> الرعاىة الصحية </Link>
                          </li>
                          <li>
                            <div className="group group-xs group-row align-items-center">
                              <span className="material-symbols-rounded mat-icon solid flex-shrink-0 clr-base"> alarm </span>
                              <span className="d-inline-block"> 22 مايو 2023 </span>
                            </div>
                          </li>
                        </ul>
                        <h5 className="mt-5 mb-5">
                          <Link href="blog-details-1" className="t-link clr-heading :clr-base d-block"> تأثير التعلم الآلي على صناعة الرعاية الصحية </Link>
                        </h5>
                        <p className="mb-5"> كانت النتيجة ثلاثة أضعاف هدف مسيرة كرة القدم أصل </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="blog-post-1">
                      <Link href="blog-details-1" className="blog-post-1__link">
                        <img src="/images/blog-post-13.png" alt="image" className="blog-post-1__img" />
                      </Link>
                      <div className="blog-post-1__body">
                        <ul className="list list-row list--divider">
                          <li>
                            <Link href="blog-details-1" className="t-link d-inline-block clr-base :clr-base fw-md"> الرعاىة الصحية </Link>
                          </li>
                          <li>
                            <div className="group group-xs group-row align-items-center">
                              <span className="material-symbols-rounded mat-icon solid flex-shrink-0 clr-base"> alarm </span>
                              <span className="d-inline-block"> 22 مايو 2023 </span>
                            </div>
                          </li>
                        </ul>
                        <h5 className="mt-5 mb-5">
                          <Link href="blog-details-1" className="t-link clr-heading :clr-base d-block"> تأثير التعلم الآلي على صناعة الرعاية الصحية </Link>
                        </h5>
                        <p className="mb-5"> كانت النتيجة ثلاثة أضعاف هدف مسيرة كرة القدم أصل </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="blog-post-1">
                      <Link href="blog-details-1" className="blog-post-1__link">
                        <img src="/images/blog-post-14.png" alt="image" className="blog-post-1__img" />
                      </Link>
                      <div className="blog-post-1__body">
                        <ul className="list list-row list--divider">
                          <li>
                            <Link href="blog-details-1" className="t-link d-inline-block clr-base :clr-base fw-md"> تصميم المنتج </Link>
                          </li>
                          <li>
                            <div className="group group-xs group-row align-items-center">
                              <span className="material-symbols-rounded mat-icon solid flex-shrink-0 clr-base"> alarm </span>
                              <span className="d-inline-block"> 22 مايو 2023 </span>
                            </div>
                          </li>
                        </ul>
                        <h5 className="mt-5 mb-5">
                          <Link href="blog-details-1" className="t-link clr-heading :clr-base d-block"> كيف يمكن زيادة ثقة المنتج في عملية التصميم؟ </Link>
                        </h5>
                        <p className="mb-5"> كانت النتيجة ثلاثة أضعاف هدف مسيرة كرة القدم أصل </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="marketing-post">
                <div className="row g-6">
                  <div className="col-md-6 col-lg-4">
                    <div className="blog-post-1">
                      <Link href="blog-details-1" className="blog-post-1__link">
                        <img src="/images/blog-post-9.png" alt="image" className="blog-post-1__img" />
                      </Link>
                      <div className="blog-post-1__body">
                        <ul className="list list-row list--divider">
                          <li>
                            <Link href="blog-details-1" className="t-link d-inline-block clr-base :clr-base fw-md"> تطوير الشبكة </Link>
                          </li>
                          <li>
                            <div className="group group-xs group-row align-items-center">
                              <span className="material-symbols-rounded mat-icon solid flex-shrink-0 clr-base"> alarm </span>
                              <span className="d-inline-block"> 22 مايو 2023 </span>
                            </div>
                          </li>
                        </ul>
                        <h5 className="mt-5 mb-5">
                          <Link href="blog-details-1" className="t-link clr-heading :clr-base d-block"> خارطة الطريق لتصبح مطور الواجهة الأمامية في عام 2023 </Link>
                        </h5>
                        <p className="mb-5"> كانت النتيجة ثلاثة أضعاف هدف مسيرة كرة القدم أصل </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="blog-post-1">
                      <Link href="blog-details-1" className="blog-post-1__link">
                        <img src="/images/blog-post-10.png" alt="image" className="blog-post-1__img" />
                      </Link>
                      <div className="blog-post-1__body">
                        <ul className="list list-row list--divider">
                          <li>
                            <Link href="blog-details-1" className="t-link d-inline-block clr-base :clr-base fw-md"> الرعاىة الصحية </Link>
                          </li>
                          <li>
                            <div className="group group-xs group-row align-items-center">
                              <span className="material-symbols-rounded mat-icon solid flex-shrink-0 clr-base"> alarm </span>
                              <span className="d-inline-block"> 22 مايو 2023 </span>
                            </div>
                          </li>
                        </ul>
                        <h5 className="mt-5 mb-5">
                          <Link href="blog-details-1" className="t-link clr-heading :clr-base d-block"> ما أنواع برامج الرعاية الصحية التي يجب أن تعرفها؟ </Link>
                        </h5>
                        <p className="mb-5"> كانت النتيجة ثلاثة أضعاف هدف مسيرة كرة القدم أصل </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="blog-post-1">
                      <Link href="blog-details-1" className="blog-post-1__link">
                        <img src="/images/blog-post-11.png" alt="image" className="blog-post-1__img" />
                      </Link>
                      <div className="blog-post-1__body">
                        <ul className="list list-row list--divider">
                          <li>
                            <Link href="blog-details-1" className="t-link d-inline-block clr-base :clr-base fw-md"> People </Link>
                          </li>
                          <li>
                            <div className="group group-xs group-row align-items-center">
                              <span className="material-symbols-rounded mat-icon solid flex-shrink-0 clr-base"> alarm </span>
                              <span className="d-inline-block"> 22 مايو 2023 </span>
                            </div>
                          </li>
                        </ul>
                        <h5 className="mt-5 mb-5">
                          <Link href="blog-details-1" className="t-link clr-heading :clr-base d-block"> كانت النتيجة ثلاثة أضعاف هدف مسيرة كرة القدم أصل </Link>
                        </h5>
                        <p className="mb-5"> كانت النتيجة ثلاثة أضعاف هدف مسيرة كرة القدم أصل </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="blog-post-1">
                      <Link href="blog-details-1" className="blog-post-1__link">
                        <img src="/images/blog-post-12.png" alt="image" className="blog-post-1__img" />
                      </Link>
                      <div className="blog-post-1__body">
                        <ul className="list list-row list--divider">
                          <li>
                            <Link href="blog-details-1" className="t-link d-inline-block clr-base :clr-base fw-md"> الرعاىة الصحية </Link>
                          </li>
                          <li>
                            <div className="group group-xs group-row align-items-center">
                              <span className="material-symbols-rounded mat-icon solid flex-shrink-0 clr-base"> alarm </span>
                              <span className="d-inline-block"> 22 مايو 2023 </span>
                            </div>
                          </li>
                        </ul>
                        <h5 className="mt-5 mb-5">
                          <Link href="blog-details-1" className="t-link clr-heading :clr-base d-block"> تأثير التعلم الآلي على صناعة الرعاية الصحية </Link>
                        </h5>
                        <p className="mb-5"> كانت النتيجة ثلاثة أضعاف هدف مسيرة كرة القدم أصل </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="blog-post-1">
                      <Link href="blog-details-1" className="blog-post-1__link">
                        <img src="/images/blog-post-13.png" alt="image" className="blog-post-1__img" />
                      </Link>
                      <div className="blog-post-1__body">
                        <ul className="list list-row list--divider">
                          <li>
                            <Link href="blog-details-1" className="t-link d-inline-block clr-base :clr-base fw-md"> الرعاىة الصحية </Link>
                          </li>
                          <li>
                            <div className="group group-xs group-row align-items-center">
                              <span className="material-symbols-rounded mat-icon solid flex-shrink-0 clr-base"> alarm </span>
                              <span className="d-inline-block"> 22 مايو 2023 </span>
                            </div>
                          </li>
                        </ul>
                        <h5 className="mt-5 mb-5">
                          <Link href="blog-details-1" className="t-link clr-heading :clr-base d-block"> تأثير التعلم الآلي على صناعة الرعاية الصحية </Link>
                        </h5>
                        <p className="mb-5"> كانت النتيجة ثلاثة أضعاف هدف مسيرة كرة القدم أصل </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="blog-post-1">
                      <Link href="blog-details-1" className="blog-post-1__link">
                        <img src="/images/blog-post-14.png" alt="image" className="blog-post-1__img" />
                      </Link>
                      <div className="blog-post-1__body">
                        <ul className="list list-row list--divider">
                          <li>
                            <Link href="blog-details-1" className="t-link d-inline-block clr-base :clr-base fw-md"> تصميم المنتج </Link>
                          </li>
                          <li>
                            <div className="group group-xs group-row align-items-center">
                              <span className="material-symbols-rounded mat-icon solid flex-shrink-0 clr-base"> alarm </span>
                              <span className="d-inline-block"> 22 مايو 2023 </span>
                            </div>
                          </li>
                        </ul>
                        <h5 className="mt-5 mb-5">
                          <Link href="blog-details-1" className="t-link clr-heading :clr-base d-block"> كيف يمكن زيادة ثقة المنتج في عملية التصميم؟ </Link>
                        </h5>
                        <p className="mb-5"> كانت النتيجة ثلاثة أضعاف هدف مسيرة كرة القدم أصل </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      {/* <!-- Latest Post End --> */}
      {/* <!-- CTA  --> */}
      <div className="section pt-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="cta-banner bg-base rounded-5">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="section__gap-bottom pb-md-0">
                    <h3 className="clr-light mb-6"> اشترك في النشرة الإخبارية الأسبوعية لدينا عبر البريد الإلكتروني </h3>
                    <p className="clr-light mb-6"> تحتاج المزيد من المعلومات؟ اشترك في النشرة الإخبارية واحصل على التحديثات والأخبار </p>
                    <div className="newsletter-2 newsletter-2--light max-text-50">
                      <input type="text" className="newsletter-2__input" placeholder="أدخل بريدك الإلكتروني" />
                      <button className="bttn bttn--light bttn-md fw-md flex-shrink-0 rounded-1 newsletter-2__btn"> يشترك </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text-center">
                    <img src="/images/cta-img-2.png" alt="image" className="img-fluid mx-auto" />
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default blog_1;
