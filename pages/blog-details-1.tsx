import Navbar from "@/components/Navbar";
import Footer from "@/components/home_4/Footer";
import Link from "next/link";
import { useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const blog_details_1 = () => {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
  }, []);
  return (
    <>
      {/* Navbar */}
      <Navbar rtlurl="/rtl/blog-details-1" />
      {/* banner */}
      <div className="section--sm section--top bg-base">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <ul className="list list-row align-items-center justify-content-center mb-5">
                <li>
                  <Link
                    href="#"
                    className="bttn bttn--rounded bttn--accent bttn-md">
                    {" "}
                    Marketing{" "}
                  </Link>
                </li>
                <li>
                  <span className="clr-light"> Jul 15, 2023 </span>
                </li>
              </ul>
              <h2 className="text-center clr-light mb-8">
                {" "}
                What’s growth hacking? 8 great books to learn more about it{" "}
              </h2>
            </div>
            <div className="col-lg-8">
              <ul className="list list-row flex-wrap align-items-center justify-content-center justify-content-sm-between">
                <li>
                  <div className="group group-sm group-row align-items-center">
                    <div className="user user--xmd user-outline-base flex-shrink-0 rounded-circle border border-2 border-light">
                      <span className="user__img rounded-circle">
                        <img
                          src="/images/team-1.png"
                          alt="image"
                          className="user__img-is"
                        />
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="clr-light"> Courtney Henry </h5>
                    </div>
                  </div>
                </li>
                <li>
                  <ul className="list list-xs list-row justify-content-sm-end">
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle">
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--sm social-icon--light-outline social-icon--circle">
                        <FaLinkedinIn />
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Banner End --> */}
      <div className="details-body">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <img
                src="/images/blog-img-1.png"
                alt="image"
                className="img-fluid rounded-4"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="row g-6 justify-content-xxl-between">
            <div className="col-lg-8 col-xxl-7">
              <h3 className="mb-5"> New mobile apps to keep an eye on </h3>
              <p className="mb-8">
                {" "}
                Lorem ipsum dolor sit amet consectetur. Nec tellus phasellus
                tempor et eget ipsum metus lorem quis. Aliquam et mi diam id
                penatibus nisi. Accumsan lacus eu ultrices sit et. Leo ridiculus
                adipiscing gravida quam tempus. Nisl ut nibh vel proin. Diam at
                aenean in et quis faucibus. Aliquam suscipit in eu proin
                placerat felis. Dolor magna volutpat facilisis et aliquet nunc.{" "}
              </p>
              <ul className="list list-disc list-disc--gray mb-12">
                <li>
                  <p>
                    {" "}
                    Cras sed felis eget velit aliquet. Morbi quis commodo odio{" "}
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    Pharetra vel turpis nunc eget lorem dolor. Quam vulputate{" "}
                  </p>
                </li>
                <li>
                  <p> Vestibulum rhoncus est pellentesque elit ullamcorper </p>
                </li>
              </ul>
              <h3 className="mb-5">
                {" "}
                What new social media mobile apps are available in 2023?{" "}
              </h3>
              <p className="mb-8">
                {" "}
                Elit dignissim ut egestas massa lorem. Molestie nunc egestas ut
                semper facilisis ornare duis venenatis congue. Nulla suscipit
                eget tellus elementum vitae. Semper tempor pellentesque volutpat
                vitae. Tortor nec adipiscing nisi elit amet amet tristique amet
                elementum. Integer nisl mi sed nisl praesent sed hac orci.
                Dictumst pellentesque ac diam lorem vestibulum sodales leo.
                Augue in imperdiet nunc id sed ut nisi eu sed. Sed quis elit
                fermentum libero nisl condimentum posuere risus quam. Penatibus
                sit pulvinar eu bibendum cursus. Neque donec ipsum amet
                molestie. Sem cras duis risus odio augue diam.{" "}
              </p>
              <img
                src="/images/blog-post-15.png"
                alt="image"
                className="img-fluid"
              />
              <h4 className="mt-8 mb-5">
                {" "}
                Use new social media apps as marketing funnels{" "}
              </h4>
              <p className="mb-8">
                {" "}
                Elit dignissim ut egestas massa lorem. Molestie nunc egestas ut
                semper facilisis ornare duis venenatis congue. Nulla suscipit
                eget tellus elementum vitae. Semper tempor pellentesque volutpat
                vitae. Tortor nec adipiscing nisi elit amet amet tristique amet
                elementum. Integer nisl mi sed nisl praesent sed hac orci.
                Dictumst pellentesque ac diam lorem vestibulum sodales leo.
                Augue in imperdiet nunc id sed ut nisi eu sed. Sed quis elit
                fermentum libero nisl condimentum posuere risus quam. Penatibus
                sit pulvinar eu bibendum cursus. Neque donec ipsum amet
                molestie. Sem cras duis risus odio augue diam.{" "}
              </p>
              <ul className="list list-disc list-disc--gray mb-12">
                <li>
                  <p>
                    {" "}
                    Cras sed felis eget velit aliquet. Morbi quis commodo odio{" "}
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    Pharetra vel turpis nunc eget lorem dolor. Quam vulputate{" "}
                  </p>
                </li>
                <li>
                  <p> Vestibulum rhoncus est pellentesque elit ullamcorper </p>
                </li>
              </ul>
              <div className="bg-base p-6 p-md-8 p-xl-12 rounded-4 mb-12">
                <p className="xxl-text clr-light">
                  {" "}
                  “Eget lorem dolor sed viverra ipsum nunc aliquet bibendum
                  felis donec et odio pellentesque diam volutpat commodo sed
                  volutpat commodo sed.”{" "}
                </p>
              </div>
              <h4 className=" mb-5">
                {" "}
                Try out Twitter Spaces or Clubhouse on iPhone{" "}
              </h4>
              <p className="mb-12">
                {" "}
                Lorem ipsum dolor sit amet consectetur. Mattis non integer
                sollicitudin sit ante felis malesuada. Enim montes aliquam
                turpis sit. Pellentesque donec luctus proin dis massa tellus
                vitae. Diam ornare a turpis faucibus nunc. Urna arcu cursus
                mattis ultrices habitasse sed enim nunc. Senectus accumsan
                mauris amet lacus nunc sodales dictum pretium ut. Arcu elit
                tellus praesent turpis consequat velit sed. Amet tortor
                ridiculus in ultrices aliquet diam eget faucibus tincidunt.
                Posuere phasellus purus adipiscing at elementum.{" "}
              </p>
              <h4 className=" mb-5">
                {" "}
                What app are you currently experimenting on?{" "}
              </h4>
              <p className="mb-12">
                {" "}
                Lorem ipsum dolor sit amet consectetur. Mattis non integer
                sollicitudin sit ante felis malesuada. Enim montes aliquam
                turpis sit. Pellentesque donec luctus proin dis massa tellus
                vitae. Diam ornare a turpis faucibus nunc. Urna arcu cursus
                mattis ultrices habitasse sed enim nunc. Senectus accumsan
                mauris amet lacus nunc sodales dictum pretium ut. Arcu elit
                tellus praesent turpis consequat velit sed. Amet tortor
                ridiculus in ultrices aliquet diam eget faucibus tincidunt.
                Posuere phasellus purus adipiscing at elementum.{" "}
              </p>
              <div className="p-8 p-xl-12 border rounded-4 d-inline-flex flex-column flex-md-row gap-6">
                <div className="user--xlg rounded-circle overflow-hidden flex-shrink-0">
                  <div className="user__img">
                    <img
                      src="/images/team-1.png"
                      alt="image"
                      className="user__img-is"
                    />
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="mb-2"> Dianne Russell </h5>
                  <p className="mb-5"> CTO & Co-Founder </p>
                  <p className="mb-8 max-text-50">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur. Mattis non integer
                    sollicitudin sit ante felis malesuada. Enim montes aliquam
                    turpis sit. Pellentesque donec luctus proin dis massa tellus
                    vitae.{" "}
                  </p>
                  <ul className="list list-xs list-row">
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="t-link social-icon social-icon--sm social-icon--neutral-200 social-icon--circle">
                        <FaLinkedinIn />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="px-8 py-15 rounded-4 bg-base">
                <img
                  src="/images/icon-72.png"
                  alt="image"
                  className="img-fluid"
                />
                <h4 className="my-5 clr-light"> Sign up for our newsletter </h4>
                <p className="mb-8 clr-light">
                  {" "}
                  Need more information?Subscribe to Newsletter & Get Update and
                  News{" "}
                </p>
                <input
                  type="email"
                  className="form-control booking-form__input placeholder-clr mb-5"
                  placeholder="Enter Your Email"
                />
                <Link
                  href="#"
                  className="bttn bttn-pill bttn-md bttn--light-accent align-items-center fw-md w-100 clr-dark">
                  {" "}
                  Subscribe Now!{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default blog_details_1;
