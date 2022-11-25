import React from "react";
import Image from "next/image";

const AreasImagesEven = ({ imgUrl1, imgUrl2, logo }) => {
  return (
    <div
      className="rules-condition-image-part wow fadeInRight delay-0-2s animated animated"
      style={{ visibility: "visible", animationName: "fadeInRight" }}
    >
      <div className="row align-items-center">
        <div className="col-7">
          <img width="auto" height="auto"src={imgUrl1} alt="Rules" />
        </div>
        <div className="col-5">
          <img width="auto" height="auto"src={imgUrl2} alt="Rules" />
        </div>
      </div>
      <div className="logo bg-transparent">
        <img width="auto" height="auto"style={{ borderRadius: "50%" }} src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default AreasImagesEven;
