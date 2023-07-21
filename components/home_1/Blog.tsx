import Link from 'next/link';
import React from 'react';

const Blog = () => {
    return (
        <div className="blog-section-1">
          <div className="section--sm section--bottom">
            <div className="section__gap-bottom">
              <div className="container">
                <div className="row g-4 justify-content-xxl-between align-items-md-end">
                  <div className="col-md-8 col-xxl-7">
                    <span className="d-block h5 lh-1 fw-semibold clr-base">
                      {" "}
                      Browse our articles & resources{" "}
                    </span>
                    <h2 className="mt-5 mb-5">
                      {" "}
                      Take a look at our latest articles and resources{" "}
                    </h2>
                    <p className="max-text-60">
                      {" "}
                      Have a look at the most recent articles and resources that
                      we have from our client.{" "}
                    </p>
                  </div>
                  <div className="col-md-4">
                    <div className="text-md-end">
                      <Link
                        href="blog-page-1"
                        className="bttn bttn--stroke-outline bttn-md bttn-pill fw-md flex-shrink-0 align-items-center">
                        <span className="bttn__arrow"> Browse articles </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row g-4">
                <div className="col-lg-4">
                  <div className="blog-post-1 h-100">
                    <Link
                      href="blog-details-1"
                      className="blog-post-1__link flex-shrink-0">
                      <img
                        src="/images/blog-post-3.png"
                        alt="image"
                        className="blog-post-1__img"
                      />
                    </Link>
                    <div className="blog-post-1__body h-100 d-flex flex-column">
                      <h5 className="mb-2">
                        <Link
                          href="blog-details-1"
                          className="t-link clr-heading :clr-base d-block">
                          {" "}
                          The Most Significant Advances in Technology That We've
                          Seen So Far This Year{" "}
                        </Link>
                      </h5>
                      <p className="mb-5">
                        {" "}
                        Rutrum consequat ultricies leo eu volutpat neque
                        volutpat iaculis dignissim.{" "}
                      </p>
                      <Link
                        href="blog-details-1"
                        className="t-link t-link--base fw-md mt-auto">
                        {" "}
                        Read More{" "}
                        <span className="material-symbols-outlined mat-icon fw-200">
                          {" "}
                          trending_flat{" "}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="blog-post-1 h-100">
                    <Link
                      href="blog-details-1"
                      className="blog-post-1__link flex-shrink-0">
                      <img
                        src="/images/blog-post-1.png"
                        alt="image"
                        className="blog-post-1__img"
                      />
                    </Link>
                    <div className="blog-post-1__body h-100 d-flex flex-column">
                      <h5 className="mb-2">
                        <Link
                          href="blog-details-1"
                          className="t-link clr-heading :clr-base d-block">
                          {" "}
                          Why We Are So Excited About Technology—And Why You
                          Should Be, Too!{" "}
                        </Link>
                      </h5>
                      <p className="mb-5">
                        {" "}
                        Rutrum consequat ultricies leo eu volutpat neque
                        volutpat iaculis dignissim.{" "}
                      </p>
                      <Link
                        href="blog-details-1"
                        className="t-link t-link--base fw-md mt-auto">
                        {" "}
                        Read More{" "}
                        <span className="material-symbols-outlined mat-icon fw-200">
                          {" "}
                          trending_flat{" "}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="blog-post-1 h-100">
                    <Link
                      href="blog-details-1"
                      className="blog-post-1__link flex-shrink-0">
                      <img
                        src="/images/blog-post-2.png"
                        alt="image"
                        className="blog-post-1__img"
                      />
                    </Link>
                    <div className="blog-post-1__body h-100 d-flex flex-column">
                      <h5 className="mb-2">
                        <Link
                          href="blog-details-1"
                          className="t-link clr-heading :clr-base d-block">
                          {" "}
                          The 17 Facts About Technology That Are Almost Always
                          Misunderstood{" "}
                        </Link>
                      </h5>
                      <p className="mb-5">
                        {" "}
                        Rutrum consequat ultricies leo eu volutpat neque
                        volutpat iaculis dignissim.{" "}
                      </p>
                      <Link
                        href="blog-details-1"
                        className="t-link t-link--base fw-md mt-auto">
                        {" "}
                        Read More{" "}
                        <span className="material-symbols-outlined mat-icon fw-200">
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

export default Blog;