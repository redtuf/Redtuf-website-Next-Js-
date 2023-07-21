import Link from "next/link";
const brandData = [
  {
    id: 1,
    title: "Android",
    icon: "/images/brand-icon-1.png",
  },
  {
    id: 2,
    title: "Codeigniter",
    icon: "/images/brand-icon-2.png",
  },
  {
    id: 3,
    title: "Flutter",
    icon: "/images/brand-icon-3.png",
  },
  {
    id: 4,
    title: "Nodejs",
    icon: "/images/brand-icon-4.png",
  },
  {
    id: 5,
    title: "Python",
    icon: "/images/brand-icon-5.png",
  },
  {
    id: 6,
    title: "React",
    icon: "/images/brand-icon-6.png",
  },
  {
    id: 7,
    title: "Swift",
    icon: "/images/brand-icon-7.png",
  },
  {
    id: 8,
    title: "Angular",
    icon: "/images/brand-icon-8.png",
  },
  {
    id: 9,
    title: "C Sharp",
    icon: "/images/brand-icon-9.png",
  },
  {
    id: 10,
    title: "Java",
    icon: "/images/brand-icon-10.png",
  },
  {
    id: 11,
    title: "Windows",
    icon: "/images/brand-icon-11.png",
  },
  {
    id: 12,
    title: "Laravel",
    icon: "/images/brand-icon-12.png",
  },
];

const Tools = () => {
  return (
    <div className="section bg--white">
      <div className="section__gap-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-xl-6">
              <h2 className="text-center"> Technologies We Use </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-4">
          {brandData.map(({ id, title, icon }) => (
            <div key={id} className="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
              <div className="toolset">
                <div className="toolset__icon">
                  <img src={icon} alt="images" className="img-fluid" />
                </div>
                <div className="toolset__content">
                  <p className="fw-md lg-text clr-heading"> {title} </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section__gap-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-xl-8">
              <div className="group group-row justify-content-center">
                <Link
                  href="about-us-1"
                  className="bttn bttn--stroke-outline bttn-md bttn-pill fw-md flex-shrink-0 align-items-center">
                  <span className="bttn__arrow"> More About Us </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
