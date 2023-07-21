import Navbar from "@/components/Navbar";
import Footer from "@/components/home_4/Footer";
import Link from "next/link";
import { useEffect } from 'react';
const blogData = [
  {
    id: 1,
    title: 'Roadmap to becoming a Front-end Developer in 2023',
    tag: 'Web Development',
    date: 'May 22, 2023',
    blog: 'Rutrum consequat ultricies leo eu volutpat neque volutpat iaculis dignissim.',
    img: '/images/blog-post-9.png'
  },
  {
    id: 2,
    title: 'What types of healthcare software should you know?',
    tag: 'Healthcare',
    date: 'May 22, 2023',
    blog: 'Rutrum consequat ultricies leo eu volutpat neque volutpat iaculis dignissim.',
    img: '/images/blog-post-10.png'
  },
  {
    id: 3,
    title: 'Flutter Wrocław Meetup x itechex vol. 3 – Event Recap',
    tag: 'People',
    date: 'May 22, 2023',
    blog: 'Rutrum consequat ultricies leo eu volutpat neque volutpat iaculis dignissim.',
    img: '/images/blog-post-11.png'
  },
  {
    id: 4,
    title: 'Impact of Machine Learning on the HealthTech industry',
    tag: 'Healthtech',
    date: 'May 22, 2023',
    blog: 'Rutrum consequat ultricies leo eu volutpat neque volutpat iaculis dignissim.',
    img: '/images/blog-post-12.png'
  },
  {
    id: 5,
    title: 'Impact of Machine Learning on the HealthTech industry',
    tag: 'Healthtech',
    date: 'May 22, 2023',
    blog: 'Rutrum consequat ultricies leo eu volutpat neque volutpat iaculis dignissim.',
    img: '/images/blog-post-13.png'
  },
  {
    id: 6,
    title: 'How to maximize product trust in the design process?',
    tag: 'Product Design',
    date: 'May 22, 2023',
    blog: 'Rutrum consequat ultricies leo eu volutpat neque volutpat iaculis dignissim.',
    img: '/images/blog-post-14.png'
  },
]
const BlogPosts = () => {
  return (
    <>
      {
        blogData.map(({ id, title, blog, date, img, tag }) => (
          <div key={id} className="col-md-6 col-lg-4">
            <div className="blog-post-1">
              <Link
                href="blog-details-1"
                className="blog-post-1__link">
                <img
                  src={img}
                  alt="image"
                  className="blog-post-1__img"
                />
              </Link>
              <div className="blog-post-1__body">
                <ul className="list list-row list--divider">
                  <li>
                    <Link
                      href="blog-details-1"
                      className="t-link d-inline-block clr-base :clr-base fw-md">{tag}</Link>
                  </li>
                  <li>
                    <div className="group group-xs group-row align-items-center">
                      <span className="material-symbols-rounded mat-icon solid flex-shrink-0 clr-base">
                        {" "}
                        alarm{" "}
                      </span>
                      <span className="d-inline-block">{date}</span>
                    </div>
                  </li>
                </ul>
                <h5 className="mt-5 mb-5">
                  <Link
                    href="blog-details-1"
                    className="t-link clr-heading :clr-base d-block">{title}</Link>
                </h5>
                <p className="mb-5">{blog} </p>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}
const blog_1 = () => {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
  }, []);
  return (
    <>
      {/* Navbar */}
      <Navbar rtlurl="/rtl/blog-page-1" />
      {/* Banner Section */}
      <section className="banner-section section--sm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="clr-light mb-3"> Blog Page - 01 </h3>
              <ul className="list list-row flex-wrap breadcrumb-list">
                <li>
                  <Link
                    href="/"
                    className="d-inline-block t-link clr-light :clr-accent">
                    {" "}
                    Home{" "}
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="#"
                    className="d-inline-block t-link clr-light :clr-accent">
                    {" "}
                    Blog Page - 01{" "}
                  </Link>
                </li>
                <li className="d-none">
                  <Link
                    href="#"
                    className="d-inline-block t-link clr-light :clr-accent"></Link>
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
      {/* <!-- Blog Section --> */}
      <div className="section">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-8 col-xl-7">
                <div className="text-center">
                  <span className="d-inline-block h5 lh-1 fw-semibold clr-base">
                    {" "}
                    Browse our articles & resources{" "}
                  </span>
                  <h2 className="mt-3 mb-3">
                    {" "}
                    Take a look at our latest articles and resources{" "}
                  </h2>
                  <p className="mx-auto text-center">
                    {" "}
                    Have a look at the most recent articles and resources that
                    we have.{" "}
                  </p>
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
                  <img
                    src="/images/blog-post-4.png"
                    alt="image"
                    className="blog-post-1__img"
                  />
                </Link>
                <div className="blog-post-1__body">
                  <ul className="list list-row list--divider">
                    <li>
                      <Link
                        href="blog-details-1"
                        className="t-link d-inline-block clr-base :clr-base fw-md">
                        {" "}
                        Development{" "}
                      </Link>
                    </li>
                    <li>
                      <div className="group group-xs group-row align-items-center">
                        <span className="material-symbols-rounded mat-icon solid flex-shrink-0 d-none d-sm-block">
                          {" "}
                          alarm{" "}
                        </span>
                        <span className="d-inline-block"> May 22, 2023 </span>
                      </div>
                    </li>
                  </ul>
                  <h4 className="mt-5 mb-5">
                    <Link
                      href="blog-details-1"
                      className="t-link d-block clr-heading :clr-base">
                      {" "}
                      The Most Significant Advances in Technology That We've
                      Seen So Far This Year{" "}
                    </Link>
                  </h4>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                    sed aliquam velit odio est nisi. Elit integer amet diam,
                    augue sit.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="list list-md">
                <li>
                  <div className="blog-post-2">
                    <Link href="blog-details-1" className="blog-post-2__link">
                      <img
                        src="/images/blog-post-5.png"
                        alt="image"
                        className="blog-post-2__img"
                      />
                    </Link>
                    <div className="blog-post-2__content">
                      <ul className="list list-row list--divider">
                        <li>
                          <Link
                            href="blog-details-1"
                            className="t-link d-inline-block clr-base :clr-base fw-md">
                            {" "}
                            Artifical Intelligence{" "}
                          </Link>
                        </li>
                        <li>
                          <div className="group group-xs group-row align-items-center">
                            <span className="material-symbols-rounded mat-icon solid flex-shrink-0">
                              {" "}
                              alarm{" "}
                            </span>
                            <span className="d-inline-block">
                              {" "}
                              May 22, 2023{" "}
                            </span>
                          </div>
                        </li>
                      </ul>
                      <h5 className="mt-3">
                        <Link
                          href="blog-details-1"
                          className="t-link d-block clr-heading :clr-base">
                          {" "}
                          Why We Love Technology—And You Should, Too!{" "}
                        </Link>
                      </h5>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="blog-post-2">
                    <Link href="blog-details-1" className="blog-post-2__link">
                      <img
                        src="/images/blog-post-6.png"
                        alt="image"
                        className="blog-post-2__img"
                      />
                    </Link>
                    <div className="blog-post-2__content">
                      <ul className="list list-row list--divider">
                        <li>
                          <Link
                            href="blog-details-1"
                            className="t-link d-inline-block clr-base :clr-base fw-md">
                            {" "}
                            Web Design{" "}
                          </Link>
                        </li>
                        <li>
                          <div className="group group-xs group-row align-items-center">
                            <span className="material-symbols-rounded mat-icon solid flex-shrink-0">
                              {" "}
                              alarm{" "}
                            </span>
                            <span className="d-inline-block">
                              {" "}
                              May 22, 2023{" "}
                            </span>
                          </div>
                        </li>
                      </ul>
                      <h5 className="mt-3">
                        <Link
                          href="blog-details-1"
                          className="t-link d-block clr-heading :clr-base">
                          {" "}
                          There are often 17 misconceptions about technology.{" "}
                        </Link>
                      </h5>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="blog-post-2">
                    <Link href="blog-details-1" className="blog-post-2__link">
                      <img
                        src="/images/blog-post-7.png"
                        alt="image"
                        className="blog-post-2__img"
                      />
                    </Link>
                    <div className="blog-post-2__content">
                      <ul className="list list-row list--divider">
                        <li>
                          <Link
                            href="blog-details-1"
                            className="t-link d-inline-block clr-base :clr-base fw-md">
                            {" "}
                            App Design{" "}
                          </Link>
                        </li>
                        <li>
                          <div className="group group-xs group-row align-items-center">
                            <span className="material-symbols-rounded mat-icon solid flex-shrink-0">
                              {" "}
                              alarm{" "}
                            </span>
                            <span className="d-inline-block">
                              {" "}
                              May 22, 2023{" "}
                            </span>
                          </div>
                        </li>
                      </ul>
                      <h5 className="mt-3">
                        <Link
                          href="blog-details-1"
                          className="t-link d-block clr-heading :clr-base">
                          {" "}
                          Make Your Company Better With Web Services Solutions{" "}
                        </Link>
                      </h5>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="blog-post-2">
                    <Link href="blog-details-1" className="blog-post-2__link">
                      <img
                        src="/images/blog-post-8.png"
                        alt="image"
                        className="blog-post-2__img"
                      />
                    </Link>
                    <div className="blog-post-2__content">
                      <ul className="list list-row list--divider">
                        <li>
                          <Link
                            href="blog-details-1"
                            className="t-link d-inline-block clr-base :clr-base fw-md">
                            {" "}
                            Development{" "}
                          </Link>
                        </li>
                        <li>
                          <div className="group group-xs group-row align-items-center">
                            <span className="material-symbols-rounded mat-icon solid flex-shrink-0">
                              {" "}
                              alarm{" "}
                            </span>
                            <span className="d-inline-block">
                              {" "}
                              May 22, 2023{" "}
                            </span>
                          </div>
                        </li>
                      </ul>
                      <h5 className="mt-3">
                        <Link
                          href="blog-details-1"
                          className="t-link d-block clr-heading :clr-base">
                          {" "}
                          A Look at the Impact of Wireless Technology on
                          Enterprise{" "}
                        </Link>
                      </h5>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Help Category --> */}
      <div className="section bg-neutral-100">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="group group-row flex-wrap gap-5 justify-content-between align-items-center">
                  <h2 className="flex-grow-1"> Blog Categories </h2>
                  <Link
                    href="blog-page-1"
                    className="bttn bttn--base-outline bttn-md bttn-pill gap-2 fw-md flex-shrink-0 align-items-center">
                    {" "}
                    All Articles{" "}
                    <span className="material-symbols-rounded mat-icon size-16 fw-400 bttn__icon-base d-flex align-items-center">
                      {" "}
                      arrow_forward{" "}
                    </span>
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
                <img
                  src="/images/icon-75.png"
                  alt="image"
                  className="img-fluid"
                />
                <h5 className="mt-8 mb-5"> Design Articles </h5>
                <p>
                  {" "}
                  Feugiat ultrices penatibus commodo dui. Ullamcorper aliquet
                  aliquam et risus.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="help-card text-center">
                <img
                  src="/images/icon-76.png"
                  alt="image"
                  className="img-fluid"
                />
                <h5 className="mt-8 mb-5"> Development Articles </h5>
                <p>
                  {" "}
                  Feugiat ultrices penatibus commodo dui. Ullamcorper aliquet
                  aliquam et risus.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="help-card text-center">
                <img
                  src="/images/icon-77.png"
                  alt="image"
                  className="img-fluid"
                />
                <h5 className="mt-8 mb-5"> Marketing Articles </h5>
                <p>
                  {" "}
                  Feugiat ultrices penatibus commodo dui. Ullamcorper aliquet
                  aliquam et risus.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Latest Post --> */}
      <div className="section">
        <div className="section__gap-bottom">
          <div className="container-xl">
            <div className="row g-4 align-items-lg-end">
              <div className="col-lg-5">
                <h2> Latest Posts </h2>
              </div>
              <div className="col-lg-7">
                <ul className="list list-row flex-wrap justify-content-lg-end list--divider list-group">
                  <li>
                    <Link
                      className="tab-button active"
                      href="#all-post"
                      data-bs-toggle="list">
                      {" "}
                      All{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="tab-button"
                      href="#design-post"
                      data-bs-toggle="list">
                      {" "}
                      Design{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="tab-button"
                      href="#development-post"
                      data-bs-toggle="list">
                      {" "}
                      Development{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="tab-button"
                      href="#marketing-post"
                      data-bs-toggle="list">
                      {" "}
                      Marketing{" "}
                    </Link>
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
                    <BlogPosts />
                  </div>
                </div>
                <div className="tab-pane fade" id="design-post">
                  <div className="row g-6">
                    <BlogPosts />
                  </div>
                </div>
                <div className="tab-pane fade" id="development-post">
                  <div className="row g-6">
                    <BlogPosts />
                  </div>
                </div>
                <div className="tab-pane fade" id="marketing-post">
                  <div className="row g-6">
                    <BlogPosts />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- CTA  --> */}
      <div className="section pt-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="cta-banner bg-base rounded-5">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="section__gap-bottom pb-md-0">
                      <h3 className="clr-light mb-6">
                        {" "}
                        Subscribe to our weekly email newsletter{" "}
                      </h3>
                      <p className="clr-light mb-6">
                        {" "}
                        Need more information? Subscribe to Newsletter & Get
                        Update and News{" "}
                      </p>
                      <div className="newsletter-2 newsletter-2--light max-text-50">
                        <input
                          type="text"
                          className="newsletter-2__input"
                          placeholder="Enter your email"
                        />
                        <button className="bttn bttn--light bttn-md fw-md flex-shrink-0 rounded-1 newsletter-2__btn">
                          {" "}
                          subscribe{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="text-center">
                      <img
                        src="/images/cta-img-2.png"
                        alt="image"
                        className="img-fluid mx-auto"
                      />
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
