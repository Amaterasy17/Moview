import React from "react";
import "./SearchedVideo.scss";
import { ApiKey, ajax } from "@utils/ajax";
import { channelById, videoById } from "@configs/ApiUrls";
import { useHistory } from "react-router-dom";
import { urls } from "@configs/routes";
import { parseTime } from "@utils/parseTime";
import { parseViews } from "@utils/parseViews";
import { parseSubscribers } from "@utils/parseSubscribers";
import { parseDate } from "@utils/parseDate";

type Video = {
  preview: string;
  duration: string;
  views: string;
  avatar: string;
  title: string;
  nickname: string;
  time: string;
  description: string;
  subscribers: string;
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
    views: item.statistics.viewCount,
    avatar: "jscsjcj",
    description: item.snippet.description,
    subscribers: "jhj",
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
        description: item.snippet.description,
        subscribers: data.items[0].statistics.subscriberCount,
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
        <span className="duration">{parseTime(video.duration)}</span>
        <span className="views">{parseViews(video.views)}</span>
      </div>
      <div className="description">
        <div
          className="description__name"
          onClick={(evt) => {
            history.push(urls.Video.creator(id));
          }}
        >
          {video.title}
        </div>
        <div className="time">{parseDate(video.time)}</div>
        <div className="channel_info">
          <div className="channel">
            <div>
              <img className="left_info" src={video.avatar} />
            </div>
            <div className="ch-inf">
              <div className="description__blogger">{video.nickname}</div>
              <div className="description__sub">
                {parseSubscribers(video.subscribers)}
              </div>
            </div>
          </div>
          <div className="description_video">{video.description}</div>
        </div>
      </div>
    </div>
  );
};
