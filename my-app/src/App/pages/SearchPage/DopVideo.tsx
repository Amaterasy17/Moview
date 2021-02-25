import React from "react";
import { ApiKey, videoById } from "@configs/ApiUrls";
import { ajax } from "@utils/ajax";
import { SearchedVideo } from "@components/SearchedVideo";

export const DopVideo = ({ mainVideos, idsUrl }: any) => {
  const [videos, setVideos] = React.useState<any>([]);

  React.useEffect(() => {
    const url: string =
      videoById +
      mainVideos
        .slice(-12)
        .map((video: any) => video.id.videoId)
        .join(",") +
      ApiKey;
    if (url) {
      ajax({
        method: "get",
        url: url,
      }).then(({ data }) => {
        setVideos((videos: any) => [...videos, ...data.items]);
      });
    }
  }, [idsUrl]);

  return (
    <div>
      {videos.map((item: any) => {
        return <SearchedVideo item={item} key={item.id} />;
      })}
    </div>
  );
};
