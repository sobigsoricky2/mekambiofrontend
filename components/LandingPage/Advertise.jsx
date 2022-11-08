import React from 'react'

const Advertise = () => {
  return (
    <div>
         <section class="advertise-area pt-50 pb-50 rpb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 text-white">
                        <div class="advertise-item wow fadeInUp delay-0-2s animated mb-0"
                            style={{visibility: "visible", animationName: "fadeInUp"}}>
                            <div class="content">
                                <h4>Encuentra a tu Expert</h4>
                                <p>Accede a la base de profesionales que pueden ayudarte a impulsar tu carrera</p>
                                <a href="https://experts.mekambio.com/s?q=" class="theme-btn">Acceso a la Plataforma<i
                                        class="fas fa-arrow-right"></i></a>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="advertise-item bg-two wow fadeInUp delay-0-4s animated mb-0"
                            style={{visibility: "visible", animationName: "fadeInUp"}}>
                            <div class="content">
                                <h4>Conviértete en Expert</h4>
                                <p>Regístrate como Expert y ayuda a profesionales a progresar en sus carreras  </p>
                                <a href="https://experts.mekambio.com/es-ES/expert_signup" class="theme-btn">Únete al equipo<i class="fas fa-arrow-right"></i></a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Advertise