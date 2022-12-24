import React from "react";
import Image from "next/image";

import Link from "next/link";
import Banner from "../../components/Banner";
import Layout from "../../components/Layout";
const index = () => {
  return (
    <Layout>
      <Banner  title={"App"} para="Llévanos contigo a cualquier parte"/>

      <>
        <section className="about-four-section pt-110 pb-50 rpb-100">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-5 col-lg-6">
                <div className="about-four-content rmb-55 wow fadeInLeft delay-0-2s">
                  <div className="section-title mb-25">
                    <span className="sub-title-three ">
                      Descarga nuestra App
                    </span>
                    <h2>meKambio App</h2>
                  </div>
                  <p>Tendrás acceso a:</p>
                  <ul className="list-style-four pt-5 pb-35">
                    <li>Encuentra a tu Expert</li>
                    <li>Realiza Reservas</li>
                    <li>Accede a tus Sesiones</li>
                    <li>¡Y mucho más!</li>
                  </ul>
                  <div className="row d-block">
                    <Link
                      href="https://play.google.com/store/apps/details?id=com.mekambio.customer"
                      className=" w-50 mr-3  style-three border-0 p-0"
                    >
                      <img
                        loading="lazy"
                        style={{ width: "35%" }}
                        src="/assets/images/playstore.png"
                        alt=""
                      />
                    </Link>
                    <Link
                      href=" https://apps.apple.com/in/app/mekambio/id1602352572"
                      className=" w-50 border-0 style-three p-0"
                    >
                      <img
                        loading="lazy"
                        style={{ width: "35%" }}
                        src="/assets/images/appstore.png"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-four-right-part mt-10 wow fadeInRight delay-0-2s">
                  <img
                    loading="lazy"
                    className="image-one"
                    src="/assets/images/gallery/gallery2.jpg"
                    alt="About"
                  />
                  <img
                    loading="lazy"
                    className="image-two"
                    src="/assets/images/gallery/gallery6.jpg"
                    alt="About"
                  />
                  <div className="saticfiction bg-blue br-5 text-white">
                    <h4>Coaches y Mentores Profesionales </h4>
                  </div>
                  <div className="experience text-white bg-blue br-5">
                    <i className="fas fa-mobile" />
                    <h5>Reserva desde tu móvil </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About End */}
        <section className="about-four-section pt-50 pb-50 rpb-100">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6">
                <div className="about-four-right-part mt-10 wow fadeInRight delay-0-2s">
                  <img
                    loading="lazy"
                    className="image-one"
                    src="/assets/images/about/about-four1.jpg"
                    alt="About"
                  />
                  <img
                    loading="lazy"
                    className="image-two"
                    src="/assets/images/about/about-four2.jpg"
                    alt="About"
                  />
                  <div className="saticfiction bg-blue br-5 text-white">
                    <h4>Gestiona tu Perfil </h4>
                  </div>
                  <div className="experience text-white bg-blue br-5">
                    <i className="fas fa-globe" />
                    <h5>Usuarios Internacionales </h5>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="about-four-content rmb-55 wow fadeInLeft delay-0-2s">
                  <div className="section-title mb-25">
                    <span className="sub-title-three">
                      Descarga nuestra App
                    </span>
                    <h2>meKambio Expert App</h2>
                  </div>
                  <p>Tendrás acceso a:</p>
                  <ul className="list-style-four pt-5 pb-35">
                    <li>Gestiona tu Disponibilidad</li>
                    <li>Publica tus Sesiones</li>
                    <li>Acepta tus Reservas</li>
                    <li>¡Y mucho más!</li>
                  </ul>
                  <div className="row d-block">
                    <Link
                      href="https://play.google.com/store/apps/details?id=com.mekambio.expert"
                      className=" w-50 mr-3  style-three border-0 p-0"
                    >
                      <img
                        loading="lazy"
                        style={{ width: "35%" }}
                        src="/assets/images/playstore.png"
                        alt=""
                      />
                    </Link>
                    <Link href="https://apps.apple.com/in/app/mekambio-expert/id1602350146" className=" w-50 border-0 style-three p-0">
                      <img
                        loading="lazy"
                        style={{ width: "35%" }}
                        src="/assets/images/appstore.png"
                        alt=""
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

export default index;
