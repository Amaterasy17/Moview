import {ApiKey, searchAnalogVideos, searchVideo, videoUrl} from "../../../configs/ApiUrls";
import React from "react";
import {ajax} from "../../../utils/ajax";
import {DopVideo} from "./DopVideo";

import './SearchPage.css';


export const Search = ({q}: any, {id}:any) => {
    const [videos, setVideos] = React.useState<any>([]);

    React.useEffect( () => {
        ajax({
            method: 'get',
            url: searchVideo + q + ApiKey,
        }).then( ({data}) => {
            setVideos(data.items);
        })
    }, [q]);

    return (
        <div className="search">
            <DopVideo mainVideos={videos} idsUrl={videos.map((video:any) => video.id.videoId).join(',')}/>
        </div>
    );
};