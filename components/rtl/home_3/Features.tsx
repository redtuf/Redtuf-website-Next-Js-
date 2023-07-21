const Features = ({ overlay }) => {
  return (
    <div className="section">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <div className="image-move-start">
              <img src="/images/features-img.png" alt="image" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section__gap-top pt-lg-0">
            <span className="d-inline-block h5 lh-1 fw-semibold clr-base overlay-text">
                {" "}
                لماذا أخترتنا
                {overlay ? (
                  <span className="overlay-text__content">Features</span>
                ) : null}
              </span>           
              <h2 className="mt-5 mb-12"> أولويتنا الأولى هي خدمة متطلبات تكنولوجيا المعلومات الخاصة بك. </h2>
              <ul className="list list-lg">
                <li>
                  <div className="group group-row">
                    <div className="flex-shrink-0">
                      <img src="/images/icon-38.png" alt="image" className="img-fluid" />
                    </div>
                    <div className="flex-grouw-1">
                      <h5 className="mb-2"> الشركات الحائزة على جوائز </h5>
                      <p className="max-text-50"> من المهم جدًا أن يكون لديك خدمة عملاء ، ولكن هذا هو الحال تمامًا في الوقت الذي يسقطون فيه كما هو الحال مع المخاض والألم الشديد </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="group group-row">
                    <div className="flex-shrink-0">
                      <img src="/images/icon-39.png" alt="image" className="img-fluid" />
                    </div>
                    <div className="flex-grouw-1">
                      <h5 className="mb-2"> خدمات بتكاليف أقل </h5>
                      <p className="max-text-50"> من المهم جدًا أن يكون لديك خدمة عملاء ، ولكن هذا هو الحال تمامًا </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="group group-row">
                    <div className="flex-shrink-0">
                      <img src="/images/icon-40.png" alt="image" className="img-fluid" />
                    </div>
                    <div className="flex-grouw-1">
                      <h5 className="mb-2"> دعم في الوقت الحقيقي </h5>
                      <p className="max-text-50"> في الوقت الذي يسقطون فيه كما هو الحال مع المخاض والألم الشديد </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
