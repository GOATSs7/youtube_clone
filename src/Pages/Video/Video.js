import React from "react";
import "./Video.css";
import Playvideo from "../../Components/Playvideo/Playvideo";
import Recomended from "../../Components/Recomended/Recomended";
const Video = () => {
  return (
    <div className="play-container">
      <Playvideo />
      <Recomended />
    </div>
  );
};

export default Video;
