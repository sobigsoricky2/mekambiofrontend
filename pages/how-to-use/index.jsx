import React, { useState } from "react";
import Image from "next/image";
import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import Link from "next/link";

import Head from "next/head";

import Navbar from "../../components/Navbar";

const HowToUse = () => {
  return (
    <>
      <Head>
        <title>Cómo funciona</title>
      </Head>
      <Layout>
        <Banner title="Cómo Funciona" para="Nuestra propuesta para iniciar tu plan de acción" />

        <section className="join-our-team-area pt-120 rpt-90">
          <div className="container">
            <div className="row align-items-center large-gap">
              <div className="col-lg-6">
                <div
                  className="join-our-team-content rmb-75 wow fadeInLeft delay-0-2s animated animated"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInLeft",
                  }}
                >
                  <div className="section-title mb-20">
                    <span className="sub-title-two">Cómo funciona</span>
                    <h2>Empieza a Moldear tu Futuro</h2>
                  </div>
                  <p>
                  No hay nada más poderoso que trabajar con los mejores, aprender de ellos y beneficiarse de su apoyo y guía. Te ofrecemos hacerlo en un entorno con profesionales que destacan en su sector por su trayectoria y compromiso. Te orientarán para conseguir los objetivos que tú te plantees.
                  </p>
                  <ul className="list-style-three pt-25 pb-20">
                    <li>
                      <div className="content">
                        <h5>Desde Cualquier Lugar</h5>
                        <p>
                          No importa donde estés. Tendrás 100% acceso a todos
                          los Servicios.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <h5>Talento Senior e Internacional</h5>
                        <p>
                          Recibe apoyo y guía de profesionales senior, con una
                          gran trayectoria profesional.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <h5>Consigue lo que te Propongas</h5>
                        <p>
                        Conseguirás que tus sueños profesionales se hagan realidad.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <h5>Evoluciona Profesionalmente</h5>
                        <p>
                          Evita el estancamiento, y progresa en tu profesión.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <Link
                    href="https://experts.mekambio.com/es-ES/customer_signup"
                    className="theme-btn"
                  >
                    {" "}
                    Regístrate
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
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
                      src="https://iili.io/HTaDFY7.md.png" 
                      alt="Join Our Team"
                    />
                  </div>
                  <div className="image-two">
                    <img
                      loading="lazy"
                      src="https://iili.io/HzeXkSn.md.png"
                      alt="Join Our Team"
                    />
                    <img
                      loading="lazy"
                      src=" /assets/images/instructor/join-team3.jpg"
                      alt="Join Our Team"
                    />
                  </div>
                  <div
                    style={{ width: "320px !important" }}
                    className="years-of-experience"
                  >
                    <b>250+</b>
                    <span className="pr-2"> Usuarios Internacionales </span>
                  </div>
                  <span className="bg-text">meKambio</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="benefit-work-process rel z-2 pt-120 rpt-90 pb-110">
          <div className="container">
            <div className="section-title text-center mb-50">
              <h2>Te lo ponemos fácil</h2>
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
                      <h4>Selecciona Área y Expert</h4>
                      <p>
                      Focaliza en tu área y encuentra al Expert que mejor se adapte a tus necesidades.
                      </p>
                    </div>
                  </div>
                  <div className="work-step-item">
                    <span className="number">02</span>
                    <div className="content">
                      <h4>Reserva tu sesión</h4>
                      <p>
                      Elige fecha y hora. Comprométete contigo y tu futuro profesional.
                      </p>
                    </div>
                  </div>
                  <div className="work-step-item">
                    <span className="number">03</span>
                    <div className="content">
                      <h4>Regístrate y crea tu perfil</h4>
                      <p>
                        Registrarse no tiene ningún coste y hacerlo es realmente
                        rápido, ¡menos de 1 minuto!
                      </p>
                    </div>
                  </div>
                  <div className="work-step-item">
                    <span className="number">04</span>
                    <div className="content">
                      <h4>Impulsa tu carrera</h4>
                      <p>
                      Inicia tu evolución profesional. En dos meses puedes empezar a ver resultados.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 text-center">
              <Link href="/categories" className="theme-btn mt-4">
                Selecciona el Área
              </Link>
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
                    <span className="sub-title-two">
                      Top Experts and Top Companies
                    </span>
                    <h2>Algunas empresas dónde trabajan nuestros Experts</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="logo-inner style-two wow fadeInLeft delay-0-2s animated animated"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInLeft",
                  }}
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
      </Layout>
    </>
  );
};

export default HowToUse;
