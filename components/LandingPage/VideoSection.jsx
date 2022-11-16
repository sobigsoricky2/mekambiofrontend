import React from "react";

const VideoSection = () => {
  return (
    <div>
      <div
        className="video-section wow fadeInUp delay-0-2s animated mt-100 mb-100"
        style={{ visibility: "visible", animationName: "fadeInUp" }}
      >
        <div className="container">
          <div className="video-inner overlay">
            <img src="/assets/images/video/video-section-bg.jpg" alt="Video" />
            <a
              href="https://www.youtube.com/watch?v=smbwVTieDJk"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
