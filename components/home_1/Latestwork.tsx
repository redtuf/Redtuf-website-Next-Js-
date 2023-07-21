import Link from "next/link";
import {useState} from 'react';
const webDesign = [
  {
    id: 1,
    img: "/images/case-img-1.png",
  },
  {
    id: 2,
    img: "/images/case-img-2.png",
  },
  {
    id: 3,
    img: "/images/case-img-3.png",
  },
  {
    id: 4,
    img: "/images/case-img-4.png",
  },
];
const technology = [
  {
    id: 1,
    img: "/images/case-img-4.png",
  },
  {
    id: 2,
    img: "/images/case-img-2.png",
  },
  {
    id: 3,
    img: "/images/case-img-1.png",
  },
  {
    id: 4,
    img: "/images/case-img-3.png",
  },
];
const cyber = [
  {
    id: 1,
    img: "/images/case-img-3.png",
  },
  {
    id: 2,
    img: "/images/case-img-1.png",
  },
  {
    id: 3,
    img: "/images/case-img-4.png",
  },
  {
    id: 4,
    img: "/images/case-img-2.png",
  },
];
const software = [
  {
    id: 1,
    img: "/images/case-img-2.png",
  },
  {
    id: 2,
    img: "/images/case-img-1.png",
  },
  {
    id: 3,
    img: "/images/case-img-4.png",
  },
  {
    id: 4,
    img: "/images/case-img-3.png",
  },
];

const TabContent = ({ data }) => {
  return (
    <div className="row g-4">
      {data.map(({id,img}) => (
        <div key={id} className="col-sm-6 col-lg-3">
          <div className="case-studies-1">
            <Link href="case-study-details-1" className="case-studies-1__link">
              <img
                src={img}
                alt="image"
                className="case-studies-1__img"
              />
            </Link>
            <div className="case-studies-1__content">
              <div className="group group-xxs flex-grow-1">
                <h5>
                  <Link
                    href="case-study-details-1"
                    className="t-link clr-heading :clr-base">
                    {" "}
                    UI/UX Strategy{" "}
                  </Link>
                </h5>
                <span className="d-block"> IT Consulting </span>
              </div>
              <Link
                href="case-study-details-1"
                className="t-link icon-box icon-box--md circle bg-base :bg-accent clr-light :clr-heading flex-shrink-0">
                <span className="material-symbols-rounded mat-icon fw-100">
                  {" "}
                  east{" "}
                </span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Latestwork = () => {
  const [checked, setChecked] = useState(true)
  
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="section--sm bg--white">
      {/*  Latest Work Section  */}
      <div className="section--sm">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row g-4 align-items-lg-end">
              <div className="col-lg-4 col-xl-5">
                <span className="d-block h5 lh-1 fw-semibold clr-base">
                  {" "}
                  Our Latest Works For Your Business{" "}
                </span>
                <h2> Latest Case Studies </h2>
              </div>
              <div className="col-lg-8 col-xl-7">
                <ul className="list list-row flex-wrap justify-content-lg-end list--divider list-group">
                  <li>
                    <Link
                      className="tab-button active"
                      id="list-home-list"
                      data-bs-toggle="list"
                      href="#web-design">
                      {" "}
                      Web Design{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="tab-button"
                      id="list-profile-list"
                      data-bs-toggle="list"
                      href="#technology">
                      {" "}
                      Technology{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="tab-button"
                      id="list-messages-list"
                      data-bs-toggle="list"
                      href="#cyber">
                      {" "}
                      Cyber{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="tab-button"
                      id="list-settings-list"
                      data-bs-toggle="list"
                      href="#software">
                      {" "}
                      Software{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid container-restricted">
          <div className="row">
            <div className="col-12">
              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="web-design">
                  <TabContent data={webDesign} />                  
                </div>
                <div className="tab-pane fade" id="technology">
                 <TabContent data={technology} />
                </div>
                <div className="tab-pane fade" id="cyber">
                 <TabContent data={cyber} />
                </div>
                <div className="tab-pane fade" id="software">
                 <TabContent data={software} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Latest Work Section End -->
      <!-- Pricing Section  --> */}
      <div className="section--sm">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-8">
                <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
                  {" "}
                  Awesome Pricing Plan{" "}
                </span>
                <h2 className="mt-5 mb-5 text-center">
                  {" "}
                  We Provide an Smart Pricing Package For IT Solutions{" "}
                </h2>
                <p className="mx-auto text-center t-short-para">
                  {" "}
                  Our team strives to assist our clients retain or acquire
                  best-in-class positions in their respective sectors.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-12">
              <div className="group group-xs group-row align-items-center justify-content-center">
                <span className="clr-heading d-inline-block"> Monthly </span>
                <label className="checkbox">
                  <input
                    id="input"
                    type="checkbox"  
                    checked={checked}              
                    className="checkbox__input"
                    onChange={handleCheckboxChange}
                  />
                </label>
                <span className="clr-heading d-inline-block">
                  {" "}
                  Yearly <span className="xsm-text clr-base">Save 20%</span>
                </span>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="price-card-1">
                <div className="price-card-1__head">
                  <div className="price-card-1__head-icon base">
                    <img
                      src="/images/icon-12.png"
                      alt="image"
                      className="price-card-1__head-icon-is"
                    />
                  </div>
                  <div className="group group-0 align-items-center">
                    <span className="display-block h6 text-center clr-heading">
                      Starter Plan
                    </span>
                    <span className="display-block h4 text-center clr-base m-0">
                      {checked?'$300':'$30'}
                    </span>
                  </div>
                  <p className="text-center">
                    {" "}
                    We design solutions that reduce obstacles{" "}
                  </p>
                </div>
                <div className="price-card-1__body">
                  <h6 className="mb-5">What’s included</h6>
                  <ul className="list list-0 list--check check-base bordered-bottom">
                    <li className="align-items-center">
                      <span className="d-block clr-heading">
                        {" "}
                        Support at $25/hour{" "}
                      </span>
                    </li>
                    <li className="align-items-center">
                      <span className="d-block clr-heading">
                        {" "}
                        Product Engineering{" "}
                      </span>
                    </li>
                    <li className="align-items-center">
                      <span className="d-block clr-heading">
                        {" "}
                        It Consulting{" "}
                      </span>
                    </li>
                    <li className="align-items-center">
                      <span className="d-block clr-heading">
                        {" "}
                        Free Fixes & Update{" "}
                      </span>
                    </li>
                    <li className="align-items-center">
                      <span className="d-block clr-heading">
                        {" "}
                        Digital Solutions{" "}
                      </span>
                    </li>
                    <li className="align-items-center">
                      <span className="d-block clr-heading">
                        {" "}
                        24/7 system monitoring{" "}
                      </span>
                    </li>
                    <li className="align-items-center">
                      <span className="d-block clr-heading">
                        {" "}
                        Remote support{" "}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="price-card-1__footer text-center">
                  <Link
                    href="pricing-plan-1"
                    className="bttn bttn--base bttn-md bttn-pill fw-md flex-shrink-0">
                    {" "}
                    Get Started{" "}
                    <span className="material-symbols-rounded mat-icon fw-100 bttn__icon">
                      {" "}
                      trending_flat{" "}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="order-md-3 order-lg-2 col-lg-4">
              <div className="price-card-1 popular">
                <span className="popular__label">
                  <span className="popular__label-text"> Popular Choice </span>
                </span>
                <div className="price-card-1__head">
                  <div className="price-card-1__head-icon light">
                    <img
                      src="/images/icon-13.png"
                      alt="image"
                      className="price-card-1__head-icon-is"
                    />
                  </div>
                  <div className="group group-0 align-items-center">
                    <span className="display-block h6 text-center clr-light">
                      Regular Plan
                    </span>
                    <span className="display-block h4 text-center clr-accent m-0">
                    {checked?'$450':'$40'}
                    </span>
                  </div>
                  <p className="text-center clr-light">
                    {" "}
                    We design solutions that reduce obstacles{" "}
                  </p>
                </div>
                <div className="price-card-1__body">
                  <h6 className="mb-5 clr-light">What’s included</h6>
                  <ul className="list list-0 list--check check-accent bordered-bottom">
                    <li className="align-items-center">
                      <span className="d-block clr-light">
                        {" "}
                        Support at $25/hour{" "}
                      </span>
                    </li>
                    <li className="align-items-center">
                      <span className="d-block clr-light">
                        {" "}
                        Product Engineering{" "}
                      </span>
                    </li>
                    <li className="align-items-center">
                      <span className="d-block clr-light"> It Consulting </span>
                    </li>
                    <li className="align-items-center">
                      <span className="d-block clr-light">
                        {" "}
                        Free Fixes & Update{" "}
                      </span>
                    </li>
                    <li className="align-items-center">
                      <span className="d-block clr-light">
                        {" "}
                        Digital Solutions{" "}
                      </span>
                    </li>
                    <li className="align-items-center">
                      <span className="d-block clr-light">
                        {" "}
                        24/7 system monitoring{" "}
                      </span>
                    </li>
                    <li className="align-items-center">
                      <span className="d-block clr-light">
                        {" "}
                        Remote support{" "}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="price-card-1__footer text-center">
                  <Link
                    href="pricing-plan-1"
                    className="bttn bttn--light bttn-md bttn-pill fw-md flex-shrink-0">
                    {" "}
                    Get Started{" "}
                    <span className="material-symbols-rounded mat-icon fw-100 bttn__icon">
                      {" "}
                      trending_flat{" "}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 order-md-2 col-lg-4">
              <div className="price-card-1">
                <div className="price-card-1__head">
                  <div className="price-card-1__head-icon base">
                    <img
                      src="/images/icon-14.png"
                      alt="image"
                      className="price-card-1__head-icon-is"
                    />
                  </div>
                  <div className="group group-0 align-items-center">
                    <span className="display-block h6 text-center clr-heading">
                      Enterprise
                    </span>
                    <span className="display-block h4 text-center clr-base m-0">
                    {checked?'$500':'$60'}
                    </span>
                  </div>
                  <p className="text-center">
                    {" "}
                    We design solutions that reduce obstacles{" "}
                  </p>
                </div>
                <div className="price-card-1__body">
                  <h6 className="mb-5">What’s included</h6>
                  <ul className="list list-0 list--check check-base bordered-bottom">
                    <li className="align-items-center">
                      <span className="d-block clr-heading">
                        {" "}
                        Support at $25/hour{" "}
                      </span>
                    </li>
                    <li className="align-items-center">
                      <span className="d-block clr-heading">
                        {" "}
                        Product Engineering{" "}
                      </span>
                    </li>
                    <li className="align-items-center">
                      <span className="d-block clr-heading">
                        {" "}
                        It Consulting{" "}
                      </span>
                    </li>
                    <li className="align-items-center">
                      <span className="d-block clr-heading">
                        {" "}
                        Free Fixes & Update{" "}
                      </span>
                    </li>
                    <li className="align-items-center">
                      <span className="d-block clr-heading">
                        {" "}
                        Digital Solutions{" "}
                      </span>
                    </li>
                    <li className="align-items-center">
                      <span className="d-block clr-heading">
                        {" "}
                        24/7 system monitoring{" "}
                      </span>
                    </li>
                    <li className="align-items-center">
                      <span className="d-block clr-heading">
                        {" "}
                        Remote support{" "}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="price-card-1__footer text-center">
                  <Link
                    href="pricing-plan-1"
                    className="bttn bttn--base bttn-md bttn-pill fw-md flex-shrink-0">
                    {" "}
                    Get Started{" "}
                    <span className="material-symbols-rounded mat-icon fw-100 bttn__icon">
                      {" "}
                      trending_flat{" "}
                    </span>
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

export default Latestwork;
