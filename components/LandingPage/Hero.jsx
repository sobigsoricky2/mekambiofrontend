import React from 'react'

const Hero = () => {
  return (
    <div>
        <section class="hero-section rel z-1 pt-150 rpt-135 pb-75 rpb-100">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-7">
                        <div class="hero-content rpt-25 rmb-75">
                            <span style={{textTransform: "none"}} class="sub-title style-two mb-20 wow fadeInUp delay-0-2s">meKambio</span>
                            <h1 style={{textTransform: "none"}} class="mb-20 wow fadeInUp delay-0-4s">Desarrollo y Evolución Profesional</h1>
                            <p class="wow fadeInUp delay-0-6s">meKambio es la plataforma donde los profesionales transforman
                                sus carreras, mejoran su rendimiento, maximizan su potencial y alcanzan sus objetivos.
                            </p>
                            <div class="hero-btn mt-30 wow fadeInUp delay-0-8s">
                                <a style={{textTransform: "none", fontSize: "15px"}} href="/how-to.use.html"
                                    class="theme-btn">Empieza a dar Forma a tu Futuro<i
                                        class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="hero-right-images text-lg-right wow fadeInUp delay-0-2s">
                            <img src="/assets/images/hero/Component-1.webp" alt="Hero"/>
                        </div>
                    </div>
                </div>
            </div>
            <span class="bg-text">meKambio</span>
        </section>
    </div>
  )
}

export default Hero