import React from 'react';
import './MainVideo.css'
import {ajax} from "../../utils/ajax";
import {ApiKey, channelById} from "../../configs/ApiUrls";

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
        time: new Date(item.snippet.publishedAt).getDate() + '.' +
            new Date(item.snippet.publishedAt).getMonth() + '.' +
            new Date(item.snippet.publishedAt).getFullYear(),
        nickname: item.snippet.channelTitle,
        duration: item.contentDetails.duration,
        views: item.statistics.viewCount + ' просмотров ',
        avatar: 'jscsjcj',
    })


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
                <img className="main-image-content-img" src={video.preview}/>
                <span className="duration">{video.duration}</span>
                <span className="views">{video.views}</span>
            </div>
            <div className="bottom-info">
                <div><img className="channel-logo" src={video.avatar}/></div>
                <div className="right-info">
                    <div className="heading">{video.title}</div>
                    <div className="low">
                        <div className="name-channel">{video.nickname}</div>
                        ·
                        <div className="time"> {video.time}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}