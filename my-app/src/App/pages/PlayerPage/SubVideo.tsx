import React from "react";
import {MainVideo} from "../../../components/MainVideo";
import {ajax} from "../../../utils/ajax";
import {ApiKey, videoById} from "../../../configs/ApiUrls";
import {useParams} from "react-router-dom";


export const Video = ( {mainVideos, idsUrl}:any ) => {
    const [videos, setVideos] = React.useState<any>([]);


    React.useEffect( () => {

        const url : string = videoById + idsUrl + ApiKey;

        if (url) {
            ajax({
                method: 'get',
                url: url,
            }).then( ({data}) => {
                setVideos(data.items);
            });
        }


    },[idsUrl]);

    return (
        <div className="player-main">
            {
                videos.map((item: any) => {
                    return <MainVideo item={item}/>
                })
            }
        </div>
    );
}