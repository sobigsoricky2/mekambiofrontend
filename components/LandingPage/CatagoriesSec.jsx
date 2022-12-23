import React from "react";
import Image from "next/image";
import Link from "next/link";
const CatagoriesSec = () => {
  return (
    <div>
      <section className="categories-section bg-blue text-white rel z-1 py-50 rpb-85">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div
                className="categories-content rmb-65 wow fadeInUp delay-0-2s animated animated animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="section-title mb-25">
                  <span className="sub-title-two">Nuestras Áreas</span>
                  <h2>Encuentra el área en la que quieres focalizarte</h2>
                </div>
                <p>
                Elige tu área de foco y selecciona al Expert que te ayudará a
                  conseguir tus objetivos.
                </p>
                <Link
                  href="categories"
                  className="read-more color-two mt-5 text-white"
                >
                  Ver más<i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div
                className="categories-wrap wow fadeInUp delay-0-4s animated animated animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="row ">
                  <div className="col-md-4 col-sm-6">
                  <div className="category-item">
                      <div className="icon">
                        <img
                          loading="lazy"
                          className="w-50"
                          src="/assets/images/categories/category icon_Get Back to Work.png"
                          alt="Icon"
                        />
                      </div>
                      <h4 className="text-black-50">
                        Regreso al Mercado Laboral{" "}
                      </h4>
                    </div> 
                    <div className="category-item">
                      <div className="icon">
                        <img
                          loading="lazy"
                          className="w-50"
                          src="/assets/images/categories/category icon_Starting Out in Your Career.png"
                          alt="Icon"
                        />
                      </div>
                      <h4 className="text-black-50">
                        Acceso al Mercado Laboral
                      </h4>
                    </div>
                    
                    
                  </div>
                  <div className="col-md-4 col-sm-6">
                  <div className="category-item">
                      <div className="icon">
                        <img
                          loading="lazy"
                          className="w-50"
                          src="/assets/images/categories/category icon_Make a Career Change.png"
                          alt="Icon"
                        />
                      </div>
                      <h4 className="text-black-50">Cambio de Carrera</h4>
                    </div>
                    <div className="category-item">
                      <div className="icon">
                        <img
                          loading="lazy"
                          className="w-50"
                          src="/assets/images/categories/category icon_International Career Boost.png"
                          alt="Icon"
                        />
                      </div>
                      <h4 className="text-black-50">
                        Impulso Internacional de tu Carrera
                      </h4>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                  <div className="category-item mt-35">
                      <div className="icon">
                        <img
                          loading="lazy"
                          className="w-50"
                          src="/assets/images/categories/category icon_Career Progression.png"
                          alt="Icon"
                        />
                      </div>
                      <h4 className="text-black-50">Progresión de Carrera</h4>
                    </div>
                    <div className="category-item mt-40">
                      <div className="icon">
                        <img
                          loading="lazy"
                          className="w-50"
                          src="/assets/images/categories/category icon_Entrepreneurship.png"
                          alt="Icon"
                        />
                      </div>
                      <h4 className="text-black-50">Emprendimiento</h4>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CatagoriesSec;
