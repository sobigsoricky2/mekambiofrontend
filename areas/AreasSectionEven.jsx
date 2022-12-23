import React from "react";
import Image from "next/image";
import Link from "next/link";
const AreasSectionEven = ({ areaSection, swap }) => {
  return (
    <div className="row align-items-center large-gap">
      {" "}
      <div className={`col-lg-5 ${swap ? "order-5" : "order-0"} `}>
        <div
          className=" rules-condition-content rmb-50 wow fadeInLeft delay-0-2s animated animated"
          style={{
            visibility: "visible",
            animationName: "fadeInLeft",
          }}
        >
          <div className="section-title">
            <span className="sub-title-two">{areaSection?.fields?.title}</span>
            <h2>{areaSection?.fields?.subtitle}</h2>
          </div>
          <ul className="list-style-three pt-10">
            {areaSection?.fields?.folowingAreasSectionItems?.map(
              (item, index) => (
                <li key={index}>
                  <div className="content">
                    <h5>{item?.fields?.title}</h5>
                    <p>{item?.fields?.content}</p>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
        <Link
          href="https://experts.mekambio.com/s?category=progresion-de-carrera&sort_by=3&view=grid"
          className="theme-btn border"
        >
          Encuentra a tu Expert
          <i className="fas fa-arrow-right" />
        </Link>
      </div>
      <div className="col-lg-7">
        <div
          className="rules-condition-image-part wow fadeInRight delay-0-2s animated animated"
          style={{
            visibility: "visible",
            animationName: "fadeInRight",
          }}
        >
          <div
            className="row align-items-center"
            style={{
              display: "grid",
              gridTemplateColumns: swap ? "1fr 1fr 1fr" : "1fr 1fr ",
            }}
          >
            {areaSection?.fields?.images.map((image, index) => (
              <div key="index" style={{ alignItems: "center" }}>
                <img
                  loading="lazy"
                  style={{ margin: "0.5em auto" }}
                  src={image?.fields?.file?.url}
                  alt="Rules"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreasSectionEven;
