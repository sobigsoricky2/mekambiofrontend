import React from "react";
import Image from "next/image";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import Link from "next/link";

const Experts = () => {
  return (
    <Layout>
      <Banner
        title={"Conviértete en Expert"}
        para="Forma parte del equipo y crece profesionalmente con nosotros"
      />

      <>
        <section className="join-our-team-area pt-120 rpt-90">
          <div className="container">
            <div className="row align-items-center large-gap">
              <div className="col-lg-6">
                <div
                  className="join-our-team-content rmb-75 wow fadeInLeft delay-0-2s animated"
                  style={{ visibility: "visible", animationName: "fadeInLeft" }}
                >
                  <div className="section-title mb-20">
                    <span className="sub-title-two">
                      Únete a nuestro equipo
                    </span>
                    <h2>Encuentra la Solución que se Adapte a ti</h2>
                  </div>
                  <p>
                    Únete a nuestro equipo como Expert y ayuda a otros
                    profesionales a mejorar su rendimiento profesional,
                    maximizar su potencial y liderar sus carreras. A través de
                    sesiones de coaching y mentoring podrás poner en práctica tu
                    experiencia y conocimiento, así como seguir ganando
                    experiencia como coach o mentor.
                  </p>
                  <ul className="list-style-three pt-25 pb-20">
                    <li>
                      <div className="content">
                        <h5>Incrementa tu Experiencia</h5>
                        <p>Desarrolla tus habilidades como coach o mentor.</p>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <h5>Visibilidad</h5>
                        <p>
                          No te preocupes por la captación de clientes. Nosotros
                          lo hacemos por ti.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <h5>Ahorro €</h5>
                        <p>Toda tu activdad en una sola plataforma.</p>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <h5>Privacidad</h5>
                        <p>
                          Plataforma de pago 100% segura. Protección total de
                          tus datos personales.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <Link
                    href="https://experts.mekambio.com/es-ES/expert_signup"
                    className="theme-btn"
                  >
                    Únete al Equipo <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="join-our-team-image-part pt-5 wow fadeInRight delay-0-2s animated"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInRight",
                  }}
                >
                  <div className="image-one">
                    <img
                      loading="lazy"
                      src="/assets/images/instructor/join-team1.jpg"
                      alt="Join Our Team"
                    />
                  </div>
                  <div className="image-two">
                    <img
                      loading="lazy"
                      src="/assets/images/instructor/join-team2.jpg"
                      alt="Join Our Team"
                    />
                    <img
                      loading="lazy"
                      src="/assets/images/instructor/join-team3.jpg"
                      alt="Join Our Team"
                    />
                  </div>
                  <div className="years-of-experience pl-3 ">
                    <b>250+</b>
                    <span>Usuarios Internacionales </span>
                  </div>
                  <span className="bg-text">meKambio</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="rules-condition-area pt-130 rpt-90">
          <div className="container">
            <div className="row align-items-center large-gap">
              <div className="col-lg-6">
                <div
                  className="rules-condition-content rmb-50 wow fadeInLeft delay-0-2s animated"
                  style={{ visibility: "visible", animationName: "fadeInLeft" }}
                >
                  <div className="section-title">
                    <span className="sub-title-two">
                      Tus Beneficios como Expert
                    </span>
                    <h2>Todo lo que necesitas está aquí</h2>
                  </div>
                  <ul className="list-style-three pt-10">
                    <li>
                      <div className="content">
                        <h5>Perfiles Personalizados</h5>
                        <p>
                          Personaliza tu perfil con tu descripción profesional y
                          el valor que puedes aportar.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <h5>Programa de Fidelización</h5>
                        <p>
                          Obtén valoraciones y comentarios de tus clientes y
                          colócate en las primeras posiciones.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <h5>Flexibilidad en tu Actividad</h5>
                        <p>
                          Tú decides el precio, duración y programación de tus
                          sesiones, para que puedas adaptarlo a todo tipo de
                          usuarios.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <h5>Sesiones Personalizadas</h5>
                        <p>
                          Tú defines el contenido de las sesiones y ajustas
                          según las necesidades de tus clientes.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <h5>Sesiones en Grupo</h5>
                        <p>
                          Crea sesiones para múltiples asistentes y
                          promociónalas dentro y fuera de la plataforma.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <h5>Accesibilidad</h5>
                        <p>
                          Accede desde todos tus dispositivos a través de la web
                          y las Apps de IOs y Android.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <h5>Control de Actividad</h5>
                        <p>Accede a reportes de actividad en tu perfil.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="rules-condition-image-part wow fadeInRight delay-0-2s animated"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInRight",
                  }}
                >
                  <div className="row align-items-center">
                    <div className="col-7">
                      <img
                        loading="lazy"
                        src="/assets/images/about/rules-condition1.jpg"
                        alt="Rules"
                      />
                    </div>
                    <div className="col-5">
                      <img
                        loading="lazy"
                        src="/assets/images/about/rules-condition2.jpg"
                        alt="Rules"
                      />
                    </div>
                  </div>
                  <div className="logo bg-transparent">
                    <img
                      loading="lazy"
                      style={{ borderRadius: "50%" }}
                      src="/assets/images/logo-icono-.png"
                      alt="Logo"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2 mb-5 text-center">
              <Link
                href="https://experts.mekambio.com/es-ES/expert_signup"
                className="theme-btn mt-3"
              >
                Únete al Equipo
                <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </section>
        <section className="partner-section rel z-1  pt-50 rpt-90 pb-50 rpb-55">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div
                  className="categories-content mb-50 wow fadeInRight delay-0-2s animated"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInRight",
                  }}
                >
                  <div className="section-title mb-25">
                    <span className="sub-title-two">Global Partners</span>
                    <h2>Empresas que confían en nosotros </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="logo-inner style-two wow fadeInLeft delay-0-2s animated"
                  style={{ visibility: "visible", animationName: "fadeInLeft" }}
                >
                  <div className="logo-item w-25">
                    <Link href="https://www.upc.edu/ca">
                      <img
                        loading="lazy"
                        src="/assets/images/client-logos/UPC.png"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25">
                    <Link href="https://epseb.upc.edu/ca">
                      <img
                        loading="lazy"
                        src="/assets/images/client-logos/EPSEB.jpg"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25">
                    <Link href="https://www.eae.es">
                      <img
                        loading="lazy"
                        src="/assets/images/client-logos/EAE Business School.PNG"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25">
                    <Link href="https://www.threepoints.com">
                      <img
                        loading="lazy"
                        className="w-50"
                        src="/assets/images/client-logos/Three Points, The school for Digital Business.jfif"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25">
                    <Link href="https://www.inesdi.com">
                      <img
                        loading="lazy"
                        className="w-75"
                        src="/assets/images/client-logos/Inesdi Digital Business School.jfif"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25">
                    <Link href="https://www.deustoformacion.com">
                      <img
                        loading="lazy"
                        src="/assets/images/client-logos/DFO-Logotipo-Pantalla.png"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="pricing-section bg-lighter rel z-2 pt-120 rpt-90 pb-100 rpb-70">
      <div className="container">
          <div className="section-title text-center mb-50">
              <span className="sub-title-two">Plan de Precios </span>
              <h2>Planes de Suscripción </h2>
          </div>
          <div className="row justify-content-center">

              <div className="col-xl-4 col-md-6">
                  <div className="pricin-item wow fadeInUp delay-0-4s animated animated" style="visibility: visible; animation-name: fadeInUp;">
                      <span className="popularity">popular</span>
                      <div className="icon">
                          <img  loading="lazy" width="auto" height="auto"style="border-radius:50% ;" className="w-75" src="/assets/images/pricing/Basic Suscription.png" alt="Icon">
                      </div>
                      <h4>Basic </h4>
                      <ul className="list-style-two">
                          <li>Precio Subscripción : 0€</li>
                          <li>Duración : 1 año </li>
                          <li>Anuncios Destacados : -</li>
                          <li>Sesiones 1on1 "Citas" : 12</li>
                          <li>Evento "Sesiones": 2</li>
                          <li>Comisión : 20%</li>
                      </ul>
                      <span className="price">0</span>
                      <Link href="pricing " className="theme-btn style-two">Elige el plan <i className="fas fa-arrow-right"></i></Link>
                  </div>
              </div>
              <div className="col-xl-4 col-md-6 pr-0">
                  <div className="pricin-item wow fadeInUp delay-0-6s animated animated" style="visibility: visible; animation-name: fadeInUp;">
                      <span className="popularity">popular</span>
                      <div className="icon">
                          <img  loading="lazy" width="auto" height="auto"style="border-radius:50% ;" className="w-75" src="/assets/images/pricing/K_Advanced Subscription.png" alt="Icon">
                      </div>
                      <h4>Advance </h4>
                      <ul className="list-style-two">
                          <li>Precio Subscripción : 99.90€</li>
                          <li>Duración: - 1 año </li>
                          <li>Anuncios Destacados : -</li>
                          <li>Sesiones 1on1 "Citas" : 60</li>
                          <li>Evento "Sesiones": 4</li>
                          <li>Comisión : 15%</li>
                      </ul>
                      <span className="price">8.21</span>
                      <Link href="pricing " className="theme-btn style-two">Elige el plan  <i className="fas fa-arrow-right"></i></Link>
                  </div>
              </div>
              <div className="col-xl-4 col-md-6 pr-0">
                  <div className="pricin-item wow fadeInUp delay-0-2s animated animated" style="visibility: visible; animation-name: fadeInUp;">
                      <span className="popularity">popular</span>
                      <div className="icon">
                          <img  loading="lazy" width="auto" height="auto"style="border-radius:50% ;" className="w-75" src="/assets/images/pricing/K_Premium Suscription.png" alt="Icon">
                      </div>
                      <h4>Premium </h4>
                      <ul className="list-style-two">
                          <li>Precio Subscripción : 149.90€</li>
                          <li>Duración: 1 año </li>
                          <li>Anuncios Destacados : 2</li>
                          <li>Sesiones 1on1 "Citas" : 175</li>
                          <li>Evento "Sesiones": 16</li>
                          <li>Comisión : 15%</li>
                      </ul>
                      <span className="price">12.32</span>
                      <Link href="pricing " className="theme-btn style-two">Elige el plan  <i className="fas fa-arrow-right"></i></Link>
                  </div>
              </div>
              
          </div>
      </div>
  </section> */}
        <div className="mt-2 mb-5 text-center" style={{ marginBottom: 30 }}>
          <Link href="pricing " className="theme-btn mt-3 mb-50">
            Ver Planes de Suscripción
            <i className="fas fa-arrow-right" />
          </Link>
        </div>
      </>
    </Layout>
  );
};

export default Experts;
