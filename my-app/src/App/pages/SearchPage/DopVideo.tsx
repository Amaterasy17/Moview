import React from "react";
import { videoById } from "@configs/ApiUrls";
import { ApiKey, ajax } from "@utils/ajax";
import { SearchedVideo } from "@components/SearchedVideo";

export const DopVideo = ({ mainVideos, idsUrl, page }: any) => {
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
      {videos.map((item: any, index: number) => {
        return <SearchedVideo item={item} />;
      })}
    </div>
  );
};
