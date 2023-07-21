import Navbar from "@/components/rtl/Navbar";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { useEffect } from "react";
import Footer from "@/components/rtl/home_4/Footer";

const leadership_page = () => {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "rtl");
  }, []);
  return (
    <>
      {/* Navbar Section */}
      <Navbar ltrurl="/leadership-page" />
      {/* Banner section */}
      <section className="banner-section section--sm">
        <div className="container">
          <div className="row">
          <div className="col-12">
            <h3 className="clr-light mb-3"> قيادة </h3>
            <ul className="list list-row flex-wrap breadcrumb-list">
              <li>
                <Link href="/rtl" className="d-inline-block t-link clr-light :clr-accent"> بيت </Link>
              </li>
              <li className="">
                <Link href="#" className="d-inline-block t-link clr-light :clr-accent"> شركة </Link>
              </li>
              <li className="">
                <Link href="#" className="d-inline-block t-link clr-light :clr-accent"> قيادة </Link>
              </li>
              <li className="">
                <Link href="#" className="d-inline-block t-link clr-light :clr-accent"> واد وارين </Link>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </section>
      {/* <!-- Leader Details  --> */}
      <div className="section">
      <div className="container">
        <div className="row justify-content-xl-between">
          <div className="col-md-5 col-xl-4">
            <div className="section__gap-bottom pb-md-0">
              <div className="leader-card">
                <div className="leader-card__img">
                  <img src="/images/leader-img.png" alt="image" className="leader-card__img-is" />
                </div>
                <div className="text-center">
                  <h3 className="mb-2"> واد وارين </h3>
                  <span className="d-block fw-bold clr-base mb-5"> مخرج مبدع </span>
                  <p className="mb-5"> من المهم جدًا أن يكون العميل على دراية باحتياجات العميل </p>
                  <ul className="list list-xs list-row justify-content-center">
                    <li>
                      <Link href="#" className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                        <FaLinkedinIn/>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <h2 className="mb-4"> حول واد وارن </h2>
            <p className="mb-4"> من المهم جدًا أن يكون العميل على دراية باحتياجات العميل ، ولكن الأمر نفسه يحدث في نفس الوقت مع بعض المخاض الكبير والألم. في الواقع ، للوصول إلى أدق التفاصيل ، لا ينبغي لأحد أن يمارس أيًا منها من العمل ، إلا أن بعضها قد يستفيد. دويس أو ألم مزعج في التوبيخ يريد أن يكون شعرة بسرور ، ولكن دعه يهرب من الألم ولا يدع أحد يلد. إلا إذا أعمتهم الشهوة لا يخرجون ، هم المخطئون الذين يتخلون عن واجباتهم ؛ </p>
            <p className="mb-4"> رجل حكيم وخادم ولكن رجل طيب. شكرا لك لكن الابتسامة حزينة. ولكن إن لم تكن البحيرة ، إلا أن المتسلقين عاشوا فيها. لأنهم يقدمون عنصرا وقت سهل لأنه كان سرير جرة. الفم قبيح </p>
            <ul className="list list-disc list-disc--dark mb-4">
              <li>
                <p className="fw-md"> ومع ذلك ، يحتاج القط غدًا إلى شاحنات. من يكره المرض؟ </p>
              </li>
              <li>
                <p className="fw-md"> تحتاج أو الآن إلى جهاز كمبيوتر. يا له من بطل </p>
              </li>
              <li>
                <p className="fw-md"> إنتاج سي إن إن هو برنامج تلفزيوني </p>
              </li>
            </ul>
            <p className="mb-4"> رجل حكيم وخادم ولكن رجل طيب. شكرا لك لكن الابتسامة حزينة. ولكن إن لم تكن البحيرة ، إلا أن المتسلقين عاشوا فيها. لأنهم يقدمون عنصرا وقت سهل لأنه كان سرير جرة. الفم قبيح </p>
            <p className="mb-4"> رجل حكيم وخادم ولكن رجل طيب. شكرا لك لكن الابتسامة حزينة. ولكن إن لم تكن البحيرة ، إلا أن المتسلقين عاشوا فيها. لأنهم يقدمون عنصرا وقت سهل لأنه كان سرير جرة. الفم قبيح </p>
          </div>
        </div>
      </div>
    </div>
      {/* <!-- Blog Section  --> */}
      <div className="section bg-neutral-100">
      <div className="section__gap-bottom">
        <div className="container">
          <div className="row g-4 align-items-lg-end">
            <div className="col-md-10 col-lg-7">
              <span className="d-block h5 lh-1 fw-semibold clr-base"> تصفح المشاركات عن طريق المقالات والموارد واد وارن </span>
              <h2 className="mt-5 mb-5"> المشاركات التي كتبها واد وارين </h2>
              <p> ألق نظرة على أحدث المقالات والموارد المتوفرة لدينا. </p>
            </div>
            <div className="col-lg-5">
              <div className="text-lg-end">
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
      {/* Footer */}
      <Footer />
    </>
  );
};

export default leadership_page;
