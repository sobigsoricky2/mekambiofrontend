import React from "react";
import Image from "next/image";
import Link from "next/link";
const Advertise = () => {
  return (
    <div>
      <section className="advertise-area pt-50 pb-50 rpb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-white">
              <div
                className="advertise-item wow fadeInUp delay-0-2s animated mb-0"
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
                    Acceso a la Plataforma<i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="advertise-item bg-two wow fadeInUp delay-0-4s animated mb-0"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="content">
                  <h4>Conviértete en Expert</h4>
                  <p>
                    Regístrate como Expert y ayuda a profesionales a progresar
                    en sus carreras{" "}
                  </p>
                  <Link
                    href="https://experts.mekambio.com/es-ES/expert_signup"
                    className="theme-btn"
                  >
                    Únete al equipo<i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Advertise;
