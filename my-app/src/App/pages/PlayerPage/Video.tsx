import React from "react";
import { ApiKey, ajax } from "@utils/ajax";
import { searchAnalogVideos, searchVideo, videoById } from "@configs/ApiUrls";

import { Video } from "./SubVideo";

export const MVideo = ({ id }: any) => {
  const [videos, setVideos] = React.useState<any>([]);
  const [arr, setArr] = React.useState([] as any);

  React.useEffect(() => {
    ajax({
      method: "get",
      url: searchAnalogVideos + id + ApiKey,
    }).then(({ data }) => {
      setVideos(data.items);
    });
  }, [id]);

  return (
    <div className="main-player">
      <Video
        mainVideos={videos}
        idsUrl={videos.map((video: any) => video.id.videoId).join(",")}
      />
    </div>
  );
};
