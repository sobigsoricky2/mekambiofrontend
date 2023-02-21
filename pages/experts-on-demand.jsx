import React from "react";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import Link from "next/link";

const ExpertsOnDemand = () => {
  return (
    <Layout>
      <Banner
        title={"Experts On-demand"}
        para="Un equipo comprometido con tu objetivo: hazlo antes y mejor"
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
                  <span className="sub-title-two">Sesiones Individuales</span>
                  <h2>¿Cuáles son tus metas profesionales?</h2>
                </div>
                <p>
                Si vives momentos de inquietud e incertidumbre, si tienes ganas de prosperar a nivel profesional, si no sabes por dónde empezar, te ofrecemos el apoyo necesario para que evoluciones y generes el cambio que tu carrera necesita. Como todo atleta de élite, tú también necesitas un equipo que te ayude a alcazar las metas que te propongas. Tú defines los objetivos, nosotros te guiamos y preparamos para que los consigas. Y juntos lo celebramos.
                </p>
                <div className="why-learn-feature pt-30">
                  <div className="row">
                    <div className="col-sm-6" id="sec-1">
                      <div className="feature-three-item">
                        <div className="icon">
                          <img
                            src="/assets/images/categories/category icon_Career Progression.png"
                            alt="Icon"
                          />
                        </div>
                        <h4>Trabaja en lo que te apasiona</h4>
                        <p>
                        ¿Tienes siempre la misma rutina laboral? ¿Tu jornada está llena de problemas? Identifica tus fortalezas y motivaciones para evolucionar en tu carrera.
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
                            src="/assets/images/categories/category icon_Entrepreneurship.png"
                            alt="Icon"
                          />
                        </div>
                        <h4>Accede al mercado laboral</h4>
                        <p>
                        ¿Quieres volver al trabajo de forma completa? Prepárate para una búsqueda eficaz de empleo mediante las técnicas y herramientas necesarias de hoy día.
                        </p>
                        <Link href="#sec-2"  className="read-more color-two">
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
                        <h4>Mejora en lo que haces</h4>
                        <p>
                        ¿Tienes ganas de prosperar profesionalmente? Ni te estanques ni te quites valor. Recibe la guía definitiva que te hará avanzar y mejorar tu calidad de vida.
                        </p>
                        <Link href="#sec-2"  className="read-more color-two">
                          Saber más
                          <i className="fas fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-sm-6" id="sec-4">
                      <div className="feature-three-item">
                        <div className="icon">
                          <img
                            src="/assets/images/categories/category icon_Make a Career Change.png"
                            alt="Icon"
                          />
                        </div>
                        <h4>Provoca el cambio</h4>
                        <p>
                        Para cambiar tu situación profesional tendrás que salir de tu zona de confort. Te enseñamos cómo hacerlo en un entorno de confianza.
                        </p>
                        <Link href="#sec-2"  className="read-more color-two">
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

      <section id="sec-2"  className="features-section rel z-1 pt-80 pb-40 bg-blue text-dark">
        <div className="container">
          <div className="row large-gap mb-30 text-white">
            <div className="col-lg-6 text-white">
              <div
                className="freature-six-left wow fadeInUp delay-0-2s animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="section-title mb-30">
                  <h2>Qué incluye este servicio</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="freature-six-right pt-55 rpt-0 wow fadeInUp delay-0-4s animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <p>
                No hay nada más poderoso que trabajar con los mejores, aprender de ellos y beneficiarse de su apoyo y guía. Te ofrecemos hacerlo en un entorno con profesionales que destacan en su sector por su trayectoria y compromiso. Te orientarán para conseguir los objetivos que tú te plantees.
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
                  {/* <div className="icon"></div> */}
                  <h5>Profesionales Senior</h5>
                  <p>
                  Un equipo especializado en el desarrollo del talento, la transformación profesional y el liderazgo personal. Recibe su apoyo y transforma tu carrera.
                  </p>
                </div>
                <Link href="#sec-3" className="read-more color-two">
                Agenda tu sesión
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
                  {/* <div className="icon"></div> */}
                  <h5>Flexibilidad de horarios</h5>
                  <p>
                  No importa donde estés ni tus horarios. Tendrás 100% acceso a todos los Experts de forma online. Consigue todo lo que te propongas con tu equipo.
                  </p>
                </div>
                <Link href="#sec-3" className="read-more color-two">
                Agenda tu sesión
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
                  {/* <div className="icon"></div> */}
                  <h5>Tú marcas la pauta</h5>
                  <p>
                  Gran variedad de sesiones y tarifas. Un amplio abanico de posibilidades para que abandones el estancamiento profesional e impulses tu carrera a tu ritmo.
                  </p>
                </div>
                <Link href="#sec-3" className="read-more color-two">
                Agenda tu sesión
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

      <section id="sec-3"  className="benefit-work-process rel z-2 pt-120 rpt-90 pb-110">
        <div className="container">
          <div className="section-title text-center mb-50">
            <h2>Cómo acceder a los Experts</h2>
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
                    <h4>Accede a la plataforma</h4>
                    <p>
                    Descubre a profesionales que destacan en su sector por su trayectoria y compromiso. Te orientarán para conseguir los objetivos que tú te plantees.
                    </p>
                  </div>
                </div>
                <div className="work-step-item">
                  <span className="number">02</span>
                  <div className="content">
                    <h4>Selecciona Área y Expert</h4>
                    <p>
                    Focaliza en tu área y encuentra al Expert que mejor se adapte a tus necesidades. Empieza hoy y empezarás a ver resultados en dos meses.
                    </p>
                  </div>
                </div>
                <div className="work-step-item">
                  <span className="number">03</span>
                  <div className="content">
                    <h4>Reserva tu sesión</h4>
                    <p>
                    Regístrate gratuitamente. Elige fecha y hora, y confirma la reserva realizando el pago de la sesión. Comprométete contigo y tu futuro profesional.
                    </p>
                  </div>
                </div>
                <div className="work-step-item">
                  <span className="number">04</span>
                  <div className="content">
                    <h4>Conoce a tu equipo e impulsa tu carrera</h4>
                    {/* <p>
                      Inicia tu evolución profesional. En dos meses puedes
                      empezar a ver resultados.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 text-center">
            <Link href="https://experts.mekambio.com/s?q=" className="theme-btn mt-4">
            Accede a la Plataforma
            </Link>
          </div>
        </div>
      </section>

      <section className="partner-section rel z-1  pt-50 rpt-90  rpb-55">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div
                  className="categories-content mb-50 wow fadeInRight delay-0-2s animated animated animated"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInRight",
                  }}
                >
                  <div className="section-title mb-25">
                    <span className="sub-title-two">
                      Top Experts and Top Companies
                    </span>
                    <h2>Algunas empresas dónde trabajan nuestros Experts </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="logo-inner style-two wow fadeInLeft delay-0-2s animated animated animated"
                  style={{ visibility: "visible", animationName: "fadeInLeft" }}
                >
                  <div className="logo-item w-25">
                    <Link href="https://experts.mekambio.com/s?q=">
                      <img
                        loading="lazy"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25">
                    <Link href="https://experts.mekambio.com/s?q=">
                      <img
                        loading="lazy"
                        src="https://www.wemeanbusinesscoalition.org/wp-content/uploads/2019/09/Salesforce-LOGO.jpg"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25">
                    <Link href="https://experts.mekambio.com/s?q=">
                      <img
                        loading="lazy"
                        src="https://purepng.com/public/uploads/large/purepng.com-google-logo-2015brandlogobrand-logoiconssymbolslogosgoogle-6815229372333mqrr.png"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25">
                    <Link href="https://experts.mekambio.com/s?q=">
                      <img
                        loading="lazy"
                        className="w-100"
                        src="https://oroinc.com/orocrm/wp-content/uploads/sites/8/2017/06/Zendesk_logo_wordmark.png"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25">
                    <Link href="https://experts.mekambio.com/s?q=">
                      <img
                        loading="lazy"
                        className="w-100"
                        src="https://static.borngroup.com/uploads/2020/09/Logo-Mirakl.png"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25 text-center">
                    <Link href="https://experts.mekambio.com/s?q=">
                      <img
                        loading="lazy"
                        className="w-50"
                        src="https://th.bing.com/th/id/R.8126361d4fe00f6b67cacd6b751998d4?rik=eWb%2fNt6IvMli4g&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2016%2f05%2frainbow-apple-logo.png&ehk=Dk5yXp4Wc0DC4oScBdA9VamWYAANMF5ozQGYD8uAkuI%3d&risl=&pid=ImgRaw&r=0"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="partner-section rel z-1  pt-50 rpt-90 rpb-55">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div
                  className="logo-inner style-two wow fadeInLeft delay-0-2s animated animated"
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
              <div className="col-lg-6">
                <div
                  className="categories-content mb-50 wow fadeInRight delay-0-2s animated animated"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInRight",
                  }}
                >
                  <div className="section-title mb-25">
                    <span className="sub-title-two">Global Partners</span>
                    <h2>Empresas que confían en nosotros</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </Layout>
  );
};

export default ExpertsOnDemand;
