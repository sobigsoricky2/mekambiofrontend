import React from "react";
import Image from "next/image";
import Banner from "../../components/Banner";
import Layout from "../../components/Layout";
import Link from "next/link";
const AboutUs = () => {
  return (
    <Layout>
      <Banner />

      <>
        <section className="about-page-section pt-120 pb-100 rpt-90">
          <div className="container">
            <div className="row align-items-center large-gap">
              <div className="col-lg-5">
                <div className="about-page-content wow fadeInLeft delay-0-2s">
                  <div className="section-title mb-30">
                    <span className="sub-title-two">Nuestra Visión</span>
                    <h2 style={{ fontSize: 41 }}>
                      Desarrollar el potencial de toda persona con aspiraciones
                      profesionales &quot
                    </h2>
                  </div>
                  <p>
                    En 2020 se sembró la semilla de una idea; un proyecto de
                    apoyo a profesionales con apuros en sus carreras.
                    
                  </p>
                </div>
              </div>
              <div className="col-lg-5 text-center">
                <div className="about-page-middle rpt-55 rpb-30 wow fadeInRight delay-0-2s">
                  <img
                    style={{ borderRadius: "50%" }}
                    className="w-75"
                    src="/assets/images/logo-icono-.png"
                    alt="Logo"
                  />
                </div>
              </div>
              <div className="col-lg-2">
                <div className="counter-wrap style-two wow fadeInRight delay-0-4s">
                  <div className="success-item">
                    <span
                      className="count-text plus"
                      data-speed={3000}
                      data-stop={200}
                    >
                      0
                    </span>
                    <span>Usuarios </span>
                  </div>
                  <div className="success-item">
                    <span
                      className="count-text plus"
                      data-speed={3000}
                      data-stop={50}
                    >
                      0
                    </span>
                    <span>Sesiones</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-page-section  pb-100 rpt-90">
          <div className="container">
            <div className="row align-items-center large-gap">
              <div className="col-lg-5">
                <div className="about-page-middle rpt-55 rpb-30 wow fadeInRight delay-0-2s">
                  <img width="auto" height="auto"src="/assets/images/about/1.png" alt="About" />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="about-page-content wow fadeInLeft delay-0-2s">
                  <div className="section-title mb-30">
                    <span className="sub-title-two">Nuestra Misión</span>
                    <h2 style={{ fontSize: 31 }}>
                      Ayudar a profesionales a mejorar su rendimiento, liderando
                      sus carreras profesionales a través del cambio y la
                      transformación interior.
                    </h2>
                  </div>
                  <p>
                    meKambio es ahora un proyecto focalizado en facilitar el
                    desarrollo y la evolución profesional a toda persona que
                    desee mejorar su futuro. Nos apasiona generar el cambio y la
                    transformación profesional de personas dispuestas a liderar
                    sus propias carreras dando así forma a su futuro, a la vez
                    que apoyando a otras a que hagan lo mismo.
                  </p>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="counter-wrap style-two wow fadeInRight delay-0-4s">
                  <div className="success-item">
                    <span
                      className="count-text percent"
                      data-speed={3000}
                      data-stop={100}
                    >
                      0
                    </span>
                    <span>Satisfacción </span>
                  </div>
                  <div className="success-item">
                    <span
                      className="count-text"
                      data-speed={3000}
                      data-stop={365}
                    >
                      0
                    </span>
                    <span>Días</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="team-setion-two bg-lighter rel z-1 pt-120 rpt-90 pb-70 rpb-40">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center mb-55">
                  <span className="sub-title-two">Conoce a nuestro equipo</span>
                  <h2>Un equipo dedicado a ti </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="team-member-two wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="/assets/images/teams/EdurdMoreno_PERFIL.webp"
                      alt="Team Member"
                    />
                  
                  </div>
                  <div className="member-description">
                    <h4>Eduard Moreno</h4>
                    <span>Founder, CEO</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="team-member-two wow fadeInUp delay-0-4s">
                  <div className="image">
                    <img
                      src="/assets/images/teams/Stephen.png"
                      alt="Team Member"
                    />
                    
                  </div>
                  <div className="member-description">
                    <h4>Stephen Logan</h4>
                    <span>Research and Devel. Officer, CRO</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="team-member-two wow fadeInUp delay-0-6s">
                  <div className="image">
                    <img
                      src="/assets/images/teams/AnabelReillo_PROFILE.webp"
                      alt="Team Member"
                    />
                 
                  
                  </div>
                  <div className="member-description">
                    <h4>Anabel Reillo</h4>
                    <span>Community Manager</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="team-member-two wow fadeInUp delay-0-8s">
                  <div className="image">
                    <img
                      src="/assets/images/teams/Ana Gallego.png"
                      alt="Team Member"
                    />
                  
                  
                  </div>
                  <div className="member-description">
                    <h4>Ana Gallego</h4>
                    <span>Graphic Designer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="team-member-two wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="/assets/images/teams/JorgeDolz_PERIL.webp"
                      alt="Team Member"
                    />
                  
                  </div>
                  <div className="member-description">
                    <h4>Jorge Dolz</h4>
                    <span>meKambio Expert</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="team-member-two wow fadeInUp delay-0-4s">
                  <div className="image">
                    <img
                      src="/assets/images/teams/TiffanyBarnard_PROFILE.png"
                      alt="Team Member"
                    />
               
                  </div>
                  <div className="member-description">
                    <h4>Tiffany Barnard</h4>
                    <span>meKambio Expert</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="team-member-two wow fadeInUp delay-0-6s">
                  <div className="image">
                    <img
                      src="/assets/images/teams/AntonioValdivieso_PERFIL.webp"
                      alt="Team Member"
                    />
                   
                  </div>
                  <div className="member-description">
                    <h4>Antonio Valdivieso</h4>
                    <span>meKambio Expert</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="team-member-two wow fadeInUp delay-0-8s">
                  <div className="image">
                    <img
                      src="/assets/images/teams/JoseBarroso_PERFIL.webp"
                      alt="Team Member"
                    />
                
                  </div>
                  <div className="member-description">
                    <h4>José Barroso</h4>
                    <span>meKambio Expert</span>
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="https://www.meKambio.com/s?q="
              className="theme-btn float-right"
            >
              Ver más <i className="fas fa-arrow-right" />
            </Link>
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
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25">
                    <Link href="https://experts.mekambio.com/s?q=">
                      <img
                        src="https://www.wemeanbusinesscoalition.org/wp-content/uploads/2019/09/Salesforce-LOGO.jpg"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25">
                    <Link href="https://experts.mekambio.com/s?q=">
                      <img
                        src="https://purepng.com/public/uploads/large/purepng.com-google-logo-2015brandlogobrand-logoiconssymbolslogosgoogle-6815229372333mqrr.png"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25">
                    <Link href="https://experts.mekambio.com/s?q=">
                      <img
                        className="w-100"
                        src="https://oroinc.com/orocrm/wp-content/uploads/sites/8/2017/06/Zendesk_logo_wordmark.png"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25">
                    <Link href="https://experts.mekambio.com/s?q=">
                      <img
                        className="w-100"
                        src="https://static.borngroup.com/uploads/2020/09/Logo-Mirakl.png"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25 text-center">
                    <Link href="https://experts.mekambio.com/s?q=">
                      <img
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
                        src="/assets/images/client-logos/UPC.png"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25">
                    <Link href="https://epseb.upc.edu/ca">
                      <img
                        src="/assets/images/client-logos/EPSEB.jpg"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25">
                    <Link href="https://www.eae.es/">
                      <img
                        src="/assets/images/client-logos/EAE Business School.PNG"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25">
                    <Link href="https://www.threepoints.com/">
                      <img
                        className="w-50"
                        src="/assets/images/client-logos/Three Points, The school for Digital Business.jfif"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25">
                    <Link href="https://www.inesdi.com/">
                      <img
                        className="w-75"
                        src="/assets/images/client-logos/Inesdi Digital Business School.jfif"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25">
                    <Link href="https://www.deustoformacion.com/">
                      <img
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
        <section className="advertise-area pt-50 pb-50 rpb-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 text-white">
                <div
                  className="advertise-item wow fadeInUp delay-0-2s animated mb-0 animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="content">
                    <h4>Encuentra a tu Expert</h4>
                    <p>
                      Accede a la base de profesionales que pueden ayudarte a
                      impulsar tu carrera
                    </p>
                    <Link
                      href="https://experts.mekambio.com/s?q="
                      className="theme-btn"
                    >
                      Acceso a la Plataforma
                      <i className="fas fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="advertise-item bg-two wow fadeInUp delay-0-4s animated mb-0 animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="content">
                    <h4>Conviértete en Expert</h4>
                    <p>
                      Regístrate como Expert y ayuda a profesionales a progresar
                      en sus carreras
                    </p>
                    <Link
                      href="https://experts.mekambio.com/es-ES/expert_signup"
                      className="theme-btn "
                    >
                      Únete al Equipo <i className="fas fa-arrow-right" />
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

export default AboutUs;
