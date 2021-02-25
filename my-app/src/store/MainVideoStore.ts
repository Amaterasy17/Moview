import React from "react";
import { action, makeObservable, observable } from "mobx";
import { Meta } from "@utils/Meta";
import { ApiKey, ajax } from "@utils/ajax";
import { channelById, mostPopularVideos } from "@configs/ApiUrls";

type Video = {
  preview: string;
  duration: string;
  views: string;
  avatar: string;
  title: string;
  nickname: string;
  time: string;
  channelId: string;
};

export class MainVideoStore {
  video: Video = {
    preview: "",
    duration: "",
    views: "",
    avatar: "",
    title: "",
    nickname: "",
    time: "",
    channelId: "",
  };
  meta: Meta = Meta.initial;

  constructor(item: any) {
    this.video = {
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
      channelId: item.snippet.channelId,
    };
    makeObservable(this, {
      video: observable,
    });
  }

  async fetch() {
    if (this.meta === Meta.loading || this.meta === Meta.success) {
      return;
    }
    this.meta = Meta.loading;

    const { isError, data } = await ajax({
      method: "get",
      url: channelById + this.video.channelId + ApiKey,
    });
    if (isError) {
      this.meta = Meta.error;
      return;
    }
    // this.video = {
    //     preview: item.snippet.thumbnails.medium.url,
    //     title: item.snippet.title,
    //     time:
    //         new Date(item.snippet.publishedAt).getDate() +
    //         "." +
    //         new Date(item.snippet.publishedAt).getMonth() +
    //         "." +
    //         new Date(item.snippet.publishedAt).getFullYear(),
    //     nickname: item.snippet.channelTitle,
    //     duration: item.contentDetails.duration,
    //     views: item.statistics.viewCount,
    //     avatar: data.items[0].snippet.thumbnails.default.url,
    // }
  }
}
