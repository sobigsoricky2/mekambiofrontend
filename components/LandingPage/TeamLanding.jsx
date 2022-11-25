import React from "react";
import Link from "next/link";
const TeamLanding = () => {
  return (
    <div>
      <section
        style={{ backgroundColor: "#1b658e" }}
        className="team-section rel z-1 text-white pb-50 rpb-70"
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div
                className="team-content pt-120 rpt-90 mb-30 rmb-75 wow fadeInUp delay-0-2s animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="section-title mb-25">
                  <span className="sub-title-two">Encuentra a tu Expert </span>
                  <h2>
                    El equipo que te ayudará a prepararte y evolucionar en tu
                    carrera profesional{" "}
                  </h2>
                </div>
                <p>
                  Encuentra al Expert que te ayudará a conseguir tus objetivos
                  profesionales
                </p>
                <ul className="list-style-one pt-10 pb-45">
                  <li>Experts Internacionales</li>
                  <li>Sesiones Personalizadas</li>
                  <li>100% Online y gran Flexibilidad</li>
                  <li>Todo en uno. Sin suscripciones ni aplicaciones extra</li>
                  <li>
                    Entorno seguro y de confianza. Sin compartir tus datos
                    personales
                  </li>
                </ul>
                <Link href="about-us.html" className="theme-btn">
                  Saber más <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="team-members">
                <div className="row align-items-center">
                  <div
                    className="col-sm-6 wow fadeInRight delay-0-2s animated"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="team-member">
                      <img
                        src="/assets/images/teams/AlejandroGarrido_PROFILE.webp"
                        alt="Team Member"
                      />
                      <div className="team-over">
                        <h4>Alejandro Garrido</h4>
                        <span>Retail Multichannel Manager at Google</span>
                        {/* <!-- <div className="social-style-two">
                                                    <Link href="contact.html"><i className="fab fa-twitter"></i></Link>
                                                    <Link href="contact.html"><i className="fab fa-facebook-f"></i></Link>
                                                    <Link href="contact.html"><i className="fab fa-instagram"></i></Link>
                                                    <Link href="contact.html"><i className="fab fa-pinterest-p"></i></Link>
                                                </div> --> */}
                      </div>
                    </div>
                    <div className="team-member">
                      <img
                        src="/assets/images/teams/AntonioValdivieso_PERFIL.webp"
                        alt="Team Member"
                      />
                      <div className="team-over">
                        <h4>Antonio Valdivieso</h4>
                        <span>
                          Public Speaking Mentor and Ex-Head of International
                          Comms. at SEAT
                        </span>
                        {/* <!-- <div className="social-style-two">
                                                <Link href="contact.html"><i className="fab fa-twitter"></i></Link>
                                                <Link href="contact.html"><i className="fab fa-facebook-f"></i></Link>
                                                <Link href="contact.html"><i className="fab fa-instagram"></i></Link>
                                                <Link href="contact.html"><i className="fab fa-pinterest-p"></i></Link>
                                            </div> --> */}
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-sm-6 wow fadeInRight delay-0-4s animated"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="team-member">
                      <img
                        src="/assets/images/teams/JorgeDolz_PERIL.webp"
                        alt="Team Member"
                      />
                      <div className="team-over">
                        <h4>Jorge Dolz</h4>
                        <span>General Manager at JDZ</span>
                        {/* <!-- <div className="social-style-two">
                                                <Link href="contact.html"><i className="fab fa-twitter"></i></Link>
                                                <Link href="contact.html"><i className="fab fa-facebook-f"></i></Link>
                                                <Link href="contact.html"><i className="fab fa-instagram"></i></Link>
                                                <Link href="contact.html"><i className="fab fa-pinterest-p"></i></Link>
                                            </div> --> */}
                      </div>
                    </div>
                    <div className="team-member">
                      <img
                        src="/assets/images/teams/JoseBarroso_PERFIL.webp"
                        alt="Team Member"
                      />
                      <div className="team-over">
                        <h4>José Barroso</h4>
                        <span>Career & Executive Coach</span>
                        {/* <!-- <div className="social-style-two">
                                                <Link href="contact.html"><i className="fab fa-twitter"></i></Link>
                                                <Link href="contact.html"><i className="fab fa-facebook-f"></i></Link>
                                                <Link href="contact.html"><i className="fab fa-instagram"></i></Link>
                                                <Link href="contact.html"><i className="fab fa-pinterest-p"></i></Link>
                                            </div> --> */}
                      </div>
                    </div>
                    <div className="team-member">
                      <img
                        src="/assets/images/teams/MiguelFarias_PERFIL.webp"
                        alt="Team Member"
                      />
                      <div className="team-over">
                        <h4>Miguel Farias</h4>
                        <span>
                          Business Leader at Zendesk, Ex-Google and Ex-LinkedIn
                        </span>
                        {/* <!-- <div className="social-style-two">
                                                <Link href="contact.html"><i className="fab fa-twitter"></i></Link>
                                                <Link href="contact.html"><i className="fab fa-facebook-f"></i></Link>
                                                <Link href="contact.html"><i className="fab fa-instagram"></i></Link>
                                                <Link href="contact.html"><i className="fab fa-pinterest-p"></i></Link>
                                            </div> --> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="bg-text">Advisors</span>
      </section>
    </div>
  );
};

export default TeamLanding;
