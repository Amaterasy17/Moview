import React from "react";
import { Meta } from "@utils/Meta";
import { action, makeObservable, observable } from "mobx";
import { ApiKey, ajax } from "@utils/ajax";
import { mostPopularVideos } from "@configs/ApiUrls";

export class MainPageStore {
  videos: any = [];
  meta: Meta = Meta.initial;

  constructor() {
    makeObservable(this, {
      videos: observable,
      meta: observable,
      fetch: action,
    });
  }

  async fetch() {
    if (this.meta === Meta.loading || this.meta === Meta.success) {
      return;
    }
    this.meta = Meta.loading;
    this.videos = [];

    const { isError, data } = await ajax({
      method: "get",
      url: mostPopularVideos + ApiKey,
    });
    if (isError) {
      this.meta = Meta.error;
      return;
    }

    this.videos = data.items;
    this.meta = Meta.success;
  }
}
