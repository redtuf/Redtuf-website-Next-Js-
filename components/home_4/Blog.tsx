import Link from 'next/link';
import React from 'react';

const Blog = () => {
    return (
        <div className="section">
        <div className="section__gap-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7">
                <div className="text-center">
                  <span className="d-inline-block h5 lh-1 fw-semibold clr-base">
                    {" "}
                    Browse our articles & resources{" "}
                  </span>
                  <h2 className="mt-5 mb-5">
                    {" "}
                    Take a look at our latest articles and resources{" "}
                  </h2>
                  <p className="mx-auto t-short-para">
                    {" "}
                    What follows are some of the comments made by our clients.
                    Don't take it on faith that we said it. Check out what some.{" "}
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
    );
};

export default Blog;