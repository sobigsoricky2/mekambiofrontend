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

  console.log(areas);
  return (
    <Layout>
      <Banner title="Servicios" />

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
            className="w-25"
            src="./assets/images/categories/category icon_Career Progression.png"
            alt="Icon"
          />
        </div>
        <h4>Profesionales</h4>
        <p>
          Alcanza tus objetivos profesionales y acelera la progresión de tu
          carrera. Desarrolla tu potencial y evoluciona en el trabajo.
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
            className="w-25"
            src="./assets/images/categories/category icon_Entrepreneurship.png"
            alt="Icon"
          />
        </div>
        <h4>Coaches y Mentores</h4>
        <p>
        Ayuda a otros profesionales a elevarse a la máxima potencia, a la vez que desarrollas tus habilidades de coaching y mentoring
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
            className="w-25"
            src="./assets/images/categories/category icon_Get Back to Work.png"
            alt="Icon"
          />
        </div>
        <h4>Corporativo, para tu Equipo</h4>
        <p>
          Desarrolla el talento de tu equipo, incrementa su motivación, y
          maximiza el potencial de tu organización.
        </p>
        <Link href="mailto:info@meKambio.com" className="read-more color-two">
          Solicita más Información
          <i className="fas fa-arrow-right" />
        </Link>
      </div>
    </div>
    <div className="col-sm-6" id="sec-4">
      <div className="feature-three-item">
        <div className="icon">
          <img
            className="w-25"
            src="./assets/images/categories/category icon_Make a Career Change.png"
            alt="Icon"
          />
        </div>
        <h4>Corporativo, para tus Clientes</h4>
        <p>
        Ofrece a tus clientes un valor extra: desarrollo de su potencial e impulso profesional.
        </p>
        <Link href="mailto:info@meKambio.com" className="read-more color-two">
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
            <span className="sub-title-two">Nuestras Áreas</span>
            <h2>Encuentra el área en la que quieres focalizarte</h2>
          </div>
          <p>
            Elige tu área foco y selecciona al Expert que te ayudará a conseguir
            tus objetivos.
          </p>
          <a
            href="categories.html"
            className="read-more color-two mt-5 text-white"
          >
            Ver más <i className="fas fa-arrow-right" />
          </a>
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
                    src="./assets/images/categories/category icon_Career Progression.png"
                    alt="Icon"
                  />
                </div>
                <a href="./categories.html#sec-1">
                  {" "}
                  <h4 className="text-black-50">Progresión de Carrera</h4>
                </a>
              </div>
              <div className="category-item">
                <div className="icon">
                  <img
                    className="w-50"
                    src="./assets/images/categories/category icon_Make a Career Change.png"
                    alt="Icon"
                  />
                </div>
                <a href="./categories.html#sec-2">
                  <h4 className="text-black-50">Cambio de Carrera</h4>
                </a>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="category-item">
                <div className="icon">
                  <img
                    className="w-50"
                    src="./assets/images/categories/category icon_Starting Out in Your Career.png"
                    alt="Icon"
                  />
                </div>
                <a href="./categories.html#sec-4">
                  <h4 className="text-black-50">Acceso al Mercado Laboral</h4>
                </a>
              </div>
              <div className="category-item">
                <div className="icon">
                  <img
                    className="w-50"
                    src="./assets/images/categories/category icon_International Career Boost.png"
                    alt="Icon"
                  />
                </div>
                <a href="./categories.html#sec-3">
                  <h4 className="text-black-50">
                    Impulso Internacional de tu Carrera
                  </h4>
                </a>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="category-item mt-40">
                <div className="icon">
                  <img
                    className="w-50"
                    src="./assets/images/categories/category icon_Entrepreneurship.png"
                    alt="Icon"
                  />
                </div>
                <a href="./categories.html#sec-5">
                  <h4 className="text-black-50">Emprendimiento</h4>
                </a>
              </div>
              <div className="category-item">
                <div className="icon">
                  <img
                    className="w-50"
                    src="./assets/images/categories/category icon_Get Back to Work.png"
                    alt="Icon"
                  />
                </div>
                <a href="./categories.html#sec-6">
                  <h4 className="text-black-50">Regresa al Mercado Laboral</h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        <section className="partner-section rel z-1 pt-50 rpt-90 pb-50 rpb-55">
          <div className="container">
            <div className="row align-items-center">
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
              <div className="col-lg-6">
                <div
                  className="logo-inner style-two wow fadeInLeft delay-0-2s animated animated"
                  style={{ visibility: "visible", animationName: "fadeInLeft" }}
                >
                  <div className="logo-item w-25">
                    <Link href="https://www.upc.edu/ca">
                      <img
                        loading="lazy"
                        src="./assets/images/client-logos/UPC.png"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25">
                    <Link href="https://epseb.upc.edu/ca">
                      <img
                        loading="lazy"
                        src="./assets/images/client-logos/EPSEB.jpg"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25">
                    <Link href="https://www.eae.es/">
                      <img
                        loading="lazy"
                        src="./assets/images/client-logos/EAE Business School.PNG"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25">
                    <Link href="https://www.threepoints.com/">
                      <img
                        loading="lazy"
                        className="w-50"
                        src="./assets/images/client-logos/Three Points, The school for Digital Business.jfif"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25">
                    <Link href="https://www.inesdi.com/">
                      <img
                        loading="lazy"
                        className="w-75"
                        src="./assets/images/client-logos/Inesdi Digital Business School.jfif"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25">
                    <Link href="https://www.deustoformacion.com/">
                      <img
                        loading="lazy"
                        src="./assets/images/client-logos/DFO-Logotipo-Pantalla.png"
                        alt="Client Logo"
                      />
                    </Link>
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
