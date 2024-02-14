import React from "react";
import "./Video.css";
import Playvideo from "../../Components/Playvideo/Playvideo";
import Recomended from "../../Components/Recomended/Recomended";
import { useParams } from "react-router-dom";
const Video = ({ setProgress }) => {
  const { videoId, categoryId } = useParams();
  return (
    <div className="play-container">
      <Playvideo videoId={videoId} setProgress={setProgress} />
      <Recomended categoryId={categoryId} />
    </div>
  );
};

export default Video;
