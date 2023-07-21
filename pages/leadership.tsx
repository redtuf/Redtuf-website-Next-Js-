import CoreValue from "@/components/CoreValue";
import Feedback_3 from "@/components/Feedback_3";
import Navbar from "@/components/Navbar";
import Footer from "@/components/home_4/Footer";
import Link from "next/link";
import { useState, useEffect } from 'react';

const leadership = () => {
  const [teamData, setTeamData] = useState([
    {
      id: 1,
      img: "/images/team-1.png",
      name: "Darlene Robertson",
      designation: "Chief Officer",
      open: false,
    },
    {
      id: 2,
      img: "/images/team-2.png",
      name: "Cody Fisher",
      designation: "President & CEO",
      open: false,
    },
    {
      id: 3,
      img: "/images/team-3.png",
      name: "Brooklyn Simmons",
      designation: "Financial Services",
      open: false,
    },
    {
      id: 4,
      img: "/images/team-4.png",
      name: "Devon Lane",
      designation: "Project Manager",
      open: false,
    },
    {
      id: 5,
      img: "/images/team-5.png",
      name: "Lily Woods",
      designation: "Creative Director",
      open: false,
    },
    {
      id: 6,
      img: "/images/team-6.png",
      name: "Wade Warren",
      designation: "Creative Derector",
      open: false,
    },
  ]);
  const handleOpen = (id: number) => {
    setTeamData(
      teamData.map((member) =>
        member.id === id ? { ...member, open: true } : member
      )
    );
  };
  const handleClose = (id: number) => {
    setTeamData(
      teamData.map((member) =>
        member.id === id ? { ...member, open: false } : member
      )
    );
  };
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
  }, []);
  return (
    <>
      {/* Navbar Section */}
      <Navbar rtlurl="/rtl/leadership" />
      {/* Banner section */}
      <section className="banner-section section--sm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="clr-light mb-3"> Leadership </h3>
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
                    Leadership{" "}
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
      {/* <!-- Banner End --> */}
      {/* <!-- Leadership Section  --> */}
      <section className="section">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-xl-8">
                <div className="text-center">
                  <span className="d-inline-block h5 lh-1 fw-semibold clr-base">
                    {" "}
                    Meet Our Leadership{" "}
                  </span>
                  <h2 className="mt-5 mb-5">
                    {" "}
                    We hire staffs who know more than what they showoff{" "}
                  </h2>
                  <p className="mx-auto max-text-60">
                    {" "}
                    Itechex executives have decades of IT experience, a passion
                    for client success, and operational excellence. We enhance
                    delivery, technological DNA, and strategic alignment.Our
                    management team also provides IT Advisory.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-6">
            {teamData.map(({ img, name, designation, id, open }) => (
              <div key={id} className="col-md-6 col-lg-4">
                <div className="leadership-card text-center t-shadow">
                  <div className="leadership-card__img mx-auto">
                    <img
                      src={img}
                      alt="image"
                      className="leadership-card__img-is"
                    />
                  </div>
                  <div className="mt-5">
                    <h5 className="text-center mb-1">{name}</h5>
                    <span className="sm-text d-block text-center clr-base">
                      {designation}
                    </span>
                    <button
                      className="leadership-card__open-btn"
                      onClick={() => handleOpen(id)}>
                      <span className="material-symbols-rounded"> add </span>
                    </button>
                  </div>
                  <div
                    className={`leadership-card__overlay ${open && "active"}`}>
                    <button
                      className="leadership-card__close-btn"
                      onClick={() => handleClose(id)}>
                      <span className="material-symbols-rounded mat-icon size-40 fw-200">
                        {" "}
                        close{" "}
                      </span>
                    </button>
                    <p className="text-center clr-light mt-auto">
                      {" "}
                      Eget lorem dolor sed viverra ipsum nunc aliquet dolor
                      bibendum felis donec et odio pellentesque diam sit
                      volutpat commodo sed egestas.{" "}
                    </p>
                    <Link
                      href="leadership-page"
                      className="t-link t-link--light fw-md mt-auto mx-auto">
                      {" "}
                      View More{" "}
                      <span className="material-symbols-outlined mat-icon fw-200">
                        {" "}
                        trending_flat{" "}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Feedback section 3 */}
      <Feedback_3 />
      {/* Teams core values */}
      <CoreValue />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default leadership;
