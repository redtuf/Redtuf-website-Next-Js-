import Link from 'next/link';
import { useState } from 'react';
import ModalVideo from 'react-modal-video'

const Counter = () => {
  const [isOpen, setOpen] = useState(false)
    return (
        <div className="counter-section-1">
          <ModalVideo
        channel="youtube"     
        isOpen={isOpen}
        videoId="muczNvx9fgg"
        onClose={() => setOpen(false)}
      />
          <div className="counter-section-1__top bg-base section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <div className="text-center">
                <Link href="#" onClick={()=>setOpen(true)} className="bttn bttn--circle bttn--sqr bttn--sqr-md bttn--light-accent video-button">
                  <span className="material-symbols-rounded mat-icon size-40 solid"> play_arrow </span>
                </Link>
                <h2 className="mt-10 mb-5 clr-neutral"> الاستعداد للنجاح تقديم أفضل خدمات تكنولوجيا المعلومات. </h2>
                <p className="clr-neutral t-short-para mx-auto mb-10"> قابل للتكيف مع الاحتياجات الفريدة لشركتك ، مما يسهل عليك الاستمتاع بها دعم من الدرجة الأولى في مجال تكنولوجيا المعلومات. </p>
                <Link href="pricing-plan-1" className="bttn bttn-pill bttn-md bttn--light-accent align-items-center fw-md"> خطة التسعير لدينا <span className="material-symbols-rounded mat-icon fw-200 bttn__icon"> trending_flat </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="counter-section-1__bottom section">
        <div className="container-xl">
          <div className="row g-3 justify-content-center">
            <div className="col-sm-6 col-lg-3">
              <div className="group group-xmd group-row align-items-center bg--white t-shadow p-4 rounded-3 h-100">
                <div className="icon-box icon-box--md circle bg-secondary flex-shrink-0">
                  <img src="/images/icon-7.png" alt="image" />
                </div>
                <div className="group group-xxs">
                  <h3>23+</h3>
                  <p className="sm-text"> سنوات من الخبرة </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="group group-xmd group-row align-items-center bg--white t-shadow p-4 rounded-3 h-100">
                <div className="icon-box icon-box--md circle bg-danger flex-shrink-0">
                  <img src="/images/icon-8.png" alt="image" />
                </div>
                <div className="group group-xxs">
                  <h3>500</h3>
                  <p className="sm-text"> مشاريع كاملة </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="group group-xmd group-row align-items-center bg--white t-shadow p-4 rounded-3 h-100">
                <div className="icon-box icon-box--md circle bg-success flex-shrink-0">
                  <img src="/images/icon-9.png" alt="image" />
                </div>
                <div className="group group-xxs">
                  <h3>100+</h3>
                  <p className="sm-text"> الخبراء المهرة </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="group group-xmd group-row align-items-center bg--white t-shadow p-4 rounded-3 h-100">
                <div className="icon-box icon-box--md circle bg-warning flex-shrink-0">
                  <img src="/images/icon-10.png" alt="image" />
                </div>
                <div className="group group-xxs">
                  <h3>300+</h3>
                  <p className="sm-text"> تصنيف 5 نجوم </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Counter;