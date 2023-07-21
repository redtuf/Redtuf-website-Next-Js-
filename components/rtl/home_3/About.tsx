import Link from "next/link";

const About = () => {
  return (
    <div className="section overflow-hidden">
    <div className="container">
      <div className="row">
        <div className="col-xl-6">
          <div className="about-img about-img--alt">
            <div className="about-img__content about-img__content-xl">
              <img src="/images/about-img-2.png" alt="image" className="about-img__is" />
            </div>
            <div className="about-img__content">
              <img src="/images/about-img-3.png" alt="image" className="about-img__is" />
            </div>
            <div className="about-img__content">
              <img src="/images/about-img-4.png" alt="image" className="about-img__is" />
            </div>
            <div className="about-img__content">
              <img src="/images/about-img-5.png" alt="image" className="about-img__is" />
            </div>
            <div className="about-img__content">
              <img src="/images/about-img-6.png" alt="image" className="about-img__is" />
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="section__gap-top pt-xl-0">
            <span className="d-inline-block h5 lh-1 fw-semibold clr-base overlay-text"> عزز الإبداع من خلال حلول تقنية موثوقة <span className="overlay-text__content">عن</span>
            </span>
            <h2 className="mt-5 mb-5"> لقد نجحنا في 38 عامًا. <span className="clr-base">نجاح</span> يكافئ الجهود. </h2>
            <p className="mb-8 max-text-60"> يضمن برنامج itechex أن النظام يعمل بدون عوائق ويستجيب للدفع الاهتمام حتى بأدق التفاصيل. التكنولوجيا المصغرة هي نهج جديد تستخدم itechex لغرض حماية قاعدة بيانات عملائها وإنشاءها جدران الحماية شديدة السرية. تعرف على المزيد حول قصص نجاحنا </p>
            <ul className="list list-row flex-wrap align-items-center">
              <li className="flex-grow-1">
                <div className="counter-card-1">
                  <h4 className="clr-base text-center mb-1">23+</h4>
                  <p className="text-center"> سنوات من الخبرة </p>
                </div>
              </li>
              <li className="flex-grow-1">
                <div className="counter-card-1">
                  <h4 className="clr-base text-center mb-1">500</h4>
                  <p className="text-center"> مشاريع كاملة </p>
                </div>
              </li>
              <li className="flex-grow-1">
                <div className="counter-card-1">
                  <h4 className="clr-base text-center mb-1">100+</h4>
                  <p className="text-center"> موظفين </p>
                </div>
              </li>
            </ul>
            <div className="group group-md group-row flex-wrap mt-10">
              <Link href="about-us-1" className="bttn bttn--base bttn-md bttn-pill fw-md flex-shrink-0"> يتعلم أكثر <span className="material-symbols-rounded mat-icon fw-100 bttn__icon"> trending_flat </span>
              </Link>
              <div className="group group-row align-items-center flex-shrink-0">
                <div className="icon-box icon-box--sm icon-box--light-outline circle bg-neutral clr-base">
                  <span className="material-symbols-rounded mat-icon fw-300 size-32 solid"> phone_in_talk </span>
                </div>
                <div className="group group-0">
                  <p className="clr-heading sm-text">اطلب المساعدة</p>
                  <p className="clr-heading fw-md">+7 (903) 880-91-85</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default About;
