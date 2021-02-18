import React from 'react';
import './MainVideo.css'
import {ajax} from "../../utils/ajax";
import {ApiKey, channelById} from "../../configs/ApiUrls";
import { useHistory } from "react-router-dom";
import {urls} from "../../configs/routes";
import {MainPage} from "../../App/pages/MainPage";
import {PlayerPage} from "../../App/pages/PlayerPage";
import {SearchPage} from "../../App/pages/SearchPage";

type Video = {
    preview: string,
    duration: string,
    views: string,
    avatar: string,
    title: string,
    nickname: string,
    time: string
}

export const MainVideo = ({item}: any) => {
    const [video, setVideo] = React.useState({
        preview: item.snippet.thumbnails.medium.url,
        title: item.snippet.title,
        time: + ' ' + new Date(item.snippet.publishedAt).getDate() + '.' +
            new Date(item.snippet.publishedAt).getMonth() + '.' +
            new Date(item.snippet.publishedAt).getFullYear(),
        nickname: item.snippet.channelTitle + ' ',
        duration: item.contentDetails.duration,
        views: item.statistics.viewCount + ' просмотров ',
        avatar: 'jscsjcj',
    });

    const history = useHistory();

    let id:string;
    item.id.videoId ? id = item.id.videoId : id = item.id;
    // if (!item.id.videoId) {
    //     id = item.id;
    // }

    React.useEffect( () => {
        ajax({
            method: 'get',
            url: channelById + item.snippet.channelId + ApiKey,
        }).then( ({data}) => {
            setVideo({
                preview: item.snippet.thumbnails.medium.url,
                title: item.snippet.title,
                time: new Date(item.snippet.publishedAt).getDate() + '.' +
                    new Date(item.snippet.publishedAt).getMonth() + '.' +
                    new Date(item.snippet.publishedAt).getFullYear(),
                nickname: item.snippet.channelTitle,
                duration: item.contentDetails.duration,
                views: item.statistics.viewCount + ' просмотров ',
                avatar: data.items[0].snippet.thumbnails.default.url,
            });
        });
    }, []);


    return (
        <div className="main-video">
            <div className="main-image-content">
                <img className="main-image-content-img" id={id} src={video.preview}
                     onClick = {(evt) => {
                        // window.history.pushState(null,'null', urls.Video.creator());
                         console.log(item.id);
                         console.log('haha', id);
                         console.log(urls.Video.creator(item.id));
                         history.push(urls.Video.creator(id));
                         //return <Redirect to={urls.Video.creator(item.id)}/>

                }} />

                <span className="duration" >{video.duration}</span>
                <span className="views">{video.views}</span>
            </div>
            <div className="bottom-info">
                <div><img className="channel-logo" src={video.avatar}/></div>
                <div className="right-info">
                    <div className="heading">{video.title}</div>
                    <div className="low">
                        <div >{video.nickname}</div>
                        ·
                        <div > {video.time}</div>
                    </div>
                </div>
            </div>
        </div>

    );
}
