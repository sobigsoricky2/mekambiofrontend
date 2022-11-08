import React from 'react'

const TeamLanding = () => {
  return (
    <div>
         <section style={{backgroundColor: "#1b658e"}} class="team-section rel z-1 text-white pb-50 rpb-70">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-lg-5">
                        <div class="team-content pt-120 rpt-90 mb-30 rmb-75 wow fadeInUp delay-0-2s animated"
                           style={{visibility: "visible", animationName: "fadeInUp"}}>
                            <div class="section-title mb-25">
                                <span class="sub-title-two">Encuentra a tu Expert </span>
                                <h2>El equipo que te ayudará a prepararte y evolucionar en tu carrera profesional </h2>
                            </div>
                            <p>Encuentra al Expert que te ayudará a conseguir tus objetivos profesionales</p>
                            <ul class="list-style-one pt-10 pb-45">
                                <li>Experts Internacionales</li>
                                <li>Sesiones Personalizadas</li>
                                <li>100% Online y gran Flexibilidad</li>
                                <li>Todo en uno. Sin suscripciones ni aplicaciones extra</li>
                                <li>Entorno seguro y de confianza. Sin compartir tus datos personales</li>
                            </ul>
                            <a href="about-us.html" class="theme-btn">Saber más <i
                                    class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="team-members">
                            <div class="row align-items-center">
                                <div class="col-sm-6 wow fadeInRight delay-0-2s animated"
                                    style={{visibility: "visible", animationName: "fadeInUp"}}>
                                    <div class="team-member">
                                        <img src="/assets/images/teams/AlejandroGarrido_PROFILE.webp" alt="Team Member"/>
                                        <div class="team-over">
                                            <h4>Alejandro Garrido</h4>
                                            <span>Retail Multichannel Manager at Google</span>
                                                {/* <!-- <div class="social-style-two">
                                                    <a href="contact.html"><i class="fab fa-twitter"></i></a>
                                                    <a href="contact.html"><i class="fab fa-facebook-f"></i></a>
                                                    <a href="contact.html"><i class="fab fa-instagram"></i></a>
                                                    <a href="contact.html"><i class="fab fa-pinterest-p"></i></a>
                                                </div> --> */}
                                        </div>
                                    </div>
                                    <div class="team-member">
                                        <img src="/assets/images/teams/AntonioValdivieso_PERFIL.webp" alt="Team Member"/>
                                        <div class="team-over">
                                            <h4>Antonio Valdivieso</h4>
                                            <span>Public Speaking Mentor and Ex-Head of International Comms. at
                                                SEAT</span>
                                          {/* <!-- <div class="social-style-two">
                                                <a href="contact.html"><i class="fab fa-twitter"></i></a>
                                                <a href="contact.html"><i class="fab fa-facebook-f"></i></a>
                                                <a href="contact.html"><i class="fab fa-instagram"></i></a>
                                                <a href="contact.html"><i class="fab fa-pinterest-p"></i></a>
                                            </div> --> */}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 wow fadeInRight delay-0-4s animated"
                                    style={{visibility: "visible", animationName: "fadeInUp"}}>
                                    <div class="team-member">
                                        <img src="/assets/images/teams/JorgeDolz_PERIL.webp" alt="Team Member"/>
                                        <div class="team-over">
                                            <h4>Jorge Dolz</h4>
                                            <span>General Manager at JDZ</span>
                                          {/* <!-- <div class="social-style-two">
                                                <a href="contact.html"><i class="fab fa-twitter"></i></a>
                                                <a href="contact.html"><i class="fab fa-facebook-f"></i></a>
                                                <a href="contact.html"><i class="fab fa-instagram"></i></a>
                                                <a href="contact.html"><i class="fab fa-pinterest-p"></i></a>
                                            </div> --> */}
                                        </div>
                                    </div>
                                    <div class="team-member">
                                        <img src="/assets/images/teams/JoseBarroso_PERFIL.webp" alt="Team Member"/>
                                        <div class="team-over">
                                            <h4>José Barroso</h4>
                                            <span>Career & Executive Coach</span>
                                          {/* <!-- <div class="social-style-two">
                                                <a href="contact.html"><i class="fab fa-twitter"></i></a>
                                                <a href="contact.html"><i class="fab fa-facebook-f"></i></a>
                                                <a href="contact.html"><i class="fab fa-instagram"></i></a>
                                                <a href="contact.html"><i class="fab fa-pinterest-p"></i></a>
                                            </div> --> */}
                                        </div>
                                    </div>
                                    <div class="team-member">
                                        <img src="/assets/images/teams/MiguelFarias_PERFIL.webp" alt="Team Member"/>
                                        <div class="team-over">
                                            <h4>Miguel Farias</h4>
                                            <span>Business Leader at Zendesk, Ex-Google and Ex-LinkedIn</span>
                                            {/* <!-- <div class="social-style-two">
                                                <a href="contact.html"><i class="fab fa-twitter"></i></a>
                                                <a href="contact.html"><i class="fab fa-facebook-f"></i></a>
                                                <a href="contact.html"><i class="fab fa-instagram"></i></a>
                                                <a href="contact.html"><i class="fab fa-pinterest-p"></i></a>
                                            </div> --> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span class="bg-text">Advisors</span>
        </section>
    </div>
  )
}

export default TeamLanding