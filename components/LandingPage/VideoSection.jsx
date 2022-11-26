import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});
import dynamic from "next/dynamic";

const VideoSection = () => {
  const [popUpVideo, setPopUpVideo] = useState(false);

  return (
    <div>
      <div
        className="video-section wow fadeInUp delay-0-2s animated mt-100 mb-100"
        style={{ visibility: "visible", animationName: "fadeInUp" }}
      >
        <div className="container">
          <div className="video-inner overlay">
            <img width="auto" height="auto"src="/assets/images/video/video-section-bg.jpg" alt="Video" />
            <div
              href="https://www.youtube.com/watch?v=smbwVTieDJk"
              className="mfp-iframe video-play"
              onClick={(e) => setPopUpVideo(true)}
            >
              <i className="fas fa-play"></i>
            </div>
          </div>
        </div>
      </div>

      {popUpVideo ? (
            <div
              style={{
                width: "100vw",
                height: "100vh",
                position: "fixed",
                zIndex: "999",
                display: "flex",
                justifyContent: "center",
                top: "0",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: "100vw",
                  height: "100vh",
                  background: "#222",
                  opacity: "0.6",
                }}
                onClick={(e) => setPopUpVideo(false)}
              ></div>

              <div
                style={{
                  position: "absolute",
                  zIndex: "99",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                {typeof window !== "undefined" ? (
                  <ReactPlayer url="https://www.youtube.com/watch?v=smbwVTieDJk" />
                ) : (
                  ""
                )}
              </div>
            </div>
          ) : (
            ""
          )}
    </div>
  );
};

export default VideoSection;
