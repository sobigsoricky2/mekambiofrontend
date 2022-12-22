import React from "react";
import Image from "next/image";

import Banner from "../components/Banner";
import Layout from "../components/Layout";
import Link from "next/link";
const Categories = () => {
  return (
    <Layout>
      <Banner title={"Áreas"} />
      <>
        <section className="features-section-three rel z-1 pt-110  pb-50 rpt-85 rpb-70">
          <div className="container">
            <div className="section-title text-center mb-55">
              <span className="sub-title-two">
                Pon foco en un área para empezar{" "}
              </span>
              <h2>Elige tu Objetivo Profesional </h2>
              <p>
                Cualquiera que sea tu objetivo profesional queremos ayudarte a
                conseguirlo. Tanto si sientes estancamiento profesional, que no
                evolucionas, o prefieres un cambio o acceder al mercado laboral,
                serán múltiples los beneficios que obtendrás si trabajas para
                cambiar tu situación.{" "}
              </p>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6">
                <div
                  className="feature-three-item wow fadeInUp delay-0-8s animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="icon">
                    <img
                      loading="lazy"
                      className="w-25"
                      src="./assets/images/categories/category icon_Get Back to Work.png"
                      alt="Icon"
                    />
                  </div>
                  <h4>Regreso al Mercado Laboral</h4>
                  <p>
                    Te ayudamos a ponerte al día de forma competitiva para
                    volver a trabajar.
                  </p>
                  <Link href="#sec-6" className="details-btn">
                    <i className="fas fa-long-arrow-alt-right" />
                  </Link>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div
                  className="feature-three-item wow fadeInUp delay-0-4s animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="icon">
                    <img
                      loading="lazy"
                      className="w-25"
                      src="./assets/images/categories/category icon_Make a Career Change.png"
                      alt="Icon"
                    />
                  </div>
                  <h4>Cambio de Trabajo</h4>
                  <p>
                    ¿Quieres cambiar el rumbo? Te ayudamos a llegar al puerto
                    que tú decidas.
                  </p>
                  <Link href="#sec-2" className="details-btn">
                    <i className="fas fa-long-arrow-alt-right" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div
                  className="feature-three-item wow fadeInUp delay-0-2s animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="icon">
                    <img
                      loading="lazy"
                      className="w-25"
                      src="./assets/images/categories/category icon_Career Progression.png"
                      alt="Icon"
                    />
                  </div>
                  <h4>Progresión de Carrera</h4>
                  <p>
                    Los mejores atletas, tienen un gran equipo detrás. Queremos
                    ser el tuyo.
                  </p>
                  <Link href="#sec-1" className="details-btn">
                    <i
                      className="fas fa-long-arrow-alt-right"
                      target="_blank"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div
                  className="feature-three-item wow fadeInUp delay-0-6s animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="icon">
                    <img
                      loading="lazy"
                      className="w-25"
                      src="./assets/images/categories/category icon_Entrepreneurship.png"
                      alt="Icon"
                    />
                  </div>
                  <h4>Emprendimiento</h4>
                  <p>
                    Si quieres empezar tu propia aventura, te acompañamos en el
                    camino.
                  </p>
                  <Link href="#sec-5" className="details-btn">
                    <i className="fas fa-long-arrow-alt-right" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div
                  className="feature-three-item wow fadeInUp delay-0-6s animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="icon">
                    <img
                      loading="lazy"
                      className="w-25"
                      src="./assets/images/categories/category icon_International Career Boost.png"
                      alt="Icon"
                    />
                  </div>
                  <h4>Impulso Internacional </h4>
                  <p>
                    Eléva tu Carrera internacionalmente. Te allanamos el proceso
                  </p>
                  <Link href="#sec-3" className="details-btn">
                    <i className="fas fa-long-arrow-alt-right" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div
                  className="feature-three-item wow fadeInUp delay-0-8s animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="icon">
                    <img
                      loading="lazy"
                      className="w-25"
                      src="./assets/images/categories/category icon_Starting Out in Your Career.png"
                      alt="Icon"
                    />
                  </div>
                  <h4>Empezando en tu Carrera Profesional</h4>
                  <p>
                    Accede al mercado laboral a lo grande, de la mano de los
                    mejores profesionales.{" "}
                  </p>
                  <Link href="#sec-4" className="details-btn">
                    <i className="fas fa-long-arrow-alt-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section End */}
        <section
          id="sec-1"
          className="rules-condition-area pt-100 pb-50 bg-blue text-white rpt-90"
        >
          <div className="container ">
            <div className="row align-items-center large-gap">
              <div className="col-lg-5">
                <div
                  className=" rules-condition-content rmb-50 wow fadeInLeft delay-0-2s animated animated"
                  style={{ visibility: "visible", animationName: "fadeInLeft" }}
                >
                  <div className="section-title">
                    <span className="sub-title-two">Progresión de Carrera</span>
                    <h2>Mejora en tu Trabajo</h2>
                  </div>
                  <ul className="list-style-three pt-10">
                    <li>
                      <div className="content">
                        <h5>Impulsa tu Carrera</h5>
                        <p>
                          Evoluciona profesionalmente, asciende y promociona a
                          los puestos que deseas.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <h5>Incrementa tu Rendimiento</h5>
                        <p>
                          Sácale mayor rendimiento a tu trabajo e incrementa tus
                          resultados e ingresos.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <h5>Aumenta tu Satisfacción Profesional</h5>
                        <p>
                          Aprende a disfrutar con lo que haces e invierte en
                          mejorar en lo que se te da bien.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7">
                <div
                  className="rules-condition-image-part wow fadeInRight delay-0-2s animated animated"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInRight",
                  }}
                >
                  <div className="row align-items-center">
                    <div className="col-7">
                      <img
                        loading="lazy"
                        src="https://iili.io/HzemurN.md.png"
                        alt="Rules"
                      />
                    </div>
                    <div className="col-5">
                      <img
                        loading="lazy"
                        src="https://iili.io/HzepacB.md.png"
                        alt="Rules"
                      />
                    </div>
                  </div>
             
                </div>
              </div>
            </div>
            <Link
              href="https://experts.mekambio.com/s?category=progresion-de-carrera&sort_by=3&view=grid"
              className="theme-btn border"
            >
              Encuentra a tu Expert
              <i className="fas fa-arrow-right" />
            </Link>
          </div>
        </section>
        <section id="sec-2" className="join-our-team-area pt-100 pb-50 rpt-90">
          <div className="container pt-50">
            <div className="row align-items-center large-gap">
              <div className="col-lg-6">
                <div
                  className="join-our-team-image-part pt-5 wow fadeInRight delay-0-2s animated animated"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInRight",
                  }}
                >
                  <div className="image-one">
                    <img
                      loading="lazy"
                      src="https://iili.io/HzeyBWJ.md.png"
                      alt="Join Our Team"
                    />
                  </div>
                  <div className="image-two">
                    <img
                      loading="lazy"
                      src="https://iili.io/Hzk9Bp9.md.jpg"
                      alt="Join Our Team"
                    />
                    <img
                      loading="lazy"
                      src="https://iili.io/Hzk9jpt.md.png"
                      alt="Join Our Team"
                    />
                  </div>
                  <span className="bg-text">meKambio</span>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="join-our-team-content rmb-75 wow fadeInLeft delay-0-2s animated animated"
                  style={{ visibility: "visible", animationName: "fadeInLeft" }}
                >
                  <div className="section-title mb-20">
                    <span className="sub-title-two">Cambio de Trabajo</span>
                    <h2>Redirige tu Carrera Profesional</h2>
                  </div>
                  <ul className="list-style-three pt-25 pb-20">
                    <li>
                      <div className="content">
                        <h5>Dedícate a lo que te apasiona</h5>
                        <p>
                        Tú decides empezar. Nosotros te mostraremos la ruta para lograrlo.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <h5>Focaliza en lo que mejor se adapte a ti</h5>
                        <p>
                        No renuncies a tus sueños. Centra toda tu energía en lo que te motiva.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <Link
                    href="https://experts.mekambio.com/s?category=cambio-de-carrera&sort_by=3&view=grid"
                    className="theme-btn"
                  >
                    Encuentra a tu Expert <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section End */}
        <section
          id="sec-3"
          className="rules-condition-area pt-100 pb-50 bg-blue text-white rpt-90"
        >
          <div className="container">
            <div className="row align-items-center large-gap">
              <div className="col-lg-5">
                <div
                  className="rules-condition-content rmb-50 wow fadeInLeft delay-0-2s animated animated"
                  style={{ visibility: "visible", animationName: "fadeInLeft" }}
                >
                  <div className="section-title">
                    <span className="sub-title-two">
                      Impulso Internacional de tu Carrera
                    </span>
                    <h2>Escala Profesionalmente con un Salto Internacional</h2>
                  </div>
                  <ul className="list-style-three pt-10">
                    <li>
                      <div className="content">
                        <h5>Networking Internacional</h5>
                        <p>
                        Expande tu proyección profesional a nivel internacional. Aprende a desarrollar y cultivar tu red de contactos
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <h5>Conoce nuevos Mercados</h5>
                        <p>
                          Aprende de otros entornos económicos, nútrete del
                          conocimiento internacional de nuestros Experts e
                          impulsa tu carrera.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <h5>Crece Personal y Profesionalmente</h5>
                        <p>
                          Trabajar en el extranjero te permitirá conocer nuevas
                          culturas y formas de hacer. Crecerás como profesional
                          y persona.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7">
                <div
                  className="rules-condition-image-part wow fadeInRight delay-0-2s animated animated"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInRight",
                  }}
                >
                  <div className="row align-items-center">
                    <div className="col-7">
                      <img
                        loading="lazy"
                        src="./assets/images/about/rules-condition1.jpg"
                        alt="Rules"
                      />
                    </div>
                    <div className="col-5">
                      <img
                        loading="lazy"
                        src="./assets/images/about/rules-condition2.jpg"
                        alt="Rules"
                      />
                    </div>
                  </div>
              
                </div>
              </div>
            </div>
            <Link
              href="https://experts.mekambio.com/s?category=impulso-internacional-de-tu-carrera&sort_by=3&view=grid"
              className="theme-btn border"
            >
              Encuentra a tu Expert
              <i className="fas fa-arrow-right" />
            </Link>
          </div>
        </section>
        <section id="sec-4" className="join-our-team-area pt-100 pb-50 rpt-90">
          <div className="container">
            <div className="row align-items-center large-gap">
              <div className="col-lg-6">
                <div
                  className="join-our-team-image-part pt-5 wow fadeInRight delay-0-2s animated animated"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInRight",
                  }}
                >
                  <div className="image-one">
                    <img
                      loading="lazy"
                      src="https://iili.io/HzkFNu2.png"
                      alt="Join Our Team"
                    />
                  </div>
                  <div className="image-two">
                    <img
                      loading="lazy"
                      src=" https://iili.io/HzkfRbp.jpg"
                      alt="Join Our Team"
                    />
                    <img
                      loading="lazy"
                      src="https://iili.io/HzkKTtS.md.png"
                      alt="Join Our Team"
                    />
                  </div>
                  <span className="bg-text">meKambio</span>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="join-our-team-content rmb-75 wow fadeInLeft delay-0-2s animated animated"
                  style={{ visibility: "visible", animationName: "fadeInLeft" }}
                >
                  <div className="section-title mb-20">
                    <span className="sub-title-two">
                      Empezando en tu Carrera Profesional
                    </span>
                    <h2>Inicia tu Carrera acompañado por tu Propio Equipo</h2>
                  </div>
                  <ul className="list-style-three pt-25 pb-20">
                    <li>
                      <div className="content">
                        <h5>Diseña tu Estrategia Profesional</h5>
                        <p>
                          Iníciate en tu profesión con un plan de carrea
                          definido en exclusiva para ti.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <h5>Acelera la Consecución de tus Objetivos</h5>
                        <p>
                          Alcanza eficazmente objetivos que te llevarían años
                          conseguir.
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className="content">
                        <h5>Trabajar tu perfil</h5>
                        <p>
                        Descubre y potencia tus fortalezas poniendo en valor tus conocimientos y habilidades.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <Link
                    href="https://experts.mekambio.com/s?category=acceso-al-mercado-laboral&sort_by=3&view=grid"
                    className="theme-btn"
                  >
                    Encuentra a tu Expert
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section End */}
        <section
          id="sec-5"
          className="rules-condition-area bg-blue text-white  pt-100  pb-50 rpt-90"
        >
          <div className="container">
            <div className="row align-items-center large-gap">
              <div className="col-lg-5">
                <div
                  className="rules-condition-content rmb-50 wow fadeInLeft delay-0-2s animated animated"
                  style={{ visibility: "visible", animationName: "fadeInLeft" }}
                >
                  <div className="section-title">
                    <span className="sub-title-two">Emprendimiento</span>
                    <h2>Inicia tu Aventura junto al Mejor Equipo</h2>
                  </div>
                  <ul className="list-style-three pt-10">
                    <li>
                      <div className="content">
                        <h5>Gran Impacto</h5>
                        <p>
                          Maximiza el impacto de tu nueva aventura de la mano
                          del equipo que te ayudará a despegar.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <h5>Gestión de la Energía</h5>
                        <p>
                          Conecta con el equipo que te ayudará a gestionar la
                          parte emocional de empezar tu nuevo negocio.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <h5>Rentabilidad</h5>
                        <p>
                        Optimiza tus recursos desde el primer día: sácales el máximo partido eficazmente y de forma eficiente.”
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7">
                <div
                  className="rules-condition-image-part wow fadeInRight delay-0-2s animated animated"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInRight",
                  }}
                >
                  <div className="row align-items-center">
                    <div className="col-7">
                      <img
                        loading="lazy"
                        src="./assets/images/about/rules-condition1.jpg"
                        alt="Rules"
                      />
                    </div>
                    <div className="col-5">
                      <img
                        loading="lazy"
                        src="./assets/images/about/rules-condition2.jpg"
                        alt="Rules"
                      />
                    </div>
                  </div>
               
                </div>
              </div>
            </div>
            <Link
              href="https://experts.mekambio.com/s?category=emprendimiento&sort_by=3&view=grid"
              className="theme-btn border"
            >
              Encuentra a tu Expert
              <i className="fas fa-arrow-right" />
            </Link>
          </div>
        </section>
        <section id="sec-6" className="join-our-team-area pt-80 pb-100 rpt-90">
          <div className="container">
            <div className="row align-items-center large-gap">
              <div className="col-lg-6">
                <div
                  className="join-our-team-image-part pt-5 wow fadeInRight delay-0-2s animated animated"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInRight",
                  }}
                >
                  <div className="image-one">
                    <img
                      loading="lazy"
                      src="https://iili.io/Hzku2GR.md.png"
                      alt="Join Our Team"
                    />
                  </div>
                  <div className="image-two">
                    <img
                      loading="lazy"
                      src="https://iili.io/HzkRT22.md.png"
                      alt="Join Our Team"
                    />
                    <img
                      loading="lazy"
                      src="https://iili.io/HzkR0Ex.md.png"
                      alt="Join Our Team"
                    />
                  </div>
                  <span className="bg-text">meKambio</span>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="join-our-team-content rmb-75 wow fadeInLeft delay-0-2s animated animated"
                  style={{ visibility: "visible", animationName: "fadeInLeft" }}
                >
                  <div className="section-title mb-20">
                    <span className="sub-title-two">
                      Regreso al Mercado Laboral
                    </span>
                    <h2>Ponte al día e Incorpórate de forma Competitiva</h2>
                  </div>
                  <ul className="list-style-three pt-25 pb-20">
                    <li>
                      <div className="content">
                        <h5>Tu Perfil Profesional</h5>
                        <p>
                        Descubre y potencia tus fortalezas para destacar sin que importe la edad
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <h5>Búsqueda de trabajo</h5>
                        <p>
                        Aprende las técnicas que te harán posicionarte y atraer el trabajo que deseas
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className="content">
                        <h5>Crear futuro</h5>
                        <p>
                        Facilita tu inserción laboral mostrando la madurez que te aportó la trayectoria anterior.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <Link
                    href="https://experts.mekambio.com/s?category=regreso-al-mercado-laboral&sort_by=3&view=grid"
                    className="theme-btn"
                  >
                    Encuentra a tu Expert
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
};

export default Categories;
