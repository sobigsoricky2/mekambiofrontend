import React, { useState, useEffect } from "react";
import Banner from "../../components/Banner";
import Layout from "../../components/Layout";
import { ContentfulClient } from "../../helpers/utils";
import AreasSectionEven from "./areasSectionEven";
import Link from "next/link";
const Areas = () => {
  const [areas, setAreas] = useState([]);

  const [areasSection, setAreasSection] = useState([]);

  const [folowingAreasSection, setFolowingAreasSection] = useState([]);
  const [folowingAreasSectionItems, setFolowingAreasSectionItems] = useState(
    []
  );

  useEffect(() => {
    var data = [];
    var data2 = [];
    var data3 = [];
    var data4 = [];
    ContentfulClient.getEntries()
      .then((response) => {
        response.items.forEach((element) => {
          if (element.sys.contentType.sys.id == "areas") {
            data.push(element);
          }
          if (element.sys.contentType.sys.id == "areasSection") {
            data2.push(element);
          }
          if (element.sys.contentType.sys.id == "areasSection1") {
            data3.push(element);
          }
          if (element.sys.contentType.sys.id == "folowingAreasSectionItems") {
            data4.push(element);
          }
        });

        setAreas(data);
        setAreasSection(...data2);
        setFolowingAreasSection(data3);
        setFolowingAreasSectionItems(data4);
      })
      .catch(console.error);
  }, []);

  console.log(folowingAreasSection);

  return (
    <Layout>
      <Banner title="Áreas" />
      <>
        <section className="features-section-three rel z-1 pt-110  pb-50 rpt-85 rpb-70">
          <div className="container">
            <div className="section-title text-center mb-55">
              <span className="sub-title-two">
                {areasSection?.fields?.title}
              </span>
              <h2>{areasSection?.fields?.subtitle} </h2>
              <p>{areasSection?.fields?.content}</p>
            </div>
            <div className="row justify-content-center">
              {areas?.map((area, index) => (
                <div key={index} className="col-lg-4 col-sm-6">
                  <div
                    className="feature-three-item wow fadeInUp delay-0-2s animated"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="icon">
                      <img
                        loading="lazy"
                        className="w-25"
                        src={area?.fields?.logo?.fields?.file?.url}
                        alt="Icon"
                      />
                    </div>
                    <h4>{area?.fields?.title}</h4>
                    <p>{area?.fields?.content}</p>
                    <Link href="#sec-1" className="details-btn">
                      <i
                        className="fas fa-long-arrow-alt-right"
                        target="_blank"
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Features Section End */}
        {folowingAreasSection?.map((areaSection, index) => (
          <section
            id="sec-1"
            key={index}
            className="rules-condition-area pt-100 pb-50 bg-blue text-white rpt-90"
          >
            <div className="container ">
              <div>
                <AreasSectionEven
                  areaSection={areaSection}
                  swap={index % 2 !== 0}
                />
              </div>
            </div>
          </section>
        ))}
        {/* 
        <section id="sec-6" className="join-our-team-area pt-80 pb-100 rpt-90">
          <div className="container">
            <div className="row align-items-center large-gap">
              <div className="col-lg-6">
                <div
                  className="join-our-team-image-part pt-5 wow fadeInRight delay-0-2s animated animated"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInRight",
                  }}
                >
                  <div className="image-one">
                    <img  loading="lazy"
                      src="/assets/images/instructor/join-team1.jpg"
                      alt="Join Our Team"
                    />
                  </div>
                  <div className="image-two">
                    <img  loading="lazy"
                      src="/assets/images/instructor/join-team2.jpg"
                      alt="Join Our Team"
                    />
                    <img  loading="lazy"
                      src="/assets/images/instructor/join-team3.jpg"
                      alt="Join Our Team"
                    />
                  </div>
                  <span className="bg-text">meKambio</span>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="join-our-team-content rmb-75 wow fadeInLeft delay-0-2s animated animated"
                  style={{ visibility: "visible", animationName: "fadeInLeft" }}
                >
                  <div className="section-title mb-20">
                    <span className="sub-title-two">
                      Regreso al Mercado Laboral
                    </span>
                    <h2>Vuelve estando al día y de forma competitiva </h2>
                  </div>
                  <ul className="list-style-three pt-25 pb-20">
                    <li>
                      <div className="content">
                        <h5>Búsqueda de Trabajo</h5>
                        <p>
                          Aprende las técnicas que te harán conseguir el trabajo
                          que tú desees.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <h5>Actualízate</h5>
                        <p>
                          Aprende a ser competitivo en un mercado laboral que
                          evoluciona constantemente.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <Link
                    href="https://experts.mekambio.com/s?category=regreso-al-mercado-laboral&sort_by=3&view=grid"
                    className="theme-btn"
                  >
                    Encuentra a tu Expert
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </>
    </Layout>
  );
};

export default Areas;
