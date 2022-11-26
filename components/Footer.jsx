import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";

const Footer = () => {
  const [email, setEmail] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    formEmail: "",
    phone: "",
  });
  const handleFormdataChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormDataSubmit = async (e) => {
    e.preventDefault();
    const res2 = await fetch("/api/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    console.log(res2);
    const res = await fetch("/api/googlesheetsFormData", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    console.log(res);
    if (res2.status == 200 && res.status == 200) {
      alert("Subscriber Added and Email Sent");
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/googlesheets", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });
    const res2 = await fetch("/api/mailRelay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": "ukRNKGy1FZxNajq6NKAVMqsh1URk5xg85LDsfHac",
      },
      body: JSON.stringify({ email: email }),
    });
    if (res.status == 200) {
      alert("Subscriber Added");
    }
    console.log(res2);
    try {
      // sendSheetsData({ email: email });
    } catch (error) {
      console.log(error);
    }
  };

  const { name, formEmail, surname, phone } = formData;

  return (
    <div>
      {/* ===== */}
      {/* <section className="testimonials-section-two my-80 rel z-1 wow fadeInUp delay-0-2s">
        <div className="container">
          <div className="testimonial-two-wrap">
            <div className="testimonial-item-two">
              <div className="testimonial-author-two">
                <img
                  className="w-100"
                  src="/assets/images/testimonials/testimonial-two2.jfif"
                  alt="Author"
                />
              </div>
              <div className="testimonial-content-two">
                <div className="designation">
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
                <div className="ratting">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
            <div className="testimonial-item-two">
              <div className="testimonial-author-two">
                <img
                  src="/assets/images/testimonials/Meritxell Boluda.jfif"
                  alt="Author"
                />
              </div>
              <div className="testimonial-content-two">
                <div className="designation">
                  <h3>Meritxell Boluda</h3>
                  <span>HR Business Partner</span>
                </div>
                <p>
                  Eduard y su equipo me ayudaron en un momento de desorientación
                  laboral a establecer las bases para encontrar un proyecto
                  motivador, acorde con mis intereses. Lo recomiendo sin dudar.
                </p>
                <div className="ratting">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
            <div className="testimonial-item-two">
              <div className="testimonial-author-two">
                <img
                  src="/assets/images/testimonials/JorgeDolz.Testimonial.png"
                  alt="Author"
                />
              </div>
              <div className="testimonial-content-two">
                <div className="designation">
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
                <div className="ratting">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
            <div className="testimonial-item-two">
              <div className="testimonial-author-two">
                <img
                  src="/assets/images/testimonials/Alejandro Garrido.png"
                  alt="Author"
                />
              </div>
              <div className="testimonial-content-two">
                <div className="designation">
                  <h3>Alejandro Garrido</h3>
                  <span>Retail Multichannel Industry Manager at Google</span>
                </div>
                <p>
                  Gran plataforma de ayuda a profesionales. En un mundo laboral
                  cada vez más complejo, poder contar con grandes profesionales
                  para contar con su experiencia e incluso tener la posibilidad
                  de desarrollar tus capacidades a través del coaching es clave.
                </p>
                <div className="ratting">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ===== */}

      <footer className="main-footer bg-blue">
        <div className="container">
          <div
            style={{ marginTop: "450px" }}
            className="footer-newsletter br-10 bg-lighter"
          >
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="newsletter-video bgs-cover overlay wow fadeInLeft delay-0-2s animated animated animated"
                  style={{
                    backgroundImage:
                      "url(/assets/images/video/footer-video-bg.jpg)",
                    visibility: "visible",
                    animationName: "fadeInLeft",
                  }}
                >
                  <Link
                    href="https://www.youtube.com/watch?v=smbwVTieDJk"
                    className="mfp-iframe video-play"
                  >
                    <i className="fas fa-play"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div
                  className="newsletter-content wow fadeInRight delay-0-2s animated animated animated"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInRight",
                  }}
                >
                  <div className="section-title mb-20">
                    <span className="sub-title-two">Newsletters</span>
                    <h2>Suscríbete para estar al día de nuestros servicios</h2>
                  </div>
                  <form
                    className="newsletter-form mt-25"
                    onSubmit={(e) => handleSubmit(e)}
                  >
                    <div className="newsletter-radios mb-25">
                      <div className="custom-control custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input"
                          id="hero-wekly"
                          checked=""
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="hero-wekly"
                        >
                          Publicaciones Mensuales
                        </label>
                      </div>
                    </div>
                    <div className="newsletter-email">
                      <label htmlFor="email">
                        <i className="far fa-envelope"></i>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="email"
                        required=""
                        name="email"
                        value={email}
                        onChange={(e) => handleChange(e)}
                      />
                      <button type="submit" className="theme-btn style-two">
                        Enviar<i className="fas fa-arrow-right"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-between text-white pt-75">
            <div className="col-lg-3 col-sm-4">
              <div className="footer-widget about-widget">
                <h5 className="footer-title">Solicita Información </h5>
                <form method="post" onSubmit={(e) => handleFormDataSubmit(e)}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      value={name}
                      placeholder="Nombre"
                      required=""
                      onChange={(e) => handleFormdataChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="surname"
                      value={surname}
                      placeholder="Apellidos"
                      required=""
                      onChange={(e) => handleFormdataChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="formEmail"
                      value={formEmail}
                      placeholder="Email"
                      required=""
                      onChange={(e) => handleFormdataChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      name="phone"
                      value={phone}
                      placeholder="teléfono"
                      required=""
                      onChange={(e) => handleFormdataChange(e)}
                    />
                  </div>

                  <div className="form-group text-center">
                    <button
                      type="submit"
                      className="theme-btn border pt-2 pb-2"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
                <h5 className="pt-5">Síguenos</h5>
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
                <div className="mt-4">
                  <Link href="download ">Descarga las Apps de meKambio</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4">
              <div className="footer-widget menu-widget">
                <Link href="categories">
                  {" "}
                  <h5 className="footer-title">Áreas</h5>
                </Link>
                <ul>
                  <li>
                    <Link href="./categories#sec-1">Progresión de Carrera</Link>
                  </li>
                  <li>
                    <Link href="./categories#sec-2">Cambio de Carrera</Link>
                  </li>
                  <li>
                    <Link href="./categories#sec-3">
                      Acceso al Mercado Laboral
                    </Link>
                  </li>
                  <li>
                    <Link href="./categories#sec-4">
                      Impulso Internacional de tu Carrera
                    </Link>
                  </li>
                  <li>
                    <Link href="./categories#sec-5">Emprendimiento</Link>
                  </li>
                  <li>
                    <Link href="./categories#sec-5">
                      Regresa al Mercado Laboral
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-4">
              <div className="footer-widget menu-widget">
                <h5 className="footer-title">
                  <Link href="./services ">Servicios</Link>
                </h5>
                <ul>
                  <li>
                    <Link href="services#sec-1">Para Profesionales</Link>
                  </li>
                  <li>
                    <Link href="services#sec-2">Para Coaches y Mentores</Link>
                  </li>
                  <li>
                    <Link href="services#sec-3">
                      Para Empresas y sus Equipos
                    </Link>
                  </li>
                  <li>
                    <Link href="services#sec-4">
                      Para Empresas y sus Clientes
                    </Link>
                  </li>
                  <li>
                    <Link href="experts ">Únete al equipo</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4">
              <div className="footer-widget menu-widget">
                <h5 className="footer-title">Recursos</h5>
                <ul>
                  <li>
                    <Link href="faq ">FAQs</Link>
                  </li>
                  <li>
                    <Link href="how-to-use ">Cómo Funciona</Link>
                  </li>
                  <li>
                    <Link href="support ">Centro de Soporte</Link>
                  </li>
                  <li>
                    <Link href="refund-policy ">Política de Privacidad</Link>
                  </li>
                  <li>
                    <Link href="terms ">Términos de Uso</Link>
                  </li>
                  <li>
                    <Link href="refund-policy ">
                      Reembolsos y Política de Pago
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area bg-dark-blue text-white rel">
          <div className="container">
            <div className="copyright-inner">
              <p>
                © 2021-2022 <Link href="index ">meKambio</Link> All rights
                reserved.
              </p>
              <ul className="footer-menu">
                <li>
                  <Link href="about-us ">Quiénes somos</Link>
                </li>
                <li>
                  <Link href="services ">meKambio Corporate</Link>
                </li>
              </ul>
            </div>
          </div>

          <button
            className="scroll-top scroll-to-target"
            data-target="html"
            style={{ display: "inline-block" }}
          >
            <span className="fas fa-angle-double-up"></span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
