import React from "react";
import Image from "next/image";

const FeaturesSec2 = () => {
  return (
    <div>
      <section className="features-section-three rel z-1 pt-50 rpt-85 pb-50 rpb-70">
        <div className="container">
          <div className="section-title text-center mb-55">
            <h2>Con meKambio conseguirás</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div
                className="feature-three-item wow fadeInUp delay-0-2s animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="icon ">
                  <img
                    loading="lazy"
                    style={{ width: "32%" }}
                    src="/assets/images/categories/category icon_Make a Career Change.png"
                    alt="Icon"
                  />
                </div>
                <h4 className="text-uppercase">Transformar tu Carrera</h4>
                <p className="text-uppercase">
                  Alcanza tus objetivos profesionales, progresa en tu carrera e
                  incrementa tu rendimiento e ingresos.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="feature-three-item wow fadeInUp delay-0-4s animated pb-0"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="icon">
                  <img
                    loading="lazy"
                    style={{ width: "32%" }}
                    src="/assets/images/categories/category icon_International Career Boost.png"
                    alt="Icon"
                  />
                </div>
                <h4 className="text-uppercase">Networking Internacional</h4>
                <p className="text-uppercase">
                  Profesionales senior de empresas Top, con reconocido prestigio
                  en variedad de sectores y mercados.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="feature-three-item wow fadeInUp delay-0-6s animated pb-0"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="icon">
                  <img
                    loading="lazy"
                    style={{ width: "32%" }}
                    src="/assets/images/categories/category icon_Get Back to Work.png"
                    alt="Icon"
                  />
                </div>
                <h4 className="text-uppercase">Desarrollar tu Potencial</h4>
                <p className="text-uppercase">
                  Incrementa tu autoconocimiento, tu confianza y tu liderazgo
                  profesional. Elévate e impulsa tu carrera.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesSec2;
