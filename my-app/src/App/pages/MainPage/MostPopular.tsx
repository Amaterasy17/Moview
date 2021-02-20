import {MainVideo} from "../../../components/MainVideo";
import './MainPage.css';
import React from "react";
import {ajax} from "../../../utils/ajax";
import {ApiKey, mostPopularVideos} from "../../../configs/ApiUrls";

export const Main = ({items}: any) => {
    const [videos, setVideos] = React.useState([]);

    React.useEffect( () => {
        ajax({
            method: 'get',
            url: mostPopularVideos + ApiKey,
        }).then( ({data}) => {
            setVideos(data.items);
        })
    }, []);

    return (
        <div className="main">
            {
                videos.map((item: any) => {
                    return <MainVideo item={item}/>
                })
            }
        </div>
    );
};