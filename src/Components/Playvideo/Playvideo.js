import React, { useEffect, useState } from "react";
import "./Playvideo.css";

// import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";

import { API_KEY, value_converter } from "../../data";
import moment from "moment";
import { useParams } from "react-router-dom";
//

const Playvideo = ({ setProgress }) => {
  //state
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  const { videoId } = useParams();

  //fetch videodata func
  const fetchVideoDta = async () => {
    setProgress(30);

    try {
      const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
      const response = await fetch(videoDetails_url);
      if (!response.ok) {
        throw new Error("Error in Data fetching");
      } else {
        const data = await response.json();
        setApiData(data.items[0]);
        setProgress(66);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setProgress(100);
    }
  };

  const fetchOtherData = async () => {
    if (apiData && apiData.snippet && apiData.snippet.channelId) {
      const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
      await fetch(channelData_url)
        .then((res) => res.json())
        .then((data) => setChannelData(data.items[0]));
    }
  };

  // func to fetch commentdata
  const fetchCommentData = async () => {
    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
    await fetch(comment_url)
      .then((res) => res.json())
      .then((data) => setCommentData(data.items));
  };

  //for videodata
  useEffect(() => {
    fetchVideoDta();
  }, [videoId]);

  //for channel data
  useEffect(() => {
    fetchOtherData();
  }, [apiData]);

  // for comment data
  useEffect(() => {
    fetchCommentData();
  }, [apiData, channelData]);

  return (
    <div className="play-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : "Title here"} </h3>
      <div className="play-video-info">
        <p>
          {value_converter(apiData ? apiData.statistics.viewCount : 1222)} Views
          &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </p>
        <div>
          <span>
            <img src={like} alt="" />

            {apiData ? value_converter(apiData.statistics.likeCount) : "4444"}
          </span>
          <span>
            <img src={dislike} alt="" />
          </span>
          <span>
            <img src={share} alt="" />
            Share
          </span>
          <span>
            <img src={save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img
          src={channelData ? channelData.snippet.thumbnails.default.url : ""}
          alt=""
        />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : ""}</p>
          <span>
            {" "}
            {channelData
              ? value_converter(channelData.statistics.subscriberCount)
              : 1222}{" "}
            Subscribers
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>
          {apiData
            ? apiData.snippet.description.slice(0, 250)
            : "description here"}
        </p>
        <hr />
        <h4>
          {apiData ? value_converter(apiData.statistics.commentCount) : 102}
          {""} Comments
        </h4>
        {commentData.map((item, index) => {
          return (
            <div className="comment" kay={index}>
              <img
                src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
                alt=""
              />
              <div>
                <h3>
                  {item.snippet.topLevelComment.snippet.authorDisplayName}{" "}
                  <span> 1 day ago</span>
                </h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action">
                  <img src={like} alt="" />
                  <span>
                    {value_converter(
                      item.snippet.topLevelComment.snippet.likeCount
                    )}
                  </span>
                  <img src={dislike} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Playvideo;
