import React from "react";
import Image from "next/image";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import Link from "next/link";

const Pricing = () => {
  return (
    <Layout>
      <Banner />

      <section className="pricing-section bg-lighter rel z-2 pt-120 rpt-90 pb-100 rpb-70">
        <div className="container">
          <div className="section-title text-center mb-50">
            <span className="sub-title-two">Plan de Precios </span>
            <h2>Planes de Suscripción </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div
                className="pricin-item wow fadeInUp delay-0-4s animated animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <span className="popularity">popular</span>
                <div className="icon">
                  <img
                    loading="lazy"
                    style={{ borderRadius: "50%" }}
                    className="w-75"
                    src="./assets/images/pricing/Basic Suscription.png"
                    alt="Icon"
                  />
                </div>
                <h4>Basic</h4>
                <ul className="list-style-two">
                  <li>Precio Subscripción : 0€</li>
                  <li>Duración : 1 año </li>
                  <li>Anuncios Destacados : -</li>
                  <li>Sesiones 1on1 &quot;Citas&quot; : 12</li>
                  <li>Eventos &quot;Sesiones&quot;: 2</li>
                  <li>Comisión : 20%</li>
                </ul>
                <span className="price">0</span>
                <Link
                  href="https://experts.mekambio.com/es-ES/expert_signup"
                  className="theme-btn style-two"
                >
                  Elige el plan <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 pr-0">
              <div
                className="pricin-item wow fadeInUp delay-0-6s animated animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <span className="popularity">popular</span>
                <div className="icon">
                  <img
                    loading="lazy"
                    style={{ borderRadius: "50%" }}
                    className="w-75"
                    src="./assets/images/pricing/K_Advanced Subscription.png"
                    alt="Icon"
                  />
                </div>
                <h4>Advance</h4>
                <ul className="list-style-two">
                  <li>Precio Subscripción : 99.90€</li>
                  <li>Duración: - 1 año </li>
                  <li>Anuncios Destacados : -</li>
                  <li>Sesiones 1on1 &quot;Citas&quot; : 60</li>
                  <li>Eventos &quot;Sesiones&quot;: 4</li>
                  <li>Comisión : 15%</li>
                </ul>
                <span className="price">8.21</span>
                <Link
                  href="https://experts.mekambio.com/es-ES/expert_signup"
                  className="theme-btn style-two"
                >
                  Elige el plan <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 pr-0">
              <div
                className="pricin-item wow fadeInUp delay-0-2s animated animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <span className="popularity">popular</span>
                <div className="icon">
                  <img
                    loading="lazy"
                    style={{ borderRadius: "50%" }}
                    className="w-75"
                    src="./assets/images/pricing/K_Premium Suscription.png"
                    alt="Icon"
                  />
                </div>
                <h4>Premium</h4>
                <ul className="list-style-two">
                  <li>Precio Subscripción : 149.90€</li>
                  <li>Duración: 1 año </li>
                  <li>Anuncios Destacados : 2</li>
                  <li>Sesiones 1on1 &quot;Citas&quot;: 175</li>
                  <li>Eventos &quot;Sesiones&quot;: 16</li>
                  <li>Comisión : 15%</li>
                </ul>
                <span className="price">12.32</span>
                <Link
                  href="https://experts.mekambio.com/es-ES/expert_signup"
                  className="theme-btn style-two"
                >
                  Elige el plan <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
