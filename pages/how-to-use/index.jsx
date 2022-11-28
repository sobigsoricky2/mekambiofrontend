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
        <Banner title="Cómo Funciona" />

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
                    No hay nada más poderoso que trabajar con los mejores,
                    aprender de ellos y beneficiarse de su apoyo y guía. Te
                    ofrecemos hacerlo en un entorno donde profesionales que
                    buscan prosperar en la carrera que deseen pueden lograr
                    dicho objetivo con el apoyo de otros que ya destacan en
                    ello.
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
                          Conseguirás que eso con lo que sueñas se haga
                          realidad.
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
                      src="./assets/images/instructor/join-team1.jpg"
                      alt="Join Our Team"
                    />
                  </div>
                  <div className="image-two">
                    <img
                      loading="lazy"
                      src="./assets/images/instructor/join-team2.jpg"
                      alt="Join Our Team"
                    />
                    <img
                      loading="lazy"
                      src="./assets/images/instructor/join-team3.jpg"
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
                    src="./assets/images/about/benefit.jpg"
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
                        Focaliza en tu área, y encuentra al Expert que mejor se
                        adapte a tus necesidades e intereses.
                      </p>
                    </div>
                  </div>
                  <div className="work-step-item">
                    <span className="number">02</span>
                    <div className="content">
                      <h4>Reserva tu sesión</h4>
                      <p>
                        Elige fecha y hora, y comprométete contigo y tu futuro
                        para evolucionar en tu carrera profesional.
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
                        Inicia y disfruta de tu evolución profesional, mejorando
                        tu rendimiento y dedicándote a lo que te apasiona.
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
                        src="./assets/images/client-logos/DFO-Logotipo-Pantalla.png"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25">
                    <Link href="https://experts.mekambio.com/s?q=">
                      <img
                        loading="lazy"
                        src="./assets/images/client-logos/EAE Business School.PNG"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25">
                    <Link href="https://experts.mekambio.com/s?q=">
                      <img
                        loading="lazy"
                        src="./assets/images/client-logos/EPSEB.jpg"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25">
                    <Link href="https://experts.mekambio.com/s?q=">
                      <img
                        loading="lazy"
                        className="w-100"
                        src="./assets/images/client-logos/Inesdi Digital Business School.jfif"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25">
                    <Link href="https://experts.mekambio.com/s?q=">
                      <img
                        loading="lazy"
                        className="w-100"
                        src="./assets/images/client-logos/Three Points, The school for Digital Business.jfif"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="logo-item w-25 text-center">
                    <Link href="https://experts.mekambio.com/s?q=">
                      <img
                        loading="lazy"
                        className="w-50"
                        src="./assets/images/client-logos/UPC.png"
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
