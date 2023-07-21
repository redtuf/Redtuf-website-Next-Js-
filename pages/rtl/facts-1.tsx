import Navbar from "@/components/rtl/Navbar";
import Footer from "@/components/rtl/home_4/Footer";
import Link from "next/link";

import { useEffect } from "react";

const facts_1 = () => {
  const handleMouseOver = (event: any) => {
    const target = event.currentTarget;
    target.classList.add("active");
    const siblings = Array.from(target.parentNode.children).filter(
      (element) => element !== target
    );
    siblings.forEach((element: any) => {
      element.classList.remove("active");
    });
  };
  useEffect(() => {
    document.documentElement.setAttribute("dir", "rtl");
  }, []);
  return (
    <>
      <Navbar ltrurl="/facts-1" />
      <section className="banner-section section--sm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="clr-light mb-3"> التاريخ والحقائق </h3>
              <ul className="list list-row flex-wrap breadcrumb-list">
                <li>
                  <Link
                    href="/rtl"
                    className="d-inline-block t-link clr-light :clr-accent">
                    {" "}
                    بيت{" "}
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="#"
                    className="d-inline-block t-link clr-light :clr-accent">
                    {" "}
                    شركة{" "}
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="#"
                    className="d-inline-block t-link clr-light :clr-accent">
                    {" "}
                    التاريخ والحقائق{" "}
                  </Link>
                </li>
                <li className="d-none">
                  <Link
                    href="#"
                    className="d-inline-block t-link clr-light :clr-accent"></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Year Review --> */}
      <div className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-xl-11">
              <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
                {" "}
                يدير قسم تكنولوجيا المعلومات شركتك. أنت بحاجة إلى خدمات
                تكنولوجيا المعلومات المدارة الموثوقة.{" "}
              </span>
              <h2 className="mt-5 mb-5 text-center">
                {" "}
                آمال المستقبل هي ما نحلم به. ننفذها بنجاح.{" "}
              </h2>
              <p className="text-center">
                {" "}
                ستعرف أنك حددت موقع حلمك عندما يكون لديك الدافع لتحقيق هدف ، فإن
                الشجاعة لمتابعة ذلك ، والثبات على التغلب على أي صعوبات تعترض
                طريقك ، و الشعور بأنك محظوظ عندما تدرك ذلك في النهاية. استمر في
                الحلم ، واعمل بجد ، وها هو سوف تؤتي ثمارها.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section p-xl-0 bg-base-800 position-relative">
        <div className="section__gap-bottom year-review__head">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <h2 className="clr-light text-center">
                  {" "}
                  إيتشيكس على مر السنين{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-12">
              <div className="year-review">
                <div
                  onMouseOver={handleMouseOver}
                  className="year-review__column">
                  <div className="year-review__year"> 2010 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2010</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            فزنا بأول عميل لنا وحيد القرن{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            ارتفع عدد عملاء الاكتتاب العام لدينا إلى 10{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            يغوص إيتشيكس في مجال إنترنت الأشياء{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            نحن نتكاتف مع اتصال CTO{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 1000 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text--xlcenter clr-light">المطورين</p>
                    </div>
                  </div>
                </div>
                <div
                  onMouseOver={handleMouseOver}
                  className="year-review__column">
                  <div className="year-review__year"> 2011 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2011</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            فزنا بأول عميل لنا وحيد القرن{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            ارتفع عدد عملاء الاكتتاب العام لدينا إلى 10{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            يغوص إيتشيكس في مجال إنترنت الأشياء{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            نحن نتكاتف مع اتصال CTO{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 1080 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">المطورين</p>
                    </div>
                  </div>
                </div>
                <div
                  onMouseOver={handleMouseOver}
                  className="year-review__column">
                  <div className="year-review__year"> 2012 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2012</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            فزنا بأول عميل لنا وحيد القرن{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            ارتفع عدد عملاء الاكتتاب العام لدينا إلى 10{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            يغوص إيتشيكس في مجال إنترنت الأشياء{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            نحن نتكاتف مع اتصال CTO{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 1000 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">المطورين</p>
                    </div>
                  </div>
                </div>
                <div
                  onMouseOver={handleMouseOver}
                  className="year-review__column">
                  <div className="year-review__year"> 2013 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2013</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            فزنا بأول عميل لنا وحيد القرن{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            ارتفع عدد عملاء الاكتتاب العام لدينا إلى 10{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            يغوص إيتشيكس في مجال إنترنت الأشياء{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            نحن نتكاتف مع اتصال CTO{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 2100 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">المطورين</p>
                    </div>
                  </div>
                </div>
                <div
                  onMouseOver={handleMouseOver}
                  className="year-review__column">
                  <div className="year-review__year"> 2014 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2014</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            فزنا بأول عميل لنا وحيد القرن{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            ارتفع عدد عملاء الاكتتاب العام لدينا إلى 10{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            يغوص إيتشيكس في مجال إنترنت الأشياء{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            نحن نتكاتف مع اتصال CTO{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 2600 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">المطورين</p>
                    </div>
                  </div>
                </div>
                <div
                  onMouseOver={handleMouseOver}
                  className="year-review__column active">
                  <div className="year-review__year"> 2015 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2015</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            فزنا بأول عميل لنا وحيد القرن{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            ارتفع عدد عملاء الاكتتاب العام لدينا إلى 10{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            يغوص إيتشيكس في مجال إنترنت الأشياء{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            نحن نتكاتف مع اتصال CTO{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 2700 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">المطورين</p>
                    </div>
                  </div>
                </div>
                <div
                  onMouseOver={handleMouseOver}
                  className="year-review__column ">
                  <div className="year-review__year"> 2016 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2016</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            فزنا بأول عميل لنا وحيد القرن{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            ارتفع عدد عملاء الاكتتاب العام لدينا إلى 10{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            يغوص إيتشيكس في مجال إنترنت الأشياء{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            نحن نتكاتف مع اتصال CTO{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 2900 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">المطورين</p>
                    </div>
                  </div>
                </div>
                <div
                  onMouseOver={handleMouseOver}
                  className="year-review__column">
                  <div className="year-review__year"> 2017 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2017</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            فزنا بأول عميل لنا وحيد القرن{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            ارتفع عدد عملاء الاكتتاب العام لدينا إلى 10{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            يغوص إيتشيكس في مجال إنترنت الأشياء{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            نحن نتكاتف مع اتصال CTO{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 3100 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">المطورين</p>
                    </div>
                  </div>
                </div>
                <div
                  onMouseOver={handleMouseOver}
                  className="year-review__column">
                  <div className="year-review__year"> 2018 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2018</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            فزنا بأول عميل لنا وحيد القرن{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            ارتفع عدد عملاء الاكتتاب العام لدينا إلى 10{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            يغوص إيتشيكس في مجال إنترنت الأشياء{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            نحن نتكاتف مع اتصال CTO{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 3300 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">المطورين</p>
                    </div>
                  </div>
                </div>
                <div
                  onMouseOver={handleMouseOver}
                  className="year-review__column">
                  <div className="year-review__year"> 2019 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2019</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            فزنا بأول عميل لنا وحيد القرن{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            ارتفع عدد عملاء الاكتتاب العام لدينا إلى 10{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            يغوص إيتشيكس في مجال إنترنت الأشياء{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            نحن نتكاتف مع اتصال CTO{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 3500 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">المطورين</p>
                    </div>
                  </div>
                </div>
                <div
                  onMouseOver={handleMouseOver}
                  className="year-review__column">
                  <div className="year-review__year"> 2020 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2020</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            فزنا بأول عميل لنا وحيد القرن{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            ارتفع عدد عملاء الاكتتاب العام لدينا إلى 10{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            يغوص إيتشيكس في مجال إنترنت الأشياء{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            نحن نتكاتف مع اتصال CTO{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 3800 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">المطورين</p>
                    </div>
                  </div>
                </div>
                <div
                  onMouseOver={handleMouseOver}
                  className="year-review__column">
                  <div className="year-review__year"> 2021 </div>
                  <div className="year-review__content">
                    <div className="year-review__content-body">
                      <h2 className="text-xl-center clr-light mb-8">2021</h2>
                      <ul className="list list-xs list-disc list-disc--light">
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            فزنا بأول عميل لنا وحيد القرن{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            ارتفع عدد عملاء الاكتتاب العام لدينا إلى 10{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            يغوص إيتشيكس في مجال إنترنت الأشياء{" "}
                          </span>
                        </li>
                        <li className="align-items-center">
                          <span className="d-block clr-light">
                            {" "}
                            نحن نتكاتف مع اتصال CTO{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="year-review__content-footer mt-8 mt-xl-12">
                      <h4 className="text-xl-center clr-light"> 4050 </h4>
                      <hr className="year-review__seperator" />
                      <p className="text-xl-center clr-light">المطورين</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Numbers  --> */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section__gap-bottom pb-lg-0 position-sticky top-0">
                <span className="d-block h5 lh-1 fw-semibold clr-base">
                  {" "}
                  كبار المهندسين كرّسوا نجاحكم{" "}
                </span>
                <h2 className="mt-2 mb-4">
                  {" "}
                  الأرقام تتحدث بصوت أعلى من الكلمات{" "}
                </h2>
                <p className="t-short-para">
                  {" "}
                  تقدم إيتشيكس مجموعة متنوعة من السلع والخدمات المتعلقة
                  بتكنولوجيا المعلومات ، مثل مثل تطوير الويب وخدمات التسويق
                  الرقمي وتطوير تطبيقات الأجهزة المحمولة.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-sm-6">
                  <div className="py-4 border-top">
                    <p className="mb-2 clr-heading md-text"> المطورين: </p>
                    <h1 className="fw-normal clr-base"> 3.5k </h1>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="py-4 border-top">
                    <p className="mb-2 clr-heading md-text">
                      {" "}
                      مهندسين رفيعي المستوى:{" "}
                    </p>
                    <h1 className="fw-normal clr-base"> 70% </h1>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="py-4 border-top">
                    <p className="mb-2 clr-heading md-text">
                      {" "}
                      خدم العملاء حتى الآن:{" "}
                    </p>
                    <h1 className="fw-normal clr-base"> 500+ </h1>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="py-4 border-top">
                    <p className="mb-2 clr-heading md-text">
                      {" "}
                      سنوات في الأعمال:{" "}
                    </p>
                    <h1 className="fw-normal clr-base"> 20 </h1>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="py-4 border-top">
                    <p className="mb-2 clr-heading md-text">
                      {" "}
                      العملاء عن طريق الإحالة:{" "}
                    </p>
                    <h1 className="fw-normal clr-base"> 70% </h1>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="py-4 border-top">
                    <p className="mb-2 clr-heading md-text">
                      {" "}
                      متوسط ​​المشاركة:{" "}
                    </p>
                    <h1 className="fw-normal clr-base"> 36 </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Work Process --> */}
      <div className="section bg-base-800">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-7">
                <span className="d-block h5 lh-1 fw-semibold clr-accent text-center">
                  {" "}
                  عمليتنا{" "}
                </span>
                <h2 className="mt-5 mb-5 text-center clr-light"> كيف تعمل </h2>
                <p className="text-center max-text-50 mx-auto clr-light">
                  {" "}
                  تعني رحلتنا التعاونية للغاية أنك تستفيد من التبني الأسرع و
                  تسريع الوصول إلى السوق.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="list gap-12 list-row flex-wrap work-step-card">
                <li>
                  <div className="work-step-card__content">
                    <h5 className="clr-accent mb-5"> اكتشاف </h5>
                    <p className="clr-light mb-8">
                      {" "}
                      بمجرد أن نسمع المزيد عن أهدافك وجدولك الزمني ، سنبدأ في
                      تجميع فريق التطوير.{" "}
                    </p>
                    <h2 className="clr-accent mt-auto"> 01 </h2>
                  </div>
                </li>
                <li>
                  <div className="work-step-card__content">
                    <h5 className="clr-accent mb-5"> التوظيف </h5>
                    <p className="clr-light mb-8">
                      {" "}
                      سنرسل لك مرشحين ذوي جودة عالية تم فرزهم مسبقًا للنظر فيهم
                      ، مما يضمن أ مناسب تمامًا لشركتك{" "}
                    </p>
                    <h2 className="clr-accent mt-auto"> 02 </h2>
                  </div>
                </li>
                <li>
                  <div className="work-step-card__content">
                    <h5 className="clr-accent mb-5"> انطلاق </h5>
                    <p className="clr-light mb-8">
                      {" "}
                      سيبذل فريق التطوير الجديد الخاص بك الكثير من الجهد الإضافي
                      من أجل ذلك تحقيق رؤية المنتج الخاص بك.{" "}
                    </p>
                    <h2 className="clr-accent mt-auto"> 03 </h2>
                  </div>
                </li>
                <li>
                  <div className="work-step-card__content">
                    <h5 className="clr-accent mb-5"> تكثيف </h5>
                    <p className="clr-light mb-8">
                      {" "}
                      بعد الإصدار ، سنزيد عدد موظفيك بسرعة وفعالية لمطابقة نجاح
                      منتجك.{" "}
                    </p>
                    <h2 className="clr-accent mt-auto"> 04 </h2>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Core Operation  --> */}
      <div className="section core-operation-section">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7">
                <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
                  {" "}
                  المبادئ التشغيلية الأساسية{" "}
                </span>
                <h2 className="mt-5 mb-5 text-center">
                  {" "}
                  القيم التي تحرك كل ما نقوم به{" "}
                </h2>
                <p className="text-center max-text-60 mx-auto">
                  {" "}
                  دليل القيم ، الإجراءات تنتج. موظفينا ومستهلكينا مسؤولون. لدينا
                  كود يوضح السلوك شركتنا.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <ul className="list gap-8">
                <li>
                  <div className="border rounded-4 p-6 p-md-10 p-lg-6 p-xl-10 d-flex flex-column flex-sm-row gap-6 bg--white">
                    <div className="icon-box icon-box--lg circle bg-base flex-shrink-0">
                      <h4 className="clr-light"> 01 </h4>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="mb-5">
                        {" "}
                        نحترم الالتزامات ونركز على النتائج:{" "}
                      </h5>
                      <p>
                        {" "}
                        الجودة تأتي أولاً. ننصح عملائنا بشكل استباقي حول كيفية
                        تحقيق أقصى استفادة القيمة من استثماراتهم التقنية
                        والالتزام بالمشاريع التي يمكننا تقديمها بالكامل على.{" "}
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="border rounded-4 p-6 p-md-10 p-lg-6 p-xl-10 d-flex flex-column flex-sm-row gap-6 bg--white">
                    <div className="icon-box icon-box--lg circle bg-base flex-shrink-0">
                      <h4 className="clr-light"> 02 </h4>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="mb-5">
                        {" "}
                        نقدم نماذج خدمة مرنة وقابلة للتكديس:{" "}
                      </h5>
                      <p>
                        {" "}
                        تمنحك نماذج الخدمة الشفافة المرونة. يمكننا التبديل بين
                        كوننا مستشار عند الطلب لمتجر واحد لجميع احتياجاتك
                        الهندسية.{" "}
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="border rounded-4 p-6 p-md-10 p-lg-6 p-xl-10 d-flex flex-column flex-sm-row gap-6 bg--white">
                    <div className="icon-box icon-box--lg circle bg-base flex-shrink-0">
                      <h4 className="clr-light"> 03 </h4>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="mb-5">
                        {" "}
                        نحن في طريقنا لتحقيق النجاح على المدى الطويل:{" "}
                      </h5>
                      <p>
                        {" "}
                        الإبداع المشترك هو طريقتنا في ممارسة الأعمال التجارية.
                        ستدعم فرقنا بشكل استباقي عملك في جميع مراحل دورة حياة
                        تطوير البرمجيات (وما بعدها).{" "}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default facts_1;
