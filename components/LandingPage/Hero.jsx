import React from "react";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <div>
      <section className="hero-section rel z-1 pt-150 rpt-135 pb-75 rpb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="hero-content rpt-25 rmb-75">
                <span
                  style={{ textTransform: "none" }}
                  className="sub-title style-two mb-20 wow fadeInUp delay-0-2s notranslate"
                >
                  meKambio
                </span>
                <h1
                  style={{ textTransform: "none" }}
                  className="mb-20 wow fadeInUp delay-0-4s"
                >
                  Desarrollo y Evolución Profesional
                </h1>
                <p className="wow fadeInUp delay-0-6s">
                  meKambio es la plataforma donde los profesionales transforman
                  sus carreras, mejoran su rendimiento, maximizan su potencial y
                  alcanzan sus objetivos.
                </p>
                <div className="hero-btn mt-30 wow fadeInUp delay-0-8s">
                  <Link
                    style={{ textTransform: "none", fontSize: "15px" }}
                    href="/how-to-use "
                    className="theme-btn"
                  >
                    Empieza a dar Forma a tu Futuro
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="hero-right-images text-lg-right wow fadeInUp delay-0-2s">
                <img width="auto" height="auto"src="/assets/images/hero/Component-1.webp" alt="Hero" />
              </div>
            </div>
          </div>
        </div>
        <span className="bg-text notranslate">meKambio</span>
      </section>
    </div>
  );
};

export default Hero;
