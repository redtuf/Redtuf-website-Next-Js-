import Link from 'next/link';
import { useState } from 'react';
import ModalVideo from 'react-modal-video'
const Hero = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <section className="hero-1">
      <ModalVideo
        channel="youtube"        
        isOpen={isOpen}
        videoId="UmHMVU6dceA"
        onClose={() => setOpen(false)}
      />
        <div className="hero-1__wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xxl-7">
              <div className="section__gap-bottom pb-lg-0">
                <span className="d-block h4 fw-semibold clr-accent mb-2"> خدمات تأمين وتكنولوجيا المعلومات </span>
                <h1 className="clr-neutral mb-4"> خدمات تكنولوجيا المعلومات المتميزة لضمان نجاحك </h1>
                <p className="hero-1__subtext clr-neutral xxl-text mb-8"> نحن هنا لمساعدتك على نجاح مشروعك الذي تحلم به! تريد أن تعرف كيف؟ </p>
                <div className="group group-sm-row align-items-start align-items-sm-center">
                  <Link href="about-us-1" className="bttn bttn-pill bttn-md bttn--light-accent align-items-center fw-md"> المزيد عنا <span className="material-symbols-rounded mat-icon fw-300 bttn__icon"> chevron_right </span>
                  </Link>
                  <div className="list list-row align-items-center flex-shrink-0">
                    <Link href="#" onClick={() => setOpen(true)} className="bttn bttn--circle bttn--sqr bttn--sqr-md bttn--light-accent video-button">
                      <span className="material-symbols-rounded mat-icon size-40 solid"> play_arrow </span>
                    </Link>
                    <p className="clr-neutral">كيف نعمل</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xxl-5">
              <form action="#">
                <div className="booking-form">
                  <div className="booking-form__head">
                    <h3 className="text-center mb-2"> موعد الكتاب </h3>
                    <p className="text-center"> إنه لمن دواعي سرورنا أن تتاح لنا الفرصة للتعاون. </p>
                  </div>
                  <div className="row g-4">
                    <div className="col-12">
                      <input type="text" className="form-control booking-form__input" placeholder="اسم" />
                    </div>
                    <div className="col-12">
                      <input type="email" className="form-control booking-form__input" placeholder="بريد إلكتروني" />
                    </div>
                    <div className="col-12">
                      <div className="booking-form__select">
                        <select className="form-select">
                          <option>حدد واحد</option>
                          <option value="1">واحد</option>
                          <option value="2">اثنين</option>
                          <option value="3">ثلاثة</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="booking-form__footer text-center">
                    <button type="button" className="bttn bttn--base bttn-md bttn-pill fw-md"> Submit </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="hero-1__masked"></div>
        {/* <!-- Elements --> */}
        <div className="element element--1">
          <img src="/images/element-1.png" alt="image" className="img-fluid" />
        </div>
        <span className="element element--2"></span>
        <span className="element element--3"></span>
        <span className="element element--4"></span>
        <span className="element element--5"></span>
        {/* <!-- Elements End --> */}
      </div>
    </section>
  );
};

export default Hero;
