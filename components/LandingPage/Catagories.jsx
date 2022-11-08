import React from "react";

const Catagories = () => {
  return (
    <div>
      <section class="categories-section bg-blue text-white rel z-1 py-50 rpb-85">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5">
              <div
                class="categories-content rmb-65 wow fadeInUp delay-0-2s animated animated animated"
                style={{visibility: "visible", animationName: "fadeInUp"}}
              >
                <div class="section-title mb-25">
                  <span class="sub-title-two">Nuestras Áreas</span>
                  <h2>Encuentra el área en la que quieres focalizarte</h2>
                </div>
                <p>
                  Elige tu área foco y selecciona al Expert que te ayudará a
                  conseguir tus objetivos.
                </p>
                <a
                  href="categories.html"
                  class="read-more color-two mt-5 text-white"
                >
                  Ver más<i class="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-7">
              <div
                class="categories-wrap wow fadeInUp delay-0-4s animated animated animated"
                style={{visibility: "visible", animationName: "fadeInUp"}}
              >
                <div class="row ">
                  <div class="col-md-4 col-sm-6">
                    <div class="category-item mt-35">
                      <div class="icon">
                        <img
                          class="w-50"
                          src="/assets/images/categories/category icon_Career Progression.png"
                          alt="Icon"
                        />
                      </div>
                      <h4 class="text-black-50">Progresión de Carrera</h4>
                    </div>
                    <div class="category-item">
                      <div class="icon">
                        <img
                          class="w-50"
                          src="/assets/images/categories/category icon_Make a Career Change.png"
                          alt="Icon"
                        />
                      </div>
                      <h4 class="text-black-50">Cambio de Carrera</h4>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-6">
                    <div class="category-item">
                      <div class="icon">
                        <img
                          class="w-50"
                          src="/assets/images/categories/category icon_Starting Out in Your Career.png"
                          alt="Icon"
                        />
                      </div>
                      <h4 class="text-black-50">Acceso al Mercado Laboral</h4>
                    </div>
                    <div class="category-item">
                      <div class="icon">
                        <img
                          class="w-50"
                          src="/assets/images/categories/category icon_International Career Boost.png"
                          alt="Icon"
                        />
                      </div>
                      <h4 class="text-black-50">
                        Impulso Internacional de tu Carrera
                      </h4>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-6">
                    <div class="category-item mt-40">
                      <div class="icon">
                        <img
                          class="w-50"
                          src="/assets/images/categories/category icon_Entrepreneurship.png"
                          alt="Icon"
                        />
                      </div>
                      <h4 class="text-black-50">Emprendimiento</h4>
                    </div>
                    <div class="category-item">
                      <div class="icon">
                        <img
                          class="w-50"
                          src="/assets/images/categories/category icon_Get Back to Work.png"
                          alt="Icon"
                        />
                      </div>
                      <h4 class="text-black-50">Regreso al Mercado Laboral </h4>
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

export default Catagories;
