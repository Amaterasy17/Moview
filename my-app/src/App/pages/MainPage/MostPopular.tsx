import { MainVideo } from "../../../components/MainVideo";
import "./MainPage.scss";
import React from "react";
import { ajax } from "../../../utils/ajax";
import { ApiKey, mostPopularVideos } from "../../../configs/ApiUrls";
import { Loader } from "../../../components/Loader/Loader";

export const Main = ({ items }: any) => {
  const [videos, setVideos] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    ajax({
      method: "get",
      url: mostPopularVideos + ApiKey,
    }).then(({ data }) => {
      setVideos(data.items);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="main">
      {isLoading && <Loader />}
      {videos.map((item: any) => {
        return <MainVideo key={item.id} item={item} />;
      })}
    </div>
  );
};
