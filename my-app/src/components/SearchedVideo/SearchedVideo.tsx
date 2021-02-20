import React from 'react';
import './SearchedVideo.scss'
import {ajax} from "../../utils/ajax";
import {ApiKey, channelById, videoById} from "../../configs/ApiUrls";

type Video = {
    preview: string,
    duration: string,
    views: string,
    avatar: string,
    title: string,
    nickname: string,
    time: string,
    description: string,
}

export const SearchedVideo = ({item}: any) => {
    const [content, setContent] = React.useState({
        preview: undefined,
        title: undefined,
        time: '',
        description: undefined,
        nickname: undefined,
        avatar: undefined,
    });
    let id:string;
    item.id.videoId ? id = item.id.videoId : id = item.id;
    const [user, setUser] = React.useState({
        duration: '',
        views: '',
    });

      React.useEffect( () => {
        ajax({
            method: 'get',
            url: videoById + id + ApiKey,
        }).then( ({data}) => {
            setContent({

                preview: item.snippet.thumbnails.medium.url,
                title: item.snippet.title,
                time: new Date(item.snippet.publishedAt).getDate() + '.' +
                    new Date(item.snippet.publishedAt).getMonth() + '.' +
                    new Date(item.snippet.publishedAt).getFullYear(),
                description: item.snippet.description,
                nickname: item.snippet.channelTitle,
                avatar: data.items[0].snippet.thumbnails.default.url,
            });

            ajax({
                method: 'get',
                url: channelById + item.snippet.channelId + ApiKey,
            }).then( ({data}) => {
                setUser({
                    duration: item.contentDetails.duration,
                    views: item.statistics.viewCount + ' просмотров ',
                });
            });
        });
    }, []);

    return (
        <div className="search__video">
            <div className="image-content">
                <img className="image-content__img" src={content.preview}/>
                    <span className="duration">{user.duration}</span>
                    <span className="views">{user.views}</span>
            </div>
            <div className="description">
                <div className="description__name">{content.title}</div>
                <div className="time">{content.time}</div>
                <div className="channel_info">
                    <div className="channel">
                        <div>
                            <img className="left_info" src={content.avatar}/>
                        </div>
                        <div className="description__blogger">{content.nickname}</div>
                    </div>
                    <div className="description_video">
                        {content.description}
                    </div>
                </div>
            </div>
        </div>
    );
}