import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <header class="main-header">
        <div class="header-upper">
          <div class="container-fluid clearfix">
            <div class="header-inner d-flex align-items-center justify-content-between">
              <div class="logo-outer d-lg-flex align-items-center">
                <div class="logo">
                  <a href="index.html">
                    <img
                      class="w-50"
                      src="/assets/images/K%20Full%20logo.svg"
                      alt="Logo"
                      title="Logo"
                    />{" "}
                  </a>
                </div>

                {/* <!-- <select name="select-languages" id="select-languages">
                                            <option value="Spanish">Spanish</option>
                                            <option value="English">English</option>
            
                                        </select> --> */}
              </div>

              <div class="nav-outer clearfix">
                <nav class="main-menu navbar-expand-lg">
                  <div class="navbar-header">
                    <div class="mobile-logo br-10 p-15">
                      <a href="index.html">
                        <img
                          class="w-100"
                          src="./assets/images/K Full logo.svg"
                          alt="Logo"
                          title="Logo"
                        />
                      </a>
                    </div>

                    <button
                      type="button"
                      class="navbar-toggle"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                    >
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </button>
                  </div>

                  <div class="navbar-collapse collapse clearfix">
                    <ul class="navigation clearfix ">
                      <li>
                        <a
                          class="text-decoration-none"
                          href="https://experts.mekambio.com/s?q="
                        >
                          Acceso a la Plataforma
                        </a>
                      </li>
                      <li>
                        <a class=" text-decoration-none" href="how-to.use.html">
                          Cómo funciona
                        </a>
                      </li>
                      <li>
                        <a class=" text-decoration-none" href="services.html">
                          Servicios
                        </a>
                      </li>

                      <li>
                        <Link class=" text-decoration-none" href="blog">
                          Blog
                        </Link>
                      </li>
                      <li>
                        <a class=" text-decoration-none" href="/about-us.html">
                          Quiénes somos
                        </a>
                      </li>
                    </ul>
                    <div class="menu-sidebar">
                      <button>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                      </button>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section class="hidden-bar">
        <div class="inner-box text-center">
          <div class="cross-icon">
            <span class="fa fa-times"></span>
          </div>
          <div class="title">
            <h4>Solicita Información </h4>
          </div>

          <div class="appointment-form">
            <form method="post" action="#">
              <div class="form-group">
                <input
                  type="text"
                  name="text"
                  value=""
                  placeholder="Nombre"
                  required=""
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="text"
                  value=""
                  placeholder="Apellidos"
                  required=""
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  name="email"
                  value=""
                  placeholder="Email"
                  required=""
                />
              </div>
              <div class="form-group">
                <input
                  type="number"
                  name="number"
                  value=""
                  placeholder="teléfono"
                  required=""
                />
              </div>

              <div class="form-group">
                <button type="submit" class="theme-btn">
                  Enviar
                </button>
              </div>
            </form>
          </div>

          <div class="social-style-one">
            <a href="https://www.linkedin.com/company/meKambio/?viewAsMember=true">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/meKambio_/">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/meKambio">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCIBlyqcrLRLlkb0_JpDqNaQ?app=desktop&amp;cbrd=1">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
