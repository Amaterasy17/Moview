import React from "react";
import { ajax } from "@utils/ajax";
import { ApiKey, channelById } from "@configs/ApiUrls";
import { useHistory } from "react-router-dom";
import { urls } from "@configs/routes";
import "./MainVideo.scss";
import { MainPage } from "../../App/pages/MainPage";
import { PlayerPage } from "../../App/pages/PlayerPage";
import { SearchPage } from "../../App/pages/SearchPage";
import { parseTime } from "@utils/parseTime";
import { parseViews } from "@utils/parseViews";
import { parseDate } from "@utils/parseDate";

type Video = {
  preview: string;
  duration: string;
  views: string;
  avatar: string;
  title: string;
  nickname: string;
  time: string;
};

export const MainVideo = ({ item }: any) => {
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
    views: item.statistics.viewCount,
    avatar: "jscsjcj",
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
        views: item.statistics.viewCount,
        avatar: data.items[0].snippet.thumbnails.default.url,
      });
    });
  }, [item]);

  return (
    <div className="main-video" key={id}>
      <div className="main-image-content">
        <img
          className="main-image-content-img"
          id={id}
          src={video.preview}
          onClick={(evt) => {
            history.push(urls.Video.creator(id));
          }}
        />
        <span className="duration">{parseTime(video.duration)}</span>
        <span className="views">{parseViews(video.views)}</span>
      </div>
      <div className="bottom-info">
        <div>
          <img className="channel-logo" src={video.avatar} />
        </div>
        <div className="right-info">
          <div
            className="heading"
            onClick={(evt) => {
              history.push(urls.Video.creator(id));
            }}
          >
            {video.title}
          </div>
          <div className="low">
            <div className="nickname">{video.nickname}</div> •{" "}
            <div> {parseDate(video.time)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
