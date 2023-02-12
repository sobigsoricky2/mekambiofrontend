import Link from "next/link";
import React from "react";
import Banner from "../components/Banner";
import Layout from "../components/Layout";

const ProgramasIntensivos = () => {
  return (
    <Layout>
      <Banner
        title={"Programa Intensivo"}
        para="Garantiza tu acceso a mejores oportunidades profesionales para ti"
      />

      <section className="why-learn-area pb-75 pt-110 rpb-100">
        <div className="container">
          <div
            className="row align-items-center large-gap wow fadeInLeft delay-0-2s animated"
            style={{ visibility: "visible", animationName: "fadeInLeft" }}
          >
            <div className="col-lg-6">
              <div className="why-learn-content rmb-35">
                <div className="section-title mb-30">
                  <span className="sub-title-two">Programa de 2 a 3 meses</span>
                  <h2>¿Necesitas recuperar tu sitio en el mercado laboral?</h2>
                </div>
                <p>
                  Si has perdido tu trabajo, tienes experiencia profesional,
                  estás en riesgo de exclusión laboral, o quizá no estás
                  habituado a la búsqueda de empleo en el entorno laboral actual
                  y los resultados que obtienes no son los que deseas, esto es
                  para ti. Un despido, el desempleo o un cambio profesional,
                  impactan en muchas áreas de nuestro entorno; en la personal,
                  profesional, familiar, económico, etc. Gestionarlo todo de
                  forma efectiva y conseguir una oportunidad profesional
                  competitiva es una tarea muy compleja si lo haces solo o sola.
                </p>
                <div className="why-learn-feature pt-30">
                  <div className="row">
                    <div className="col-sm-6" >
                      <div className="feature-three-item">
                        <div className="icon">
                          <img
                            src="/assets/images/categories/category icon_Career Progression.png"
                            alt="Icon"
                          />
                        </div>
                        <h4>Empoderamiento Personal</h4>
                        <p>
                          Potencia tus fortalezas y diferenciate
                          profesionalmente. Muestra tu verdadero valor y aprende
                          a gestionar tus emociones durante el proceso de
                          selección.
                        </p>
                        <Link href="#" className="read-more color-two">
                          Saber más
                          <i className="fas fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-sm-6" >
                      <div className="feature-three-item">
                        <div className="icon">
                          <img
                            src="/assets/images/categories/category icon_Entrepreneurship.png"
                            alt="Icon"
                          />
                        </div>
                        <h4>Incrementa tus Resultados</h4>
                        <p>
                          Accede a más y mejores oportunidades profesionales.
                          Reduce el tiempo de acceso al mercado laboral, y
                          descubre oportunidades alineadas con tu objetivo.
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
                          <img
                            src="/assets/images/categories/category icon_Get Back to Work.png"
                            alt="Icon"
                          />
                        </div>
                        <h4>Revalorízate profesionalmente</h4>
                        <p>
                          Adquiere nuevas conocimientos y habilidades que te
                          permitirán impulsarte profesionalmene y destacarás en
                          tu próxima experiencia profesional.
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
                          <img
                            src="/assets/images/categories/category icon_Make a Career Change.png"
                            alt="Icon"
                          />
                        </div>
                        <h4>Rentabiliza tus Oportunidades</h4>
                        <p>
                          Enfócate en lo que tú deseas. Sácale el máximo partido
                          a tus pasiones y motivaciones personales y consigue
                          así todos tus objetivos profesionales.
                        </p>
                        <Link href="#sec-2" className="read-more color-two">
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
                  Un programa definido para que le saques el máximo partido a tu
                  experiencia profesional y accedas a mejores oportunidades
                  profesionales en el menor tiempo posible. Tú tienes la
                  experiencia y el conocimiento, nosotros te ayudamos ponerte en
                  valor y revalorizar tu perfil profesional.
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
                  <div className="icon"></div>
                  <h5>Sesiones Individuales</h5>
                  <p>
                    8 sesiones de 1 hora en las que trabajaremos: tu perfil
                    profesional, el proceso de selección, la entrevista,
                    LinkedIn, el currículo, la negociación y mucho más.
                  </p>
                </div>
                <Link href="#sec-3" className="read-more color-two">
                  Solicita información
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
                  <div className="icon"></div>
                  <h5>Preparación Específica</h5>
                  <p>
                    Role plays y simulación de situaciones reales que
                    incrementarán tu preparación y fortalecerán tu autoestima.
                    Ganarás seguridad durante todo el proceso.
                  </p>
                </div>
                <Link href="#sec-3" className="read-more color-two">
                  Solicita información
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
                  <div className="icon"></div>
                  <h5>Valoración Inicial</h5>
                  <p>
                    1 sesión estratégica individual de 30 minutos para valorar
                    tu perfil y el enfoque de tu programa en base a tus
                    objetivos y motivaciones profesionales.
                  </p>
                </div>
                <Link href="#sec-3" className="read-more color-two">
                  Solicita información
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
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
            <h2>Cómo acceder al Programa Intensivo</h2>
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
                    <h4>Solicita Información</h4>
                    <p>
                    Completa el formulario de solicitud junto a una breve descripción de tus objetivos profesionales. Solicitar información no tiene ningún compromiso.
                    </p>
                  </div>
                </div>
                <div className="work-step-item">
                  <span className="number">02</span>
                  <div className="content">
                    <h4>Evaluación Inicial</h4>
                    <p>
                    Tan pronto como recibamos tu solicitud nos pondremos en contacto contigo para analizar tu situación. Tu compromiso y el nuestro han de ir de la mano.
                    </p>
                  </div>
                </div>
                <div className="work-step-item">
                  <span className="number">03</span>
                  <div className="content">
                    <h4>Contrata tu Programa</h4>
                    <p>
                    En el momento que contrates tu programa agendaremos las primeras sesiones y empezaremos a trabajar conjuntamente. Cambiarás tu futuro en 2 meses.
                    </p>
                  </div>
                </div>
                <div className="work-step-item">
                  <span className="number">04</span>
                  <div className="content">
                    <h4>Accede al cambio que estás buscando</h4>
                    <p>
                      Inicia tu evolución profesional. En dos meses puedes
                      empezar a ver resultados.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 text-center">
            <Link href="/solicitud-de-informacion/" className="theme-btn mt-4">
            Solicita Información
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProgramasIntensivos;
