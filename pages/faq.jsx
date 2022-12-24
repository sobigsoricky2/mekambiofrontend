import Link from "next/link";
import React from "react";
import Accordion from "../components/Accordion";
import Banner from "../components/Banner";
import Layout from "../components/Layout";

const Faq = () => {
  return (
    <>
      <Layout>
        <Banner title="FAQ's" para="Resolviendo algunas posibles dudas"/>
        <section
          className="faqs-section pt-120 rpt-90 pb-115 rpb-85 wow fadeInUp delay-0-2s animated"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          <div className="container">
            <div className="section-title mb-35">
              <span className="sub-title-two">¿Tienes alguna pregunta? </span>
              <h2>Preguntas Frecuentes </h2>
            </div>
            <div className="tab-content faq-accordion">
              <div className="tab-pane fade show active" id="tabContent1">
                <div className="row">
                  <div className="col-lg-12">
                    <Accordion
                      title="¿Cuánto cuesta ser Expert en meKambio?"
                      content={`Registrarse en meKambio como Expert no tiene ningún coste.
                    Regístrate, crea tu perfil y accede a toda la información de
                    forma gratuita. Si quieres crear sesiones de pago, debes
                    suscribirte a uno de nuestros planes. Con el objetivo de
                    mantener un precio competitivo y que se ajuste a tus
                    necesidades, cada plan tiene unas características distintas
                    en cuanto a precio de suscripción y comisiones.`}
                    />
                    <Accordion
                      title="¿Qué coste tiene un plan de suscripción?"
                      content={` Si quieres crear sesiones de pago, debes suscribirte
                      a un plan de suscripción. Hay diferentes planes de
                      suscripción con distintos precios. El precio
                      dependerá del acceso que quieras a la plataforma y
                      el uso que quieras hacer de ella.`}
                    />
                    <Accordion
                      title="¿Cuánto es la comisión?"
                      content={`  Cada sesión que tengas con un cliente tendrá
                      aplicada una comisión. Queremos estar seguros de que
                      cada Expert obtiene el rendimiento que mejor le
                      conviene, y que nadie malgaste su dinero. Nuestras
                      comisiones están basadas en tu actividad, tanto en
                      sesiones como eventos. Cada plan de suscripción
                      tiene comisiones específicas para ofrecerte el mayor
                      valor posible.`}
                    />
                    <Accordion
                      title="¿Cómo se paga al Expert?"
                      content={` Todos los pagos se realizan mediante una pasarela
                      segura de pago, STRIPE. Recibirás mensualmente el
                      pago correspondiente a la actividad que hayas
                      generado, menos el importe correspondiente a la
                      comisión por los Servicios prestados.`}
                    />
                    <Accordion
                      title="¿Cuánto debe durar una sesión?"
                      content={`  Queremos darte la libertad de decidir el formato de
                      tus sesiones. Dependiendo tus necesidades, podrás
                      crear sesiones desde 15 minutos de duración hasta 2
                      horas.`}
                    />{" "}
                  </div>
                  <div className="col-lg-12">
                    <Accordion
                      title="¿Qué precio he de asignar a cada sesión?"
                      content={` Precios flexibles para Experts es uno de nuestros
                      principales beneficios. Tú decides cuál es el precio
                      de cada una de tus sesiones. Nos encantaría que los
                      Servicios que ofrece meKambio fueran accessibles
                      para todo tipo de presupuestos e impulsar la
                      transformación profesional sin límite alguno. Al
                      mismo tiempo entendemos que hay un equilibrio que
                      mantener, por eso lo dejamos a tu libre elección.
                      Piensa en ello, sé honesto, y define tus precios. Si
                      no estás seguro, contacta con nosotros y te
                      ayudaremos.`}
                    />{" "}
                    <Accordion
                      title=" ¿Si alguien no se presenta, se me pagará la sesión?"
                      content={` Que te dejen plantado no es agradable, a nadie le
                      gusta. Sin embargo, puede haber situaciones en las
                      que no haya otra alternativa, y distintas
                      situaciones requieren distintas soluciones. Echa un
                      vistazo a nuestros
                      Términos de Uso y accede
                      a qué sucede en cada caso.`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Faq;
