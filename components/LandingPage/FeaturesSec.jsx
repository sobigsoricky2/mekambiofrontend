import React from 'react'

const FeaturesSec = () => {
  return (
    <div>
        <section class="features-section rel z-1 pt-80 pb-40 bg-blue text-dark">
            <div class="container">
                <div class="row large-gap mb-30 text-white">
                    <div class="col-lg-6 text-white">
                        <div class="freature-six-left wow fadeInUp delay-0-2s animated"
                            style={{visibility: "visible", animationName: "fadeInUp"}}>
                            <div class="section-title mb-30">

                                <h2>¿Te satisface tu trabajo?</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="freature-six-right pt-55 rpt-0 wow fadeInUp delay-0-4s animated"
                            style={{visibility: "visible", animationName: "fadeInUp"}}>
                            <p>Si vives momentos de inquietud o incerteza, y tienes ganas de prosperar profesionalmente
                                pero no sabes por dónde empezar, te ofrecemos el apoyo necesario para que evoluciones y
                                generes el cambio que tu carrera necesita.</p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-3 col-sm-6">
                        <div class="feature-six-item mt-30 wow fadeInUp delay-0-2s animated"
                           style={{visibility: "visible", animationName: "fadeInUp"}}>
                            <div class="content">
                                <div class="icon">
                                    <img class="w-25"
                                        src="/assets/images/categories/category icon_Career Progression.png" alt="Icon"/>
                                </div>
                                <h5>Trabaja en lo que te apasiona</h5>
                                <p>¿Siempre la misma rutina, o problemas en el trabajo?</p>
                            </div>
                            <a href="categories.html#pro" class="read-more color-two">Ver más
                                <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="feature-six-item wow fadeInUp delay-0-4s animated"
                    style={{visibility: "visible", animationName: "fadeInUp"}}>
                            <div class="content">
                                <div class="icon">
                                    <img class="w-25" src="/assets/images/categories/category icon_Entrepreneurship.png"
                                        alt="Icon"/>
                                </div>
                                <h5>Provoca el cambio</h5>
                                <p>¿Sientes que necesitas un cambio de carrera? </p>
                            </div>
                            <a href="categories.html#cam" class="read-more color-two">Ver más
                                <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="feature-six-item mt-30 wow fadeInUp delay-0-6s animated"
                           style={{visibility: "visible", animationName: "fadeInUp"}}>
                            <div class="content">
                                <div class="icon">
                                    <img class="w-25" src="/assets/images/categories/category icon_Get Back to Work.png"
                                        alt="Icon"/>
                                </div>
                                <h5>Mejora en lo que haces</h5>
                                <p>¿Tienes ganas de prosperar profesionalmente?</p>
                            </div>
                            <a href="categories.html#pro" class="read-more color-two">Ver más
                                <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="feature-six-item wow fadeInUp delay-0-8s animated"
                          style={{visibility: "visible", animationName: "fadeInUp"}}>
                            <div class="content">
                                <div class="icon">
                                    <img class="w-25"
                                        src="/assets/images/categories/category icon_International Career Boost.png"
                                        alt="Icon"/>
                                </div>
                                <h5>Inicia o vuelve a tu carrera</h5>
                                <p>¿Quieres acceder al mercado laboral?</p>
                            </div>
                            <a href="categories.html#reg" class="read-more color-two">Ver más
                                <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <img class="rectangle-dots" src="/assets/images/shapes/03.png" alt="Shape"/>
            <img class="circle-dots" src="/assets/images/shapes/01.png" alt="Shape"/>
        </section>
    </div>
  )
}

export default FeaturesSec