import {
  ApiKey,
  searchAnalogVideos,
  searching,
  searchVideo,
  videoUrl,
  PageToken,
} from "@configs/ApiUrls";
import React from "react";
import { ajax } from "@utils/ajax";
import { DopVideo } from "./DopVideo";
import { Virtuoso } from "react-virtuoso";
import "./SearchPage.css";
import { Loader } from "@components/Loader/Loader";
import { useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export const Search = ({ q }: any, { id }: any) => {
  const [videos, setVideos] = React.useState<any>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [pageToken, setPageToken] = React.useState("");
  const [page, setPage] = React.useState(0);

  const loadMore = useCallback(() => {
    // ajax({
    //   method: "get",
    //   url: searching + q + PageToken + pageToken + ApiKey,
    // }).then(({ data }) => {
    //   setVideos((videos: any) => [...videos, ...data.items]);
    //   setPageToken(data.nextPageToken);
    //   setIsLoading(false);
    // });
    console.log("ya vizvalsya");
    return setPage((page) => ++page);
  }, []);

  React.useEffect(() => {
    let url;
    if (page === 0) {
      url = searchVideo + q + ApiKey;
    } else {
      url = searching + q + PageToken + pageToken + ApiKey;
    }

    ajax({
      method: "get",
      url: url,
    }).then(({ data }) => {
      setVideos((videos: any) => [...videos, ...data.items]);
      setPageToken(data.nextPageToken);
      setIsLoading(false);
    });
  }, [q, page]);

  return (
    <div className="search" id="scrollableDiv">
      {isLoading && <Loader />}
      {!isLoading && (
        <InfiniteScroll
          className="search"
          next={loadMore}
          hasMore={true}
          dataLength={videos.length}
          loader={<h4>Loading...</h4>}
          onScroll={() => {
            console.log("Влад пидарас");
          }}
          scrollableTarget="scrollableDiv"
        >
          {
            <DopVideo
              mainVideos={videos}
              idsUrl={videos.map((video: any) => video.id.videoId).join(",")}
            />
          }
        </InfiniteScroll>
      )}
    </div>
  );
};
