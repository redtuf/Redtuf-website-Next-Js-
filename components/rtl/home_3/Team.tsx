import Link from 'next/link';
import React from 'react';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
  } from "react-icons/fa";
const Team = () => {
    return (
      <div className="section team-section-2">
      <div className="section__gap-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9 col-lg-8 col-xl-7">
              <div className="text-center">
                <span className="d-inline-block h5 lh-1 fw-semibold clr-base overlay-text"> لدينا عدد كبير من أعضاء فريق الخبراء <span className="overlay-text__content"> فريق </span>
                </span>
                <h2 className="mt-5 mb-5"> الفريق المذهل خلف شركتنا </h2>
                <p className="mx-auto max-text-60"> نحن نقدم خدمات فريدة مصممة خصيصًا لشركتك ساعد في زيادة أرباح شركتك </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6 col-xl-3">
            <div className="team-card-2">
              <div className="team-card-2__container">
                <div className="team-card-2__img">
                  <img src="/images/team-1.png" alt="image" className="team-card-2__img-is" />
                </div>
                <div className="team-card-2__content">
                  <h5 className="clr-light text-center mb-1">جيني ويلسون</h5>
                  <span className="d-block clr-accent text-center"> مدير تكنولوجيا المعلومات </span>
                </div>
              </div>
              <div className="team-card-2__overlay">
                <ul className="list list-xs list-row justify-content-end mt-auto">
                  <li>
                    <Link href="#" className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle">
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle">
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle">
                    <FaLinkedinIn />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="team-card-2">
              <div className="team-card-2__container">
                <div className="team-card-2__img">
                  <img src="/images/team-2.png" alt="image" className="team-card-2__img-is" />
                </div>
                <div className="team-card-2__content">
                  <h5 className="clr-light text-center mb-1">جو ريك</h5>
                  <span className="d-block clr-accent text-center"> مدير الخدمة </span>
                </div>
              </div>
              <div className="team-card-2__overlay">
                <ul className="list list-xs list-row justify-content-end mt-auto">
                  <li>
                    <Link href="#" className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle">
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle">
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle">
                    <FaLinkedinIn />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="team-card-2">
              <div className="team-card-2__container">
                <div className="team-card-2__img">
                  <img src="/images/team-3.png" alt="image" className="team-card-2__img-is" />
                </div>
                <div className="team-card-2__content">
                  <h5 className="clr-light text-center mb-1">رونالد ريتشاردز</h5>
                  <span className="d-block clr-accent text-center"> المدير العام </span>
                </div>
              </div>
              <div className="team-card-2__overlay">
                <ul className="list list-xs list-row justify-content-end mt-auto">
                  <li>
                    <Link href="#" className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle">
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle">
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle">
                    <FaLinkedinIn />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="team-card-2">
              <div className="team-card-2__container">
                <div className="team-card-2__img">
                  <img src="/images/team-4.png" alt="image" className="team-card-2__img-is" />
                </div>
                <div className="team-card-2__content">
                  <h5 className="clr-light text-center mb-1">ديان راسل</h5>
                  <span className="d-block clr-accent text-center"> مساعد تنفيذي </span>
                </div>
              </div>
              <div className="team-card-2__overlay">
                <ul className="list list-xs list-row justify-content-end mt-auto">
                  <li>
                    <Link href="#" className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle">
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle">
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle">
                    <FaLinkedinIn />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Team;