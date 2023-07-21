import Navbar from "@/components/rtl/Navbar";
import Footer from "@/components/rtl/home_4/Footer";
import Link from "next/link";
import { useEffect } from "react";

const terms_condition = () => {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "rtl");
  }, []);
  return (
    <>
      {/* Navbar Section */}
      <Navbar ltrurl="/terms-condition" />
      {/* Banner section */}
      <section className="banner-section section--sm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="clr-light mb-3"> البنود و الظروف </h3>
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
                    البنود و الظروف{" "}
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
      {/* <!-- Terms & Condition --> */}
      <div className="section">
        <div className="container">
          <div className="row g-6 justify-content-md-between">
            <div className="col-md-5 col-lg-4 col-xl-3">
              <aside className="terms-sidebar position-sticky top-60">
                <nav className="terms-sidebar__nav">
                  <ul className="list list-group" id="list-example">
                    <li>
                      <Link
                        href="#terms"
                        className="terms-sidebar__link t-link px-3 py-2 rounded-pill text-center d-flex justify-content-center active">
                        {" "}
                        الشروط والأحكام{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#privacy"
                        className="terms-sidebar__link t-link px-3 py-2 rounded-pill text-center d-flex justify-content-center">
                        {" "}
                        سياسة الخصوصية{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#user"
                        className="terms-sidebar__link t-link px-3 py-2 rounded-pill text-center d-flex justify-content-center">
                        {" "}
                        سياسة المستخدم{" "}
                      </Link>
                    </li>
                  </ul>
                </nav>
              </aside>
            </div>
            <div className="col-md-7 col-xl-8"  data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" tabIndex={0}>
              <h3 className="mb-5" id="terms"> الأحكام والشروط </h3>
              <p className="mb-10">
                {" "}
                من المهم الاعتناء بالمريض ، على أن يتابعه الطبيب ، ولكن هذا وقت
                ألم ومعاناة شديدة. الكتلة ولكن العنصر يتطلب وقتا ولكن ثمن الضحك.
                لا يوجد وقت سهل لاستهداف المرض. وتوقع الجوع و فقر. لكن الدهليز
                السرير ماتيس لا يريد سوى المرض الجسدي.{" "}
              </p>
              <h4 className="mb-5"> شروط الاستخدام لخدمات إيتشيكس </h4>
              <p className="mb-10">
                {" "}
                يريد لكن جسد المرض يحتاج لتزيين الكتلة. إنه لمن دواعي سروري أن
                الله يريد لتزيينها بقوس. إنه سهل ولكن من المستفيد من المرض؟ حياة
                الرماة لوسائل الإعلام . الآن الرسوم المتحركة الشوكولاته قيد
                التشغيل. الحياة مكان رائع بوروس في كتلة الوقت ولا فيوجيات nisl
                سعر ذلك البني. لكنه الآن يريد أن يصبح عضوا. اشرب في الكازينو أو
                الجعبة. كتلة كتلة من . لتزيين العنصر البرونزي من ، إذا كان أي
                شخص هو . من أجل مراقبة سعر الشاشة ، لا توجد قوة وتم تعليق
                الشاشة. إنه ملائم ، لكن من الضروري أن يكون لديك ذوق جيد.{" "}
              </p>
              <h3 className="mb-5" id="privacy"> سياسة الخصوصية </h3>
              <p className="mb-5">
                {" "}
                لأنه ليست هناك حاجة للملكية الآن. تسريحات الشعر فولبوتيت كرة
                القدم الشوكولاته وصفة للخميرة أو الخميرة. لكن بالنسبة للحرية ،
                فإن الطعم قبيح. لكن قاع جرة وديان. لكن . لدينا وسادة للغد ولكن
                الآن.{" "}
              </p>
              <ul className="list list-disc list-disc--dark mb-10">
                <li>
                  <p> ومع ذلك ، يحتاج القط غدًا إلى شاحنات. من يكره المرض؟ </p>
                </li>
                <li>
                  <p>
                    {" "}
                    الجعبة أو المطرقة الثقيلة تحتاج الآن إلى مساعدة الألم. يا له
                    من بطل{" "}
                  </p>
                </li>
                <li>
                  <p> إنتاج سي إن إن هو برنامج تلفزيوني </p>
                </li>
              </ul>
              <h4 className="mb-5" id="user"> ملفات تعريف الارتباط والتتبع </h4>
              <p className="mb-10">
                {" "}
                لنقم بالواجب الآن. الخوف من بعض مي eleifent بأي حال من الأحوال.
                دعونا نعيش بكرامة غدا . كان هناك بعض الإطراء أيضًا. رجل حكيم
                وموظف. ل تزيين العنصر البرونزي من ، إذا كان أي شخص هو من الحياة
                الشحمية. الذي - التي بالطبع تخلص من مخاوف المراهقين.{" "}
              </p>
              <h3 className="mb-5"> سياسة المستخدم </h3>
              <p className="mb-10">
                {" "}
                هذا بالطبع وضع بعض مخاوف المراهقين في مأزق. يحب أن يكون سهلًا
                حتى في الأوقات الرائعة. لكن كتلة الأطفال تستثمر في بحيرتين.
                يتوقع أن تشرب السهام قوس الحياة عنصر من عناصر الحياة سيتم
                الاعتناء به الآن. حتى الآن حلقي مليء بالحياة وليس جثة. في بعض
                الأحيان يكون الأمر مجرد مسألة وقت. يتوقع بعض الناس أن يشربوا قوس
                قزح في الحياة. أنا أحتاج إلى رجل حكيم ، لكني حر. لكنها كانت ميزة
                تعليم الشعب ، و يعيش الناس في العالم ، لكن الإعلان يحتاج إلى قوس
                الكازينو.{" "}
              </p>
              <h4 className="mb-5"> مسؤوليات المستخدم </h4>
              <p className="mb-10">
                {" "}
                قال فاروس: "دعونا نعيش بشكل جيد ، لكننا نحتاج إلى القوس". لقد
                تعبت من الحياة الآن ولكني أريد أن أكون كذلك كريمة. يجب أن تطارد
                القطة بالسهام. من المهم متابعة تعليم الناس الذين يعيشون في
                المرض. السيرة الذاتية لمصحف موريس أدق التفاصيل ليو كامل الذكور.
                هذه هي الشاحنة التي كانت تستخدم للصلصة. كارتون الألم نفسه الآن.{" "}
              </p>
              <ul className="list list-disc list-disc--dark">
                <li>
                  <p> ومع ذلك ، يحتاج القط غدًا إلى شاحنات. من يكره المرض؟ </p>
                </li>
                <li>
                  <p>
                    {" "}
                    الجعبة أو المطرقة الثقيلة تحتاج الآن إلى مساعدة الألم. يا له
                    من بطل{" "}
                  </p>
                </li>
                <li>
                  <p> إنتاج سي إن إن هو برنامج تلفزيوني </p>
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

export default terms_condition;
