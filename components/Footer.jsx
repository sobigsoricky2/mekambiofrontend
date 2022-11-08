import React from "react";

const Footer = () => {
  return (
    <div>
      {/* ===== */}
      <section class="testimonials-section-two my-80 rel z-1 wow fadeInUp delay-0-2s">
        <div class="container">
          <div class="testimonial-two-wrap">
            <div class="testimonial-item-two">
              <div class="testimonial-author-two">
                <img
                  class="w-100"
                  src="/assets/images/testimonials/testimonial-two2.jfif"
                  alt="Author"
                />
              </div>
              <div class="testimonial-content-two">
                <div class="designation">
                  <h3>Marta Bordera</h3>
                  <span>Directora de Comunicación y Brand Strategist</span>
                </div>
                <p>
                  Después de diez años en el mismo sector profesional, el
                  conformismo y la falta de proyección profesional me hicieron
                  replantear mi futuro laboral seriamente, para recalcular mi
                  nueva ruta conté con los profesionales de meKambio, con los
                  cuales gané la confianza en mí misma que necesitaba para
                  proyectarme de nuevo, valorar nuevas oportunidades, poner en
                  valor mis puntos fuertes, salir de mi zona de confort y pasar
                  a la acción...En una par de meses conseguí nuevo trabajo, y no
                  solamente eso ya que he triplicado mis ingresos y me siento
                  valorada por el equipo y mis coordinadores
                </p>
                <div class="ratting">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
            </div>
            <div class="testimonial-item-two">
              <div class="testimonial-author-two">
                <img
                  src="/assets/images/testimonials/Meritxell Boluda.jfif"
                  alt="Author"
                />
              </div>
              <div class="testimonial-content-two">
                <div class="designation">
                  <h3>Meritxell Boluda</h3>
                  <span>HR Business Partner</span>
                </div>
                <p>
                  Eduard y su equipo me ayudaron en un momento de desorientación
                  laboral a establecer las bases para encontrar un proyecto
                  motivador, acorde con mis intereses. Lo recomiendo sin dudar.
                </p>
                <div class="ratting">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
            </div>
            <div class="testimonial-item-two">
              <div class="testimonial-author-two">
                <img
                  src="/assets/images/testimonials/JorgeDolz.Testimonial.png"
                  alt="Author"
                />
              </div>
              <div class="testimonial-content-two">
                <div class="designation">
                  <h3>Jorge Dolz</h3>
                  <span>Owner and Business Manager en JDZ</span>
                </div>
                <p>
                  meKambio fomenta el aprendizaje en base a compartir
                  conocimiento. Utilizo la plataforma como usuario y como expert
                  y estoy encantado con la experiencia. Además de aprender de
                  otras personas y de su trayectoria, desarrollo mi networking
                  profesional.
                </p>
                <div class="ratting">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
            </div>
            <div class="testimonial-item-two">
              <div class="testimonial-author-two">
                <img
                  src="/assets/images/testimonials/Alejandro Garrido.png"
                  alt="Author"
                />
              </div>
              <div class="testimonial-content-two">
                <div class="designation">
                  <h3>Alejandro Garrido</h3>
                  <span>Retail Multichannel Industry Manager at Google</span>
                </div>
                <p>
                  Gran plataforma de ayuda a profesionales. En un mundo laboral
                  cada vez más complejo, poder contar con grandes profesionales
                  para contar con su experiencia e incluso tener la posibilidad
                  de desarrollar tus capacidades a través del coaching es clave.
                </p>
                <div class="ratting">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== */}

      <footer class="main-footer bg-blue">
        <div class="container">
          <div
            style={{ marginTop: "450px" }}
            class="footer-newsletter br-10 bg-lighter"
          >
            <div class="row">
              <div class="col-lg-6">
                <div
                  class="newsletter-video bgs-cover overlay wow fadeInLeft delay-0-2s animated animated animated"
                  style={{
                    backgroundImage:
                      "url(/assets/images/video/footer-video-bg.jpg)",
                    visibility: "visible",
                    animationName: "fadeInLeft",
                  }}
                >
                  <a
                    href="https://www.youtube.com/watch?v=smbwVTieDJk"
                    class="mfp-iframe video-play"
                  >
                    <i class="fas fa-play"></i>
                  </a>
                </div>
              </div>
              <div class="col-lg-6 align-self-center">
                <div
                  class="newsletter-content wow fadeInRight delay-0-2s animated animated animated"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInRight",
                  }}
                >
                  <div class="section-title mb-20">
                    <span class="sub-title-two">Newsletters</span>
                    <h2>Suscríbete para estar al día de nuestros servicios</h2>
                  </div>
                  <form class="newsletter-form mt-25" action="#">
                    <div class="newsletter-radios mb-25">
                      <div class="custom-control custom-radio">
                        <input
                          type="radio"
                          class="custom-control-input"
                          id="hero-wekly"
                          name="example1"
                          checked=""
                        />
                        <label class="custom-control-label" for="hero-wekly">
                          Publicaciones Mensuales
                        </label>
                      </div>
                    </div>
                    <div class="newsletter-email">
                      <label for="email">
                        <i class="far fa-envelope"></i>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="email"
                        required=""
                      />
                      <button type="submit" class="theme-btn style-two">
                        Enviar<i class="fas fa-arrow-right"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-between text-white pt-75">
            <div class="col-lg-3 col-sm-4">
              <div class="footer-widget about-widget">
                <h5 class="footer-title">Solicita Información </h5>
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

                  <div class="form-group text-center">
                    <button type="submit" class="theme-btn border pt-2 pb-2">
                      Enviar
                    </button>
                  </div>
                </form>
                <h5 class="pt-5">Síguenos</h5>
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
                <div class="mt-4">
                  <a href="download.html">Descarga las Apps de meKambio </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-4">
              <div class="footer-widget menu-widget">
                <a href="categories.html">
                  {" "}
                  <h5 class="footer-title">Áreas</h5>
                </a>
                <ul>
                  <li>
                    <a href="./categories.html#sec-1">Progresión de Carrera</a>
                  </li>
                  <li>
                    <a href="./categories.html#sec-2">Cambio de Carrera</a>
                  </li>
                  <li>
                    <a href="./categories.html#sec-3">
                      Acceso al Mercado Laboral
                    </a>
                  </li>
                  <li>
                    <a href="./categories.html#sec-4">
                      Impulso Internacional de tu Carrera
                    </a>
                  </li>
                  <li>
                    <a href="./categories.html#sec-5">Emprendimiento</a>
                  </li>
                  <li>
                    <a href="./categories.html#sec-5">
                      Regresa al Mercado Laboral
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-3 col-md-3 col-sm-4">
              <div class="footer-widget menu-widget">
                <h5 class="footer-title">
                  <a href="./services.html">Servicios</a>
                </h5>
                <ul>
                  <li>
                    <a href="services.html#sec-1">Para Profesionales</a>
                  </li>
                  <li>
                    <a href="services.html#sec-2">Para Coaches y Mentores</a>
                  </li>
                  <li>
                    <a href="services.html#sec-3">
                      Para Empresas y sus Equipos
                    </a>
                  </li>
                  <li>
                    <a href="services.html#sec-4">
                      Para Empresas y sus Clientes
                    </a>
                  </li>
                  <li>
                    <a href="experts.html">Únete al equipo</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-4">
              <div class="footer-widget menu-widget">
                <h5 class="footer-title">Recursos</h5>
                <ul>
                  <li>
                    <a href="faq.html">FAQ's</a>
                  </li>
                  <li>
                    <a href="how-to.use.html">Cómo Funciona</a>
                  </li>
                  <li>
                    <a href="support.html">Centro de Soporte</a>
                  </li>
                  <li>
                    <a href="refund-policy.html">Política de Privacidad</a>
                  </li>
                  <li>
                    <a href="terms.html">Términos de Uso</a>
                  </li>
                  <li>
                    <a href="refund-policy.html">
                      Reembolsos y Política de Pago
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright-area bg-dark-blue text-white rel">
          <div class="container">
            <div class="copyright-inner">
              <p>
                © 2021-2022 <a href="index.html">meKambio</a> All rights
                reserved.
              </p>
              <ul class="footer-menu">
                <li>
                  <a href="about-us.html">Quiénes somos </a>
                </li>
                <li>
                  <a href="services.html">meKambio Corporate </a>
                </li>
              </ul>
            </div>
          </div>

          <button
            class="scroll-top scroll-to-target"
            data-target="html"
            style={{ display: "inline-block" }}
          >
            <span class="fas fa-angle-double-up"></span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
