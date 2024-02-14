import React, { useState, useEffect } from "react";
import "./Feed.css";
import Loader from "../Extra/Loader";
import { Link } from "react-router-dom";
import { API_KEY, value_converter } from "../../data";
import moment from "moment/moment";
const Feed = ({ category, setProgress }) => {
  // state

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // func for fetch data
  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    setProgress(0);
    try {
      const videolist_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
      const response = await fetch(videolist_url);
      //cheack api response

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Not found - 404");
        } else if (response.status >= 400 && response.status < 500) {
          throw new Error("Client error - " + response.status);
        } else if (response.status >= 500 && response.status < 600) {
          throw new Error("Server error - " + response.status);
        } else {
          throw new Error(`HTTP Error: ${response.status}`);
        }
      }
      setProgress(50);
      const resData = await response.json();
      // console.log(resData);
      setData(resData.items);
      setProgress(75);
    } catch (error) {
      setData(
        error.message || "Error Occured Please Cheack Network Connection"
      );
    } finally {
      setIsLoading(false);
      setProgress(100);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  //
  // Scrolls to the top of the page when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //
  return (
    <div className="feed">
      {error && <div>{error}</div>}
      {isLoading ? (
        <div className="loader">
          <Loader />
        </div>
      ) : (
        data.map((item, index) => (
          <Link
            to={`video/${item.snippet.categoryId}/${item.id}`}
            className="card"
            key={index}
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>
              {value_converter(item.statistics.viewCount)} Views &bull;{" "}
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        ))
      )}
    </div>
  );
};

export default Feed;
