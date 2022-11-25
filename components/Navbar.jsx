import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <header className="main-header">
        <div className="header-upper">
          <div className="container-fluid clearfix">
            <div className="header-inner d-flex align-items-center justify-content-between">
              <div className="logo-outer d-lg-flex align-items-center">
                <div className="logo">
                  <Link href="index.html">
                    <img
                      className="w-50"
                      src="/assets/images/K%20Full%20logo.svg"
                      alt="Logo"
                      title="Logo"
                    />{" "}
                  </Link>
                </div>

                {/* <!-- <select name="select-languages" id="select-languages">
                                            <option value="Spanish">Spanish</option>
                                            <option value="English">English</option>
            
                                        </select> --> */}
              </div>

              <div className="nav-outer clearfix">
                <nav className="main-menu navbar-expand-lg">
                  <div className="navbar-header">
                    <div className="mobile-logo br-10 p-15">
                      <Link href="index.html">
                        <img
                          className="w-100"
                          src="./assets/images/K Full logo.svg"
                          alt="Logo"
                          title="Logo"
                        />
                      </Link>
                    </div>

                    <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                    >
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </div>

                  <div className="navbar-collapse collapse clearfix">
                    <ul className="navigation clearfix ">
                      <li>
                        <Link
                          className="text-decoration-none"
                          href="https://experts.mekambio.com/s?q="
                        >
                          Acceso a la Plataforma
                        </Link>
                      </li>
                      <li>
                        <Link
                          className=" text-decoration-none"
                          href="how-to-use"
                        >
                          Cómo funciona
                        </Link>
                      </li>
                      <li>
                        <Link className=" text-decoration-none" href="/blogs">
                          Blog
                        </Link>
                      </li>

                      <li>
                        <Link className=" text-decoration-none" href="services">
                          Servicios
                        </Link>
                      </li>
                      <li>
                        <Link className=" text-decoration-none" href="/aboutus">
                          Quiénes somos
                        </Link>
                      </li>
                      <li></li>
                    </ul>

                    <div className="menu-sidebar">
                      <button>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="hidden-bar">
        <div className="inner-box text-center">
          <div className="cross-icon">
            <span className="fa fa-times"></span>
          </div>
          <div className="title">
            <h4>Solicita Información </h4>
          </div>

          <div className="appointment-form">
            <form method="post" action="#">
              <div className="form-group">
                <input
                  type="text"
                  name="text"
                  value=""
                  placeholder="Nombre"
                  required=""
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="text"
                  value=""
                  placeholder="Apellidos"
                  required=""
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value=""
                  placeholder="Email"
                  required=""
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  name="number"
                  value=""
                  placeholder="teléfono"
                  required=""
                />
              </div>

              <div className="form-group">
                <button type="submit" className="theme-btn">
                  Enviar
                </button>
              </div>
            </form>
          </div>

          <div className="social-style-one">
            <Link href="https://www.linkedin.com/company/meKambio/?viewAsMember=true">
              <i className="fab fa-linkedin-in"></i>
            </Link>
            <Link href="https://www.instagram.com/meKambio_/">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link href="https://www.facebook.com/meKambio">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link href="https://www.youtube.com/channel/UCIBlyqcrLRLlkb0_JpDqNaQ?app=desktop&amp;cbrd=1">
              <i className="fab fa-youtube"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
