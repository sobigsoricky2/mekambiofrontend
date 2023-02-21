import Link from "next/link";
import React, { useState, useEffect } from "react";
import Banner from "../../components/Banner";
import Layout from "../../components/Layout";
import { ContentfulClient } from "../../helpers/utils";

const Services = () => {
  const [services, setServices] = useState([]);

  const [service, setService] = useState([]);

  const [serviceAreas, setServiceAreas] = useState({});

  const [areas, setAreas] = useState([]);

  useEffect(() => {
    var data = [];
    var data2 = [];
    var data3 = [];
    var data4 = [];
    ContentfulClient.getEntries()
      .then((response) => {
        response.items.forEach((element) => {
          if (element.sys.contentType.sys.id == "services") {
            data.push(element);
          }
          if (element.sys.contentType.sys.id == "service") {
            data2.push(element);
          }
          if (element.sys.contentType.sys.id == "serviceAreas") {
            data3.push(element);
          }
          if (element.sys.contentType.sys.id == "areas") {
            data4.push(element);
          }
        });

        setServices(...data);
        setService(data2);
        setServiceAreas(...data3);
        setAreas(data4);
      })
      .catch(console.error);
  }, []);

  console.log(service);
  return (
    <Layout>
      <Banner
        title="Servicios"
        para="Te presentamos diferentes opciones para que logres tus objetivos profesionales"
      />

      <>
        <section className="why-learn-area pb-75 pt-110 rpb-100">
          <div className="container">
            <div
              className="row align-items-center large-gap wow fadeInLeft delay-0-2s animated"
              style={{ visibility: "visible", animationName: "fadeInLeft" }}
            >
              <div className="col-lg-6">
                <div className="why-learn-content rmb-35">
                  <div className="section-title mb-30">
                    <span className="sub-title-two">
                      {services?.fields?.title}
                    </span>
                    <h2>{services?.fields?.subtitle}</h2>
                  </div>
                  <p>{services?.fields?.content}</p>
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
                          <h4>Profesionales</h4>
                          <p>
                            Alcanza tus objetivos profesionales y acelera la
                            progresión de tu carrera. Desarrolla tu potencial y
                            evoluciona en el trabajo.
                          </p>
                          <Link
                            href="https://experts.mekambio.com/s?q="
                            className="read-more color-two"
                          >
                            Acceso a la Plataforma
                            <i className="fas fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="col-sm-6" id="sec-2">
                        <div className="feature-three-item">
                          <div className="icon">
                            <img
                              src="/assets/images/categories/category icon_Entrepreneurship.png"
                              alt="Icon"
                            />
                          </div>
                          <h4>Coaches y Mentores</h4>
                          <p>
                            Ayuda a otros profesionales a elevarse a la máxima
                            potencia, a la vez que desarrollas tus habilidades
                            de coaching y mentoring.
                          </p>
                          <Link href="/experts" className="read-more color-two">
                            Únete al equipo
                            <i className="fas fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6" id="sec-3">
                        <div className="feature-three-item">
                          <div className="icon">
                            <img
                              src="/assets/images/categories/category icon_Get Back to Work.png"
                              alt="Icon"
                            />
                          </div>
                          <h4>Corporativo, para tu Equipo</h4>
                          <p>
                            Desarrolla el talento de tu equipo, incrementa su
                            motivación, y maximiza el potencial de tu
                            organización.
                          </p>
                          <Link
                            href="mailto:info@meKambio.com"
                            className="read-more color-two"
                          >
                            Solicita más Información
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
                          <h4>Corporativo, para tus Clientes</h4>
                          <p>
                            Ofrece a tus clientes un valor extra: desarrollo de
                            su potencial e impulso profesional.
                          </p>
                          <Link
                            href="mailto:info@meKambio.com"
                            className="read-more color-two"
                          >
                            Solicita más Información
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
                    src={services?.fields?.servicesImage?.fields?.file?.url}
                    alt="Why Learn"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="categories-section bg-blue text-white rel z-1 py-50 rpb-85">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div
                  className="categories-content rmb-65 wow fadeInUp delay-0-2s animated animated animated animated animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="section-title mb-25">
                    <span className="sub-title-two">Nuestros Servicios</span>
                    <h2>
                      Descubre la herramienta que mejor se amolde a tu condición
                    </h2>
                  </div>
                  <p>
                    Cada situación requiere de su propia estrategia. Encuentra
                    el servicio que mejor cumpla tus expectativas para empezar
                    tu evolución.
                  </p>
                  <Link
                    href="#section2"
                    className="read-more color-two mt-5 text-white"
                  >
                    Saber más
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-7">
                <div
                  className="categories-wrap wow fadeInUp delay-0-4s animated animated animated animated animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="row">
                    <div className="col-md-4 col-sm-6">
                      <div className="category-item mt-35">
                        <div className="icon">
                          <img
                            className="w-50"
                            src="/assets/images/categories/category icon_Career Progression.png"
                            alt="Icon"
                          />
                        </div>
                        <Link href="#ProgramasIntensivos">
                          {" "}
                          <h4 className="text-black-50">
                            Programas Intensivos
                          </h4>
                        </Link>
                      </div>
                      {/* <div className="category-item">
                        <div className="icon">
                          <img
                            className="w-50"
                            src="/assets/images/categories/category icon_Make a Career Change.png"
                            alt="Icon"
                          />
                        </div>
                        <Link href="./categories#sec-2">
                          <h4 className="text-black-50">meKambio Hub</h4>
                        </Link>
                      </div> */}
                    </div>
                    <div className="col-md-4 col-sm-6" id="section2">
                      <div className="category-item">
                        <div className="icon">
                          <img
                            className="w-50"
                            src="/assets/images/categories/category icon_Starting Out in Your Career.png"
                            alt="Icon"
                          />
                        </div>
                        <Link href="#meKambioHub">
                          <h4 className="text-black-50">meKambio Hub</h4>
                        </Link>
                      </div>
                      {/* <div className="category-item">
                        <div className="icon">
                          <img
                            className="w-50"
                            src="/assets/images/categories/category icon_International Career Boost.png"
                            alt="Icon"
                          />
                        </div>
                        <Link href="./categories#sec-3">
                          <h4 className="text-black-50">
                            Impulso Internacional de tu Carrera
                          </h4>
                        </Link>
                      </div> */}
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="category-item mt-40">
                        <div className="icon">
                          <img
                            className="w-50"
                            src="/assets/images/categories/category icon_Entrepreneurship.png"
                            alt="Icon"
                          />
                        </div>
                        <Link href="#ExpertsOndemand">
                          <h4 className="text-black-50">Experts On demand</h4>
                        </Link>
                      </div>
                      {/* <div className="category-item">
                        <div className="icon">
                          <img
                            className="w-50"
                            src="/assets/images/categories/category icon_Get Back to Work.png"
                            alt="Icon"
                          />
                        </div>
                        <Link href="./categories#sec-6">
                          <h4 className="text-black-50">
                            Regresa al Mercado Laboral
                          </h4>
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="meKambioHub"
          className="join-our-team-area pt-80 pb-100 rpt-90"
        >
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
                      src="https://iili.io/HI9Ah5G.md.png"
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
                      src="https://iili.io/HI9RETx.md.png"
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
                    <span className="sub-title-two">meKambio Hub</span>
                    <h2>Desarrolla las Soft Skills más demandadas</h2>
                  </div>
                  <ul className="list-style-three pt-25 pb-20">
                    <li>
                      <div className="content">
                        <h5>Fortalezas Interpersonales</h5>
                        <p>
                          La adquisición y mejora de las denominadas Soft
                          Skills, además de reforzar el propio autoconocimiento,
                          te permite mejorar tu posicionamiento en el mercado
                          laboral.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <h5>Rendimiento, Eficacia y Eficiencia</h5>
                        <p>
                          Influye directamente en el incremento de estos tres
                          valores imprescindibles en el campo profesional, con
                          beneficios a nivel individual y a nivel de equipo.
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className="content">
                        <h5>Oportunidades Profesionales</h5>
                        <p>
                          Se abrirán nuevas ofertas laborales ante ti, calidad
                          de puestos de trabajo, salarios más elevados,
                          oportunidades para desarrollarte en lo que te motiva.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <Link href="/mekambio-hub/" className="theme-btn">
                    Saber más
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="ProgramasIntensivos"
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
                    <span className="sub-title-two">Programas Intensivos</span>
                    <h2>Garantiza tu incorporación al mercado profesional</h2>
                  </div>
                  <ul className="list-style-three pt-10">
                    <li>
                      <div className="content">
                        <h5>Empoderamiento Personal</h5>
                        <p>
                          Al mejorar tus capacidades y desarrollar tus
                          fortalezas, se incrementa tu propio potencial para
                          mejorar tu situación, sea cual sea la causa.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <h5>Programa Personalizado 100%</h5>
                        <p>
                          Tu programa intensivo tendrá puesto el foco en áreas
                          de trabajo específicas, determinadas a partir de tu
                          propia experiencia profesional y tus metas al
                          respecto.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <h5>Acceso al Mercado Laboral a Corto Plazo</h5>
                        <p>
                          Un asesoramiento focalizado será clave para abrirte a
                          ofertas profesionales de calidad, acordes a tus
                          conocimientos, experiencias y expectativas.
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
                        src="https://iili.io/HI9nc6G.md.png"
                        alt="Rules"
                        style={{ transform: "scale(0.85)" }}
                      />
                    </div>
                    <div className="col-5">
                      <img
                        loading="lazy"
                        src="https://iili.io/HI9o9oX.md.png"
                        alt="Rules"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link href="#" className="theme-btn border">
              Saber más
              <i className="fas fa-arrow-right" />
            </Link>
          </div>
        </section>

        <section
          id="ExpertsOndemand"
          className="join-our-team-area pt-80 pb-100 rpt-90"
        >
          <div className="container">
            <div className="row align-items-center large-gap">
              <div className="col-lg-6">
                <img
                  loading="lazy"
                  src="https://iili.io/HGWmFz7.md.png"
                  alt="Join Our Team"
                />
                {/* <div
                  className="join-our-team-image-part pt-5 wow fadeInRight delay-0-2s animated animated"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInRight",
                  }}
                >
                  <div className="image-one">
                      <img
                  loading="lazy"
                  src="https://iili.io/HGWmFz7.md.png"
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
                      src="https://iili.io/HI9RETx.md.png"
                      alt="Join Our Team"
                    />
                  </div>
                  <span className="bg-text">meKambio</span>
                </div> */}
              </div>
              <div className="col-lg-6">
                <div
                  className="join-our-team-content rmb-75 wow fadeInLeft delay-0-2s animated animated"
                  style={{ visibility: "visible", animationName: "fadeInLeft" }}
                >
                  <div className="section-title mb-20">
                    <span className="sub-title-two">Experts On demand</span>
                    <h2>Determina y alcanza nuevas metas profesionales</h2>
                  </div>
                  <ul className="list-style-three pt-25 pb-20">
                    <li>
                      <div className="content">
                        <h5>Plan Estratégico Personalizable</h5>
                        <p>
                          Estarás más cerca de tus objetivos profesionales,
                          gracias a una amplia oferta de sesiones que elegirás y
                          amoldaremos en función de tu situación personal.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <h5>Perfil Profesional Competitivo</h5>
                        <p>
                          Trabajarás con grandes profesionales que te ayudarán a
                          evolucionar tus capacidades en las distintas áreas en
                          que puedes focalizarte. Podrás ir construyendo tu
                          trayectoria paso a paso.
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className="content">
                        <h5>Apertura de Oportunidades</h5>
                        <p>
                          Cuando comprendes tus inquietudes, eres capaz de
                          marcar un trayecto con una meta clara. En ese
                          recorrido van surgienndo ventanas de futuro y tú
                          elegirás cuáles abrir.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <Link href="#" className="theme-btn">
                    Saber más
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="why-learn-area pb-75 pt-110 rpb-100">
          <div className="container">
            <div
              className="row align-items-center large-gap wow fadeInLeft delay-0-2s animated"
              style={{ visibility: "visible", animationName: "fadeInLeft" }}
            >
              <div className="">
                <div className="why-learn-content rmb-35">
                  <div className="section-title mb-30">
                    <span className="sub-title-two">
                      Soluciones personalizadas
                    </span>
                    <h2>¿No has encontrado lo que buscabas?</h2>
                  </div>
                  <p>
                    Si no lo tienes claro, pero te gusta lo que proponemos,
                    ponte en contacto con nosotros y valoraremos conjuntamente
                    una propuesta de servicios que se ajuste a tu caso en
                    particular.
                  </p>
                  <div className="why-learn-feature pt-30 ">
                    <div className="row justify-content-evenly">
                      <div className="col-sm-3" id="sec-1">
                        <div className="feature-three-item">
                          <div className="icon">
                            <img
                              src="/assets/images/categories/category icon_Career Progression.png"
                              alt="Icon"
                            />
                          </div>
                          <h4>Para profesionales</h4>
                          <p>
                            Te ayudamos a que identifiques tus objetivos y
                            elaborar un plan para conseguirlos. Si no lo tienes
                            claro, te ayudamos a que identifiques tu camino.
                          </p>
                          <Link
                            href="/solicitud-de-informacion/"
                            className="read-more color-two"
                          >
                            Solicita información
                            <i className="fas fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="col-sm-3" id="sec-2">
                        <div className="feature-three-item">
                          <div className="icon">
                            <img
                              src="/assets/images/categories/category icon_Entrepreneurship.png"
                              alt="Icon"
                            />
                          </div>
                          <h4>Para empresas</h4>
                          <p>
                            Contáctanos y analizaremos los desafíos a los que os
                            enfrentáis y conjuntamente plantearemos soluciones a
                            través del desarrollo de tu equipo.
                          </p>
                          <Link
                            href="/solicitud-de-informacion/"
                            className="read-more color-two"
                          >
                            Solicita información
                            <i className="fas fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                      <div className="col-sm-3" id="sec-3">
                        <div className="feature-three-item">
                          <div className="icon">
                            <img
                              src="/assets/images/categories/category icon_Get Back to Work.png"
                              alt="Icon"
                            />
                          </div>
                          <h4>Para colaboradores</h4>
                          <p>
                            Hay múltiples formas de desarrollar el potencial de
                            equipos y profesionales. ¿Colaboramos? Contáctanos y
                            analizamos cómo ir todos a una.
                          </p>
                          <Link
                            href="/solicitud-de-informacion/"
                            className="read-more color-two"
                          >
                            Solicita información
                            <i className="fas fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-6 text-center">
                <div
                  className="why-learn-image wow fadeInRight delay-0-2s animated"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInRight",
                  }}
                >
                  <img
                    loading="lazy"
                    src={services?.fields?.servicesImage?.fields?.file?.url}
                    alt="Why Learn"
                  />
                </div>
              </div> */}
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
      </>
    </Layout>
  );
};

export default Services;
