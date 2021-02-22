import React from "react";
import "./SearchedVideo.scss";
import { ajax } from "../../utils/ajax";
import { ApiKey, channelById, videoById } from "../../configs/ApiUrls";
import { useHistory } from "react-router-dom";
import { urls } from "../../configs/routes";

type Video = {
  preview: string;
  duration: string;
  views: string;
  avatar: string;
  title: string;
  nickname: string;
  time: string;
  description: string;
};

export const SearchedVideo = ({ item }: any) => {
  const [video, setVideo] = React.useState({
    preview: item.snippet.thumbnails.medium.url,
    title: item.snippet.title,
    time:
      +" " +
      new Date(item.snippet.publishedAt).getDate() +
      "." +
      new Date(item.snippet.publishedAt).getMonth() +
      "." +
      new Date(item.snippet.publishedAt).getFullYear(),
    nickname: item.snippet.channelTitle + " ",
    duration: item.contentDetails.duration,
    views: item.statistics.viewCount + " просмотров ",
    avatar: "jscsjcj",
    description: item.snippet.description,
  });

  const history = useHistory();

  let id: string;
  item.id.videoId ? (id = item.id.videoId) : (id = item.id);

  React.useEffect(() => {
    ajax({
      method: "get",
      url: channelById + item.snippet.channelId + ApiKey,
    }).then(({ data }) => {
      setVideo({
        preview: item.snippet.thumbnails.medium.url,
        title: item.snippet.title,
        time:
          new Date(item.snippet.publishedAt).getDate() +
          "." +
          new Date(item.snippet.publishedAt).getMonth() +
          "." +
          new Date(item.snippet.publishedAt).getFullYear(),
        nickname: item.snippet.channelTitle,
        duration: item.contentDetails.duration,
        views: item.statistics.viewCount + " просмотров ",
        avatar: data.items[0].snippet.thumbnails.default.url,
        description: item.snippet.description,
      });
    });
  }, []);

  return (
    <div className="search__video">
      <div className="image-content">
        <img
          className="image-content__img"
          src={video.preview}
          onClick={(evt) => {
            history.push(urls.Video.creator(id));
          }}
        />
        <span className="duration">{video.duration}</span>
        <span className="views">{video.views}</span>
      </div>
      <div className="description">
        <div className="description__name">{video.title}</div>
        <div className="time">{video.time}</div>
        <div className="channel_info">
          <div className="channel">
            <div>
              <img className="left_info" src={video.avatar} />
            </div>
            <div className="description__blogger">{video.nickname}</div>
          </div>
          <div className="description_video">{video.description}</div>
        </div>
      </div>
    </div>
  );
};
