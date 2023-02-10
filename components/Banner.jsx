import React from "react";
import Image from "next/image";

const Banner = ({ title, para }) => {
  return ( 
    <div>  
      <section 
        className="page-banner-area rel z-1 text-white text-center"
        style={{ backgroundImage: "url(/assets/images/banner.jpg)" }}
      >
        <div className="container">
          <div className="banner-inner rpt-10">
            <h2 className="page-title wow fadeInUp delay-0-2s">{title}</h2>
            <p className="text-left wow fadeInUp delay-0-2s">{para}</p>
          </div> 
        </div>
        <img
          loading="lazy"
          className="circle-one"
          src="/assets/images/shapes/circle-one.png"
          alt="Circle"
        />
        <img
          loading="lazy"
          className="circle-two"
          src="/assets/images/shapes/circle-two.png"
          alt="Circle"
        />
      </section>
    </div>
  );
};

export default Banner;
