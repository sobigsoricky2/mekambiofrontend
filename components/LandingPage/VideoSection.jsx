import React from "react";
import Image from "next/image";
import Link from "next/link";
const VideoSection = () => {
  return (
    <div>
      <div
        className="video-section wow fadeInUp delay-0-2s animated mt-100 mb-100"
        style={{ visibility: "visible", animationName: "fadeInUp" }}
      >
        <div className="container">
          <div className="video-inner overlay">
            <img width="auto" height="auto"src="/assets/images/video/video-section-bg.jpg" alt="Video" />
            <Link
              href="https://www.youtube.com/watch?v=smbwVTieDJk"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
