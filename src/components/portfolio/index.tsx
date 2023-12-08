import { Box } from "@chakra-ui/react";

const Portfolio = () => {
  return (
    <Box>
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo">
            <img src="assets/img/logo.png" alt="" className="img-fluid" />
          </a>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-Link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-Link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-Link  scrollto" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="nav-Link  scrollto" href="#journal">
                  Blog
                </a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Drop Down 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Deep Drop Down</span>{" "}
                      <i className="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="nav-Link scrollto" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>

      <nav className="my-navba navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-md my-navbar">
          <a className="navbar-brand" href="#">
            Home
          </a>
          <a className="navbar-brand" href="#main" >
            About
          </a>
          <a className="navbar-brand" href="#journal">
            Portfolio
          </a>
          <a className="navbar-brand" href="#contact">
            Blog
          </a>
          <a className="navbar-brand" href="#">
            Contact
          </a>
        </div>
      </nav>

      <div id="hero" className="home">
        <div className="container">
          <div className="hero-content">
            <h1>
              I'm{" "}
              <span
                className="typed"
                data-typed-items="Fayozbek Hamidov, Designer, Developer, Photographer"
              ></span>
            </h1>
            <div className="div">Fayozbek Hamidov</div>
            <div className="wrapper"></div>
            <p>Designer, Developer, Freelancer, Photographer</p>

            <ul className="list-unstyled list-social">
              <li>
                <a href="https://www.facebook.com/profile.php?id=61550333675370">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/fayozbekhamidov7073/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <main id="main">
        <div id="about" className="paddsection">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-4 ">
                <div className="div-img-bg">
                  <div className="about-img">
                    <img
                      src="/src/img/my/me.jpg"
                      className="img-responsive"
                      alt="me"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="about-descr">
                  <p className="p-heading">
                    im a ux /ui designer austin based who loves clean, simple &
                    unique design. i also enjoy crafting brand identities,
                    icons, & ilustration work.{" "}
                  </p>
                  <p className="separator">
                    To an English person, it will seem like simplified English,
                    as a skeptical Cambridge friend of mine told me what
                    Occidental is. The European languages are members of the
                    same family.English person.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="services">
          <div className="container">
            <div
              className="services-slider swiper"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="services-block">
                    <i className="clss-blue bi bi-briefcase"></i>
                    <span>UI/UX DESIGN</span>
                    <p className="separator">
                      To an English person, it will seem like simplified
                      English,told me what{" "}
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="services-block">
                    <i className="clss-blue bi bi-card-checklist"></i>
                    <span>BRAND IDENTITY</span>
                    <p className="separator">
                      To an English person, it will seem like simplified
                      English,told me what{" "}
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="services-block">
                    <i className="clss-blue bi bi-bar-chart"></i>
                    <span>WEB DESIGN</span>
                    <p className="separator">
                      To an English person, it will seem like simplified
                      English,told me what{" "}
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="services-block">
                    <i className="clss-blue bi bi-binoculars"></i>
                    <span>MOBILE APPS</span>
                    <p className="separator">
                      To an English person, it will seem like simplified
                      English,told me what{" "}
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="services-block">
                    <i className="clss-blue bi bi-brightness-high"></i>
                    <span>Analytics</span>
                    <p className="separator">
                      To an English person, it will seem like simplified
                      English,told me what{" "}
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="services-block">
                    <i className="clss-blue bi bi-calendar4-week"></i>
                    <span>PHOTOGRAPHY</span>
                    <p className="separator">
                      To an English person, it will seem like simplified
                      English,told me what{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>

        <div id="portfolio" className="paddsection">
          <div className="container">
            <div className="section-title text-center">
              <h2>journal</h2>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">
                    All
                  </li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Card</li>
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div>

            <div className="row portfolio-container">
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <img
                  src="assets/img/portfolio/portfolio-1.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>App 1</h4>
                  <p>App</p>
                  <a
                    href="assets/img/portfolio/portfolio-1.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox preview-Link"
                    title="App 1"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="details-Link"
                    title="More Details"
                  >
                    <i className="bx bx-Link"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <img
                  src="assets/img/portfolio/portfolio-2.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <a
                    href="assets/img/portfolio/portfolio-2.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox preview-Link"
                    title="Web 3"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="details-Link"
                    title="More Details"
                  >
                    <i className="bx bx-Link"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <img
                  src="assets/img/portfolio/portfolio-3.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>App 2</h4>
                  <p>App</p>
                  <a
                    href="assets/img/portfolio/portfolio-3.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox preview-Link"
                    title="App 2"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="details-Link"
                    title="More Details"
                  >
                    <i className="bx bx-Link"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <img
                  src="assets/img/portfolio/portfolio-4.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Card 2</h4>
                  <p>Card</p>
                  <a
                    href="assets/img/portfolio/portfolio-4.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox preview-Link"
                    title="Card 2"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="details-Link"
                    title="More Details"
                  >
                    <i className="bx bx-Link"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <img
                  src="assets/img/portfolio/portfolio-5.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Web 2</h4>
                  <p>Web</p>
                  <a
                    href="assets/img/portfolio/portfolio-5.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox preview-Link"
                    title="Web 2"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="details-Link"
                    title="More Details"
                  >
                    <i className="bx bx-Link"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <img
                  src="assets/img/portfolio/portfolio-6.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>App 3</h4>
                  <p>App</p>
                  <a
                    href="assets/img/portfolio/portfolio-6.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox preview-Link"
                    title="App 3"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="details-Link"
                    title="More Details"
                  >
                    <i className="bx bx-Link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="journal" className="text-left paddsection">
          <div className="container">
            <div className="section-title text-center">
              <h2>My Portfolio</h2>
            </div>
          </div>

          <div className="container">
            <div className="journal-block">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="journal-info bg-hever">
                    <a href="https://singular-haupia-e3e855.netlify.app">
                      <img
                        style={{ height: "312px" }}
                        src="/src/img/my/so-list.jpg"
                        className="img-responsive"
                        alt="img"
                      />
                    </a>

                    <div className="journal-txt">
                      <h4>
                        <a href="blog-single.html">
                          SO LETS MAKE THE MOST IS BEAUTIFUL
                        </a>
                      </h4>
                      <p className="separator">
                        To an English person, it will seem like simplified
                        English
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="journal-info bg-hever">
                    <a href="https://rococo-gelato-1eec4e.netlify.app">
                      <img
                        src="/src/img/blog-post-3.jpg"
                        className="img-responsive"
                        alt="img"
                      />
                    </a>

                    <div className="journal-txt">
                      <h4>
                        <a href="blog-single.html">
                          WE'RE GONA MAKE DREAMS COMES
                        </a>
                      </h4>
                      <p className="separator">
                        To an English person, it will seem like simplified
                        English
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="journal-info bg-hever">
                    <a href="https://github.com/Fayozbek-7073/new.">
                      <img
                        src="/src/img/blog-post-2.jpg"
                        className="img-responsive"
                        alt="img"
                      />
                    </a>

                    <div className="journal-txt">
                      <h4>
                        <a href="blog-single.html">
                          NEW LIFE CIVILIZATIONS TO BOLDLY
                        </a>
                      </h4>
                      <p className="separator">
                        To an English person, it will seem like simplified
                        English
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="contact" className="paddsection">
          <div className="container">
            <div className="contact-block1">
              <div className="row">
                <div className="col-lg-6">
                  <div className="contact-contact">
                    <h2 className="mb-30">GET IN TOUCH</h2>

                    <ul className="contact-details">
                      <li>
                        <span>23 Main, Street</span>
                      </li>
                      <li>
                        <span>Navoiy City</span>
                      </li>
                      <li>
                        <span>+998 88 068 7073</span>
                      </li>
                      <li>
                        <span>newfayozbek1@gmail.com</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6">
                  <form
                    action="forms/contact.php"
                    method="post"
                    role="form"
                    className="php-email-form"
                  >
                    <div className="row gy-3">
                      {/* <div className="col-lg-6">
                        <div className="form-group contact-block1">
                          <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group">
                          <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                        </div>
                      </div> */}
                      <div className="col-lg-12">
                        <h3>Admin massage</h3>
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            name="message"
                            placeholder="Message"
                            required
                          ></textarea>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">
                          Your message has been sent. Thank you!
                        </div>
                      </div>

                      <div className="mt-0">
                        <input
                          type="submit"
                          className="btn btn-defeault btn-send"
                          value="Send message"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div id="footer" className="text-center">
        <div className="container">
          <div className="socials-media text-center">
            <ul className="list-unstyled">
              <li>
                <a href="https://www.facebook.com/profile.php?id=61550333675370">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/fayozbekhamidov7073/">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-Linkedin"></i>
                </a>
              </li>
            </ul>
          </div>

          <p>&copy; Copyrights Folio. All rights reserved.</p>

          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </div>

      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>

      <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
      <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
      <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
      <script src="assets/vendor/typed.js/typed.umd.js"></script>
      <script src="assets/vendor/php-email-form/validate.js"></script>

      <script src="assets/js/main.js"></script>
    </Box>
  );
};

export default Portfolio;
