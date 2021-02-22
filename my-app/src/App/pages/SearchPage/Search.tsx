import {
  ApiKey,
  searchAnalogVideos,
  searchVideo,
  videoUrl,
} from "@configs/ApiUrls";
import React from "react";
import { ajax } from "@utils/ajax";
import { DopVideo } from "./DopVideo";
import "./SearchPage.css";
import { Loader } from "@components/Loader/Loader";

export const Search = ({ q }: any, { id }: any) => {
  const [videos, setVideos] = React.useState<any>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    ajax({
      method: "get",
      url: searchVideo + q + ApiKey,
    }).then(({ data }) => {
      setVideos(data.items);
      setIsLoading(false);
    });
  }, [q]);

  return (
    <div className="search">
      {isLoading && <Loader />}
      {!isLoading && (
        <DopVideo
          mainVideos={videos}
          idsUrl={videos.map((video: any) => video.id.videoId).join(",")}
        />
      )}
    </div>
  );
};
