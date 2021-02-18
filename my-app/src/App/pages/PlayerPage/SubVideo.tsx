import React from "react";
import {MainVideo} from "../../../components/MainVideo";
import {ajax} from "../../../utils/ajax";
import {ApiKey, videoById} from "../../../configs/ApiUrls";
import {useParams} from "react-router-dom";


export const Video = ( {mainVideos}:any ) => {
    const [videos, setVideos] = React.useState<any>([]);
    const [arr, setArr] = React.useState([] as any);
    const array:Array<string> = [];

    mainVideos.forEach( (item:any) => {
        // setArr((array:any) => [...array, item]);
        array.push(item.id.videoId);
    });

    console.log(array);

    React.useEffect( () => {


        ajax({
            method: 'get',
            url: videoById + array.join(',') + ApiKey,
        }).then( ({data}) => {
            setVideos(data.items);
        });

    },[]);

    return (
        <div className="main">
            {
                videos.map((item: any) => {
                    //item.id = item.id.videoId;
                    item.id = item.id[0];
                    //console.log('пиздострадания',item.id.videoId)
                    return <MainVideo item={item}></MainVideo>;
                })
            }
        </div>
    );
}