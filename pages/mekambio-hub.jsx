import Link from "next/link";
import React from "react";
import Banner from "../components/Banner";
import Layout from "../components/Layout";

const MekambioHub = () => {
  return (
    <Layout>
      <Banner
        title={"meKambio HUB"}
        para="Accede al programa que te hará impulsar tu carrera profesional"
      />
      <>
        <section id="sec-1" className="why-learn-area pb-75 pt-110 rpb-100">
          <div className="container">
            <div
              className="row align-items-center large-gap wow fadeInLeft delay-0-2s animated"
              style={{ visibility: "visible", animationName: "fadeInLeft" }}
            >
              <div className="col-lg-6">
                <div className="why-learn-content rmb-35">
                  <div className="section-title mb-30">
                    <span className="sub-title-two">
                      Programa de suscripción
                    </span>
                    <h2>
                      ¿Quieres marcar la diferencia y potenciar tu carrera
                      profesional?
                    </h2>
                  </div>
                  <p>
                    Las soft skills indican tu habilidad para trabajar en
                    equipo, así como tus posibilidades de crecimiento en la
                    empresa. Desarrollando estas habilidades mejorarás tus
                    relaciones interpersonales y la capacidad resolutiva, además
                    incrementarás tu contribución al equipo, a la compañía y a
                    tu propia evolución. Aprende a fomentarlas en tu entorno
                    profesional y accede a nuevas oportunidades para progresar
                    en tu carrera.
                  </p>
                  <div className="why-learn-feature pt-30">
                    <div className="row">
                      <div className="col-sm-6" id="sec-1">
                        <div className="feature-three-item">
                          <div className="icon">
                            {/* <img
                              src="/assets/images/categories/category icon_Career Progression.png"
                              alt="Icon"
                            /> */}
                          </div>
                          <h4>Relaciones interpersonales</h4>
                          <p>
                            Escucha activa, comunicación, empatía, gestión de la
                            diversidad, negociación, paciencia, &quot;public
                            speaking&quot;, etc.
                          </p>
                          <Link href="#sec-2" className="read-more color-two">
                            Saber más
                            <i className="fas fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="col-sm-6" >
                        <div className="feature-three-item">
                          <div className="icon">
                            {/* <img
                              src="/assets/images/categories/category icon_Entrepreneurship.png"
                              alt="Icon"
                            /> */}
                          </div>
                          <h4>Operativa y organización</h4>
                          <p>
                            Gestión del tiempo, priorización, delegación,
                            organización y planificación, adaptabilidad,
                            perserverancia, etc.
                          </p>
                          <Link href="#sec-2" className="read-more color-two">
                            Saber más
                            <i className="fas fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6" >
                        <div className="feature-three-item">
                          <div className="icon">
                            {/* <img
                              src="/assets/images/categories/category icon_Get Back to Work.png"
                              alt="Icon"
                            /> */}
                          </div>
                          <h4>Autoconciencia</h4>
                          <p>
                            Integridad, autocontrol, gestión emocional y de la
                            energía, motivación, orientación a resultados, etc.
                          </p>
                          <Link href="#sec-2" className="read-more color-two">
                            Saber más
                            <i className="fas fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="col-sm-6" id="sec-4">
                        <div className="feature-three-item">
                          <div className="icon">
                            {/* <img
                              src="/assets/images/categories/category icon_Make a Career Change.png"
                              alt="Icon"
                            /> */}
                          </div>
                          <h4>Estratégicas</h4>
                          <p>
                            Creatividad, innovación, resolución de problemas,
                            gestión de la incertidumbre, liderazgo, gestión de
                            conflictos, etc.
                          </p>
                          <Link
                            href="#sec-2"
                            className="read-more color-two"
                          >
                            Saber más
                            <i className="fas fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 text-center">
                <div
                  className="why-learn-image wow fadeInRight delay-0-2s animated"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInRight",
                  }}
                >
                  <img
                    loading="lazy"
                    src="http://images.ctfassets.net/rnas9vwjhliq/3rl9f6bomCkEZIY3ajKs78/114449779314d5efa35507bfa064147d/mekambio_image_services_2.webp"
                    alt="Why Learn"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sec-2" className="features-section rel z-1 pt-80 pb-40 bg-blue text-dark">
          <div className="container">
            <div className="row large-gap mb-30 text-white">
              <div className="col-lg-6 text-white">
                <div
                  className="freature-six-left wow fadeInUp delay-0-2s animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="section-title mb-30">
                    <h2>Qué incluye este programa</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div
                  className="freature-six-right pt-55 rpt-0 wow fadeInUp delay-0-4s animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <p>
                    Un programa definido para que adquieras las habilidades más
                    demandadas en el mercado laboral, de la mano de los mejores
                    profesionales, con casos prácticos y experiencias reales, y
                    formando parte de una comunidad especializada en la
                    temática.
                  </p>
                </div>
              </div>
            </div>

            <div className="row justify-content-evenly">
              <div className="col-lg-3 col-sm-6">
                <div
                  className="feature-six-item mt-30 wow fadeInUp delay-0-2s animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="content">
                    <div className="icon">
                      {/* <img
                      loading="lazy"
                     
                      src="/assets/images/categories/category icon_Career Progression.png"
                      alt="Icon"
                    /> */}
                    </div>
                    <h5>Workshops en Grupo</h5>
                    <p>
                      Participa en workshops mensuales focalizados en soft
                      skills específicas y desarrolla tus habilidades en grupo
                      de la mano de profesionales cualificados y partiendo de
                      situaciones extraídas de casos reales del mercado laboral.
                    </p>
                  </div>
                  <Link href="#sec-3" className="read-more color-two">
                    Suscríbete a meKambio HUB
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div
                  className="feature-six-item wow fadeInUp delay-0-8s animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="content">
                    <div className="icon">
                      {/* <img
                      loading="lazy"
                     
                      src="assets\images\categories\category icon_Starting Out in Your Career.png"
                      alt="Icon"
                    /> */}
                    </div>
                    <h5>Dinámicas Prácticas</h5>
                    <p>
                      A través de casos prácticos y en base a experiencias
                      actuales, aprenderás a poner en valor tus habilidades,
                      teniendo como guía un equipo de profesionales con amplia
                      experiencia y cualificación.
                    </p>
                  </div>
                  <Link href="#sec-3" className="read-more color-two">
                    Suscríbete a meKambio HUB
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div
                  className="feature-six-item mt-30 wow fadeInUp delay-0-6s animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="content">
                    <div className="icon">
                      {/* <img
                      loading="lazy"
                     
                      src="assets\images\categories\category icon_International Career Boost.png"
                      alt="Icon"
                    /> */}
                    </div>
                    <h5>Comunidad especializada</h5>
                    <p>
                      Únete al HUB y participa en la comunidad focalizada en el
                      desarrollo de soft skills. Nútrete de la experiencia de
                      otros profesionales y aporta desde tu experiencia y
                      conocimiento.
                    </p>
                  </div>
                  <Link href="#sec-3" className="read-more color-two">
                    Suscríbete a meKambio HUB
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
              {/* <div className="col-lg-3 col-sm-6">
              <div
                className="feature-six-item wow fadeInUp delay-0-4s animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="content">
                  <div className="icon">
                    <img
                      loading="lazy"
                     
                      src="assets\images\categories\category icon_Make a Career Change.png"
                      alt="Icon"
                     
                    />
                  </div>
                  <h5>Provoca el cambio</h5>
                  <p>¿Quieres cambiar de trabajo o carrera profesional? </p>
                </div>
                <Link href="categories#cam" className="read-more color-two">
                  Ver más
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div> */}
            </div>
          </div>
          <img
            loading="lazy"
            className="rectangle-dots"
            src="/assets/images/shapes/03.png"
            alt="Shape"
          />
          <img
            loading="lazy"
            className="circle-dots"
            src="/assets/images/shapes/01.png"
            alt="Shape"
          />
        </section>


        <section id="sec-3" className="benefit-work-process rel z-2 pt-120 rpt-90 pb-110">
          <div className="container">
            <div className="section-title text-center mb-50">
              <h2>Cómo acceder a meKambio HUB</h2>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div
                  className="bebefit-image rmb-75 wow fadeInRight delay-0-2s animated animated"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInRight",
                  }}
                >
                  <img
                    loading="lazy"
                    src="/assets/images/about/benefit.jpg"
                    alt="Bebefit"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="bebefit-work-steps wow fadeInLeft delay-0-2s animated animated"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInLeft",
                  }}
                >
                  <div className="work-step-item">
                    <span className="number">01</span>
                    <div className="content">
                      <h4>Suscríbete a meKambio HUB</h4>
                      <p>
                      Suscríbete por 19,90€ al mes o 199,90€ anualmente (promoción 2 meses gratuitos). Puedes cancelar tu suscripción en cualquier momento.
                      </p>
                    </div>
                  </div>
                  <div className="work-step-item">
                    <span className="number">02</span>
                    <div className="content">
                      <h4>Accede a la Comunidad</h4>
                      <p>
                      En cuanto validemos tu suscripción recibirás confirmación por nuestra parte, y en 24 horas te daremos acceso a la comunidad de Telegram.
                      </p>
                    </div>
                  </div>
                  <div className="work-step-item">
                    <span className="number">03</span>
                    <div className="content">
                      <h4>Regístrate en los Workshops</h4>
                      <p>
                      Regístrate y participa en los workshops programados mensualmemente de forma online a través de Zoom e interactúa con el Expert y la comunidad.
                      </p>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
            <div className="col-md-12 text-center">
              <Link href="https://buy.stripe.com/00gg33gGv8vHbZu5kn" className="theme-btn mt-4 mr-4">
              Suscripción mensual por 19,90€ al mes 
              </Link>
              <Link href="https://buy.stripe.com/dR6189fCr8vHfbG28a" className="theme-btn mt-4">
              Suscripción anual por 199,90€ (2 meses gratuitos) 
              </Link>
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
};

export default MekambioHub;
